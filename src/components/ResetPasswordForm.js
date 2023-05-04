import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, Field, Input } from "@/blocks/Form";
import { MessageAlert, SubmitBtn } from "./LoginForm";

const ResetPasswordForm = ({ setStatus, setIsOpen, isOpen }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const saveData = (data) => {
    setIsSubmitting(true);

    fetch(`https://sentiport.de.r.appspot.com/api/password-reset-complete/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Invalid data provided. Please try again.`);
        } else {
          setStatus("login");
          setError("success");
          setMessage("You have successfully reset your password!");
          reset();
          setIsSubmitting(false);
        }
      })
      .catch((err) => {
        setMessage(err.message.toString());
        setError("error");
        reset();
        setIsSubmitting(false);
      });
  };

  const TopRow = () => {
    return (
      <>
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              setError(false);
              reset();
              setStatus("signup");
            } else {
              window.location.reload();
            }
          }}
          disabled={isSubmitting ? true : false}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">Reset Password</h2>
        <div className="text-center mb-6 text-gray-500">
          <p className="text-base">
            Not yet received any email?{" "}
            <span
              className={`${isSubmitting ? "" : "link text-blue-500"}`}
              onClick={() => {
                isSubmitting ? {} : setStatus("forgot");
              }}
            >
              Re-enter email address
            </span>
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <TopRow reset={reset} />
      <MessageAlert error={error} setError={setError} message={message} />
      <Form onSubmit={handleSubmit(saveData)} className="mt-4">
        <Field label="User ID" error={errors?.uidb64}>
          <Input
            {...register("uidb64", {
              required: "User ID is required",
            })}
            id="uidb64"
            placeholder="Enter your user ID from the password reset email"
            disabled={isSubmitting ? true : false}
          />
        </Field>
        <Field label="Token" error={errors?.token}>
          <Input
            {...register("token", {
              required: "Token is required",
            })}
            id="token"
            placeholder="Enter your token from the password reset email"
            disabled={isSubmitting ? true : false}
          />
        </Field>
        <Field label="New Password" error={errors?.password}>
          <Input
            {...register("password", {
              required: "New password is required",
            })}
            type="password"
            id="password"
            placeholder="Enter your new password"
            autoComplete="current-password"
            disabled={isSubmitting ? true : false}
          />
        </Field>
        <SubmitBtn isSubmitting={isSubmitting} text="Reset Password" />
      </Form>
    </>
  );
};

export default ResetPasswordForm;

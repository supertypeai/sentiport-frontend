import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, Field, Input } from "@/blocks/Form";
import { MessageAlert, SubmitBtn } from "./LoginForm";

const ForgotPasswordForm = ({ setStatus, setIsOpen, isOpen }) => {
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

    fetch(`https://sentiport.de.r.appspot.com/api/request-reset-email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(
            `Reset Password Failed! Please enter a valid email address.`
          );
        } else {
          setStatus("reset");
          setError("success");
          setMessage(
            "Email sent! Please check your email inbox or spam, and enter the credentials below."
          );
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
              setStatus("login");
            } else {
              window.location.reload();
            }
          }}
          disabled={isSubmitting ? true : false}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">Forgot Password</h2>
        <div className="text-center mb-6 text-gray-500">
          <p className="text-md">
            <span
              className={`${isSubmitting ? "" : "link text-blue-400"}`}
              onClick={() => {
                isSubmitting ? {} : setStatus("login");
              }}
            >
              Back to login
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
        <Field
          label="Email Address"
          error={errors?.email}
          hint="We will send your password reset credentials to this email address."
        >
          <Input
            {...register("email", {
              required: "Email address is required",
            })}
            type="email"
            id="email"
            placeholder="Enter your email address"
            autoComplete="username"
            disabled={isSubmitting ? true : false}
          />
        </Field>
        <SubmitBtn isSubmitting={isSubmitting} text="Submit" />
      </Form>
    </>
  );
};

export default ForgotPasswordForm;

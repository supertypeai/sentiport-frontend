import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, Field, Input } from "@/blocks/Form";
import { MessageAlert, SubmitBtn } from "./LoginForm";

const ChangePasswordForm = ({ token }) => {
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

    fetch(`https://sentiport.de.r.appspot.com/api/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Invalid current password. Please try again.`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        localStorage.setItem("userSession", JSON.stringify(data));
        reset();
        setError(false);
        window.location.reload();
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
        <label
          htmlFor="reset"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setError(false)}
          disabled={isSubmitting ? true : false}
        >
          ✕
        </label>
        <h2 className="text-3xl font-bold mb-4 text-center">Change Password</h2>
      </>
    );
  };

  return (
    <>
      <input type="checkbox" id="reset" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-10/12 md:w-6/12 max-w-4xl">
          <TopRow reset={reset} />
          <MessageAlert error={error} setError={setError} message={message} />
          <Form onSubmit={handleSubmit(saveData)} className="mt-4">
            <Field label="Current Password" error={errors?.old_password}>
              <Input
                {...register("old_password", {
                  required: "Current password is required",
                })}
                type="password"
                id="old_password"
                placeholder="Enter your current password"
                autoComplete="current-password"
                disabled={isSubmitting ? true : false}
              />
            </Field>
            <Field label="New Password" error={errors?.new_password}>
              <Input
                {...register("new_password", {
                  required: "New password is required",
                })}
                type="password"
                id="new_password"
                placeholder="Enter your new password"
                autoComplete="new-password"
                disabled={isSubmitting ? true : false}
              />
            </Field>
            <SubmitBtn isSubmitting={isSubmitting} text="Submit" />
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, Field, Input } from "@/blocks/Form";
import { MessageAlert, SubmitBtn } from "./LoginForm";

const EnrollForm = ({ setStatus, setIsOpen, isOpen }) => {
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

    fetch(`https://sentiport.de.r.appspot.com/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error(`Email already exists. Please use another email.`);
        } else {
          setStatus("login");
          setError("success");
          setMessage(
            "Account Created! We have sent you an email containing your credentials."
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
            } else {
              window.location.reload();
            }
          }}
          disabled={isSubmitting ? true : false}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Enroll to <span className="logo-gradient">summary</span>
        </h2>
        <div className="text-center mb-6 text-gray-500">
          <p className="text-base">
            Already have an account?{" "}
            <span
              className={`${isSubmitting ? "" : "link text-blue-500"}`}
              onClick={() => {
                isSubmitting ? {} : setStatus("login");
              }}
            >
              Login here
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
          hint="We will send your credentials to this email address."
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
        <SubmitBtn isSubmitting={isSubmitting} text="Get Free 5 Credits!" />
      </Form>
    </>
  );
};

export default EnrollForm;

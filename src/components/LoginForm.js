import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form, Field, Input } from "@/blocks/Form";

export const MessageAlert = ({ error, setError, message }) => {
  return (
    <div
      className={
        error === "error"
          ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 text-xs"
          : error === "success"
          ? "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-xs"
          : "hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 text-xs"
      }
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-2">
        <svg
          className={`fill-current h-6 w-6 ${
            error === "error" ? "text-red-500" : "text-green-500"
          }`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => setError(false)}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export const SubmitBtn = ({ isSubmitting, text }) => {
  return (
    <div className="my-6">
      <button
        type="submit"
        className="btn bg-blue-500 w-full text-gray-200 border-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : text}
      </button>
    </div>
  );
};

const LoginForm = ({ setStatus, setIsOpen, isOpen }) => {
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

    fetch(`https://sentiport.de.r.appspot.com/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Invalid credentials. Please try again.`);
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
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              reset();
              setError(false);
              setStatus("signup");
            } else {
              window.location.reload();
            }
          }}
          disabled={isSubmitting ? true : false}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Welcome to <span className="logo-gradient">summary</span>
        </h2>
        <div className="text-center mb-6 text-gray-500">
          <p className="text-base">
            Don&apos;t have an account?{" "}
            <span
              className={`${isSubmitting ? "" : "link text-blue-500"}`}
              onClick={() => {
                isSubmitting ? {} : setStatus("signup");
              }}
            >
              Enroll here
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
        <Field label="Email Address" error={errors?.email}>
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
        <Field
          label="Password"
          error={errors?.password}
          hint="Please use the password from the email we sent you after registering, unless you have reset it."
        >
          <Input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            disabled={isSubmitting ? true : false}
          />
        </Field>
        <div className="text-right text-gray-500 text-sm mb-6">
          <p
            className={`${isSubmitting ? "" : "link"}`}
            onClick={() => {
              isSubmitting ? {} : setStatus("forgot");
            }}
          >
            Forgot Password?
          </p>
        </div>
        <SubmitBtn isSubmitting={isSubmitting} text="Log in to your account" />
      </Form>
    </>
  );
};

export default LoginForm;

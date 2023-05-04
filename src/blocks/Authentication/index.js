import { useState } from "react";

import EnrollForm from "@/components/EnrollForm";
import LoginForm from "@/components/LoginForm";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const Authentication = ({ isOpen, setIsOpen }) => {
  const [status, setStatus] = useState("signup");

  return (
    <>
      <input type="checkbox" id="auth" className="modal-toggle" />
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-10/12 md:w-6/12 max-w-4xl">
          {status === "login" ? (
            <LoginForm
              setStatus={setStatus}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ) : status === "signup" ? (
            <EnrollForm
              setStatus={setStatus}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ) : status === "forgot" ? (
            <ForgotPasswordForm
              setStatus={setStatus}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ) : (
            <ResetPasswordForm
              setStatus={setStatus}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;

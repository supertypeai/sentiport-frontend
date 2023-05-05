import React, { useContext, useState } from "react";

import { UserContext } from "@/contexts/UserContext";
import Authentication from "../Authentication";
import ChangePasswordForm from "@/components/ChangePasswordForm";

export const scrollToSection = (sectionName) => {
  const section = document.querySelector(`#${sectionName}`);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleLogOut = (event) => {
  event.preventDefault();
  localStorage.removeItem("userSession");
  window.location.reload();
};

const Navbar = () => {
  const { u, token } = useContext(UserContext);
  const [user] = u;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar p-3">
      <div className="flex-1 dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost normal-case text-lg md:text-3xl invisible lg:visible"
          onClick={() => {
            scrollToSection("home");
          }}
        >
          <span className="logo-gradient">summary</span>
        </label>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border-blue-500"
            >
              <div className="avatar placeholder">
                <div className="bg-white bg-opacity-10 text-neutral-content rounded-full w-10">
                  <span className="text-lg">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-gradient">
                <span className="hover:cursor-default hover:bg-inherit">
                  Your Credit Balance: {user.credits}
                </span>
                <div className="menu-title hover:bg-inherit hover:cursor-default">
                  <button
                    className="btn bg-transparent hover:border-blue-300 text-gradient border-blue-500 btn-sm shadow-md shadow-blue-500"
                    onClick={() => {
                      scrollToSection("pricing");
                    }}
                  >
                    Add Credits
                  </button>
                </div>
              </li>
              <div className="divider my-0" />
              <li>
                <label htmlFor="reset" className="active:bg-blue-500">
                  Change Password
                </label>
              </li>
              <li>
                <span
                  onClick={(event) => handleLogOut(event)}
                  className="active:bg-blue-500"
                >
                  Log Out
                </span>
              </li>
            </ul>
            <ChangePasswordForm token={token} />
          </div>
        ) : (
          <>
            <label
              className="btn btn-ghost rounded-full"
              onClick={() => setIsOpen(true)}
            >
              SIGN UP / LOG IN
            </label>
            <Authentication isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

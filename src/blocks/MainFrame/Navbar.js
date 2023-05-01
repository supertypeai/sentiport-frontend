import React, { useContext, useState } from "react";

import { UserContext } from "@/contexts/UserContext";
import Authentication from "../Authentication";
import ChangePasswordForm from "@/components/ChangePasswordForm";

const handleLogOut = (event) => {
  event.preventDefault();
  sessionStorage.removeItem("userSession");
  window.location.reload();
};

const Navbar = () => {
  const { token } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="flex-1 dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost normal-case text-lg md:text-3xl invisible lg:visible"
        >
          <span className="bg-gradient-to-r from-white to-blue-500 text-transparent bg-clip-text">
            summary
          </span>
        </label>
      </div>
      <div className="flex-none">
        {token ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="avatar placeholder">
                <div className="bg-white text-neutral-content rounded-full w-10">
                  <span className="text-m">S</span>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <label htmlFor="reset">Change Password</label>
              </li>
              <li>
                <span onClick={(event) => handleLogOut(event)}>Log Out</span>
              </li>
            </ul>
            <ChangePasswordForm token={token} />
          </div>
        ) : (
          <>
            <label className="btn btn-ghost" onClick={() => setIsOpen(true)}>
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

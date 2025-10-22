import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router"
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [icon, setIcon] = useState(true)
  const [open, setOpen] = useState(false)
  console.log(icon)
  return (
    <div className="bg-linear-to-br fixed z-50 top-0 left-0 w-full bg-white/75 backdrop-blur-lg">
      <div
      className="navbar  z-50 md:px-6 px-3 py-3 
        container mx-auto
      border-b border-gray-300/60 text-gray-800"
    >
      {/* Logo Section */}
      <div className="flex-1 flex flex-row items-center  space-x-2 relative">

        <div
          onClick={() => {
            setIcon(!icon);
            setOpen(!open);
          }}
          className="cursor-pointer md:hidden rounded-md hover:bg-gray-200 transition"
        >
          {icon ? (
            <IoMdMenu className="text-2xl text-gray-700" />
          ) : (
            <IoMdClose className="text-2xl text-gray-700" />
          )}
        </div>

        <Link to='/' className="text-2xl"><img className="h-14 w-14" src="https://i.ibb.co.com/ccrvFMNB/Dynamic-Skill-Swap-Logo-with-Gears-removebg-preview.png" alt="logo" /></Link>
        {/* Dropdown Items */}
        {open && (
          <ul className="absolute left-0 top-9 bg-base-100 rounded-box z-50 w-40 p-2 shadow-lg border border-gray-200">
            <li>
              <a className="block px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                Item 1
              </a>
            </li>
            <li>
              <a className="block px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
                Item 2
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-4 mr-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition ${isActive
              ? "underline underline-offset-4 font-semibold text-blue-600"
              : " hover:text-blue-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium transition ${isActive
              ? "underline underline-offset-4 font-semibold text-blue-600"
              : "hover:text-blue-600"
            }`
          }
        >
          My Profile
        </NavLink>

      </div>

      {/* User Section */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle tooltip tooltip-bottom avatar border border-gray-300 hover:scale-105 transition"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="User Avatar"
                  />
                </div>
              </div>
              <ul tabIndex="-1" className="dropdown-content md:hidden menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                <li> <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium transition ${isActive
                      ? "underline underline-offset-4 text-blue-600"
                      : "hover:bg-gray-200/70 hover:text-blue-600"
                    }`
                  }
                >
                  My Profile
                </NavLink></li>
                <li>
                  <button
                    onClick={()=>logOut()}
                    className="btn   border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white transition"
                  >
                    Logout
                  </button>
                </li>
              </ul>

            </div>

            <button
              onClick={()=>logOut()}
              className="btn btn-primary border-blue-400 text-white hover:bg-blue-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition ${isActive
                  ? "underline font-semibold text-blue-600"
                  : "hover:text-blue-600"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signUp"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition ${isActive
                  ? "underline font-semibold text-blue-600"
                  : "hover:text-blue-600"
                }`
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router"
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [icon, setIcon] = useState(true)
  const [open, setOpen] = useState(false)
  return (
    <div className=" fixed shadow-xl z-50 top-0 left-0  w-full bg-gradient-to-br from-blue-50 to-purple-100">
      <div
        className="navbar container   mx-auto z-50 md:px-6 px-3 py-3 text-gray-800"
      >
        {/* Logo Section */}
        <div className="flex-1 flex flex-row items-center  space-x-2 relative">

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="md:hidden m-1"><IoMdMenu className="text-3xl" /></div>
            <ul tabIndex="-1" className="dropdown-content menu left-1 bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium transition ${isActive ? "font-semibold text-blue-600" : "hover:text-blue-600"}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium transition ${isActive ? "font-semibold text-blue-600" : "hover:text-blue-600"}`
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to='/' className="text-2xl flex items-center space-x-0.5 "><img className="md:w-10 w-8" src="https://i.ibb.co.com/KxdHw9XD/skill-Swap-Logo.png" alt="logo" />
            <h1 className="md:text-2xl text-[23px] font-semibold text-indigo-700 tracking-widest">
              SkillSwap
            </h1>
          </Link>
       
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-4 mr-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition ${isActive
                ? "font-semibold  text-blue-600"
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
                ? "font-semibold text-blue-600"
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
                  className="btn btn-ghost btn-circle tooltip md:tooltip-bottom tooltip-left  avatar border border-gray-300 hover:scale-105 transition"
                  data-tip={user.displayName}
                >
                  <div className="w-10 hover:border-gray-300 hover:border-3 rounded-full">
                    <img
                      src={
                        user.photoURL
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
                        ? "text-blue-600"
                        : " hover:text-blue-600"
                      }`
                    }
                  >
                    My Profile
                  </NavLink></li>
                  <li>
                    <button
                      onClick={() => logOut()}
                      className="btn btn-soft btn-primary  transition"
                    >
                      Logout
                    </button>
                  </li>
                </ul>

              </div>

              <button
                onClick={() => logOut()}
                className="btn btn-outline  hidden md:block  btn-primary transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 font-medium  btn    transition ${isActive
                    ? "btn-primary text-white"
                    : "btn-outline btn-primary hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md hidden md:block font-medium btn    transition ${isActive
                    ? "btn-primary text-white"
                    : "btn-outline btn-primary hover:text-white"
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

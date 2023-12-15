import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const AuthenticationLayout = () => {
  const location = useLocation();

  return (
    <div className="mt-[7rem] p-5 pb-2">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
          <img
            src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
            alt="logo"
            width={162}
            height={46}
            className="h-[2.5rem] w-[auto]"
          />
        </div>
      </div>
      {location.pathname === "/login" ? (
        <div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 mr-1 p-1">
            Don&apos;t have an account?
            <Link
              to={"/register"}
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Looks like you&apos;re new here!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 mr-1 p-1">
            Existing User?
            <Link
              to={"/login"}
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthenticationLayout;

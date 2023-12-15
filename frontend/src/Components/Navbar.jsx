import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { IoMdMenu } from "react-icons/io";
let links = [];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const sidebarRef = React.useRef(null);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  if (isAuth.role === "customer") {
    let afterAuth = [
      { name: "Home", to: "/" },
      {
        name: "BuyDesk",
        to: "/buydesk",
      },
      {
        name: "Orders",
        to: "/order",
      },
      { name: "Cart", to: "/cart" },
    ];
    links = afterAuth;
  } else if (isAuth.role === "manager") {
    let afterAuth = [
      { name: "Home", to: "/" },
      {
        name: "All Order",
        to: "/latestorder",
      },
      { name: "All products", to: "/allproduct" },
      { name: "Add product", to: "/addproduct" },
    ];
    links = afterAuth;
  } else {
    let afterAuth = [
      { name: "Home", to: "/" },
      {
        name: "BuyDesk",
        to: "/buydesk",
      },
      {
        name: "Login",
        to: "/login",
      },
      { name: "Signup", to: "/register" },
    ];
    links = afterAuth;
  }

  const handleLogout = () => {
    fetch("/api/v1/auth/logout")
      .then((res) => res.json())
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed top-0 z-50 w-full">
      <nav className="bg-white p-4 shadow-lg">
        <div className="relative xl:hidden">
          <div onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
            <IoMdMenu className="h-10 w-10 absolute" />
          </div>
          <div className="block xl:hidden">
            <div
              ref={sidebarRef}
              className={`md:hidden block w-2/6 min-h-[100vh] bg-white shadow-2xl z-50 fixed left-0 top-14 py-3 px-6 transition-all duration-500 ease-in-out ${
                isOpenSideBar
                  ? "transform translate-x-0 "
                  : "transform -translate-x-full"
              }`}
            >
              <div className="flex space-x-10">
                <div
                  onClick={() => setIsOpenSideBar(false)}
                  className="p-2 relative bottom-2 right-0 left-4 bg-t-blue rounded-full shadow-2xl"
                >
                  <RxCross2 className="h-6 w-6 font-extrabold text-black" />
                </div>
              </div>
              <div className="ml-1">
                <ul className="font-semibold flex flex-col">
                  {links.map((link) => {
                    return (
                      <Link to={link.to} key={link.name}>
                        <li
                          className={clsx(
                            `inline-block m-3 ml-4 cursor-pointer `,
                            {
                              "text-dash font-bold text-lg":
                                location.pathname === link.to,
                            }
                          )}
                        >
                          {link.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="flex items-center">
          <div className="xl:ml-20 ml-16 md:w-[50%] w-[70%]">
            {" "}
            <Link to="/">
              <img
                src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
                alt="icon"
                className="h-15 w-20"
              />
            </Link>
          </div>
          <div className="items-center hidden xl:flex">
            <div className="ml-16">
              <ul className="font-semibold">
                {links.map((link) => {
                  return (
                    <Link to={link.to} key={link.name}>
                      <li
                        className={clsx(
                          `inline-block m-3 ml-4 cursor-pointer `,
                          {
                            "text-dash font-bold text-lg":
                              location.pathname === link.to,
                          }
                        )}
                      >
                        {link.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          {isAuth && isAuth ? (
            <div
              className="flex gap-3 absolute right-6 cursor-pointer"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://d3nn873nee648n.cloudfront.net/900x600/20755/300-SM1073124.jpg"
                alt="Rounded avatar"
              />
              <div className="flex items-center">
                <p>{isAuth.name}</p>
                <FaCaretDown />
              </div>
              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </section>
      </nav>
    </div>
  );
};

export default Navbar;

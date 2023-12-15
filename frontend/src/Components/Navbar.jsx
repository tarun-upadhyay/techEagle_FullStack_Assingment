import React from "react";

import { FaCaretDown } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const links = [
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

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav className="bg-white p-4 shadow-lg">
        <section className="flex items-center">
          <div className="md:ml-20 ml-6 md:w-[50%] w-[70%]">
            {" "}
            <Link to="/">
              <img
                src="https://assets-global.website-files.com/6284afcd3c8fe34dca52d136/62bfd7e69c25897f423bcdac_TechEagle%20new%20logo.svg"
                alt="icon"
                className="h-15 w-20"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="ml-16">
              <ul className="font-semibold">
                {links.map((link) => {
                  return (
                    <Link to={link.to} key={link.name}>
                      <li
                        className={clsx(
                          `inline-block m-3 ml-4 cursor-pointer `,
                          {
                            "text-dash underline":
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
          <div className="flex gap-3 absolute right-6">
            <img
              className="w-8 h-8 rounded-full"
              src="https://d3nn873nee648n.cloudfront.net/900x600/20755/300-SM1073124.jpg"
              alt="Rounded avatar"
            />
            <div className="flex items-center">
              <p>Sara Green</p>
              <FaCaretDown />
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;

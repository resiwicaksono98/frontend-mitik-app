import React from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

const Navbar = () => {
  const menus = [
    { name: "Beranda", link: "/" },
    { name: "Pesan", link: "/order" },
  ];

  const auths = [
    { name: "Masuk", link: "/login", className: "" },
    {
      name: "Daftar",
      link: "/register",
      className:
        " px-4 py-2 rounded-lg  hover:bg-blue-500 hover:text-white border border-primary  ",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      className: "hidden",
    },
  ];
  return (
    <div className="block py-4 px-6 justify-between md:flex items-center text-primary">
      <div className=" items-center gap-12 md:flex">
        <Link
          to={"/"}
          className="text-3xl font-bold font-oswald  tracking-wider"
        >
          MITRA TEKNIK
        </Link>
        {/* Menu Bar */}
        <div className=" list-none md:flex gap-4 text-xl items-center">
          {menus.map((menu, i) => (
            <Link to={menu.link}>
              <li className="cursor-pointer hover:underline" key={i}>
                {menu.name}
              </li>
            </Link>
          ))}
        </div>
      </div>
      {/* Auth Bar */}
      <div className="flex list-none gap-4 text-xl items-center">
        {auths.map((auth, i) => (
          <Link to={auth.link} key={i} className={auth.className}>
            <li className={`cursor-pointer hover:underline`} key={i}>
              {auth.name}
            </li>
          </Link>
        ))}
        {/* Popup Profile Image */}
        <div>
          <Popover className={"relative z-20"}>
            {({ open }) => (
              <>
                <Popover.Button
                  className={
                    "border-none flex items-center ring-0 outline-none focus:opacity-80 hidden"
                  }
                >
                  <img
                    src="https://i.pinimg.com/736x/6f/ac/5b/6fac5baabf7ca453b1dd071677cead52--luffy-monkeys.jpg"
                    alt="profile"
                    className="h-7 rounded-full shadow-lg"
                  />
                  <ChevronDownIcon
                    className={`${open ? "" : "text-opacity-70 rotate-180"}
                  ml-2 h-5 w-5 text-primary transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    className={
                      "absolute bg-white z-10 top-2 right-2 rounded-lg py-3 px-4 w-48 shadow-xl"
                    }
                  >
                    <div className="cursor-pointer text-base font-medium ">
                      <div className="hover:underline hover:text-primary flex items-center gap-2">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-7" />
                        Hubungi Kami
                      </div>
                      <div className="hover:underline hover:text-primary py-2 px-3 bg-slate-200 mt-2 rounded-xl text-center">
                        Keluar
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

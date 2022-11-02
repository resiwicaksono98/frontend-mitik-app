import { Disclosure } from "@headlessui/react";
import React from "react";
import {
  ChevronUpIcon,
  HomeIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const datas = [
    { name: "Dashboard", link: "/admin/", icon: <HomeIcon className="h-5" /> },
    {
      name: "Order",
      icon: <ShoppingCartIcon className="h-5" />,
      panel: [
        { name: "Work Order", link: "/admin/work_order" },
        { name: "Order List", link: "/admin/order" },
        { name: "Invoice", link: "/admin/invoice" },
      ],
    },
    {
      name: "Account",
      icon: <UsersIcon className="h-5" />,
      panel: [
        { name: "Manage User", link: "/admin/users" },
        { name: "Manage Engineer", link: "/admin/engineers" },
        { name: "Manage Admin", link: "/admin/admins" },
      ],
    },
  ];

  return (
    <div>
      <div className="text-2xl font-bold text-primary text-center">
        MITIK APP
      </div>
      {datas.map((data, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Link to={data.link}>
                <Disclosure.Button
                  className={`mt-4 bg-primary text-white w-full flex justify-between py-2 px-4 rounded-md items-center`}
                >
                  <span className={`tracking-wider flex gap-1 `}>
                    {data.icon} {data.name}
                  </span>
                  {data.panel ? (
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  ) : (
                    ""
                  )}
                </Disclosure.Button>
              </Link>
              <Disclosure.Panel className={"bg-slate-200 "}>
                <div>
                  {data.panel?.map((panel, i) => (
                    <Link to={panel.link}>
                      <div
                        className={`mb-2 mt-1 py-2 cursor-pointer px-4 rounded-lg hover:text-primary hover:underline`}
                        key={i}
                      >
                        {panel.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Sidebar;

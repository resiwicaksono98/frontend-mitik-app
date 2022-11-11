import React from "react";
import { ArrowSmallLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function BackNavigate({ to, children }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Link to={to}>
        <ArrowSmallLeftIcon className="h-10  bg-primary hover:bg-slate-800  text-white rounded-lg " />
      </Link>
      {children}
    </div>
  );
}

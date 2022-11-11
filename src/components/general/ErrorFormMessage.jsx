import { XCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function ErrorFormMessage({ errors, classname }) {
  return (
    <div
      className={`text-red-500 pt-1 mx-1 flex gap-2 items-center ${classname}`}
    >
      <XCircleIcon className="h-5" />
      {errors}
    </div>
  );
}

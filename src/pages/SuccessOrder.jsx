import React from "react";
import { Link } from "react-router-dom";
import SuccessImg from "../assets/images/successOrder.jpg";

export default function SuccessOrder() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen gap-4">
        <div>
          <img src={SuccessImg} alt="img-success" className="h-96" />
        </div>
        <div className=" w-2/6 flex flex-col gap-4">
          <div className="text-4xl  font-semibold">Yey...</div>
          <div className="text-2xl">
            Pesananmu telah kami terima, kami akan menghubungi anda sebentar
            lagi untuk ke proses selanjutnya{" "}
            <span className="text-3xl"> &#128522;</span>
          </div>
          <div>
            Cek{" "}
            <Link
              className="text-blue-500 hover:underline font-semibold "
              to={"/dashboard"}
              replace={"/"}
            >
              Dashboard
            </Link>{" "}
            untuk melihat pesananmu atau kembali ke{" "}
            <Link
              className="text-blue-500 hover:underline font-semibold"
              to={"/"}
              replace={"/"}
            >
              Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

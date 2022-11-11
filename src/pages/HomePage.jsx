import React from "react";
import { Link } from "react-router-dom";
import HeroBg from "../assets/images/hero.jpg";

const HomePage = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="flex flex-col flex-1 relative md:pt-16">
        <div className="text-[36px] font-semibold text-primary py-4 px-3  font-oswald">
          Kami Siap Kerumah Anda Untuk Pemasangan Dan Perbaikan{" "}
          <span className="underline text-blue-600">AIR CONDITIONER</span>
        </div>
        <Link
          to={"/order"}
          className="bg-blue-500 xl:w-1/3 hover:bg-blue-700 ml-2 py-2 px-4 text-2xl text-white rounded-lg"
        >
          Pesan Sekarang
        </Link>
      </div>
      <div className="justify-center hidden lg:flex">
        <img
          src={HeroBg}
          alt="Background-home"
          className="h-[500px] rounded-xl "
        />
      </div>
    </div>
  );
};

export default HomePage;

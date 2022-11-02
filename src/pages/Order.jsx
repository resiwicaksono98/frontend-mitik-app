import React from "react";

export default function Order() {
  return (
    <div>
      <div className="flex flex-col  items-center text-primary">
        <div className="bg-white rounded-lg shadow-lg  w-1/2">
          <div className="p-6  tracking-wider">
            <div className=" text-2xl  font-medium mb-4 flex gap-2 antialiased   ">
              <span className="underline"> Buat Pesanan Kamu</span>
              <span> &#128513;</span>
            </div>
            <form>
              {/* Order type */}
              <div className="mb-4">
                <label htmlFor="order_type">Apa yang kamu inginkan?</label>
                <select name="order_type" className="w-full rounded-lg mt-2">
                  <option value="1">Pemasangan AC Window</option>
                  <option value="2">Cuci AC Window</option>
                </select>
              </div>
              {/* Grid Cols */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name">Nama</label>
                  <input type="text" className="w-full rounded-lg mt-1" />
                </div>
                {/* phone number */}
                <div className="mb-4">
                  <label htmlFor="name">Nomer Telepon</label>
                  <input type="text" className="w-full rounded-lg mt-1" />
                </div>
              </div>
              {/* End Grid */}
              {/* address */}
              <div className="mb-4">
                <label htmlFor="address">Alamat</label>
                <textarea
                  name="address"
                  className="w-full rounded-lg mt-1"
                ></textarea>
              </div>
              {/* description */}
              <div className="mb-4">
                <label htmlFor="description">Pesan Tambahan</label>
                <textarea
                  name="description"
                  className="w-full rounded-lg mt-1"
                ></textarea>
              </div>
              {/* Button */}
              <button className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-slate-700">
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

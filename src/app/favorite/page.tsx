"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../type";
import { clearFavorite, removeFavorite } from "@/store/cartSlice";

const Favorite = () => {
  const fav = useSelector((state: RootState) => state.cart.favoriteData);
  const dispatch = useDispatch();

  function removeFavoriteItem(product: Product) {
    dispatch(removeFavorite(product));
  }

  return (
    <>
      <div className=" px-4 sm:px-[5vw] min-h-[540px]">
        {fav.length > 0 ? (
          <>
            <div className=" grid grid-rows gap-12 - pt-8">
              <div className=" bg-white rounded-lg ">
                <div className=" flex items-center justify-between px-6 py-3">
                  <p>Your Favorite</p>
                  <p>Subtotal</p>
                </div>

                <hr />

                <div className="">
                  {fav.map((favItem) => (
                    <div className=" px-4 py-2" key={favItem._id}>
                      <div className=" flex flex-col sm:flex-row items-center gap-2 bg-gray-100 px-2 rounded-md ">
                        <Image
                          src={favItem.image}
                          alt=""
                          width={150}
                          height={150}
                          className=" h-36"
                        />

                        <div className=" font-sans flex items-center justify-between">
                          <div className=" w-5/6">
                            <p className=" text-xl font-semibold">
                              {favItem.title}
                            </p>
                            <p className=" text-sm font-sans text-slate-600">
                              {favItem.description}
                            </p>
                            <p
                              className="
                          text-sm font-sans text-slate-600 py-1"
                            >
                              Unit Price:{" "}
                              <span className="text-base text-black font-semibold">
                                {" "}
                                R {favItem.price.toFixed(2)}
                              </span>
                            </p>

                            <div className=" flex items-center gap-14 ">
                              <button
                                onClick={() =>
                                  dispatch(removeFavorite(favItem._id))
                                }
                                className=" text-sm font-sans text-slate-600"
                              >
                                x Remove
                              </button>
                            </div>
                          </div>

                          <p className="text-base text-black font-semibold">
                            R {(favItem.quantity * favItem.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*Clear Favorite */}
            <div className=" mt-6 pb-4">
              <button
                onClick={() => dispatch(clearFavorite())}
                className=" bg-gray-800 text-slate-200 rounded-lg px-8 py-2 font-semibold hover:scale-90"
              >
                Clear Favorite
              </button>
            </div>
          </>
        ) : (
          <>
            <div className=" min-h-[540px]">
              <h1 className=" text-center text-4xl font-sans font-semibold py-12">
                Your Favorite Is Empty
              </h1>
              <Link href={"/"} className=" w-full flex justify-center  py-20">
                <button className=" bg-gray-800 text-slate-200 rounded-lg px-8 py-2 font-semibold hover:scale-90">
                  Go to Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorite;

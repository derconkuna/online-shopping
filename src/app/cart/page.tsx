"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import { DeleteIcon } from "lucide-react";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "@/store/cartSlice";
import { Product, StoreProduct } from "../../../type";
import { useSession } from "next-auth/react";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.productData);
  const { data: session } = useSession();

  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let amt = 0;

    cart.map((items) => {
      amt += items.price * items.quantity;

      return;
    });
    setTotalAmount(amt);
  }, [cart]);

  return (
    <>
      <div className=" px-4 sm:px-[5vw] min-h-[540px]">
        {cart.length > 0 ? (
          <>
            <div className=" grid grid-cols sm:grid-cols-[7fr_2fr]  gap-12 - pt-8">
              <div className=" bg-white rounded-lg ">
                <div className=" flex items-center justify-between px-6 py-3">
                  <p>Shopping Cart</p>
                  <p>Subtotal</p>
                </div>

                <hr />

                <div className="">
                  {cart.map((cartItem) => (
                    <div className=" px-4 py-2" key={cartItem._id}>
                      <div className=" flex flex-col sm:flex-row items-center gap-2 bg-gray-100 px-2 rounded-md ">
                        <Image
                          src={cartItem.image}
                          alt=""
                          width={150}
                          height={150}
                          className=" h-36"
                        />

                        <div className=" font-sans flex items-center justify-between">
                          <div className=" w-5/6">
                            <p className=" text-xl font-semibold">
                              {cartItem.title}
                            </p>
                            <p className=" text-sm font-sans text-slate-600">
                              {cartItem.description}
                            </p>
                            <p
                              className="
                          text-sm font-sans text-slate-600 py-1"
                            >
                              Unit Price:{" "}
                              <span className="text-base text-black font-semibold">
                                {" "}
                                R {cartItem.price.toFixed(2)}
                              </span>
                            </p>

                            <div className=" flex items-center gap-14 mb-2 ">
                              <div className=" w-36 flex items-center gap-6 mt-1 rounded-full border-1 border-gray-400 shadow-md shadow-gray-300 px-4">
                                <button
                                  onClick={() =>
                                    dispatch(decreaseQuantity(cartItem))
                                  }
                                  className="w-6 h-6 flex items-center justify-center leading-3 aspect-square rounded-full text-base bg-transparent hover:bg-gray-300"
                                >
                                  -
                                </button>
                                <p>{cartItem.quantity}</p>
                                <button
                                  onClick={() =>
                                    dispatch(increaseQuantity(cartItem))
                                  }
                                  className="w-6 h-6 flex items-center justify-center rounded-full leading-3 aspect-square text-base bg-transparent hover:bg-gray-300"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() =>
                                  dispatch(removeProduct(cartItem._id))
                                }
                                className=" text-sm font-sans text-slate-600 "
                              >
                                x Remove
                              </button>
                            </div>
                          </div>

                          <p className="text-base text-black font-semibold">
                            R {(cartItem.quantity * cartItem.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*Proccess to Payment*/}
              <div className=" bg-white rounded-lg p-6 max-h-56">
                <p className=" text-sm text-gray-700 pb-3">
                  Your order qualifies for FREE Shipping by chosing this option
                  at checkout, see details...
                </p>

                <div className=" flex items-center justify-between pb-4">
                  <p className=" font-semibold">Total: </p>
                  <p className=" text-lg font-bold">
                    R {totalAmount.toFixed(2)}
                  </p>
                </div>
                {session ? (
                  <>
                    <Link href={"/cartpayment"}>
                      <button className=" w-full bg-slate-800 text-white hover:scale-90 font-semibold rounded-lg py-2 px-4">
                        Procceed to Buy
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className=" w-full bg-gray-400 text-white font-semibold rounded-lg py-2 px-4"
                    >
                      Procceed to Buy
                    </button>
                    <p className=" text-red-500 text-sm text-center pt-2">
                      please login to procceeed
                    </p>
                  </>
                )}
              </div>
            </div>

            {/*Clear Cart */}
            <div className=" mt-6">
              <button
                onClick={() => dispatch(clearCart())}
                className=" bg-gray-800 text-slate-200 rounded-lg px-8 py-2 font-semibold hover:scale-90 mb-2"
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <>
            <div className=" min-h-[540px]">
              <h1 className=" text-center text-4xl font-sans font-semibold py-12">
                Your Cart Is Empty
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

export default CartPage;

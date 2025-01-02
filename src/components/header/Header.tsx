"use client";

import Image from "next/image";
import { DeleteIcon, MapPin, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useSession, signIn, signOut } from "next-auth/react";
import { Product } from "../../../type";

type Props = {
  product: Product;
};

const Header = ({ product }: Props) => {
  const { data: session } = useSession();
  const items = useSelector((state: RootState) => state.cart.productData);
  const favItems = useSelector((state: RootState) => state.cart.favoriteData);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-slate-950 px-4 sm:px-[5vw] py-2 ">
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <div className=" ">
          <Link href={`/`}>
            <Image
              src="/logo.png"
              alt=""
              width={100}
              height={50}
              className="w-20 h-16"
              priority
            />
          </Link>
        </div>

        <div className=" flex items-center gap-6">
          {/* Deliver to SA */}
          <div className=" hidden md:flex items-center gap-1  ">
            <div className=" fill-stone-300 text-stone-300">
              <MapPin />
            </div>
            <div>
              <p className=" text-stone-300 text-sm">Deliver to</p>
              <p className=" text-white text-sm font-semibold">SA</p>
            </div>
          </div>

          {/* Search-Bar */}
          <div className=" hidden  rounded-md w-[850px] overflow-hidden lg:flex items-center">
            <input
              type="text"
              placeholder=" Search products"
              className={`w-[95%] outline-none px-6 py-1 bg-stone-100`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery ? (
              <div
                className="  bg-stone-100 fill-red-500 text-red-600 rounded-r-md py-1 cursor-pointer "
                onClick={() => setSearchQuery("")}
              >
                {" "}
                <DeleteIcon />
              </div>
            ) : (
              <div className=" fill-black text-black bg-orange-300 px-2 py-1 rounded-r-md cursor-pointer ">
                <SearchIcon />
              </div>
            )}
          </div>

          {/* User && Cart Section */}
          <div className=" flex items-center gap-8">
            <div>
              {session ? (
                <>
                  <p className=" text-white">{session.user?.name}</p>
                </>
              ) : (
                <>
                  <p
                    onClick={() => signIn()}
                    className=" text-stone-300 text-sm cursor-pointer"
                  >
                    Sign-in
                  </p>
                </>
              )}
            </div>

            <Link href={"/favorite"}>
              <div className=" relative">
                <p className=" text-stone-300 text-sm">Marked</p>
                <p className=" text-white text-sm font-semibold">&Favorite</p>

                <p className=" text-sm text-yellow-400 font-semibold absolute top-[-3px] right-[-7px] border-2 border-gray-500 h-4 w-5 leading-3 aspect-square text-center items-center">
                  {favItems.length}
                </p>
              </div>
            </Link>

            <Link href={`/cart`}>
              <div className=" flex items-center gap-1">
                <div className=" relative">
                  <Image
                    src={`/cartIcon.png`}
                    alt=""
                    width={20}
                    height={20}
                    className=" w-12 h-8"
                  />
                  <p className=" text-yellow-400 font-semibold absolute top-[-4px] right-[16px]">
                    {items.length}
                  </p>
                </div>
                <p className=" text-white text-sm font-semibold">Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

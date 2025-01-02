"use client";

import { Text } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeaderBottom = () => {
  const { data: session } = useSession();
  return (
    <div className=" bg-gray-800 text-slate-200 w-full px-4 sm:px-[5vw] font-sans">
      <div className="  flex items-center gap-6 py-2 h-10">
        <div className=" flex items-center gap-2 cursor-pointer hover:border-[1px] p-1">
          <Text />
          <p>All</p>
        </div>
        <Link href={'/todays-deals'}>
          <p className=" hidden md:inline-flex text-center cursor-pointer hover:border-[1px] p-1">
            Todays's Deals
          </p>
        </Link>

        <p className=" hidden md:inline-flex text-center cursor-pointer hover:border-[1px] p-1">
          Customer Service
        </p>

        <p className=" hidden md:inline-flex text-center cursor-pointer hover:border-[1px] p-1">
          Registry
        </p>

        <p className=" hidden md:inline-flex text-center cursor-pointer hover:border-[1px] p-1">
          Gift Cards
        </p>

        <p className=" hidden md:inline-flex text-center cursor-pointer hover:border-[1px] p-1">
          Sell
        </p>
        {session ? (
          <>
            <p
              onClick={() => signOut()}
              className=" hidden md:inline-flex text-center text-red-400 cursor-pointer  hover:border-[1px] hover:border-red-600 p-1"
            >
              Sing Out
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeaderBottom;

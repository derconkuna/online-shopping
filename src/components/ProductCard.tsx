import React, { useState } from "react";
import { Product } from "../../type";
import Image from "next/image";
import { CarrotIcon, HeartIcon, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/cartSlice";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  function addItemsToCart(product: Product) {
    dispatch(addToCart(product));
  }

  function addItemsToFavoritr(product: Product) {
    dispatch(addToFavorite(product));
  }

  return (
    <div className=" w-full bg-white rounded-lg mb-6 font-sans px-6 relative group overflow-hidden cursor-pointer">
      <p className=" text-base text-gray-600 float-end pt-2">
        !save R{(product.oldPrice - product.price).toFixed(2)}
      </p>
      <Link href={`/product/${product._id}`}>
        <div className=" ">
          <Image
            src={product.image}
            alt=""
            width={300}
            height={300}
            className=" hover:scale-110 transition duration-150 "
          />
        </div>
      </Link>

      <div className=" absolute flex flex-col items-center gap-0 top-40 right-3 translate-x-20 transition duration-300 group-hover:translate-x-0 ">
        <div
          onClick={() => addItemsToCart(product)}
          className=" border-2 border-gray-300 p-3 py-4 rounded-t-lg hover:bg-orange-300 cursor-pointer "
        >
          <ShoppingCart />
        </div>
        <div
          onClick={() => addItemsToFavoritr(product)}
          className=" border-2 border-gray-300 p-3 py-4 rounded-b-lg  hover:bg-orange-300 cursor-pointer"
        >
          <HeartIcon />
        </div>
      </div>

      <hr />
      <p className=" text-sm text-gray-500 py-1">{product.category}</p>
      <h1 className=" text-base font-semibold text-gray-800">
        {product.title}
      </h1>
      <span className=" text-gray-500 line-through">
        R{product.oldPrice.toFixed(2)}{" "}
      </span>
      <span className=" pl-2 text-gray-800 text-base font-semibold">
        R{product.price.toFixed(2)}
      </span>
      <p className=" text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
        magni facili blanditiis molestias soluta eveniet illum .
      </p>
      <div className=" py-4">
        <button
          onClick={() => addItemsToCart(product)}
          className=" bg-slate-900 text-white w-full py-2 text-center rounded-lg hover:scale-95"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

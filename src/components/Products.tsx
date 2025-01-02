"use client";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Requests/requests";
import { Product } from "../../type";
import ProductCard from "./ProductCard";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(products);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="mt-80 sm:mt-auto ">
      {loading ? (
        <div className="  flex justify-center items-center">
          <LoaderIcon size={54} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-x-6">
            {products?.map((product) => {
              return (
                <div key={product._id}>  
                  <ProductCard product={product} />
                </div>
              );
            })}{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

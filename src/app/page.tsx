import Banner from "@/components/Banner";
import Products from "@/components/Products";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const page = () => {
  return (
    <div>
      <Banner />

      <div className=" relative -mt-80 px-4 sm:px-[5vw] md:px-[7vw] w-full">
        <Products />
      </div>
    </div>
  );
};

export default page;

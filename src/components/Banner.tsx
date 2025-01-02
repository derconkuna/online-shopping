"use client";

import Image from "next/image";
import sliderImg_1 from "../../public/sliderImg_1.jpg";
import sliderImg_2 from "../../public/sliderImg_2.jpg";
import sliderImg_3 from "../../public/sliderImg_3.jpg";
import sliderImg_4 from "../../public/sliderImg_4.jpg";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className=" relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            src={sliderImg_1}
            alt=""
            priority
            //height={450}
            //width={680}
            //className="w-fit h-fit"
          />
        </div>
        <div>
          <Image src={sliderImg_2} alt="" />
        </div>
        <div>
          <Image src={sliderImg_3} alt="" />
        </div>
        <div>
          <Image src={sliderImg_4} alt="" />
        </div>
      </Carousel>

      <div className=" w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-200"></div>
    </div>
  );
};

export default Banner;

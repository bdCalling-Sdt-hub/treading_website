import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useFetchBannerQuery } from "../../Redux/Apis/addsApis";
import { imageUrl } from "../../Redux/States/baseApi";
const Banner = () => {
  const { data } = useFetchBannerQuery();
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data?.data?.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => {
                window.open(item.url, "_blank");
              }}
              className="w-full h-[550px]"
            >
              <img
                className="w-full h-full object-cover"
                src={imageUrl(item?.image)}
                alt=""
              />
              {/* <Link className='absolute right-2 bottom-2 bg-white px-3 py-[2px] rounded-md hover:text-blue-600'>
                                details
                            </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useFetchBannerQuery } from "../../Redux/Apis/addsApis";
import { imageUrl } from "../../Redux/States/baseApi";
import Loading from "../Shared/Loading";
const Banner = () => {
  const { data, isLoading } = useFetchBannerQuery();
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
                className="w-full h-[550px]"
              >
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  src={imageUrl(item?.image)}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default Banner;

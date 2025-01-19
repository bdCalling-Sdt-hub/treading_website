import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useFetchBannerQuery } from "../../Redux/Apis/addsApis";
import { imageUrl } from "../../Redux/States/baseApi";
import Loading from "../Shared/Loading";

const Banner2 = () => {
  const { data, isLoading } = useFetchBannerQuery();
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[400px]">
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(item.url, "_blank");
                  }}
                  className="w-full h-full object-cover"
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

export default Banner2;

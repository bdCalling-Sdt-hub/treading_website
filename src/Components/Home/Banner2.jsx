import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  useFetchBannerQuery,
  useFetchSmallBannerQuery,
} from "../../Redux/Apis/addsApis";
import { imageUrl } from "../../Redux/States/baseApi";
import Loading from "../Shared/Loading";
import ReactPlayer from "react-player";

const Banner2 = () => {
  const { data, isLoading } = useFetchSmallBannerQuery();
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
              <div className="w-full max-h-[400px]">
                {item?.type === "video" ? (
                  <div className="w-full h-full relative">
                    <ReactPlayer
                      style={{
                        zIndex: 50,
                      }}
                      url={imageUrl(item?.files)}
                      playing={true}
                      controls={true}
                      width={`100%`}
                      height={`100%`}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(item?.url, "_blank");
                      }}
                      style={{
                        zIndex: 9999,
                      }}
                      className="absolute bg-yellow-500 top-1 right-1 rounded-md px-2 py-[2px] text-sm"
                    >
                      more
                    </button>
                  </div>
                ) : (
                  <img
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item?.url, "_blank");
                    }}
                    className="w-full h-full object-cover cursor-pointer"
                    src={imageUrl(item?.files)}
                    alt=""
                  />
                )}
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default Banner2;

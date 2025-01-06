import React from "react";
import { useFetchAboutQuery } from "../Redux/Apis/addsApis";

const SponsorShip = () => {
  const { data } = useFetchAboutQuery();
  return (
    <div
      className="container mx-auto my-5"
      dangerouslySetInnerHTML={{ __html: data?.data?.description }}
    ></div>
  );
};

export default SponsorShip;

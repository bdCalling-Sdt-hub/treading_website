import React from "react";
import { useFetchRulesQuery } from "../Redux/Apis/addsApis";

const RulesRegulation = () => {
  const { data } = useFetchRulesQuery();
  return (
    <div
      className="container mx-auto my-5"
      dangerouslySetInnerHTML={{ __html: data?.data?.description }}
    ></div>
  );
};

export default RulesRegulation;

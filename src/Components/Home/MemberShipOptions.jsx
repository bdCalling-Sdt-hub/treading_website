import React from "react";
import { Link } from "react-router-dom";
import {
  useFetchMyPlnQuery,
  useFetchSubscriptionPackageQuery,
} from "../../Redux/Apis/subscriptionApis";
import { useFetchProfileQuery } from "../../Redux/Apis/authApis";

const MemberShipOptions = () => {
  const { data } = useFetchSubscriptionPackageQuery();
  const { data: profile } = useFetchProfileQuery();
  const { data: myPlan } = useFetchMyPlnQuery();
  // console.log(data?.data) myPlan,
  // console.log('member shop options',data)
  console.log(profile);
  return (
    <div className="container mx-auto mt-32 mb-28">
      <p
        id="sectionHeading"
        className="text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3"
      >
        Membership Options
      </p>
      <div className="pt-6 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
        {data?.data?.subscriptions?.map((item, i) => {
          return (
            <div
              key={i}
              className={`p-4 ${
                i === 0
                  ? "bg-[#676767]"
                  : i === 1
                  ? "bg-[#EC9200]"
                  : i === 2
                  ? "bg-[#5D91F4]"
                  : "bg-[#163165]"
              } w-full rounded-md text-center h-full flex flex-col justify-center items-center gap-4 text-white py-8`}
            >
              <p className="text-2xl font-semibold">{item?.planName}</p>
              <p className="text-7xl font-bold">
                {item?.planName === "Platinum" || item?.planName === "Diamond"
                  ? item?.pointRangeStart
                  : `$${item?.fee}`}{" "}
              </p>
              <p className="text-xl font-semibold">
                {item?.planName === "Trial"
                  ? "7 Days free Trial plan for all user"
                  : item?.planName === "Gold"
                  ? "Per Months"
                  : "Points Need to Auto Upgrade"}{" "}
              </p>
              {item?.planName !== "Trial" && (
                <p className="text-xl font-semibold">
                  From ({item?.pointRangeStart}-{item?.pointRangeEnd}) points
                </p>
              )}

              {myPlan?.data?.plan_type === item?.planName ? (
                <p className="font-bold uppercase">Active Now</p>
              ) : !myPlan?.data && item?.planName === "Trial" ? (
                <Link
                  Link
                  to={`/pre-questions/${item?._id}?amount=${
                    item?.fee
                  }&plan_type=${item?.planName}&payment_status=${
                    item?.planName === "Trial" ? "trial" : "unpaid"
                  }`}
                  className="px-8 rounded-md py-2 bg-white text-black"
                >
                  Apply
                </Link>
              ) : (
                item?.planName === "Gold" && (
                  <Link
                    Link
                    to={
                      profile?.data?.result?._id
                        ? `/pre-questions/${item?._id}?amount=${
                            item?.fee
                          }&plan_type=${item?.planName}&payment_status=${
                            item?.planName === "Trial" ? "trial" : "unpaid"
                          }`
                        : `/sign-in`
                    }
                    className="px-8 rounded-md py-2 bg-white text-black"
                  >
                    Apply
                  </Link>
                )
              )}
              {myPlan?.data &&
                myPlan?.data?.plan_type !== item?.planName &&
                item?.planName === "Trial" && <p>Trial Ended</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberShipOptions;

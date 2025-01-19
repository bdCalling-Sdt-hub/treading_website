import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Placeholder for user icons
import { useGetNotificationQuery } from "../../../Redux/Apis/settingApis";
import moment from "moment";
import { Empty } from "antd";
import Loading from "../Loading";

const NotificationItem = ({ title, message, time }) => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-3" />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
};

const NotificationsList = () => {
  const { data, isLoading, isFetching } = useGetNotificationQuery();
  const notifications =
    data?.data?.map((item) => ({
      title: item?.title,
      message: item?.message,
      time: moment(item?.createdAt).format("LT"),
      _id: item?._id,
    })) || [];

  return (
    <div className="max-w-md mx-auto mt-6 max-h-[500px] overflow-y-scroll bg-white rounded-md">
      {isLoading || isFetching ? (
        <div className="w-[200px] h-[50px]">
          <Loading />
        </div>
      ) : notifications.length > 0 ? (
        notifications.map((item) => (
          <NotificationItem
            key={item?._id}
            title={item?.title}
            message={item?.message}
            time={item?.time}
          />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default NotificationsList;

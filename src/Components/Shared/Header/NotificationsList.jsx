import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Placeholder for user icons

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
  const notifications = [
    {
      title: "Mike just messaged you!",
      message: "Hello, Good morning, I...",
      time: "12:28 PM",
    },
    {
      title: "Your successfully registered!",
      message: "Your application is approve...",
      time: "10:22 AM",
    },
    {
      title: "You got 500 points for swap",
      message: "By swapping your OnePlus...",
      time: "Yesterday",
    },
    {
      title: "You have a swap request!",
      message: "Zahid Hossain requests you...",
      time: "Yesterday",
    },
    {
      title: "Popular products nearby",
      message: "Smart Television, mobiles, t...",
      time: "26/06/24",
    },
    {
      title: "Ronald accept your swap request!",
      message: "Chat with Ronald to swap y...",
      time: "22/06/24",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-6 bg-white rounded-md">
      {[...Array(6).keys()].map((i) => (
        <NotificationItem
          key={i}
          title={notifications[i].title}
          message={notifications[i].message}
          time={notifications[i].time}
        />
      ))}
    </div>
  );
};

export default NotificationsList;

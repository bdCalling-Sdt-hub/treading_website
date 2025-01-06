import { createContext, useContext, useEffect, useState } from "react";
import { useFetchProfileQuery } from "../Redux/Apis/authApis";
import io from "socket.io-client";
import { useGetConversationQuery } from "../Redux/Apis/chatApis";
const userData = createContext({});
export const useUserData = () => {
  return useContext(userData);
};
const UserDataProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [language, setLanguage] = useState("eng");
  const { data: user, isFetching, isLoading } = useFetchProfileQuery();
  const { data: conversation } = useGetConversationQuery(
    user?.data?.result?._id
  );
  const userDataValues = {
    user,
    isFetching,
    isLoading,
    language,
    setLanguage,
    socket,
    conversation,
  };
  useEffect(() => {
    if (user?.data?.result?._id) {
      const socket = io(
        `http://138.197.37.38:5071?id=${user?.data?.result?._id}`
      );
      setSocket(socket);
      // socket.on("getOnlineUsers", (users) => {
      //     // setOnlineUsers(users);
      // });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user?.data?.result]);
  return (
    <userData.Provider value={userDataValues}>{children}</userData.Provider>
  );
};

export default UserDataProvider;

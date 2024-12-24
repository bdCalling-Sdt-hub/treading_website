import { createContext, useContext, useEffect, useState } from "react"
import { useFetchProfileQuery } from "../Redux/Apis/authApis";
import io from "socket.io-client";
const userData = createContext({})
export const useUserData = () => {
    return useContext(userData);
};
const UserDataProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [language, setLanguage] = useState("eng");
    const { data: user, isFetching, isLoading } = useFetchProfileQuery()
    const userDataValues = {
        user, isFetching, isLoading, language, setLanguage
    }
    useEffect(() => {
        // if (true) {

        const socket = io(`http://13.43.16.29:5000?userId=`);
        setSocket(socket);
        socket.on("getOnlineUsers", (users) => {
            // setOnlineUsers(users);
        });
        return () => socket.close();
        // } else {
        //     if (socket) {
        //         socket.close();
        //         setSocket(null);
        //     }
        // }
    }, []);
    return <userData.Provider value={userDataValues}>
        {children}
    </userData.Provider>
}

export default UserDataProvider

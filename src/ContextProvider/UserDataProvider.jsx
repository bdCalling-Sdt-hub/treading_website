import { createContext, useContext, useState } from "react"
import { useFetchProfileQuery } from "../Redux/Apis/authApis";

const userData = createContext({})
export const useUserData = () => {
    return useContext(userData);
};
const UserDataProvider = ({ children }) => {
    const [language, setLanguage] = useState("eng");
    const { data: user, isFetching, isLoading } = useFetchProfileQuery()
    const userDataValues = {
        user, isFetching, isLoading, language, setLanguage
    }
    return <userData.Provider value={userDataValues}>
        {children}
    </userData.Provider>
}

export default UserDataProvider

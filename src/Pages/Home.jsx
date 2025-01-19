import Categories from "../Components/Home/Categories";
import TopRatedProducts from "../Components/Home/TopRatedProducts";
import MemberShipOptions from "../Components/Home/MemberShipOptions";
import JustForYou from "../Components/Home/JustForYou";
import { useUserData } from "../ContextProvider/UserDataProvider";

export const Home = () => {
  const { user } = useUserData();
  return (
    <div>
      <Categories />
      <TopRatedProducts />
      <MemberShipOptions />
      {user?.data?.result?.email && <JustForYou />}
    </div>
  );
};

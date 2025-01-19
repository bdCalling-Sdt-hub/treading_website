import { useFetchTopProductsQuery } from "../../Redux/Apis/productsApis";
import ProductCard from "../Shared/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Banner2 from "./Banner2";
import Loading from "../Shared/Loading";

const TopRatedProducts = () => {
  const { data, isLoading } = useFetchTopProductsQuery();
  return (
    <div className="container mx-auto mt-10">
      <p
        id="sectionHeading"
        className="text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3"
      >
        Top Products
      </p>
      <div className="text-end">
        <Link to={`/swap`} className="text-blue-500">
          view all
        </Link>
      </div>
      <div className="pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <Banner2 />
        </div>
        {isLoading
          ? [...Array(2).keys()].map((item) => <Loading key={item} />)
          : data?.data?.slice(0, 6)?.map((item, i) => {
              return <ProductCard key={i} data={item} />;
            })}
      </div>
    </div>
  );
};

export default TopRatedProducts;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Components/Shared/ProductCard/ProductCard";
import { Input, Pagination } from "antd";
import { IoSearch } from "react-icons/io5";
import earth from "../assets/icon/earth.png";
import CategoryList from "../Components/Shared/Category/CategoryList";
import { useUserData } from "../ContextProvider/UserDataProvider";
import { useFetchAllProductsQuery } from "../Redux/Apis/productsApis";
import toast from "react-hot-toast";
import { useFetchMyPlnQuery } from "../Redux/Apis/subscriptionApis";
const Swap = () => {
  //add-product
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState("");
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const category = new URLSearchParams(window.location.search).get("category");
  const subCategory = new URLSearchParams(window.location.search).get("sub");
  const navigate = useNavigate();
  const { user } = useUserData();

  const { data } = useFetchAllProductsQuery({
    limit,
    address,
    page,
    searchTerm,
    category,
    subCategory,
  });

  const { data: myPlan } = useFetchMyPlnQuery();
  return (
    <div className="flex justify-start items-start flex-col md:grid-cols-4 lg:grid grid-cols-5  gap-2 container mx-auto mt-6">
      <div
        className={` bg-white w-full ${open ? "h-full" : "h-fit lg:h-full"}`}
      >
        <CategoryList />
      </div>
      <div className="col-span-3 px-2  h-full w-full">
        <div className="flex justify-between items-center gap-6 sm:flex-row flex-col">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search here"
            className="py-2"
            prefix={<IoSearch />}
          />
          <Input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="location"
            className="py-2"
            prefix={<img src={earth} />}
          />
          {
            <button
              disabled={!myPlan?.data?.active}
              onClick={() => {
                if (!user?.data?.result?.email) {
                  return toast.error("You need to Login for Adding products");
                }
                navigate(`/add-product`);
              }}
              className="bg-blue-500 text-white px-8 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed py-2 whitespace-nowrap"
            >
              {myPlan?.data?.active
                ? "Add new Product"
                : "purchase subscription to add product"}
            </button>
          }
        </div>
        <div className="pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.data?.map((item, i) => {
            return <ProductCard key={i} data={item} />;
          })}
        </div>
        <Pagination
          total={data?.meta?.total}
          pageSize={data?.meta?.limit}
          onChange={(page) => setPage(page)}
          showSizeChanger={false}
        />
      </div>
      {/* <div className=' text-center hidden lg:flex flex-col gap-2  h-full w-full'>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-[#4E4E4E] font-semibold text-xl'>In My Words !</p>
                    <p className='text-base text-[#666666] my-3'>Did you Know?</p>
                    <p className='text-[#4E4E4E] font-semibold text-xl'>“Facts”</p>
                    <p className='text-base text-[#666666] my-3'>SWAPS ARE
                        PARM/TEMP AN
                        SEASONAL</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>You can swap
                        International & Locally </p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>No $  needed
                        just pre-appruval</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <p className='text-base text-[#666666] my-3'>{`SWIFT SWAP HAS 1,000's of SWAPS DATLY`}</p>
                </div>
                <div className='p-3 bg-white rounded-md'>
                    <Link className='text-base text-[#666666] my-3'>More...</Link>
                </div>
            </div> */}
    </div>
  );
};

export default Swap;

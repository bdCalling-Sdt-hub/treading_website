import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdOutlineSwapVerticalCircle } from "react-icons/md";
import ProductCard from "../Components/Shared/ProductCard/ProductCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useFetchMyProductsQuery,
  useFetchProductDetailsQuery,
} from "../Redux/Apis/productsApis";
import { imageUrl } from "../Redux/States/baseApi";
import { Modal, Select, Spin } from "antd";
import { useUserData } from "../ContextProvider/UserDataProvider";
import { useAddToSwapMutation } from "../Redux/Apis/swapApis";
import toast from "react-hot-toast";

const ProductsDetails = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [addToSwap, { isLoading }] = useAddToSwapMutation();
  const { data } = useFetchProductDetailsQuery(id);
  const { user } = useUserData();
  const [selectedProduct, setSelectedProduct] = useState();
  const { data: myProducts } = useFetchMyProductsQuery({});
  const [imageIndex, setImageIndex] = useState(0); //.slice(0, 4)?
  const images = data?.data?.product?.images?.map((item) => item) || []; //['https://i.ibb.co/Z2zHG1r/Rectangle-210.png', 'https://i.ibb.co/WysMnRt/Rectangle-210-1.png', 'https://i.ibb.co/ZYgRK5t/Rectangle-210-2.png']
  const handleSubmit = () => {
    const SwapData = {
      userTo: data?.data?.product?.user?._id,
      productFrom: selectedProduct?._id,
      productTo: data?.data?.product?._id,
    };
    addToSwap(SwapData)
      .unwrap()
      .then((res) => {
        toast.dismiss();
        toast.success(res?.message);
        setOpen(false);
        setSelectedProduct({});
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err?.data?.message);
      });
  };
  return (
    <div className="container mx-auto md:grid grid-cols-3 flex flex-col mt-10 gap-6">
      <div className="w-full h-full">
        <div className="w-full h-[400px] bg-white rounded-md flex justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={imageUrl(images[imageIndex])}
            alt=""
          />
        </div>
        <div className="w-full h-[190px] rounded-md grid grid-cols-3 mt-1 gap-3 bg-white px-1 py-2">
          {images?.map((item, i) => {
            return (
              <img
                key={i}
                className="w-full h-[174px] object-contain rounded-md cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setImageIndex(i);
                }}
                src={imageUrl(item)}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className="w-full col-span-2 p-6 rounded-md text-[#4E4E4E] ">
        <div className="flex justify-start items-center gap-4">
          <p className=" text-[#4E4E4E]">Swap on 21 Mar 2:45 PM </p>
          <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
            {" "}
            <span>Condition:</span> {data?.data?.product?.condition}
          </p>
        </div>
        <p className="text-xl font-semibold mt-2">
          {data?.data?.product?.title}
        </p>
        <div className="flex justify-start items-center w-full gap-1 my-2 flex-wrap">
          <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
            {" "}
            <span>Value : </span>{" "}
            <span className="text-blue-600 font-bold">
              ${data?.data?.product?.productValue}
            </span>
          </p>
          <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
            Earned
          </p>
          {/* <p className=' text-[#4E4E4E] flex justify-start items-center gap-2'><FaRegStar className='text-yellow-400 text-2xl' /> 500 Points</p> */}
        </div>
        <div className="flex justify-start items-center w-full gap-1 my-2 flex-wrap">
          <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
            {" "}
            <span>Post by: </span>{" "}
            <span className="text-blue-600 ">
              {data?.data?.product?.user?.name}
            </span>
          </p>
          <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
            <GrLocation className=" text-2xl" /> {data?.data?.product?.address}
          </p>
        </div>
        <p className="font-medium mt-2">Description: </p>
        <p className="text-justify mb-2">{data?.data?.product?.description}</p>
        <p className=" flex justify-start items-center gap-2">
          By swapping you can earn up to{" "}
          <FaRegStar className="text-yellow-400 text-2xl" /> {data?.data?.point}{" "}
          Points
        </p>
        <div className="flex justify-start items-center gap-2 mt-3">
          <img
            src={data?.data?.product?.user?.profile_image}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <div>
            <p className="font-semibold">{data?.data?.product?.user?.name}</p>
            <p className=" text-[#4E4E4E] flex justify-start items-center gap-2">
              <FaStar className="text-yellow-400 text-2xl" />{" "}
              {data?.data?.ratting}/5.0
            </p>
          </div>
        </div>
        {/* <div className='flex justify-start items-center gap-7'> */}
        {user?.data?.result?._id != data?.data?.product?.user?._id && (
          <button
            onClick={() => {
              if (!user?.data?.result?._id) {
                navigate("/sign-in");
              }
              if (data?.user === user?.data?.result?._id) {
                toast.dismiss();
                return toast.error("This is you won Product");
              }
              setOpen(true);
            }}
            className="flex justify-center items-center w-fit whitespace-nowrap p-3 px-[70px] text-base bg-blue-500 text-white mt-3 rounded-md"
          >
            <MdOutlineSwapVerticalCircle className="rotate-90 text-2xl" /> Add
            to Swap
          </button>
        )}

        {/* <button className='flex justify-center items-center w-fit whitespace-nowrap p-3  text-base bg-blue-500 text-white mt-3 rounded-md'>
                        <MdKeyboardArrowDown className=' text-2xl' />
                    </button> */}
        {/* </div> */}
        {/* <button className='flex justify-center items-center w-fit whitespace-nowrap p-3 px-20 text-base bg-blue-500 text-white mt-3 rounded-md'>
                    Send Request
                </button> */}
      </div>
      <div className="container w-full mx-auto mt-10 col-span-3">
        <p
          id="sectionHeading"
          className="text-[#4E4E4E] text-2xl lg:text-4xl font-medium pl-3"
        >
          Similar Products
        </p>
        <div className="text-end">
          <Link to={`/swap`} className="text-blue-500">
            view all
          </Link>
        </div>
        <div className="pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {data?.data?.similarProduct?.slice(0, 8).map((item, i) => {
            return <ProductCard key={i} data={item} />;
          })}
        </div>
      </div>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={false}
        width={600}
      >
        <div className="p-4">
          <p className="text-xl font-semibold my-4 text-center">
            Swap Your Product With This Product
          </p>
          <div className="w-full h-[230px] grid grid-cols-2 gap-4">
            <div className="w-full h-[200px] flex flex-col items-center">
              <p className="mb-2 font-medium">Selected Product</p>
              <img
                src={imageUrl(data?.data?.product?.images?.[0])}
                className="w-full h-full object-contain border border-gray-300 rounded-md"
                alt={data?.title}
              />
            </div>
            {selectedProduct?.images && (
              <div className="w-full h-[200px] flex flex-col items-center">
                <p className="mb-2 font-medium">Your Product</p>
                <img
                  src={imageUrl(selectedProduct?.images[0])}
                  className="object-contain w-full h-full border border-gray-300 rounded-md"
                  alt="Your product"
                />
              </div>
            )}
          </div>
          <Select
            className="w-full h-[46px] mt-4"
            placeholder="Please select a product"
            onChange={(value) => {
              const filterProduct = myProducts?.data?.filter(
                (item) => item?._id === value
              );
              setSelectedProduct(filterProduct[0]);
            }}
            options={
              myProducts?.data?.map((item) => ({
                label: item?.title,
                value: item?._id,
              })) || []
            }
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex justify-center items-center w-full px-4 py-2 disabled:bg-gray-600 bg-blue-500 text-white mt-6 rounded-md hover:bg-blue-600 transition"
            // onClick={handleSubmit} // Assuming you have a handleSubmit function
          >
            {isLoading ? <Spin /> : `Send Request`}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductsDetails;

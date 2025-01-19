import { Link } from "react-router-dom";
import { imageUrl } from "../../../Redux/States/baseApi";
import { useDeleteProductMutation } from "../../../Redux/Apis/productsApis";
import Swal from "sweetalert2";
import { Spin } from "antd";
const MyProductCard = ({ data }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(data?._id)
          .unwrap()
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "oops!",
              text: "unable to delete.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="p-4 bg-white rounded-md text-center flex flex-col justify-center items-center gap-2 w-full">
      <div className="w-full h-[230px]">
        <img
          src={imageUrl(data?.images?.[0])}
          className="w-full h-full object-contain"
          alt={data?.title}
        />
      </div>
      <p className="text-[#222222] font-medium text-base">{data?.title}</p>
      <p>
        Value:{" "}
        <span className="text-blue-400 font-semibold">
          ${data?.productValue}+
        </span>
      </p>
      <Link
        to={`/product-details/${data?._id}`}
        className="bg-blue-100 text-blue-500 w-full py-2 rounded-md"
      >
        Details
      </Link>
      <button
        disabled={isLoading}
        onClick={() => {
          handleSubmit();
        }}
        className="flex w-full justify-center items-center gap-2 bg-red-500 text-white py-1 rounded-md"
      >
        {isLoading ? <Spin /> : "delete"}
      </button>
    </div>
  );
};

export default MyProductCard;


import { MdOutlineSwapHorizontalCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { imageUrl } from '../../../Redux/States/baseApi'
import { useState } from 'react'
import { Modal, Select } from 'antd'
import { useFetchMyProductsQuery } from '../../../Redux/Apis/productsApis'
import { useAddToSwapMutation } from '../../../Redux/Apis/swapApis'
import toast from 'react-hot-toast'

const ProductCard = ({ data }) => {
    const { data: myProducts } = useFetchMyProductsQuery()
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState()
    const [addToSwap] = useAddToSwapMutation()
    // console.log(selectedProduct)
    const handleSubmit = () => {
        const SwapData = {
            "userTo": data?.user,
            "productFrom": selectedProduct?._id,
            "productTo": data?._id
        }
        addToSwap(SwapData).unwrap().then(res => {
            // console.log(res)
            toast.dismiss()
            toast.success(res?.message)
            setOpen(false)
            setSelectedProduct({})
        }).catch(err => {
            // console.log(err)
            toast.dismiss()
            toast.error(err?.data?.message)
        })
        // console.log('SwapData', SwapData)
        //console.log()
        // console.log('myProducts', myProducts)
    }
    return (
        <div className='p-4 bg-white rounded-md text-center flex flex-col justify-center items-center gap-2 w-full'>
            <div className='w-full h-[230px]'>
                <img src={imageUrl(data?.images?.[0])} className='w-full h-full object-contain' alt={data?.title} />
            </div>
            <p className='text-[#222222] font-medium text-base'>{data?.title}</p>
            <p>Value: <span className='text-blue-400 font-semibold'>${data?.productValue}+</span></p>
            <Link to={`/product-details/${data?._id}`} className='bg-blue-100 text-blue-500 w-full py-2 rounded-md'>
                Details
            </Link>
            <button onClick={() => setOpen(true)} className='flex w-full justify-center items-center gap-2'><MdOutlineSwapHorizontalCircle /> Add to Swap</button>
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
                    <div className="w-full h-[200px] grid grid-cols-2 gap-4">
                        <div className="w-full h-full flex flex-col items-center">
                            <p className="mb-2 font-medium">Selected Product</p>
                            <img
                                src={imageUrl(data?.images?.[0])}
                                className="w-full h-full object-contain border border-gray-300 rounded-md"
                                alt={data?.title}
                            />
                        </div>
                        {selectedProduct?.images && (
                            <div className="w-full h-full flex flex-col items-center">
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
                    <button onClick={handleSubmit}
                        className="flex justify-center items-center w-full px-4 py-2 bg-blue-500 text-white mt-6 rounded-md hover:bg-blue-600 transition"
                    // onClick={handleSubmit} // Assuming you have a handleSubmit function
                    >
                        Send Request
                    </button>
                </div>
            </Modal>

        </div>
    )
}

export default ProductCard

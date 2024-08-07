import { useState } from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/Shared/ProductCard/ProductCard'
import { Collapse, Input } from 'antd'
import { IoSearch } from 'react-icons/io5'
import earth from '../assets/icon/earth.png'
const Swap = () => {
    const [open, setOpen] = useState(false)
    const Category = [
        {
            "name": "Electronics",
            "subcategories": [
                "Mobile Phones",
                "Laptops",
                "Tablets",
                "Cameras",
                "Accessories"
            ]
        },
        {
            "name": "Fashion",
            "subcategories": [
                "Men's Clothing",
                "Women's Clothing",
                "Shoes",
                "Accessories",
                "Jewelry"
            ]
        },
        {
            "name": "Home & Kitchen",
            "subcategories": [
                "Furniture",
                "Appliances",
                "Decor",
                "Kitchenware",
                "Bedding"
            ]
        },
        {
            "name": "Books",
            "subcategories": [
                "Fiction",
                "Non-Fiction",
                "Children’s Books",
                "Academic",
                "Comics"
            ]
        },
        {
            "name": "Beauty & Personal Care",
            "subcategories": [
                "Skincare",
                "Haircare",
                "Makeup",
                "Fragrances",
                "Grooming"
            ]
        },
        {
            "name": "Sports & Outdoors",
            "subcategories": [
                "Fitness Equipment",
                "Outdoor Gear",
                "Sportswear",
                "Cycling",
                "Camping"
            ]
        },
        {
            "name": "Toys & Games",
            "subcategories": [
                "Action Figures",
                "Board Games",
                "Puzzles",
                "Educational Toys",
                "Video Games"
            ]
        },
        {
            "name": "Automotive",
            "subcategories": [
                "Car Accessories",
                "Motorcycle Parts",
                "Car Care",
                "Tools & Equipment",
                "GPS & Navigation"
            ]
        },
        {
            "name": "Health & Wellness",
            "subcategories": [
                "Supplements",
                "Medical Supplies",
                "Personal Care",
                "Health Devices",
                "Nutrition"
            ]
        },
        {
            "name": "Pets",
            "subcategories": [
                "Pet Food",
                "Pet Toys",
                "Pet Grooming",
                "Pet Health",
                "Aquariums & Accessories"
            ]
        }
    ]
    return (
        <div className='flex justify-start items-start flex-col md:grid-cols-4 lg:grid grid-cols-5  gap-2 container mx-auto mt-6'>
            <div className={` bg-white w-full ${open ? 'h-full' : 'h-fit lg:h-full'}`}>
                <button onClick={() => { setOpen(!open) }} className='flex  justify-center items-center gap-2 text-base bg-blue-500 text-white w-full py-2 rounded-t-md'>
                    <BiSolidCategory /> Categories
                </button>
                <div className={` flex-col gap-1 mt-1 ${open ? 'flex' : 'hidden lg:flex'}`}>
                    {
                        Category.map((item, i) => {
                            return <Collapse key={i}
                                items={[{
                                    key: i, label: <span key={i}>{item?.name}</span>, children: <div className='flex flex-col justify-start items-start gap-2' key={i}>
                                        {
                                            item?.subcategories.map((item, i) => {
                                                return <Link key={i}>
                                                    {item}
                                                </Link>
                                            })
                                        }
                                    </div>
                                }]}
                            />
                        })
                    }
                </div>
            </div>
            <div className='col-span-3 px-2  h-full w-full'>
                <div className='flex justify-between items-center gap-6 sm:flex-row flex-col'>
                    <Input placeholder='search here' className='py-2' prefix={<IoSearch />} />
                    <Input placeholder='location' className='py-2' prefix={<img src={earth} />} />
                    <button className='bg-blue-500 text-white px-8 rounded-md py-2 whitespace-nowrap'>
                        Add new Product
                    </button>
                </div>
                <div className='pt-6 flex justify-center items-center flex-col md:gap-2 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        [...Array(40).keys()].map((item, i) => {
                            return <ProductCard key={i} data={item} />
                        })
                    }
                </div>
            </div>
            <div className=' text-center hidden lg:flex flex-col gap-2  h-full w-full'>
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
            </div>
        </div>
    )
}

export default Swap

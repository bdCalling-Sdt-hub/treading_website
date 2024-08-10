import { Collapse } from 'antd'
import React, { useState } from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Categories = () => {
    const [open, setOpen] = useState(false)
    const Category =[
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
        },
        {
            "name": "Miscellaneous",
            "subcategories": [
                "Vehicles",
                "Sports Bikes",
                "Jewelry",
                "Yachts",
                "Homes",
                "Mansions",
                "Land"
            ]
        },
        {
            "name": "Music",
            "subcategories": [
                "Instruments",
                "Vinyl Records",
                "CDs & Vinyl",
                "Sheet Music",
                "Music Accessories"
            ]
        },
        {
            "name": "Garden & Outdoors",
            "subcategories": [
                "Garden Tools",
                "Outdoor Furniture",
                "Plants & Seeds",
                "Grills",
                "Outdoor Decor"
            ]
        },
        {
            "name": "Office Supplies",
            "subcategories": [
                "Stationery",
                "Office Furniture",
                "Office Electronics",
                "Organization & Storage",
                "Office Decor"
            ]
        },
        {
            "name": "Travel & Luggage",
            "subcategories": [
                "Luggage",
                "Travel Accessories",
                "Travel Guides",
                "Backpacks",
                "Travel Clothing"
            ]
        }
    ]
    
    return (//
        <div className='flex justify-start items-start flex-col md:grid md:grid-cols-4 lg:grid-cols-5  gap-2 container mx-auto mt-6'>
            <div className={` bg-white w-full ${open ? 'h-full' : 'h-fit lg:h-full'}`}>
                <button onClick={() => { setOpen(!open) }} className='flex justify-center items-center gap-2 text-base bg-blue-500 text-white w-full py-2 rounded-t-md'>
                    <BiSolidCategory /> Categories
                </button>
                <div className={` flex-col gap-1 mt-1 ${open ? 'flex' : 'hidden lg:flex'}`}>
                    {
                        Category?.map((item, i) => {
                            return <Collapse key={i}
                                items={[{
                                    key: i, label: <span key={i}>{item?.name}</span>, children: <div className='flex flex-col justify-start items-start gap-2' key={i}>
                                        {
                                            item?.subcategories?.map((item, i) => {
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
            <div className='w-full h-full px-4 box-border col-span-4'>
                <div className='md:grid grid-cols-2 flex flex-col md:justify-center md:items-center justify-start items-start'>
                    <div className='  text-[#666666]'>
                        <p className='text-2xl font-medium'> Get <span className='text-[#222222]'>40-620 points</span> when you
                            trade in an iPhone.
                        </p>
                        <div className='flex justify-between items-center gap-2 mb-3'>
                            <p>Your device</p>
                            <p className='text-end text-sm'>Estimated trade-
                                in value</p>
                        </div>
                        {
                            [...Array(4).keys()].map(item => {
                                return <div key={item} className='flex justify-between items-center py-2 border-b gap-2 text-lg text-[#4E4E4E]'>
                                    <p>iPhone 14 pro Max</p>
                                    <p className='text-end text-sm'>Up to $620</p>
                                </div>
                            })
                        }
                        <button className='flex  justify-center items-center gap-2 text-base bg-blue-500 text-white w-fit px-4 py-2 rounded-md mt-3'>
                            Find your trade-in value <CiSearch />
                        </button>
                    </div>
                    <img className='w-full' src="https://i.ibb.co/X3L0Srn/image-21.png" alt="" />
                </div>
                <div className='sm:grid grid-cols-2 flex flex-col justify-start items-start sm:justify-center sm:items-center gap-4'>
                    <div className='grid grid-cols-2 justify-center items-center  bg-[#2D357B] text-white p-4'>
                        <div>
                            <p className='text-xl font-semibold'>“SWAPING AT YOUR
                                FINGER TIPS!”</p>
                            <p className='text-xl font-semibold my-2'>No More Expensive</p>
                            <p className='text-base font-semibold mb-2' my-2>Hotel or Car Rents</p>
                            <p className='text-base font-semibold'>To Enjoy Your Family Vacation </p>
                        </div>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-contain' src="https://i.ibb.co/chN4HcL/image-10-1.png" alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 justify-center items-center  bg-[#FFECDF]  p-4'>
                        <div>
                            <p className='text-xl font-semibold'>“SWAPING AT YOUR
                                FINGER TIPS!”</p>
                            <p className='text-xl font-semibold my-2'>No More Expensive</p>
                            <p className='text-base font-semibold mb-2'>Hotel or Car Rents</p>
                            <p className='text-base font-semibold'>To Enjoy Your Family Vacation </p>
                        </div>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-contain' src="https://i.ibb.co/85v0Qfs/image-9.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Categories
import React, { useEffect, useState } from 'react'
import { useFetchCategorySubCategoryQuery } from '../../../Redux/Apis/categoryApis'
import { BiSolidCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Collapse } from 'antd'

const CategoryList = () => {
    const [open, setOpen] = useState(false)
    const { data: subCategories } = useFetchCategorySubCategoryQuery()
    const [category, setCategory] = useState([])
    useEffect(() => {
        const formateData = groupByCategory(subCategories?.data || [])
        setCategory(formateData)
    }, [subCategories?.data])
    return (
        <div className={` bg-white w-full ${open ? 'h-full' : 'h-fit lg:h-full'} max-h-[550px] overflow-y-scroll`}>
            <button onClick={() => { setOpen(!open) }} className='flex justify-center items-center gap-2 text-base bg-blue-500 text-white w-full py-2 rounded-t-md'>
                <BiSolidCategory /> Categories
            </button>
            <div className={` flex-col gap-1 mt-1 ${open ? 'flex' : 'hidden lg:flex'}`}>
                {
                    category?.map((item, i) => {
                        return <Collapse key={i}
                            items={[{
                                key: i, label: <span key={i}>{item?.name}</span>, children: <div className='flex flex-col justify-start items-start gap-2' key={i}>
                                    {
                                        item?.subcategories?.map((sub, i) => {
                                            return <Link key={i} to={`/swap?category=${item?._id}&sub=${sub?._id}`}>
                                                {sub?.name}
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
    )
}

export default CategoryList


const groupByCategory = (data) => {
    const categoryMap = {};

    data.forEach(item => {
        const categoryId = item.category._id;
        const categoryName = item.category.name;

        if (!categoryMap[categoryId]) {
            categoryMap[categoryId] = {
                name: categoryName,
                _id: categoryId,
                subcategories: []
            };
        }

        categoryMap[categoryId].subcategories.push({
            name: item.name,
            _id: item._id
        });
    });

    return Object.values(categoryMap);
};

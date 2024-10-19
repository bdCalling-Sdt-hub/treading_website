import React from 'react'
import { useGetSwapQuery } from '../Redux/Apis/settingApis'

const Facts = () => {
    const { data, isLoading } = useGetSwapQuery()

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div 
            dangerouslySetInnerHTML={{ __html: data?.data?.description || '' }} 
            className='bg-white container mx-auto p-4 rounded-md mt-10 text-[#4E4E4E]'
        />
    )
}

export default Facts

import video from '../assets/video/video.mp4'
import { useGetTutorialQuery } from '../Redux/Apis/settingApis'
import { imageUrl } from '../Redux/States/baseApi'

const Tutorial = () => {
    const { data } = useGetTutorialQuery()
    // console.log(data?.data?.[0]?.video)
    return (
        <div className='my-10 container mx-auto'>
            <div className='w-full h-[650px] rounded-md overflow-hidden'>
                <video src={imageUrl(data?.data?.[0]?.video)} autoPlay={true} muted controls className='w-full h-full object-cover'></video>
            </div>
        </div>
    )
}

export default Tutorial

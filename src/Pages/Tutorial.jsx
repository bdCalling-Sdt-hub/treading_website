import video from '../assets/video/video.mp4'

const Tutorial = () => {
    return (
        <div className='my-10 container mx-auto'>
            <div className='w-full h-[650px] rounded-md overflow-hidden'>
                <video src={video} autoPlay={true} muted controls className='w-full h-full object-cover'></video>
            </div>
        </div>
    )
}

export default Tutorial

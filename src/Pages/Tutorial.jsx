import ReactPlayer from "react-player";
import video from "../assets/video/video.mp4";
import { useGetTutorialQuery } from "../Redux/Apis/settingApis";
import { imageUrl } from "../Redux/States/baseApi";
import Loading from "../Components/Shared/Loading";

const Tutorial = () => {
  const { data, isLoading } = useGetTutorialQuery();
  return (
    <div className="my-10 container mx-auto">
      <div className="w-full h-[650px] rounded-md overflow-hidden">
        {isLoading ? (
          <Loading />
        ) : (
          <ReactPlayer
            url={data?.data?.[data?.data?.length - 1]?.url}
            playing={true}
            controls={true}
            width={`100%`}
            height={`100%`}
          />
        )}
      </div>
    </div>
  );
};

export default Tutorial;

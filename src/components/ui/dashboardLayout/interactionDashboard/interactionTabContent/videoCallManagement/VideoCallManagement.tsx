import AiRecomendation from '../aiRecomendation/AiRecomendation'
import Notes from '../notes/Notes'
import style from './style.module.scss'
import VideoChat from './videoChat/VideoChat'
import VideoTab from './videoTab/VideoTab'

const VideoCallManagement = () => {
  return (
    <div className={style.video_call_management_wrapper}>
        <div className={style.video_pallet_wrapper}>
            <VideoTab />
            <VideoChat />
        </div>
        <AiRecomendation />
        <Notes />
    </div>
  )
}

export default VideoCallManagement
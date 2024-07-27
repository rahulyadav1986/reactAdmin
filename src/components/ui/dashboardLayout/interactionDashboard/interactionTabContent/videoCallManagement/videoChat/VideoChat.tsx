import {useState} from "react"
import style from './style.module.scss'
import Video from '/assets/dashboard/main_dashboard/tablePops/video/sample.mp4'
import MicOffIcon from '/assets/interactionCenter/chatManagement/micOff.svg'
import MicOnIcon from '/assets/interactionCenter/chatManagement/micOn.svg'

import VolumnIcon from '/assets/interactionCenter/chatManagement/volumn.svg'
import VolumnSmallIcon from '/assets/interactionCenter/chatManagement/volumnSmall.svg'
import VideoIcon from '/assets/interactionCenter/chatManagement/video.svg'
import CallIcon from '/assets/interactionCenter/chatManagement/call.svg'
import MuteIcon from '/assets/interactionCenter/chatManagement/audio.svg'
import DotsIcon from '/assets/interactionCenter/chatManagement/more.svg'
const VideoChat = () => {
  const [mic, setMic] = useState()
  const handleMic = (id:any)=>{
    setMic(mic === id ? -1 : id)
    
  }
  const Data = [
    {
      id: 1,
      img: "/assets/interactionCenter/chatManagement/proVid1.png",
    },
    {
      id: 2,
      img: "/assets/interactionCenter/chatManagement/proVid2.png",
    },
    {
      id: 3,
      img: "/assets/interactionCenter/chatManagement/proVid3.png",
    },
    {
      id: 4,
      img: "/assets/interactionCenter/chatManagement/proVid4.png",
    }
  ]
  return (
    <div  className={style.video_chat_wrapper}>
        <div className={style.video_cover}>
            <video controls={false} autoPlay={true}>
                <source src={Video} type="video/mp4"/>
            </video>
            <ul className={style.video_join_pallet}>
              {
                Data.map((item,i)=>{
                  return(
                    <li key={i}>
                      <div className={style.avatar_cover}>
                        <img src={item.img} className={style.avatar} alt="" />
                        <div onClick={()=>handleMic(item.id)}>
                          {
                            mic === item.id ? <div className={style.micOn}><img src={MicOnIcon} alt="" /></div> : <div className={style.mic}><img src={MicOffIcon} alt="" /></div>
                          }
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <ul className={`${style.control_pallet_wrap} d-flex align-items-center justify-content-center`}>
                <li><img src={VolumnIcon} alt="" /></li>
                <li><img src={VideoIcon} alt="" /></li>
                <li><img src={CallIcon} alt="" className={style.call} /></li>
                <li><img src={MuteIcon} alt="" /></li>
                <li><img src={DotsIcon} alt="" /></li>
            </ul>
            <div className={style.volumn_icon_wrapper}>
                <div className={style.progress_wrapper}>
                  <span className={style.progress} style={{'height' : '40.6%'}}></span>
                </div>
                <span className={style.volumn}><img src={VolumnSmallIcon} alt="" /></span>
            </div>
        </div>
        
    </div>
  )
}

export default VideoChat
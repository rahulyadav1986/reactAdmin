import {useContext, useState, useEffect, useRef} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import ProfileAvatarIcon from '/assets/dashboard/main_dashboard/tablePops/profile_image.png'
// import VideoConAvatar from '/assets/dashboard/main_dashboard/tablePops/video_call.svg'
import VideoOne from '/assets/dashboard/main_dashboard/tablePops/video/sample.mp4'
import VideoTwo from '/assets/dashboard/main_dashboard/tablePops/video/sample1.mp4'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import DownloadIcon from '/assets/dashboard/main_dashboard/tablePops/download.svg'
import PauseIcon from '/assets/dashboard/main_dashboard/tablePops/pause.svg'
import PlayIcon from '/assets/dashboard/main_dashboard/tablePops/play.svg'
import VideoAddIcon from '/assets/dashboard/main_dashboard/tablePops/video_add.svg'
import { useLocation } from 'react-router-dom'
import QualityFormButton from '../qualityFormButton/QualityFormButton'
import { ContextTable } from '../../../../../../../contexts/tableContext'

const VideoPop = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  const contextTable = useContext(ContextTable)
  const location = useLocation()
  const supervisorLocation = location.pathname.indexOf('/supervisor')>=0

  const [isPlaying, setIsPlaying] = useState(true)
  const handlePlayPause = ()=>{
    setIsPlaying(!isPlaying)
  }
  const VideoElm = useRef<HTMLVideoElement | null>(null)
  useEffect(()=>{
    if(isPlaying){
        VideoElm.current?.play()
    }else{
        VideoElm.current?.pause()
    }
  },[isPlaying])
  return (
    <>
        <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
            <h4>{supervisorLocation ? 'Live Video Call' : 'Video Call Recording'}</h4>
            <ul className={`${style.action_icons} d-flex align-items-center`}>
                <li><img src={DownloadIcon} alt="" /></li>
                <li onClick={()=>tablePopupContext.handlVideoCallRecordingPop(false)}><img src={CrossIcon} alt="" /></li>
            </ul>
        </div>
        <div className={`${style.profile_header_wrap} d-flex align-items-center justify-content-between`}>
            <div className={`${style.left} d-flex align-items-center`}>
                <span><img src={ProfileAvatarIcon} alt="" /></span>
                <span className='d-flex flex-column'>
                    <span><strong>Hingis Thomos</strong></span>
                    <span className={style.no}>84938 94938</span>
                </span>
            </div>
            <div className='d-flex align-items-center'>
                <div className={`${style.video_call_button} ${supervisorLocation ? style.supervisor : null}`}>{supervisorLocation ? 'Live Video Call ' : 'Video Call Recording'}</div>
                { supervisorLocation ?  <QualityFormButton /> : null }
                <div className={`${style.button_video_call} d-flex align-items-center justify-content-center`} onClick={()=>contextTable.handleSupJoinCall(3)}>
                    <span><img src={VideoAddIcon} alt="" /></span>
                    <span>Join Video Call</span>
                </div>
            </div>
            
        </div>
        <div className={style.video_call_pallet}>
            <div className='d-flex'>
                <div className={style.video_cover}>
                    <video controls={false} autoPlay={true} ref={VideoElm}>
                        <source src={VideoOne} type="video/mp4"/>
                    </video>
                </div>
                <div className={style.video_cover}>
                    <video controls={false} autoPlay={true} ref={VideoElm}>
                        <source src={VideoTwo} type="video/mp4"/>
                    </video>
                </div>
                
            </div>
            <div className={`${style.video_control_track} d-flex justify-content-between align-items-center`}>
                <div className={`${style.control_wrap} d-flex align-items-center justify-content-between`}>
                    <div className={style.play_pause_button} onClick={handlePlayPause}>
                        {isPlaying ? <img src={PauseIcon} alt="" className={style.play} /> : <img src={PlayIcon} alt="" className={style.pause} />}
                    </div>
                    <div className={style.progress_track}>
                        <div className={style.progress} style={{'width': '70%'}}></div>
                    </div>
                </div>
                <div className={style.time}>01:20</div>
            </div>
        </div>
    </>
  )
}

export default VideoPop
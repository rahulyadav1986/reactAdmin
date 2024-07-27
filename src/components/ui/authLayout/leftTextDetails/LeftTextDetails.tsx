
import style from './style.module.scss'
import VideoAvatar from "../../../../../public/assets/signin/video_avatar.png"
import SuperAdmiVideoAvatar from "../../../../../public/assets/signin/superAdminVideoAvatar.png"
import ResellerAdmiVideoAvatar from "../../../../../public/assets/signin/resellerAdminVideoAvatar.png"
import InfinityVodeo from "../../../../../public/assets/signin/videos/infinity.mp4"
import OfficeVideo from "../../../../../public/assets/signin/videos/video_office.mp4"
import SuperAdminVideo from "../../../../../public/assets/signin/videos/superAdminVideo.mp4"
import ResellerAdminVideo from "../../../../../public/assets/signin/videos/resellerAdminVideo.mp4"
import CloseIcon from "../../../../../public/assets/signin/close.svg"
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const LeftTextDetails = () => {
  const [videoPop, setVideoPop] = useState(false)
  const location = useLocation()
  const SuperAdminAdminCurrenLocation = location.pathname.indexOf('/super-admin')>=0
  const ResellerAdminCurrenLocation = location.pathname.indexOf('/reseller-admin')>=0
  const AdminCurrenLocation = location.pathname.indexOf('/admin')>=0
  const AgentCurrenLocation = location.pathname.indexOf('/agent')>=0
  const SupervisorCurrenLocation = location.pathname.indexOf('/supervisor')>=0
  const SuperAdminAdminAuthMainHeading = "Super Admin"
  const ResellerAdminAdminAuthMainHeading = "Reseller Admin"
  const AdminAuthMainHeading = "ACPaaS Platform"
  const UserAuthMainHeading = "CallHub Connect"
  const ResellerAdminAuthDescription = "ACPaaS is a comprehensive solution combining automation, orchestration, generative AI, & CS capabilities"
  const SuperAdminAuthDescription = "ACPaaS is a comprehensive solution combining automation, orchestration, generative AI, & CS capabilities"
  const AdminAuthDescription = "ACPaaS is a comprehensive solution combining automation, orchestration, generative AI, & CS capabilities"
  const UserAuthDescription = "Empowering Seamless Connections: Elevate your customer interactions with CallHub Connect"
  return (
    <div className={`${style.left_text_area_zone} d-flex align-items-end flex-column`}>
        <h2>Welcome to Zuqo’s {SuperAdminAdminCurrenLocation || ResellerAdminCurrenLocation && 'ACPaaS' }<br /><span> {AgentCurrenLocation || SupervisorCurrenLocation ? UserAuthMainHeading : AdminCurrenLocation ? AdminAuthMainHeading : SuperAdminAdminCurrenLocation ? SuperAdminAdminAuthMainHeading : ResellerAdminCurrenLocation ?  ResellerAdminAdminAuthMainHeading : null} </span></h2>
        <p>{AgentCurrenLocation || SupervisorCurrenLocation ? UserAuthDescription : AdminCurrenLocation ? AdminAuthDescription : SuperAdminAdminCurrenLocation ? SuperAdminAuthDescription : ResellerAdminCurrenLocation ? ResellerAdminAuthDescription : null }</p>
        <div className={style.video_area_wrapper}>
            <video className={style.video} src={InfinityVodeo} autoPlay muted loop data-object-fit="cover"></video>
            <div className={style.video_cover_area} onClick={()=>setVideoPop(true)}>
                <img src={`${SuperAdminAdminCurrenLocation ? SuperAdmiVideoAvatar : ResellerAdminCurrenLocation ? ResellerAdmiVideoAvatar :  VideoAvatar}`} alt="" />
            </div>
        </div>
        {
            videoPop &&
            <div className={`${style.video_pop_area_wrap} d-flex align-items-center justify-content-center`}>
                <video className={style.video} src={ `${SuperAdminAdminCurrenLocation ? SuperAdminVideo : ResellerAdminCurrenLocation ? ResellerAdminVideo :  OfficeVideo}` } autoPlay muted loop data-object-fit="cover"></video>
                <img src={CloseIcon} alt="" className={style.close}  onClick={()=>setVideoPop(false)} />
            </div>
        }
        
    </div>
  )
}

export default LeftTextDetails
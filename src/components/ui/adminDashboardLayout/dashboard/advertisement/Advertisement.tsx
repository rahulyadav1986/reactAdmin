import style from './style.module.scss'
import PlatformVideo from "/assets/dashboard/main_dashboard/admin/video/video.mp4"
import VidIcon from "/assets/dashboard/main_dashboard/admin/vidIcon.svg"
import HelpIcon from "/assets/dashboard/main_dashboard/admin/help.svg"
import CrossIcon from "/assets/dashboard/main_dashboard/admin/cross.svg"
import { useContext } from 'react'
import { ContextAdminDashboard } from '../../../../../contexts/adminDashboardContext'
const Advertisement = () => {
  const AdBg = {'backgroundImage':'url(/assets/dashboard/main_dashboard/admin/adBg.svg)'}
  const contextDashboard = useContext(ContextAdminDashboard)
  return (
    <>
      <div className={`${style.advertisement_wrapper} d-flex justify-content-center`}>
        <div className={style.advertisement_main_wrapper}>
        {
          contextDashboard.advertisement ?
          <div className={`${style.main_wrap} d-flex align-items-center`} style={AdBg}>
            <img src={CrossIcon} className={style.cross} onClick={()=>contextDashboard.handleAdvertisement(false)} alt="" />
            <div><video className={style.video} src={PlatformVideo} autoPlay muted loop data-object-fit="cover"></video></div>
            <div className={style.details_area}>
                <h4>See what you can do with Zuqo’s ACPaaS Platform ?</h4>
                <p>Get started with watching this video on how to become an expert using the platform based on your need</p>
                <div className={`${style.button_area} d-flex align-items-center`}>
                    <div className={`${style.button} d-flex align-items-center justify-content-center`}>
                      <span><img src={VidIcon} alt="" /></span> 
                      <span>Watch How it works?</span>
                    </div>
                    <div className={`${style.help} d-flex align-items-center`}>
                      <span><img src={HelpIcon} alt="" /></span> 
                      <span>Help</span>
                    </div>
                </div>
            </div>
          </div> : null
        }
        </div>
      </div>
    </>
    
  )
}

export default Advertisement
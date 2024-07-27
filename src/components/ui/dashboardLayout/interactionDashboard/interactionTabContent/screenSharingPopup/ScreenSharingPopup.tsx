import {useContext} from "react"
import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import SentIcon from "/assets/interactionCenter/sent.svg"
import CancleIcon from "/assets/dashboard/cancle.svg"
import BrowseIcon from "/assets/interactionCenter/browse.svg"
import { ContextMediaManagement } from "../../../../../../contexts/mediaManagementContext"
const ScreenSharingPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={`${style.screen_record_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>mediaHandleContext.handlScreenSharingPop(false)}></div>
        <div className={style.main_wrapper}>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <h4>Request Co-browsing</h4>
                <span><img src={CrossIcon} onClick={()=>mediaHandleContext.handlScreenSharingPop(false)} alt=""/></span>
            </div>
            <div className={`${style.screen_sharing_pallet} d-flex flex-column align-items-center justify-content-center`}>
                <div className={style.sharing_pallet} onClick={mediaHandleContext.handleJoinBrowseSessionPallet}>
                    <div className={`${mediaHandleContext.joinBrowseSession ? `${style.active} ${style.sharingBox}` : style.sharingBox } d-flex flex-column align-items-center justify-content-center`}>
                        <img src={BrowseIcon} alt="" />
                        <p>Request customer to <strong>Join</strong>   screen share session</p>
                    </div>
                </div>
                
            </div>
            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`}>
                    <span><img src={SentIcon} alt="" /></span>
                    <span>Send Request</span>
                </div>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handlScreenSharingPop(false)}>
                    <span><img src={CancleIcon} alt="" /></span>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScreenSharingPopup
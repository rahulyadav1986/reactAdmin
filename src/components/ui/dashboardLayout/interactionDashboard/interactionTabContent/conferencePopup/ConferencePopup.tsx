import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import TransferCallIcon from "/assets/interactionCenter/transferCall.svg"
import CancleIcon from "/assets/dashboard/cancle.svg"
import UserSearchDrop from '../useSearchDrop/UserSearchDrop'
import { useContext } from 'react'
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'
import UserPhoneNo from '../userPhoneNo/UserPhoneNo'
const ConferencePopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={`${style.conference_popup_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>mediaHandleContext.handleConferencePop(false)}></div>
        <div className={style.main_wrapper}>
            <div className={style.overlay_main} onClick={()=>mediaHandleContext.handleUserDrop(false)}></div>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <h4>Call Conference</h4>
                <span><img src={CrossIcon} onClick={()=>mediaHandleContext.handleConferencePop(false)} alt=""/></span>
            </div>
            <ul className={`${style.conference_type_wrapper}`}>
                <li className={`${mediaHandleContext.conferenceType === 0 ? style.active : null} d-flex align-items-center`} onClick={()=>{mediaHandleContext.handleConferenceType(0)}}>
                    <label><span></span>Internal</label>
                </li>
                <li className={`${mediaHandleContext.conferenceType === 1 ? style.active : null} d-flex align-items-center`} onClick={()=>{mediaHandleContext.handleConferenceType(1)}}>
                    <label><span></span>External</label>
                </li>
            </ul>
            {
                mediaHandleContext.conferenceType === 0 ? <UserSearchDrop /> : <UserPhoneNo />
            }
            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`}>
                    <span><img src={TransferCallIcon} alt="" /></span>
                    <span>Conference</span>
                </div>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleConferencePop(false)}>
                    <span><img src={CancleIcon} alt="" /></span>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConferencePopup
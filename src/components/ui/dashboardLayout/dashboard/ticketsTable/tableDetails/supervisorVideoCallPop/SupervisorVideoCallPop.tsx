import {useContext} from 'react'
import style from './style.module.scss'
import AudioAvatar from "/assets/dashboard/main_dashboard/tablePops/ava1.png"
import EyeIcon from "/assets/dashboard/main_dashboard/tablePops/eye.svg"
import CallIcon from "/assets/dashboard/main_dashboard/tablePops/call.svg"
import { ContextTable } from '../../../../../../../contexts/tableContext'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
const SupervisorVideoCallPop = () => {
    const contextTable = useContext(ContextTable)
    const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        <div className={`${style.head_area} d-flex flex-column justify-content-between`}>
            <h4>Video Call started at: 10:09:00am</h4>
            <span className={style.time}>1h 33m 03s</span>
        </div>
        <div className={style.body_area}>
            <div className={`${style.profile_area} d-flex align-items-center`}>
                <span><img src={AudioAvatar} alt="" /></span>
                <span className='d-flex flex-column'>
                    <span className={style.name}>Kukalrni Ragini</span>
                    <span className={style.contact}>+91 849*****93</span>
                </span>
            </div>
            <ul className={style.list_area}>
                <li className='d-flex align-items-center justify-content-between'>
                    <span className='d-flex align-items-center' onClick={()=>tablePopupContext.handlVideoCallRecordingPop(true)}>
                        <span><img src={EyeIcon} alt="" /></span>
                        <span>Silent Monitor  (listen)</span>
                    </span>
                    <span className={style.indicator}>⌘M</span>
                </li>
                <li className='d-flex align-items-center justify-content-between' onClick={()=>contextTable.handleSupJoinCall(3)}>
                    <span className='d-flex align-items-center'>
                        <span><img src={CallIcon} alt="" /></span>
                        <span>Join Conference</span>
                    </span>
                    <span className={style.indicator}>⌘J</span>
                </li>
                
            </ul>
        </div>
    </>
    
  )
}

export default SupervisorVideoCallPop
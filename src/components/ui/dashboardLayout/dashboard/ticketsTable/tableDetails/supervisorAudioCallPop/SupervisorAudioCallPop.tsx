import style from './style.module.scss'
import AudioAvatar from "/assets/dashboard/main_dashboard/tablePops/ava1.png"
import EyeIcon from "/assets/dashboard/main_dashboard/tablePops/eye.svg"
import CallIcon from "/assets/dashboard/main_dashboard/tablePops/call.svg"
import ZapIcon from "/assets/dashboard/main_dashboard/tablePops/zap.svg"
import { useContext } from 'react'
import { ContextTable } from '../../../../../../../contexts/tableContext'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
const SupervisorAudioCallPop = () => {
  const contextTable = useContext(ContextTable)
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        <div className={`${style.head_area} d-flex flex-column justify-content-between`}>
            <h4>Audio Call started at: 09:09:00am</h4>
            <span className={style.time}>1h 19m 20s</span>
        </div>
        <div className={style.body_area}>
            <div className={`${style.profile_area} d-flex align-items-center`}>
                <span><img src={AudioAvatar} alt="" /></span>
                <span className='d-flex flex-column'>
                    <span className={style.name}>Kalyan</span>
                    <span className={style.contact}>+91 849*****93</span>
                </span>
            </div>
            <ul className={style.list_area}>
                <li className='d-flex align-items-center justify-content-between'>
                    <span className='d-flex align-items-center' onClick={()=>tablePopupContext.handlVoiceCallRecordingPop(true)}>
                        <span><img src={EyeIcon} alt="" /></span>
                        <span>Silent Monitor  (listen)</span>
                    </span>
                    <span className={style.indicator}>⌘M</span>
                </li>
                <li className='d-flex align-items-center justify-content-between' onClick={()=>contextTable.handleSupJoinCall(1)}>
                    <span className='d-flex align-items-center'>
                        <span><img src={CallIcon} alt="" /></span>
                        <span>Join Conference</span>
                    </span>
                    <span className={style.indicator}>⌘J</span>
                </li>
                <li className='d-flex align-items-center justify-content-between'>
                    <span className='d-flex align-items-center'>
                        <span><img src={ZapIcon} alt="" /></span>
                        <span>Whisper</span>
                    </span>
                </li>
            </ul>
        </div>



    </>
    
  )
}

export default SupervisorAudioCallPop
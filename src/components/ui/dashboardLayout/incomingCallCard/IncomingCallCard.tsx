import {useContext} from 'react'
import style from './style.module.scss'
import ProfileAvatar from "/assets/dashboard/incomingCallCard/avatar.png"
import PossitiveSmilyIcon from "/assets/dashboard/incomingCallCard/possitiveSmily.svg"
import CrossIcon from "/assets/dashboard/incomingCallCard/cross.svg"
import PhoneIcon from "/assets/dashboard/incomingCallCard/phone.svg"
import { ContextInComingCallCard } from '../../../../contexts/incomingCallCardContext'
import { ContextTable } from '../../../../contexts/tableContext'

const IncomingCallCard = () => {
  const incomingCallCardContext = useContext(ContextInComingCallCard)
  const tableContext = useContext(ContextTable)
  return (
    <>
    {
        incomingCallCardContext.incomeCallcard && 
        <div className={style.incomingCallcard_wrapper}>
            {/* <span className={style.time_count}>Answer in 01:00:43</span> */}
            <div className={`${style.profile_area} d-flex align-items-center flex-column`}>
                <img src={ProfileAvatar} className={style.image_avatar} alt="" />
                <div>
                    <span className={style.incoming_button}>Incoming Voice Call</span>
                </div>
                <h2>Jayshri Tiwari</h2>
                <span className={style.no}>234-848-94948</span>
                <span className={style.no} style={{'fontSize':'12px', 'fontWeight': '400', 'marginTop': '5px'}}>Answer in 01:00:43</span>
            </div>
            <ul className={`${style.option_area_wrapper} d-flex`}>
                {/* <li>
                    <span className={style.heading}>Region</span>
                    <span className={style.label}>Delhi</span>
                </li> */}
                <li>
                    <span className={style.heading}>IVR END POINT</span>
                    <span className={style.label}>Close Account</span>
                </li>
                <li>
                    <span className={style.heading}>LAST INTERACTION</span>
                    <div className={`${style.status} d-flex align-items-center`}>
                        <span><img src={PossitiveSmilyIcon} alt="" /></span>
                        <span className={style.status_label}>Positive</span>
                    </div>
                </li>
            </ul>
            <div className={`${style.button_area} d-flex align-items-center justify-content-between`}>
                <div className={`${style.button} d-flex align-items-center`} onClick={incomingCallCardContext.handleIncomingCallCard}>
                    <span><img src={CrossIcon} alt="" /></span>
                    <span className={style.label}>Decline</span> 
                    <span className={`${style.d} ${style.tag}`}>D</span>
                </div>
                <div className={`${style.button} ${style.accept} d-flex align-items-center`} onClick={()=>tableContext.handleAccept(1)}>
                    <span><img src={PhoneIcon} alt="" /></span>
                    <span className={style.label}>Accept</span>
                    <span className={`${style.a} ${style.tag}`}>A</span>
                </div>
            </div>
        </div>
    }
        
    </>
    
  )
}

export default IncomingCallCard
import style from './style.module.scss'
import ListIcon from "/assets/dashboard/main_dashboard/list.svg"
import CallIcon from "/assets/dashboard/main_dashboard/table_call.svg"
import MessangerIcon from "/assets/dashboard/main_dashboard/messanger.svg"
import VideoIcon from "/assets/dashboard/main_dashboard/video2.svg"
import LiveIcon from "/assets/dashboard/main_dashboard/live_gif.gif"
import Avatar1 from "/assets/dashboard/main_dashboard/avatar.png"
import Avatar2 from "/assets/dashboard/main_dashboard/avatar2.png"
import Avatar3 from "/assets/dashboard/main_dashboard/avatar3.png"
import Cross from "/assets/interactionCenter/cross.svg"
import { useContext } from "react"
import { ContextTable } from "../../../../../contexts/tableContext"

const InteractionTab = () => {
  const interactionTabContext = useContext(ContextTable)
 
  return (
    <ul className={`${style.interection_center_wrapper_tab_button} d-flex align-items-center`}>
        <li className={`${interactionTabContext.interactionTabValue === 0 && `${style.active}`} d-flex align-items-center`} onClick={()=>interactionTabContext.handleInteractionTab(0)}>
            <img src={ListIcon} alt="" />
        </li>
        <li className={`${interactionTabContext.interactionTabValue === 1 && `${style.active}`} d-flex align-items-center`} onClick={()=>interactionTabContext.handleInteractionTab(1)}>
            <span>
                <img className={style.avatar} src={Avatar1} alt="" />
            </span>
            <span className={style.name_details}>
                <span>Kavitha Mavin</span>
                <span className={`${style.live_time} d-flex align-items-center`}>
                    <span className={style.live}>
                        <img src={LiveIcon} alt="" />
                    </span>
                    <span className={style.time}>01:20:45</span>
                </span>
            </span>
            <span className={style.type_icon}>
                <img src={CallIcon} alt="" />
            </span>
            {interactionTabContext.interactionTabValue === 1 ? <span className={style.icon}><img src={Cross} alt="" /></span> : null}
        </li>
        <li className={`${interactionTabContext.interactionTabValue === 2 && `${style.active}`} d-flex align-items-center`} onClick={()=>interactionTabContext.handleInteractionTab(2)}>                
            <span>
            <img className={style.avatar} src={Avatar2} alt="" />
            </span>
            <span className={style.name_details}>
                <span>Marlin Borilie</span>
                <span className={`${style.live_time } d-flex align-items-center`}>
                <span className={style.live}>
                    <img src={LiveIcon} alt="" />
                </span>
                <span className={style.time}>03:30:00</span>
                </span>
            </span>
            <span className={style.type_icon}>
            <img src={MessangerIcon} alt="" />
            </span>
            {interactionTabContext.interactionTabValue === 2 ? <span className={style.icon}><img src={Cross} alt="" /></span> : null}
        </li>
        <li className={`${interactionTabContext.interactionTabValue === 3 && `${style.active}`} d-flex align-items-center`} onClick={()=>interactionTabContext.handleInteractionTab(3)}>                
            <span>
            <img className={style.avatar} src={Avatar3} alt="" />
            </span>
            <span className={style.name_details}>
                <span>Hingis Thomos</span>
                <span className={`${style.live_time } d-flex align-items-center`}>
                <span className={style.live}>
                    <img src={LiveIcon} alt="" />
                </span>
                <span className={style.time}>04:20:12</span>
                </span>
            </span>
            <span className={style.type_icon}>
            <img src={VideoIcon} alt="" />
            </span>  
            {interactionTabContext.interactionTabValue === 3 ? <span className={style.icon}><img src={Cross} alt="" /></span> : null}              
        </li>
    </ul>
  )
}

export default InteractionTab
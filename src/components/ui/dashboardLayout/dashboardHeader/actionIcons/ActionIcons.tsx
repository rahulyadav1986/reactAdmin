import {useContext} from "react"
import style from './style.module.scss'
import CallIcon from "../../../../../../public/assets/dashboard/call.svg"
import ChatIcon from "../../../../../../public/assets/dashboard/chat.svg"
import NotificationBellIcon from "../../../../../../public/assets/dashboard/notify_bell.svg"
import CallPad from '../callPad/CallPad'
import { ContextHeader } from "../../../../../contexts/headerContext"
import GlobalChat from "../globalChat/GlobalChat"
import {createPortal} from "react-dom"
// import { ContextGlobalChat } from "../../../../../contexts/globalChatContext"
const ActionIcons = () => {
  const callToggleContext = useContext(ContextHeader);
  const globalChatToggleContext = useContext(ContextHeader)
  return (
    <ul className={`${style.action_icon_wrapper} d-flex align-items-center`} >
        <li>
          <img src={CallIcon} alt="" onClick={callToggleContext.handleCallToggle} />
          {
            callToggleContext.callToggle &&
            <div className={style.drop_area}>
              <CallPad />
            </div>
          }
        </li>
        <li>
          <img src={ChatIcon} alt="" onClick={()=>globalChatToggleContext.handleGlobalChatToggle(true)} />
          {
            globalChatToggleContext.globalChat &&
            createPortal(
              <GlobalChat />,
              document.body
            )
            
          }
        </li>
        {/* <li><img src={VidIcon} alt="" /></li>
        <li><img src={MessageIcon} alt="" /></li> */}
        <li>
          <img src={NotificationBellIcon} alt="" />
          <span className={style.notify}>2</span>
        </li> 
    </ul>
  )
}

export default ActionIcons
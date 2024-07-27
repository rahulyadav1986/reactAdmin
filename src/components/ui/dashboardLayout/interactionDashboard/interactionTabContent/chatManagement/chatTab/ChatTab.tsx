import {useContext} from "react"
import style from './style.module.scss'
import ChatIconOne from "/assets/interactionCenter/chatManagement/c1.svg"
import ChatIconOTwo from "/assets/interactionCenter/chatManagement/c2.svg"
import ChatIconThree from "/assets/interactionCenter/chatManagement/c3.svg"
import ChatIconFour from "/assets/interactionCenter/chatManagement/c4.svg"
import ChatIconFive from "/assets/interactionCenter/chatManagement/c5.svg"
import VerticalDots from "/assets/interactionCenter/chatManagement/verticalDots.svg"
import CallEndPopup from "../../callEndPopup/CallEndPopup"
import { ContextMediaManagement } from "../../../../../../../contexts/mediaManagementContext"
import {createPortal} from "react-dom"
import ConferencePopup from "../../conferencePopup/ConferencePopup"
import CoBrowsePopup from "../../coBrowsePopup/CoBrowsePopup"
import AgentTransferPopup from "../../agentTransferPopup/AgentTransferPopup"
const ChatTab = () => {
const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <>
        <ul className={`${style.chat_tab_wrapper} d-flex align-items-center justify-content-between`}>
            <li className={`${mediaHandleContext.tabPad === 4 ? style.active: null} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleTab(4)}>
                <div className={` d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleAgentTransferPopup(true)}>
                    <span><img src={ChatIconOne} alt="" /></span>
                    <span>Transfer</span>
                </div>
            </li>
            <li className={`${mediaHandleContext.tabPad === 1 ? style.active: null} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleTab(1)}>
                <div className={` d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleConferencePop(true)}>
                    <span><img src={ChatIconOTwo} alt="" /></span>
                    <span>Conference</span>
                </div>
            </li>
            <li className={`${mediaHandleContext.tabPad === 2 ? style.active: null} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleTab(2)}>
                <div className={`d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handlCoBrowsePop(true)}>
                    <span><img src={ChatIconThree} alt="" /></span>
                    <span>Co-browse</span>
                </div>
            </li>
            <li className={`${mediaHandleContext.tabPad === 3 ? style.active: null} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleTab(3)}>
                <span><img src={ChatIconFour} alt="" /></span>
                <span>Escalate</span>
            </li>
            <li className={`${mediaHandleContext.tabPad === 0 ? style.active: null} `} onClick={()=>mediaHandleContext.handleTab(0)}>
                <div onClick={()=>mediaHandleContext.handleEndPopup(true)} style={{'height' : '50px'}} className="d-flex align-items-center justify-content-center">
                    <span><img src={ChatIconFive} alt="" /></span>
                    <span>End Chat</span>
                </div>
            </li>
            <li className="d-flex align-items-center justify-content-center">
                <img src={VerticalDots} alt="" />
            </li>
        </ul>
        {
            mediaHandleContext.agentTransferPop ? createPortal(<AgentTransferPopup />, document.body) : null
        }        
        {
            mediaHandleContext.conferencePop ? createPortal(<ConferencePopup />, document.body) : null 
        }
        {
            mediaHandleContext.coBrowsePop ? createPortal(<CoBrowsePopup />, document.body) : null 
        }
        {
            mediaHandleContext.endPopup && <CallEndPopup />   
        }
    </>
    
  )
}

export default ChatTab
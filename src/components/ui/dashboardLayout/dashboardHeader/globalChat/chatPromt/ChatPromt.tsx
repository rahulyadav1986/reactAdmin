import style from "../style.module.scss"
import {useContext} from 'react'
// import { ContextGlobalChat } from '../../../../../../contexts/globalChatContext'
import RemoveIcon from "/assets/chat/cross.svg"
import BackIcon from "/assets/chat/back.svg"
import VerticalDotsIcon from "/assets/chat/verticalDots.svg"
import ProfileAvatar from "/assets/chat/p6.png"
import Prompt from "../prompt/Prompt"
import { ContextHeader } from "../../../../../../contexts/headerContext"
const ChatPromt = () => {
// const chatGlobalContext = useContext(ContextGlobalChat)
const chatGlobalContext = useContext(ContextHeader)
  return (
    <div className={style.main_promt_area}>
        <div className={style.chat_main_area}>          
            <div className={`${style.chat_head_wrapper} d-flex align-items-center justify-content-between`}>
                <div className={`${style.chat_head_asset} d-flex align-items-center`}>
                <span className={style.back} onClick={chatGlobalContext.handleBackNewChat}><img src={BackIcon} alt="" /></span>
                <div className={`${style.chat_promt_user} d-flex align-items-center`}>
                    <span><img src={ProfileAvatar} alt="" /></span> 
                    <span className={`${style.text} d-flex flex-column`}>
                        <span className={style.title}><strong>Kiran</strong>  Komireddy</span>
                        <span>Agent  |  Online</span> 
                    </span>
                </div>
                </div>
                
                <div className={`${style.action_icons} d-flex align-items-center`}>
                    <span><img src={VerticalDotsIcon} alt="" /></span>
                    <span onClick={()=>chatGlobalContext.handleGlobalChatToggle(false)}><img src={RemoveIcon} alt="" /></span>
                </div>
            </div>
            <div className={style.chat_box_area}>
                <ul className={style.main_chat_promt_area}>
                    <li className={style.incoming_props}>
                       <div className={`${style.prompt_line}`}>
                            Hi Kiran, I noticed a high number of overdue accounts today. Can you please provide an update on your progress?
                       </div> 
                       <span className={style.time}>Just Now</span>
                    </li>
                    <li className={style.outgoing_props}>
                        <div className="d-flex">
                            <img src={ProfileAvatar} className={style.profile_avatar} alt="" />
                            <div className="d-flex flex-column">
                                <span className={style.name}>Kiran K</span>
                                <div className={`${style.prompt_line}`}>
                                    Sure, I've been actively calling customers with overdue payments. Currently on a call with Customer 789
                                </div>
                            </div>
                        </div>
                       <span className={style.time}>08:16 AM</span>
                    </li>
                    <li className={style.incoming_props}>
                       <div className={`${style.prompt_line}`}>
                            Hi Kiran, I noticed a high number of overdue accounts today. Can you please provide an update on your progress?
                       </div> 
                       <span className={style.time}>Just Now</span>
                    </li>
                    <li className={style.outgoing_props}>
                        <div className="d-flex">
                            <img src={ProfileAvatar} className={style.profile_avatar} alt="" />
                            <div className="d-flex flex-column">
                                <span className={style.name}>Kiran K</span>
                                <div className={`${style.prompt_line}`}>
                                    Sure, I've been actively calling customers with overdue payments. Currently on a call with Customer 789
                                </div>
                            </div>
                        </div>
                       <span className={style.time}>08:16 AM</span>
                    </li>
                    <li className={style.incoming_props}>
                       <div className={`${style.prompt_line}`}>
                            Hi Kiran, I noticed a high number of overdue accounts today. Can you please provide an update on your progress?
                       </div> 
                       <span className={style.time}>Just Now</span>
                    </li>
                    <li className={style.outgoing_props}>
                        <div className="d-flex">
                            <img src={ProfileAvatar} className={style.profile_avatar} alt="" />
                            <div className="d-flex flex-column">
                                <span className={style.name}>Kiran K</span>
                                <div className={`${style.prompt_line}`}>
                                    Sure, I've been actively calling customers with overdue payments. Currently on a call with Customer 789
                                </div>
                            </div>
                        </div>
                       <span className={style.time}>08:16 AM</span>
                    </li>
                    <li className={style.incoming_props}>
                       <div className={`${style.prompt_line}`}>
                            Hi Kiran, I noticed a high number of overdue accounts today. Can you please provide an update on your progress?
                       </div> 
                       <span className={style.time}>Just Now</span>
                    </li>
                    <li className={style.outgoing_props}>
                        <div className="d-flex">
                            <img src={ProfileAvatar} className={style.profile_avatar} alt="" />
                            <div className="d-flex flex-column">
                                <span className={style.name}>Kiran K</span>
                                <div className={`${style.prompt_line}`}>
                                    Sure, I've been actively calling customers with overdue payments. Currently on a call with Customer 789
                                </div>
                            </div>
                        </div>
                       <span className={style.time}>08:16 AM</span>
                    </li>
                </ul>
                <Prompt />
            </div>
        </div>    
    </div>
  )
}

export default ChatPromt
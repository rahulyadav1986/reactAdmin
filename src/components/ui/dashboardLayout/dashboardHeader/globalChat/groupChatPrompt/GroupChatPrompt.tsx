import style from "../style.module.scss"
import {useContext} from 'react'
// import { ContextGlobalChat } from '../../../../../../contexts/globalChatContext'
import RemoveIcon from "/assets/chat/cross.svg"
import BackIcon from "/assets/chat/back.svg"
import VerticalDotsIcon from "/assets/chat/verticalDots.svg"
import ProfileAvatar from "/assets/chat/groupAvatar.png"
import GroupAvatar from "/assets/chat/groupAvatar.png"
import Prompt from "../prompt/Prompt"
import { ContextHeader } from "../../../../../../contexts/headerContext"
const GroupChatPromt = () => {
// const chatGlobalContext = useContext(ContextGlobalChat)
const chatGlobalContext = useContext(ContextHeader)
  const memberNames = () => {
    let names = "";
    if (chatGlobalContext.checkGroup.length > 0) {
        if (chatGlobalContext.checkGroup.length > 1) {
            for (let i = 0; i < 2; i++) {
                names += ((i > 0) ? "," : "") + chatGlobalContext.checkGroup[i].name;
            }
        }
        else {
            names += chatGlobalContext.checkGroup[0].name;
        }
        return names;
    }
};
  return (
    <div className={style.main_promt_area}>
        <div className={style.chat_main_area}>          
            <div className={`${style.chat_head_wrapper} d-flex align-items-center justify-content-between`}>
                <div className={`${style.chat_head_asset} d-flex align-items-center`}>
                <span className={style.back} onClick={chatGlobalContext.handleBackGroupChat}><img src={BackIcon} alt="" /></span>
                <div className={`${style.chat_promt_user} d-flex align-items-center`}>
                    <span><img className={style.group_avatar} src={GroupAvatar} alt="" /></span> 
                    <span className={`${style.text} d-flex flex-column`}>
                        <span className={style.title}>{
                            memberNames()
                        } ({chatGlobalContext.checkGroup.length})</span>
                        <span>New Group</span> 
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

export default GroupChatPromt
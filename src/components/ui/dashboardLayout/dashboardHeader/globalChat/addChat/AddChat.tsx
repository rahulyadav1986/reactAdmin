// import { ContextGlobalChat } from '../../../../../../contexts/globalChatContext'
import { ChatList } from '../Data'
import style from '../style.module.scss'
import {useContext} from 'react'
import RemoveIcon from "/assets/chat/cross.svg"
import BackIcon from "/assets/chat/back.svg"
import GroupIcon from "/assets/chat/groupUser.svg"
import { ContextHeader } from '../../../../../../contexts/headerContext'

const AddChat = () => {
  // const chatGlobalContext = useContext(ContextGlobalChat)
  const chatGlobalContext = useContext(ContextHeader)
  return (
    <div className={`${style.add} ${style.add_chat}`}>
        <div className={style.chat_main_area}>
            <div className={`${style.chat_head_wrapper} d-flex align-items-center justify-content-between`}>
                <h4 className={`${style.heading} d-flex align-items-center`}><img onClick={chatGlobalContext.handleBackChat} className={style.back} src={BackIcon} alt="" /> New Chat</h4>
                <div className={`${style.action_icons} d-flex align-items-center`}>
                <span onClick={()=>chatGlobalContext.handleGlobalChatToggle(false)}><img src={RemoveIcon} alt="" /></span>
                </div>
            </div>
            <div className={style.chat_box_area}>
            <div className={`${style.group_heading} d-flex align-items-center`} onClick={chatGlobalContext.handleAddGroup}>
                <span><img src={GroupIcon} alt="" /></span>
                <span> New Group</span>
            </div>
            <div className={style.search_area}>
                <input type="text" className={style.form_control} name="" id="" placeholder='Search Agents & Supervisors' />
            </div>
            <ul className={style.chat_listing_area_wrapper}>
                {
                ChatList.map((item,i)=>{
                    return(
                    <li key={i} className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <div className={style.image_area}>
                            <img src={item.avatar} alt="" />
                            {item.status && <div className={style.status}></div>}
                            </div>
                            <div className={style.name_area}>
                            <h5>{item.name}</h5>
                            <p>{item.message}</p>
                            </div>
                        </div>
                    </li>
                    )
                })
                }
                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default AddChat
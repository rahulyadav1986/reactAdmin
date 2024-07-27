import { useContext } from 'react'
import { ChatList } from './Data'
import style from './style.module.scss'
import PlusIcon from "/assets/chat/add.svg"
import RemoveIcon from "/assets/chat/cross.svg"

// import { ContextGlobalChat } from '../../../../../contexts/globalChatContext'
import ChatPromt from './chatPromt/ChatPromt'
import AddChat from './addChat/AddChat'
import AddGroup from './addGroup/AddGroup'
import GroupChatPromt from './groupChatPrompt/GroupChatPrompt'
import { ContextHeader } from '../../../../../contexts/headerContext'

const GlobalChat = () => {
  // const chatGlobalContext = useContext(ContextGlobalChat)
  const chatGlobalContext = useContext(ContextHeader)
  return (
    <div className={style.global_wrapper} >
      <div className="overlay" onClick={()=>chatGlobalContext.handleGlobalChatToggle(false)}></div>
      {
        chatGlobalContext.defaultChat &&
        <div className={style.chat_main_area}>          
          <div className={`${style.chat_head_wrapper} d-flex align-items-center justify-content-between`}>
              <h4 className={style.heading}>Chat</h4>
              <div className={`${style.action_icons} d-flex align-items-center`}>
                  <span onClick={chatGlobalContext.handleAddChat}><img src={PlusIcon} alt="" /></span>
                  <span onClick={()=>chatGlobalContext.handleGlobalChatToggle(false)}><img src={RemoveIcon} alt="" /></span>
              </div>
          </div>
          <div className={style.chat_box_area}>
            <div className={style.search_area}>
              <input type="text" className={style.form_control} name="" id="" placeholder='Search Agents & Supervisors' />
            </div>
            <ul className={style.chat_listing_area_wrapper}>
              {
                ChatList.map((item,i)=>{
                  return(
                    <li key={i} className='d-flex justify-content-between' onClick={chatGlobalContext.handleAddNewChat}>
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
                      <div className={`${style.time} d-flex flex-column align-items-end`}>
                        <div>
                          {item.read ? <span>{item.time}</span> : <strong>{item.time}</strong>}
                        </div>
                        {item.read ? null : <div className={style.message_no}>{item.message_count}</div>}
                      </div>
                  </li>
                  )
                })
              }
              
            </ul>
          </div>
        </div>
      }
      
      {
        chatGlobalContext.newchat &&
        <ChatPromt />
      }
      {
        chatGlobalContext.addNewChat && 
        <AddChat />
      }  
      {
        chatGlobalContext.addNewGroup && 
        <AddGroup />
      }  
      {
        chatGlobalContext.newChatGroup &&
        <GroupChatPromt />
      }
      
    </div>
  )
}

export default GlobalChat
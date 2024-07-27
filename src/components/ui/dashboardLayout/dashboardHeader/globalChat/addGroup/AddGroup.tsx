import {useContext} from 'react'
import style from "../style.module.scss"
// import { ContextGlobalChat } from '../../../../../../contexts/globalChatContext'
import RemoveIcon from "/assets/chat/cross.svg"
import BackIcon from "/assets/chat/back.svg"
import GroupIcon from "/assets/chat/groupUser.svg"
import { ChatList } from '../Data'
import { ContextHeader } from '../../../../../../contexts/headerContext'
const AddGroup = () => {
// const chatGlobalContext = useContext(ContextGlobalChat)
const chatGlobalContext = useContext(ContextHeader)
  const handleChatPerson:any = (e:any,item:any)=>{
    chatGlobalContext.handleCheckGroup(item,e.target.checked);
    
  };
  return (
    <div className={`${style.add} ${style.add_group}`}>
        <div className={style.chat_main_area}>
            <div className={`${style.chat_head_wrapper} d-flex align-items-center justify-content-between`}>
                <h4 className={`${style.heading} d-flex align-items-center`}><img onClick={chatGlobalContext.handleBackGroup} className={style.back} src={BackIcon} alt="" />New Group</h4>
                <div className={`${style.action_icons} d-flex align-items-center`}>
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
                        <li key={i} className='d-flex justify-content-between justify-content-between'>
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
                            <div className={style.check} onChange={(event)=>handleChatPerson(event,item)}>
                                <input type="checkbox" name="thead_check" id={item.checkId} />
                                <label htmlFor={item.checkId}><span></span></label>
                            </div>
                        </li>
                        )
                    })
                    }
                    
                </ul>
                <div className='d-flex justify-content-end'>
                    <button onClick={chatGlobalContext.handleChatGroup} disabled={chatGlobalContext.checkGroup.length > 0 ? false : true} className={`${style.start_new_group_button} d-flex align-items-center justify-content-center `}>
                        <span><img src={GroupIcon} alt="" /></span>
                        <span>Start Group Chat</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddGroup
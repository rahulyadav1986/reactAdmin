import style from './style.module.scss'
import MessageIcon from "/assets/dashboard/main_dashboard/tablePops/message.svg"
import WhatsAppIcon from "/assets/dashboard/main_dashboard/tablePops/whatsApp.svg"
import ChatIcon from "/assets/dashboard/main_dashboard/tablePops/chat.svg"
import OpenIcon from "/assets/dashboard/main_dashboard/tablePops/open.svg"
import AddIcon from "/assets/dashboard/main_dashboard/tablePops/add.svg"
import { SupervisorChatPopupListData } from './Data'
import { useContext } from 'react'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
const SupervisorChatPop = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <div className={style.chat_table_wrapper}>
        <table>
            <thead>
                <tr>
                    <th>CUSTOMER NAME</th>
                    <th>TYPE</th>
                    <th>Status</th>
                    <th>Started at</th>
                </tr>
            </thead>
            <tbody>
                {
                    SupervisorChatPopupListData.map((item,i)=>{
                        return(
                            <>
                                <tr key={i}>
                                    <td>
                                        <div className={`${style.profile_area} d-flex align-items-center`}>
                                            <span><img src={item.customer.avatar} alt="" /></span>
                                            <span className='d-flex flex-column'>
                                                <span className={style.name}>{item.customer.name}</span>
                                                <span className={style.contact}>{item.customer.contact}</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={`${style.type_area} d-flex align-items-center`}>
                                            {
                                                item.type === 'web chat' ? 
                                                <span><img src={MessageIcon} alt="" /></span> : 
                                                item.type === 'whatsapp' ? <span><img src={WhatsAppIcon} alt="" /></span> : 
                                                item.type === 'messenger' ? <span><img src={ChatIcon} alt="" /></span> : null 
                                            }
                                            <span><strong>{item.type}</strong></span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={style.time}>Today, 09:09:00pm</span>
                                    </td>
                                    <td>
                                        <span className={`${style.action} d-flex align-items-center`}>
                                            <img src={AddIcon} alt="" />
                                            <img src={OpenIcon} alt="" onClick={()=>tablePopupContext.handleChatInsidePop(true)} />
                                        </span>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default SupervisorChatPop
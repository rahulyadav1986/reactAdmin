import { useContext } from 'react'
import { ContextTicketManagement } from '../../../../../../../contexts/ticketManagementContext'
import ActionMessageIcon from "/assets/interactionCenter/profileCard/messageIcon.svg"
import ActionMailIcon from "/assets/interactionCenter/profileCard/mailIcon.svg"
import ActionWhatsAppIcon from "/assets/interactionCenter/profileCard/whatsappIcon.svg"
import ActionCallIcon from "/assets/interactionCenter/profileCard/callIcon.svg"
import { TicketTableData } from './Data'
import style from './style.module.scss'
import { ContextSocialPopup } from '../../../../../../../contexts/socialPopupContext'

const TicketTableBody = () => {
  const ticketTypeContext = useContext(ContextTicketManagement)
  const socialPopupContext = useContext(ContextSocialPopup)
  return (
    <tbody>
        {
            TicketTableData.map((item,i)=>{
                return(
                    <tr key={i}>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>
                            <div className={style.checkbox}>
                                <input type="checkbox" name="thead_check" id="thead_check" />
                                <label htmlFor=""><span></span></label>
                            </div>
                        </td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>{item.reason}</td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}><span className={style.ticket_id}>{item.ticketId}</span> </td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={item.customer.avatar} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.customer.name}</span>
                                    <span className={style.phone}>{item.customer.contactInfo}</span>
                                </span>
                            </div>
                        </td>
                        
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={item.assignAvatar} alt="" /></span>
                                <span>{item.assignTo}</span>
                            </div>
                        </td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)} className={`${style.priority} ${item.priority === 'High' ? style.high : item.priority === 'Midium' ? style.midium : style.low}`}>{item.priority}</td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)} className={style.status}>{item.status}</td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>{item.lastUpdate}</td>
                        <td onClick={()=>ticketTypeContext.handleTicketTablePop(item.id)}>{item.createdOn}</td>
                        <td>
                            <ul className={`${style.action_icons} d-flex align-items-center`}>
                                <li><img src={ActionCallIcon} alt="" /></li>
                                <li><img src={ActionMessageIcon} onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(true)} alt="" /></li>
                                <li><img src={ActionMailIcon} alt="" /></li>
                                <li><img src={ActionWhatsAppIcon} onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(true)} alt="" /></li>
                            </ul>
                        </td>
                    </tr>
                )
            })
        }
        
    </tbody>
  )
}

export default TicketTableBody
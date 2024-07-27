import style from './style.module.scss'
import CallIcon from '/assets/dashboard/main_dashboard/table_call.svg'
import EmailIcon from '/assets/dashboard/main_dashboard/email.svg'
import MessageIcon from '/assets/dashboard/main_dashboard/message.svg'
import VideoIcon from '/assets/dashboard/main_dashboard/video.svg'

import ActionIcon from '/assets/dashboard/main_dashboard/action.svg'
import PositiveSmilyIcon from '/assets/dashboard/main_dashboard/positive_smily.svg'
import NegativeSmilyIcon from '/assets/dashboard/main_dashboard/negative_smily.svg'
import { AgentCommonTableData } from './Data'
import { useContext } from 'react'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'

const AgentTableBody = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        {
            AgentCommonTableData.map((item,i)=>{
                return(
                    <tr key={i}>
                        <td>
                            <div className={style.checkbox}>
                                <input type="checkbox" name="thead_check" id={item.id} />
                                <label htmlFor={item.id}><span></span></label>
                            </div>
                        </td>
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={item.customer.avatar} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.customer.name}</span>
                                    <span className={style.phone}>{item.customer.contactInfo}</span>
                                </span>
                            </div>
                        </td>
                        <td><span className={style.ticket_id}>{item.ticketId}</span> </td>
                        <td>
                            {
                                item.customer.type === "call" ? 
                                <img onClick={()=>tablePopupContext.handlVoiceCallRecordingPop(true)} src={CallIcon} alt="" /> : 
                                item.customer.type === "email" ? 
                                <img onClick={()=>tablePopupContext.handlEmailCoversationPop(true)} src={EmailIcon} alt="" /> : 
                                item.customer.type === "video" ?
                                <img onClick={()=>tablePopupContext.handlVideoCallRecordingPop(true)} src={VideoIcon} alt="" /> :
                                <img onClick={()=>tablePopupContext.handlChatConversationPop(true)} src={MessageIcon} alt="" />
                            }
                        </td>
                        <td>
                            <span className={style.badge}>{item.type}</span>
                        </td>
                        <td>{item.callTime}</td>
                        <td>{item.holdTime}</td>
                        <td>{item.handledTime}</td>
                        <td>{item.wrappedTime}</td>
                        <td>
                            <div className={`${style.sentiment_wrapper} d-flex align-items-center`}>
                                <span>
                                    {
                                        item.setiment == "positive"?
                                        <img src={PositiveSmilyIcon} alt="" /> :
                                        <img src={NegativeSmilyIcon} alt="" />
                                    } 
                                </span>                                                                                               
                                <span className={`${style.sentiment} ${item.setiment == "positive" ? style.positive : style.negative} `}>{item.setiment}</span>
                            </div>
                        </td>
                        <td>
                            {item.callDate}, {item.callFinalTime}
                            
                        </td>
                        <td>
                            {item.live === true ? <span className={style.live}>Live</span> : null}
                        </td>
                        <td className={style.action}>
                            <img src={ActionIcon} alt="" />
                        </td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default AgentTableBody
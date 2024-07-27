import style from './style.module.scss'
import CallIcon from '/assets/dashboard/main_dashboard/table_call.svg'
import EmailIcon from '/assets/dashboard/main_dashboard/email.svg'
import MessageIcon from '/assets/dashboard/main_dashboard/message.svg'
import VideoIcon from '/assets/dashboard/main_dashboard/video.svg'

import ActionIcon from '/assets/dashboard/main_dashboard/action.svg'
import PositiveSmilyIcon from '/assets/dashboard/main_dashboard/positive_smily.svg'
import NegativeSmilyIcon from '/assets/dashboard/main_dashboard/negative_smily.svg'
import { AdminCommonTableData } from './Data'
import { useContext } from 'react'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import { Link } from 'react-router-dom'

const AdminTableBody = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        {
            AdminCommonTableData.map((item,i)=>{
                return(
                    <tr key={i}>
                        <td>
                            <div className={style.checkbox}>
                                <input type="checkbox" name="thead_check" id={item.id} />
                                <label htmlFor={item.id}><span></span></label>
                            </div>
                        </td>
                        <td>
                            <Link to={`/admin/dashboard/ai-analytics/${item.id}`} className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={item.useType.agent.avatar} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.useType.agent.name}</span>
                                    <span className={style.phone}>{item.useType.agent.contactInfo}</span>
                                </span>
                            </Link>
                        </td>
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={item.useType.customer.avatar} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.useType.customer.name}</span>
                                    <span className={style.phone}>{item.useType.customer.contactInfo}</span>
                                </span>
                            </div>
                        </td>
                        <td>
                            {
                                item.useType.type === "call" ? 
                                <img onClick={()=>tablePopupContext.handlVoiceCallRecordingPop(true)} src={CallIcon} alt="" /> : 
                                item.useType.type === "email" ? 
                                <img onClick={()=>tablePopupContext.handlEmailCoversationPop(true)} src={EmailIcon} alt="" /> : 
                                item.useType.type === "video" ?
                                <img onClick={()=>tablePopupContext.handlVideoCallRecordingPop(true)} src={VideoIcon} alt="" /> :
                                <img onClick={()=>tablePopupContext.handlChatConversationPop(true)} src={MessageIcon} alt="" />
                            }
                        </td>
                        <td>
                            <span className={style.badge}>{item.type}</span>
                        </td>
                        <td className={style.campaignName}>{item.campaignName}</td>
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
                        <td className={style.green}>{item.callRating}/5</td>
                        <td className={style.green}>{item.confidenceScore}%</td>
                        <td>
                            {item.callDate}, {item.callFinalTime}
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

export default AdminTableBody
import {useContext} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import DownloadIcon from '/assets/dashboard/main_dashboard/tablePops/download.svg'
const EmailPop = () => {
  const text = `Dear Customer Support Team,<br /><br />
  I am writing to express my deep dissatisfaction and frustration regarding the recent delivery of the product I purchased from your company. I placed the order three weeks ago, and despite the promised delivery time of 5-7 business days, I have yet to receive the package.<br /><br />
  I have made multiple attempts to reach out to your customer service helpline, but each time I have been met with long wait times and unhelpful responses. This level of service is completely unacceptable and has only exacerbated my <span>disappointment</span> .<br /><br />
  Furthermore, the lack of communication and transparency throughout this process has been highly frustrating. I was never informed about any delays or provided with an updated delivery timeline. It seems like my concerns have been completely <span>disregarded</span> .<br /><br />
  As a loyal customer of your brand for several years, I had expected a much higher standard of service. However, the handling of this situation has severely tarnished my perception of your company. I am now questioning whether I made the right choice in selecting your products.<br /><br />
  <span>I urgently request</span> a resolution to this matter. I expect immediate action to be taken to locate my package and ensure its prompt delivery. Additionally, I believe it is necessary for your organization to review its customer service procedures and address the systemic issues that have led to this negative experience.
  If this matter is not resolved to my satisfaction within the next three business days, I will have no choice but to escalate my complaint and seek a refund for the undelivered product.<br /><br /> I hope that your team understands the severity of this situation and takes the necessary steps to rectify it promptly. I eagerly await your prompt response and a satisfactory resolution.`
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
            <h4>Conversation</h4>
            <ul className={`${style.action_icons} d-flex align-items-center`}>
                <li><img src={DownloadIcon} alt="" /></li>
                <li onClick={()=>tablePopupContext.handlEmailCoversationPop(false)}><img src={CrossIcon} alt="" /></li>
            </ul>
        </div>
        <div className={style.email_area}>
            <h5>SUBJECT</h5>
            <h2>Urgent: Unresolved Issue with Product Delivery</h2>
            <p dangerouslySetInnerHTML={{__html:text}} />
            
        </div>
       
    </>
  )
}

export default EmailPop
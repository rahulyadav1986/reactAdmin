import style from './style.module.scss'
import {useState, useContext} from 'react'
import AttachmentIcon from "/assets/interactionCenter/chatManagement/attachment.svg"
import SmilyIcon from "/assets/interactionCenter/chatManagement/smily.svg"
import SentIcon from "/assets/interactionCenter/chatManagement/sent.svg"
import { ContextMediaManagement } from '../../../../../../../../contexts/mediaManagementContext'
const Prompt = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  const [inputValue, setInputValue] = useState({
    text: `The "Foreign Transaction Fee" is applied when you use your credit card for purchases in a foreign currency or outside your home country. It's usually a small percentage of the transaction amount.`
  })
  return (
    <div className={style.prompt_wrap}>
        <textarea name="" id="" value={inputValue.text} onChange={(e:any)=>setInputValue(e.target.value)} placeholder='Send a text message to Marlin Borilie' className={style.form_control}></textarea>
        <div className={`${style.icon_wrap} d-flex align-items-center`}>
          <button><img src={AttachmentIcon} alt='' /></button>
          <button><img src={SmilyIcon} alt='' /></button>
          <button onClick={mediaHandleContext.handleAiRecomendation}><img src={SentIcon} alt='' /></button>
        </div>
    </div>
  )
}

export default Prompt
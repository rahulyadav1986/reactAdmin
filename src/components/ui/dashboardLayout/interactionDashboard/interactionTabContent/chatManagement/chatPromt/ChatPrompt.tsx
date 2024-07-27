import {useContext} from 'react'
import Prompt from './prompt/Prompt'
import style from './style.module.scss'
import AiIcon from "/assets/interactionCenter/chatManagement/chatAi.svg"
import { ContextMediaManagement } from '../../../../../../../contexts/mediaManagementContext'
import ThumsUpIcon from "/assets/interactionCenter/thumb_up.svg"
import ThumsDownIcon from "/assets/interactionCenter/thumb_down.svg"
import AiPop from './prompt/aiPop/AiPop'
import useOutside from '../../../../../../../hooks/useOutside'
const ChatPrompt = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  const [dropAskAi, setDropAskAI, refDropAskAi] = useOutside(false)
  return (
    <div className={style.chat_prompt_wrapper}>
      {
        mediaHandleContext.aiRecomendation ? 
        <div className={style.ai_recomendation_wrapper}>
           <span className={`${style.ai_heading} d-flex align-items-center`}>
            <img src={AiIcon} alt="" />
              Zuqo ai recommendation
            </span>
           <span className={style.describe}>Offer her 3 months extended period for free of cost. I hope this recommendation helps you hold the customer</span>
           <span className={`${style.thumb_icon} d-flex flex-column justify-content-between`}>
              <span><img src={ThumsUpIcon} alt="" /></span> 
              <span><img src={ThumsDownIcon} alt="" /></span> 
            </span>
        </div> :
        null
      }
      <ul className={`${style.recomendations_wrapper} d-flex align-items-center`}>
          <li className={`${style.ai} `} ref={refDropAskAi}>
            <div onClick={()=>setDropAskAI(!dropAskAi)} className='d-flex align-items-center'><img src={AiIcon} alt="" />  Ask AI</div> 
            {dropAskAi && <AiPop setDropAskAI={setDropAskAI} />}
          </li>
          <li className={style.bg}>How can I help you?</li>
          <li className={style.bg}>Good morning Malin B</li>
      </ul>
      <Prompt />
    </div>
  )
}

export default ChatPrompt
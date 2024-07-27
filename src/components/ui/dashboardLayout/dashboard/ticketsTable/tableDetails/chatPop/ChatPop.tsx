import {useContext} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import ChatAvatar1 from '/assets/dashboard/main_dashboard/tablePops/chatAvatar1.png'
import ChatAvatar2 from '/assets/dashboard/main_dashboard/tablePops/chatAvatar2.png'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import DownloadIcon from '/assets/dashboard/main_dashboard/tablePops/download.svg'
import RefreshIcon from '/assets/dashboard/main_dashboard/tablePops/refresh.svg'
import CommentIcon from '/assets/dashboard/main_dashboard/tablePops/comment.svg'
import { useLocation } from 'react-router-dom'
import { ContextTable } from '../../../../../../../contexts/tableContext'
import QualityFormButton from '../qualityFormButton/QualityFormButton'
const ChatPop = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  const contextTable = useContext(ContextTable)
  const location = useLocation()
  const currentAgentLocation = location.pathname.indexOf('/agent')>=0
  const currentSupervisorLocation = location.pathname.indexOf('/supervisor')>=0
  return (
    <>
        <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
            <h4>Conversation</h4>
            <div className='d-flex align-items-center'>
                {
                    currentSupervisorLocation ? <QualityFormButton /> : null
                }
                
                <ul className={`${style.action_icons} d-flex align-items-center`}>
                    <li>
                        {
                            currentAgentLocation ? <img src={DownloadIcon} alt="" /> : <img src={RefreshIcon} alt="" />
                        }
                    </li>
                    {
                        currentAgentLocation ? 
                        <li onClick={()=>tablePopupContext.handlChatConversationPop(false)}><img src={CrossIcon} alt="" /></li> :
                        <li onClick={()=>tablePopupContext.handleChatInsidePop(false)}><img src={CrossIcon} alt="" /></li>
                    }
                    
                </ul>
            </div>
            
        </div>
        <ul className={style.chat_pop_wrapper}>
            <li className={`${style.incoming} d-flex`}>
                <div className={style.image_avatar}><img src={ChatAvatar1} alt="" /></div>
                <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-start`}>
                    <div className={`${style.prompt_line} d-flex justify-content-start`}>
                        <span>Hi there! I have a question about my recent credit card statement. Can you help me understand some of the charges?</span>
                        09:09a.m
                    </div>
                    <div className={`${style.prompt_line} d-flex justify-content-start`}>
                        <span>I noticed there's a charge labeled ?</span>
                        09:09a.m
                    </div>
                    <div className={`${style.prompt_line} d-flex justify-content-start`}>
                        <span>Also, I see a foreign transaction fee on my statement. Can you tell me more about that?</span>
                        09:09a.m
                    </div>
                </div>
            </li>
            <li className={`${style.outgoing} d-flex justtify-content-end`}>
                <div className={style.image_avatar}><img src={ChatAvatar2} alt="" /></div>
                <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-end`}>
                    <div className={`${style.prompt_line} d-flex justify-content-end`}>
                        <span>Hello! Of course, I'd be happy to help you with your credit card statement.</span>
                    </div>
                    <div className={`${style.prompt_line} d-flex justify-content-end`}>
                        <span>The "Annual Fee" is a standard fee that's charged once a year for the benefits and 
                        features that come with your credit card. It helps cover things like rewards 
                        programs and travel insurance.</span>
                    </div>
                    <div className={`${style.prompt_line} d-flex justify-content-end`}>
                        <span>The "Foreign Transaction Fee" is incurred when you make purchases using your 
                        credit card in a currency other than your home country's or when the transaction 
                        occurs outside of your home country.</span>
                    </div>
                </div>
            </li>
        </ul>
        {
            currentAgentLocation ? null :
            <div className={`${style.join_button} d-flex align-items-center justify-content-center`}  onClick={()=>contextTable.handleJoinChat(2)}>
                <span><img src={CommentIcon} alt="" /></span>
                <span>Join Chat</span>
            </div>
        }
        
    </>
  )
}

export default ChatPop
import {useContext} from 'react'
import style from "./style.module.scss"

import AudioPop from './audioPop/AudioPop'
import EmailPop from './emailPop/EmailPop'
import VideoPop from './videoPop/VideoPop'
import ChatPop from './chatPop/ChatPop'
import {createPortal} from "react-dom"
import SupervisorAudioCallPop from './supervisorAudioCallPop/SupervisorAudioCallPop'
import SupervisorVideoCallPop from './supervisorVideoCallPop/SupervisorVideoCallPop'
import SupervisorChatPop from './supervisorChatPop/SupervisorChatPop'
import { ContextTablePopup } from '../../../../../../contexts/tablePopupContext'
import SupervisorWHFPop from './supervisorWFHPop/SupervisorWHFPop'
import ViolationPop from './supervisorWFHPop/ViolationPop'
import { ViolationdataList } from './supervisorWFHPop/Data'
import QualityFormPopup from './qualityFormPopup/QualityFormPopup'
import { useLocation } from 'react-router-dom'


const TableAllPopups = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  const location = useLocation()
  const supervisorLocation = location.pathname.indexOf('/supervisor')>=0
  return (
    <>
        {
            tablePopupContext.voiceCallRecordingPop ? 
            createPortal(
                <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className="overlay" onClick={()=>tablePopupContext.handlVoiceCallRecordingPop(false)}></div>
                    <div className={`${supervisorLocation ? `${style.pop_audio_call_wrapper} ${style.supervisorAudioPOp}` : style.pop_audio_call_wrapper}`}>
                        <AudioPop />
                    </div>
                </div>,
                document.body
            ) : null
        }

        {
           tablePopupContext.emailConversationPop ? 
           createPortal( 
           <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handlEmailCoversationPop(false)}></div>
                <div className={style.pop_email_wrapper}>
                    <EmailPop />
                </div>
            </div>,
            document.body
           ) : null
        }

        {
            tablePopupContext.videoCallRecordingPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handlVideoCallRecordingPop(false)}></div>
                <div className={style.video_call_wrapper}>
                    <VideoPop />
                </div>
            </div>,
            document.body
            ) : null
        }

        {
            tablePopupContext.chatConversationPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handlChatConversationPop(false)}></div>
                <div className={style.pop_video_call_wrapper}>
                    <ChatPop />
                </div>
            </div>,
            document.body
            ) : null
        }


        {
            tablePopupContext.supAudioCallPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handleSupAudioCallPop(false)}></div>
                <div className={style.pop_supervisor_audio_call_wrapper}>
                    <SupervisorAudioCallPop />
                </div>
            </div>,
            document.body
            ) : null
        }

        {
            tablePopupContext.supVideoCallPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handleSupVideoCallPop(false)}></div>
                <div className={style.pop_supervisor_audio_call_wrapper}>
                    <SupervisorVideoCallPop />
                </div>
            </div>,
            document.body
            ) : null
        }

        {
            tablePopupContext.supChatPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handleChatPop(false)}></div>
                <div className={style.pop_supervisor_chat_wrapper}>
                    <SupervisorChatPop />
                </div>
            </div>,
            document.body
            ) : null
        }

        {
            tablePopupContext.supChatInsidePop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handleChatInsidePop(false)}></div>
                <div className={style.pop_video_call_wrapper}>
                    <ChatPop />
                </div>
            </div>,
            document.body
            ) : null
        }

        {
            tablePopupContext.wfhPop ?
            createPortal( 
            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>tablePopupContext.handleWhfPop(false)}></div>
                <div className={style.wfh_wrapper}>
                    <SupervisorWHFPop />
                </div>
            </div>,
            document.body
            ) : null
        }
        
        {
            ViolationdataList.map((item,i)=>{
                return(
                    <>
                        {
                            tablePopupContext.violationPop === i ?
                            createPortal( 
                            <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                                <div className="overlay" onClick={()=>tablePopupContext.handleFinalViolationClose(false)}></div>
                                <div className={style.violation_wrapper}>
                                    <ViolationPop item={item} key={i} />
                                </div>
                            </div>, 
                            document.body 
                            ) : null
                        }
                    </>
                    
                )
            }) 
        }

        {
            tablePopupContext.qualityFormPopup === true ? 
            createPortal(
                <div className={`${style.common_popup_wrapper} d-flex align-items-center justify-content-center`}>
                    <div className="overlay" onClick={()=>tablePopupContext.handleQualityFormPopup(false)}></div>
                    <div className={style.quality_form_wrapper}>
                        <QualityFormPopup />
                    </div> 
                </div>,
                document.body
            ) : null
        }


        
        
        
        
        
    </>
  )
}

export default TableAllPopups
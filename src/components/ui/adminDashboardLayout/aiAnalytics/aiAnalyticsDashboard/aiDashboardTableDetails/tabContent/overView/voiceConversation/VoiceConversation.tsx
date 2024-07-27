import { useCallback, useContext, useState } from 'react'
import PromptList from './PromptList'
import style from './style.module.scss'
import CallIcon from '/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/call.svg'
import { ContextAiAnalytics } from '../../../../../../../../../contexts/aiAnalyticsContext'
import AudioPlayer from './AudioPlayer'
const VoiceConversation = () => {
  const contentAiAnalytics = useContext(ContextAiAnalytics)
  const [timeState, setTimeState] = useState("00:00:00");
  const [percentage,setPercentage] = useState(0);
  const onPercentageUpdate = useCallback((percentage:any)=>{
    setPercentage(percentage);
  },[percentage]);
  
  return (
    <>
       <div className={`${style.voice_conversation_main_wrapper} d-flex flex-column justify-content-between`}>
            <div className={style.voice_conversation_wrapper}>
                <div className={`${style.head_wrapper} d-flex align-items-center justify-content-between`}>
                    <div className={`${style.label_area} d-flex align-items-center`}>
                        <span><img src={CallIcon} alt="" /></span>
                        <h3>VOICE CONVERSATION</h3>
                    </div>
                    <div className={style.transscript_check_area} >
                        <input type="checkbox" name="" id="transcript" />
                        <label htmlFor="transcript" className='d-flex align-items-center' onClick={contentAiAnalytics.handleVoiceConversationTranscript}>
                            <span></span>
                            <i className={style.hide}>Hide redact transcript</i>
                            <i className={style.show}>Show redact transcript</i>
                        </label>
                    </div>
                </div>
                <PromptList onMessageSelect={setTimeState} percentage={percentage}/>
            </div>
            <div className={`${style.voice_audio_area} d-flex align-items-center justify-content-center flex-column`}>
                <AudioPlayer timeState={timeState} onTimeChange={onPercentageUpdate} />
            </div>
       </div>
        
    </>
    
  )
}

export default VoiceConversation
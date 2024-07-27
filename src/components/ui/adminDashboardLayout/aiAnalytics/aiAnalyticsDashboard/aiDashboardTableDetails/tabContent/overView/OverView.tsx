import AgentInsight from './agentInsight/AgentInsight'
import CustomerInsights from './customerInsights/CustomerInsights'
import OverViewStatus from './overViewStatus/OverViewStatus'
import style from "./style.module.scss"
import VoiceConversation from './voiceConversation/VoiceConversation'
const OverView = () => {
  return (
    <>
      <OverViewStatus />
      <div className={style.main_area_wrapper}>
         <VoiceConversation />
         <div className={style.user_insight_wrapper}>
            <CustomerInsights />
            <AgentInsight />
         </div>
         
      </div>

    </>
    
  )
}

export default OverView
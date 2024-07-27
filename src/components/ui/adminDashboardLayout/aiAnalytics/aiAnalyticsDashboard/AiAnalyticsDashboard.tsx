
import SentimentAnalysis from './sentimentAnalysis/SentimentAnalysis'
import IntentAnalysis from './intentAnalysis/IntentAnalysis'
import style from './style.module.scss'
import ComplaintsInsights from './complaintsInsights/ComplaintsInsights'
import AiAnalyticsDashboardHeader from './aiAnalyticsDashboardHeader/AiAnalyticsDashboardHeader'
import AiInteractionStatus from './aiInteractionStatus/AiInteractionStatus'

const AiAnalyticsDashboard = () => {
  return (
    <> 
      <div className={style.interaction_main_dashboard_wrapper}>
          <AiAnalyticsDashboardHeader />
          <AiInteractionStatus />
          <SentimentAnalysis />
          <IntentAnalysis />
          <ComplaintsInsights />
      </div>
    </>
  )
}

export default AiAnalyticsDashboard
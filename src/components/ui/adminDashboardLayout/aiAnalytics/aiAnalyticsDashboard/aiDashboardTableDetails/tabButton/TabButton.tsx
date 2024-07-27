import { useContext } from 'react'
import style from './style.module.scss'
import { ContextAiAnalytics } from '../../../../../../../contexts/aiAnalyticsContext'
import { AiAnalyticsData } from './Data'

const TabButton = () => {
  const contextAiAnalytics = useContext(ContextAiAnalytics)
  return (
    <ul className={`${style.tab_button_area_wrap} d-flex align-items-center`}>
        {
            AiAnalyticsData.map((item,i)=>{
                return(
                    <li className={`${contextAiAnalytics.aiAnalyticsDetailsTab === i ? style.active : null}`} key={item.id} onClick={()=>contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>{item.label}</li>
                )
            })
        }
        {/* <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Overview</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Transcript</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Discover</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Analyse</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Report</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Design</li>
        <li onClick={contextAiAnalytics.handleAiAnalyticsDetailsTab(i)}>Evaluation</li> */}
    </ul>
  )
}

export default TabButton
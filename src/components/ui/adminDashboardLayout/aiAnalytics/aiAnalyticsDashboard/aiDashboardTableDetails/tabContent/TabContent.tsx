import { useContext } from 'react'
import { ContextAiAnalytics } from '../../../../../../../contexts/aiAnalyticsContext'
import style from './style.module.scss'
import OverView from './overView/OverView'

const TabContent = () => {
  const contextAiAnalytics = useContext(ContextAiAnalytics)
  return (
    <div className={style.tab_content_wrapper} >
       {
          contextAiAnalytics.aiAnalyticsDetailsTab === 0 ? <OverView /> : null
       }
    </div>
  )
}

export default TabContent
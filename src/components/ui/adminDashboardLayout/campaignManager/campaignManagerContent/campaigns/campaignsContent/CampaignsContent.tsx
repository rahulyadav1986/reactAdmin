import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import LiveView from './liveView/LiveView'
import CalendarView from './calendarView/CalendarView'

const CampaignsContent = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.campaign_content_wrapper}>
        {
            contextCampaignManager.campaignsTab === 1 ?
            <LiveView /> : 
            contextCampaignManager.campaignsTab === 2 ?
            <CalendarView /> : null
        }
    </div>
  )
}

export default CampaignsContent
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import LiveCampaigns from './liveCampaigns/LiveCampaigns'
import style from "./style.module.scss"
import DashboardCampaigns from './dashboardCampaigns/DashboardCampaigns'
import OverallDashboard from './overallDashboard/OverallDashboard'
const CampaignDashboardContent = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.campaign_content_wrapper}>
        {
            contextCampaignManager.campaignDashboardTab === 1 ?
            <LiveCampaigns /> : 
            contextCampaignManager.campaignDashboardTab === 2 ?
            <DashboardCampaigns /> :
            contextCampaignManager.campaignDashboardTab === 3 ?
            <OverallDashboard /> : null
        }
    </div>
  )
}

export default CampaignDashboardContent
import CampaignDashboardContent from './campaignDashboardContent/CampaignDashboardContent'
import CampaignDashboardTab from './campaignDashboardTab/CampaignDashboardTab'
import style from './style.module.scss'

const CampaignDashboard = () => {
  return (
    <div className={style.campaign_dashboard_wrapper}>
        <CampaignDashboardTab />
        <CampaignDashboardContent />
    </div>
  )
}

export default CampaignDashboard
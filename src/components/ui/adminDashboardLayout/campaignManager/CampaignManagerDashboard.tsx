import { CampaignManagerContext } from '../../../../contexts/campaignManagerContext'
import CampaignManagerContent from './campaignManagerContent/CampaignManagerContent'
import CampaignManagerSidebar from './campaignManagerSidebar/CampaignManagerSidebar'
import style from './style.module.scss'

const CampaignManagerDashboard = () => {
  return (
    <div className={`${style.campaign_manager_dashboard_area_wrapper} d-flex`}>
      <CampaignManagerContext>
        <CampaignManagerSidebar />
        <CampaignManagerContent />
      </CampaignManagerContext>
    </div>
  )
}

export default CampaignManagerDashboard
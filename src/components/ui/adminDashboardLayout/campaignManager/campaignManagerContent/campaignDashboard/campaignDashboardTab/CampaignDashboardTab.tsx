import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import { CampaignList } from '../campaignDashboardContent/Data'

const CampaignDashboardTab = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <ul className={`${style.tab_button_area} d-flex align-items-center`}>
        <li className={`${ contextCampaignManager.campaignDashboardTab === 1 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignDashboardTab(1)}>
            Live Campaigns {CampaignList.length > 0 ? `(${CampaignList.length})` : null}
        </li>
        <li className={`${ contextCampaignManager.campaignDashboardTab === 2 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignDashboardTab(2)}>
            Dashboards by Campaign
        </li>
        <li className={`${ contextCampaignManager.campaignDashboardTab === 3 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignDashboardTab(3)}>
           Overall Dashbaord
        </li> 
    </ul>
  )
}

export default CampaignDashboardTab
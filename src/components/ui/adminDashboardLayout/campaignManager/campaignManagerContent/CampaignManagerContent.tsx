import { useContext } from 'react'
import CommonHeading from './CommonHeading'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../contexts/campaignManagerContext'
import CampaignOverview from './campaignOverview/CampaignOverview'
import CampaignDashboard from './campaignDashboard/CampaignDashboard'
import Campaigns from './campaigns/Campaigns'
import CampaignList from './campaignList/CampaignList'
import CampaignReports from './campaignReports/CampaignReports'
import CampaignWorkflow from './campaignWorkflow/CampaignWorkflow'

const CampaignManagerContent = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <>
        {contextCampaignManager.campaignHamburgar ? <div className={style.common_ovarlay} onClick={contextCampaignManager.handleCampaignHamburgar}></div>   : null}
        <div className={style.campaign_main_content_area_wrapper}>
            <CommonHeading />
            <div className={style.campaign_manager_common_wrapper}>
            {
              contextCampaignManager.campaignManagerSidebarTab === 1 ?
              <CampaignOverview /> : 
              contextCampaignManager.campaignManagerSidebarTab === 2 ?
              <CampaignDashboard /> : 
              contextCampaignManager.campaignManagerSidebarTab === 3 ?
              <Campaigns /> : 
              contextCampaignManager.campaignManagerSidebarTab === 4 ?
              <CampaignList /> : 
              contextCampaignManager.campaignManagerSidebarTab === 5 ?
              <CampaignWorkflow /> :
              contextCampaignManager.campaignManagerSidebarTab === 6 ?
              <CampaignReports /> : null
            }
            </div>
        </div>
    </>
    
  )
}

export default CampaignManagerContent
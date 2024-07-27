import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'

const CampaignsTab = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <ul className={`${style.tab_button_area} d-flex align-items-center`}>
        <li className={`${ contextCampaignManager.campaignsTab === 1 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignsTab(1)}>
            List View
        </li>
        <li className={`${ contextCampaignManager.campaignsTab === 2 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignsTab(2)}>
            Calendar View
        </li>
        
    </ul>
  )
}

export default CampaignsTab
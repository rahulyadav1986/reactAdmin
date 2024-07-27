import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'

const CampaignReportTab = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <ul className={`${style.tab_button_area} d-flex align-items-center`}>
        <li className={`${ contextCampaignManager.campaignReportTab === 1 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignReportTab(1)}>
            Data View
        </li>
        <li className={`${ contextCampaignManager.campaignReportTab === 2 ? style.active : null}`} onClick={()=>contextCampaignManager.handleCampaignReportTab(2)}>
            Graphical View
        </li>
        
    </ul>
  )
}

export default CampaignReportTab
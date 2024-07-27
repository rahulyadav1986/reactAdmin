
import { useContext } from 'react'
import DataView from './DataView'
import GraphicalView from './GraphicalView'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
const CampaignReportContent = () => {  
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.campaign_report_content_wrapper}>        
        {
            contextCampaignManager.campaignReportTab === 1 ? <DataView /> : <GraphicalView />
        }
         
    </div>
    
  )
}

export default CampaignReportContent
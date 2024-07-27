import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import CampaignReportContentTableDetails from './campaignReportContentTableDetails/CampaignReportContentTableDetails'
import { CampaignReportTableList } from './campaignReportContentTableDetails/Data'
import TableDetailsPop from './campaignReportContentTableDetails/TableDetailsPop'
import CampaignReportContentStatus from './campaignReportContentStatus/CampaignReportContentStatus'
import style from "./style.module.scss"
const DataView = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <> 
    <div className={style.data_view_wrapper}>
        <CampaignReportContentStatus />
        <CampaignReportContentTableDetails />
        {
            contextCampaignManager.campaignReportPop &&
            CampaignReportTableList.map((item)=>{
                return(
                    <>
                        {
                          contextCampaignManager.campaignReportPop === item.id ? <TableDetailsPop item={item} /> : null
                        }
                    </>
                    
                )
            })
        }
    </div>
        
    </>
  )
}

export default DataView
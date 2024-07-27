import { CampaignList } from '../Data'
import style from './style.module.scss'

import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import LiveCampaignsHeader from './LiveCampaignsHeader'
import LiveCampaignsContent from './LiveCampaignsContent'
const LiveCampaigns = () => {
  const contextcampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.live_campaigns_wrapper}>
        {
            CampaignList.map((campaignItem)=>{
                return(
                    <div className={style.accordion_campaign}>
                        <LiveCampaignsHeader campaignItem={campaignItem} />
                        { contextcampaignManager.liveCampaignsAccordion === campaignItem.id ?<LiveCampaignsContent campaignItem={campaignItem} /> : null }
                    </div>
                )
            })
        }
    </div>
  )
}

export default LiveCampaigns
import { useContext } from 'react'
import style from './style.module.scss'
import ArrowIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/down.svg"
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
const LiveCampaignsHeader = ({campaignItem}:any) => {
  const contextcampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={`${style.accordion_header} ${contextcampaignManager.liveCampaignsAccordion === campaignItem.id ? style.active : null} d-flex align-items-center`} onClick={()=>contextcampaignManager.handleLiveCampaignsAccordion(campaignItem.id)}>
        <span className={style.icon}><img src={ArrowIcon} alt="" /></span>
        <h3>{campaignItem.campaignCategory.name}</h3>
        <span className={style.status}>{campaignItem.campaignCategory.status}</span>
        <span className={style.progress}>{campaignItem.campaignCategory.completed}</span>
        <span className={style.progress_bar}><span style={{'width': `${campaignItem.campaignCategory.completed}`}}></span></span>
    </div>
  )
}

export default LiveCampaignsHeader
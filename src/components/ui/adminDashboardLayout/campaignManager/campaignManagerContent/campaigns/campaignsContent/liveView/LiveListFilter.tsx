import style from './style.module.scss'
import FilterIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import AddIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/add.svg"
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
const LiveListFilter = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  
  return (
    <div className={`${style.filter_list_wrapper} d-flex align-items-center justify-content-end`}>
        <div className={`${style.filter_button} d-flex align-items-center justify-content-center`}>
            <span>Date Range: <strong>All Time</strong></span>
            <span><img src={FilterIcon} alt="" /></span>
        </div>
        <div className={`${style.filter_button} d-flex align-items-center justify-content-center`}>
            <span>Process: <strong>All Time</strong></span>
            <span><img src={FilterIcon} alt="" /></span>
        </div>
        <div className={`${style.filter_button} d-flex align-items-center justify-content-center`}>
            <span>Owner: <strong>All Time</strong></span>
            <span><img src={FilterIcon} alt="" /></span>
        </div>
        <div className={`${style.filter_button} d-flex align-items-center justify-content-center`}>
            <span>Status: <strong>All Time</strong></span>
            <span><img src={FilterIcon} alt="" /></span>
        </div>
        {
            contextCampaignManager.campaignsLiveViewTab === 1 ?
            <div className={`${style.create_campaign_icon} ${style.sms} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCreateContentPopType('sms')}>
                <span><img src={AddIcon} alt="" /></span>
                <span>Create SMS Campaign</span>
            </div> :
            contextCampaignManager.campaignsLiveViewTab === 2 ?
            <div className={`${style.create_campaign_icon} ${style.voice} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCreateContentPopType('voice')}>
                <span><img src={AddIcon} alt="" /></span>
                <span>Create Voice Campaign</span>
            </div> :
            <div className={`${style.create_campaign_icon} ${style.sms} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCreateContentPopType('whatsapp')}>
                <span><img src={AddIcon} alt="" /></span>
                <span>Create Whatsapp Campaign</span>
            </div>
        }
    </div>
  )
}

export default LiveListFilter
import { useContext } from 'react'
import style from './style.module.scss'
import SmsIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/message.svg"
import MicIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/mic.svg"
import WhatsAppIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/whatsapp.svg"
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import { LiveViewCampaignData } from '../Data'
const LiveViewTab = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <ul className={style.tab_wrapper}>
      {
        LiveViewCampaignData.map((item)=>{
          return(
            <li key={item.id} className={`${ contextCampaignManager.campaignsLiveViewTab === item.tabId ? style.active : null} d-flex align-items-center`} onClick={()=>contextCampaignManager.handleCampaignsLiveViewTab(item.tabId)}>
              <span className={`${style.icon} ${item.campaignType === 'sms' ? style.sms : item.campaignType === 'voice' ? style.voice : item.campaignType === 'whatsapp' ? style.whatsapp : null}`}><img src={`${item.campaignType === 'sms' ? SmsIcon : item.campaignType === 'voice' ? MicIcon : item.campaignType === 'whatsapp' ? WhatsAppIcon : null}`} alt="" /></span>
              <span>{item.campaignType}</span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default LiveViewTab
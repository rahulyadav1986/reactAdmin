import style from './style.module.scss'
import Users from "/assets/dashboard/main_dashboard/admin/campaignManager/list/users.svg"
import UpwardArrow from "/assets/dashboard/main_dashboard/admin/campaignManager/list/arrow_upward.svg"
import DownWardArrow from "/assets/dashboard/main_dashboard/admin/campaignManager/list/arrow_downward.svg"
import { ListDetailsData } from './Data'
import { useContext, useEffect } from 'react'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
const CampaignListReportCard = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  useEffect(()=>{
    contextCampaignManager.getContactReportInfo();
    console.log("contact report info",contextCampaignManager.contactReportInfo);
  },[contextCampaignManager.allCampaignLists]);
  return (
    <div className={`${style.card_wrapper}`}>
        <div className={`${style.card} d-flex flex-column align-items-center`}>
            <h2>Total Contacts</h2>
            <div className={`${style.no} d-flex align-items-center`}>
                <span className={style.icon}>
                  <img src={Users} alt="" />
                </span>
                <strong>{contextCampaignManager.contactReportInfo.contactCount}</strong>
            </div>
            <div className={`${style.direction_wrap} d-flex align-items-center justify-content-center`}>
              {
                ListDetailsData.totalAudience.direction === 'upward' ? <span><img src={UpwardArrow} alt="" /></span> : <span><img src={DownWardArrow} alt="" /></span>
              }              
              <span>
                <span className={`${style.percentage} ${ListDetailsData.totalAudience.direction !== 'upward' ? style.red : null}`}>{ListDetailsData.newContacts.moveBy}</span> 
                vs  last 7 days
              </span>
            </div>
        </div>

        <div className={`${style.card} d-flex flex-column align-items-center `}>
            <h2>New Contacts in this month</h2>
            <div className={`${style.no} d-flex align-items-center`}>
                <span className={style.icon}>
                  <img src={Users} alt="" />
                </span>
                <strong>{contextCampaignManager.contactReportInfo.contactCountInMonth}</strong>
            </div>
            <div className={`${style.direction_wrap} d-flex align-items-center justify-content-center`}>
              {
                ListDetailsData.newContacts.direction === 'upward' ? <span><img src={UpwardArrow} alt="" /></span> : <span><img src={DownWardArrow} alt="" /></span> 
              }              
              <span>
                <span className={`${style.percentage} ${ListDetailsData.newContacts.direction !== 'upward' ? style.red : null}`}>{ListDetailsData.newContacts.moveBy}</span> 
                vs  last 7 days
              </span>
            </div>
        </div>

        <div className={`${style.card} d-flex flex-column align-items-center`}>
            <h2>Total Lists</h2>
            <div className={`${style.no} d-flex align-items-center`}>
                <span className={style.icon}>
                  <img src={Users} alt="" />
                </span>
                <strong>{contextCampaignManager.allCampaignLists.length}</strong>
            </div>
           
        </div>
    </div>
  )
}

export default CampaignListReportCard
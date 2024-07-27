import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import Calendar from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/calendar.svg"
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'

const NewCampaign = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  //const [campaignForm,setCampaignForm] = useState({})
  return (
    <div className={style.form_area_wrapper}>
        <div className={style.portion}>
            <label htmlFor="ReportName">Campaign name <span className='red'>*</span></label>
            <input type="text" name="ReportName" id="ReportName" placeholder='Coupon Opt-in Campaign' className={style.form_control} />
        </div>
        <div className={style.portion}>
            <label htmlFor="list">List (Contacts)</label>
            <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                <span>Choose the list</span>
                <span><img src={DownArrow} alt="" /></span>
            </div>
            {/* <ul className={style.drop_area}>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul> */}
        </div>
        <div className={style.portion}>
            <label htmlFor="goal">Goal</label>
            <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                <span>Choose an objective  (Ex:Promote a product)</span>
                <span><img src={DownArrow} alt="" /></span>
            </div>
            {/* <ul className={style.drop_area}>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul> */}
        </div>
        <div className={style.portion}>
            <label htmlFor="Budget">Budget</label>
            <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                <span>Specify the budget for the campaign</span>
                <span><img src={DownArrow} alt="" /></span>
            </div>
            {/* <ul className={style.drop_area}>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul> */}
        </div>
        <div className={`${style.portion} d-flex justify-content-between flex-column`}>
            <label htmlFor="Budget">Campaign Timeframe</label>
            <div className={`${style.date_parent} d-flex align-items-center`}>
                <div className={style.date_wrap}>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                        <span>Start date</span>
                        <span><img src={Calendar} alt="" /></span>
                    </div>
                </div>
                <div className={style.date_wrap}>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                        <span>End date</span>
                        <span><img src={Calendar} alt="" /></span>
                    </div>
                </div>
            </div>
            
        </div>
        {
            contextCampaignManager.campaignCreateWorkFlowPop === 'voice' ?
            <div className={style.portion}>
                <label htmlFor="CampaignType">Campaign Type</label>
                <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                    <span>Inbound</span>
                    <span><img src={DownArrow} alt="" /></span>
                </div>
                {/* <ul className={style.drop_area}>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul> */}
            </div> : null
        }
        
    </div>
  )
}

export default NewCampaign
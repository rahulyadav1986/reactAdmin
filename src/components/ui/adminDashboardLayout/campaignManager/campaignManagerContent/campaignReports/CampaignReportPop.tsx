import { useContext } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
const CampaignReportPop = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={`${style.campaign_report_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className={style.ovarlay} onClick={()=>contextCampaignManager.handleCreateReportPop(false)}></div>
        <div className={`${style.main_area}`}>
          <div className={`${style.head} d-flex align-items-center justify-content-between`}>
              <h3>New Campaign Report</h3>
              <span className={style.Cross} onClick={()=>contextCampaignManager.handleCreateReportPop(false)}><img src={CrossIcon} alt="" /></span>
          </div>
          <div className={style.form_area_wrapper}>
            <div className={style.portion}>
                <label htmlFor="ListName">Report name <span className='red'>*</span></label>
                <input type="text" name="Reportname" id="Reportname" placeholder='Name your report' className={style.form_control} />
            </div>
            <div className={style.portion}>
                <label htmlFor="Description">Description</label>
                <textarea name="Description" id="Description" placeholder='Describe the report description' className={`${style.form_control} ${style.textarea}`}></textarea>
            </div>
            <div className={style.portion}>
                <label htmlFor="Campaign">Campaign</label>
                <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                    <span>Select Campaign</span>
                    <span><img src={DownArrow} alt="" /></span>
                </div>
                {/* <ul className={style.drop_area}>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul> */}
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCampaignReportList(true)}>Proceed</button>
          </div>
        </div>
        
    </div>
  )
}

export default CampaignReportPop
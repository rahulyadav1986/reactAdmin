import style from './style.module.scss'
import SmsIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/reports/sms.svg"

const CampaignReportContentStatus = () => {
  return (
    <ul className={`${style.campaign_report_content_status_wrapper} d-flex `}>
        <li>
            <p>Campaign Started on</p>
            <h2>12 Jan 2023</h2>
        </li>
        <li>
            <p>Completed On</p>
            <h2>Yesterday, 09:09am</h2>
        </li>
        <li>
            <p>Campaign Status</p>
            <span className={`${style.status} ${style.completed}`}>COMPLETED</span>
        </li>
        <li>
            <p>Campaign Type</p>
            <span className={`${style.type} d-flex align-items-center`}>
                <img src={SmsIcon} alt="" />
                <span>SMS</span>
            </span>
        </li>
    </ul>
  )
}

export default CampaignReportContentStatus
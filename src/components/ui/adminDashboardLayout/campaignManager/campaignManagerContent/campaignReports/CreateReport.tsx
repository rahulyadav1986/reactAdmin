import { useContext } from 'react'
import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/reports/add.svg"
import ReportIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/reports/report.gif"
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
const CreateReport = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={`${style.create_report_wrapper} d-flex align-items-center justify-content-center flex-column`}>
        <span><img src={ReportIcon} alt="" className={style.reportIcon} /></span>
        <h2>Craft Custom Reports</h2>
        <p>Empower your data-driven decisions with our powerful Reports for your campaigns</p>
        <div className={`${style.create_button} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCreateReportPop(true)}>
          <span><img src={AddIcon} alt="" /></span>
          <span>Create Campaign Report</span>
        </div>
    </div>
  )
}

export default CreateReport
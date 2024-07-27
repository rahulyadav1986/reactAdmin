// import { useContext } from 'react'
// import CreateReport from './CreateReport'
// import style from './style.module.scss'
// import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
// import CampaignReportPop from './CampaignReportPop'
import CampaignReportList from './campaignReportList/CampaignReportList'

const CampaignReports = () => {
  // const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    // <div className={style.campaigns_report_wrapper}>
    //   { contextCampaignManager.campaignReportList !== true ? <CreateReport /> :  <CampaignReportList /> }      
    //   { contextCampaignManager.createReportPop === true ? <CampaignReportPop /> : null }
    // </div>
    <CampaignReportList />
  )
}

export default CampaignReports
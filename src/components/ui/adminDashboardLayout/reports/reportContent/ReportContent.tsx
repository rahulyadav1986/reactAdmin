import { useContext } from "react"
import { ContextReport } from "../../../../../contexts/reportContext"
import InteractionSummary from "./interactionSummary/InteractionSummary"
import CommonHeading from "./CommonHeading"
import style from "./style.module.scss"
import AllScheduleReports from "./allScheduleReports/AllScheduleReports"

const ReportContent = () => {
  const contextReportSidebar = useContext(ContextReport)
  return (
    <>  
      {contextReportSidebar.reportHamburgar ? <div className={style.common_ovarlay} onClick={contextReportSidebar.handleReportHamburgar}></div>   : null}   
      <div className={style.report_main_content_area_wrapper}>        
        <CommonHeading />
        {
            contextReportSidebar.reportSidebarTab === 18 ? <AllScheduleReports /> : <InteractionSummary />
        }
      </div>
    </>
    
  )
}

export default ReportContent
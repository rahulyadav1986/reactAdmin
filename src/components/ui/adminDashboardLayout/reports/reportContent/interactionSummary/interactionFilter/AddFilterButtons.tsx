import { useContext } from "react"
import AddFilter from "./AddFilter"
import AddNewFilter from "./AddNewFilter"
import style from "./style.module.scss"
import GenerateIcon from "/assets/dashboard/main_dashboard/admin/reports/generate.svg"
import { ContextReport } from "../../../../../../../contexts/reportContext"
const AddFilterButtons = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <>
      {/* {        
        contextFilterReport.summaryTab === 0 ?
        <>
          { contextFilterReport.addNewFilter ? <ReportContext><AddNewFilter /></ReportContext> : null }
        </> : null
      } */}
      { contextFilterReport.addNewFilter ? <AddNewFilter /> : null }
      
      <div className={`d-flex align-items-center`}>
        <AddFilter />
        {
          contextFilterReport.summaryTab === 0 ?
          <div className={style.filter_portion}>
            <div className={`${style.generate_button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleGenerateSummaryDataView}>
              <span><img src={GenerateIcon} alt="" /></span>
              <span>Generate</span>
            </div>
          </div> : null
        }
        
      </div>
    </>
    
  )
}

export default AddFilterButtons
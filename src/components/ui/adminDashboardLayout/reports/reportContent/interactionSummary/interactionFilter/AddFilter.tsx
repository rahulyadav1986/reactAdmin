import { useContext } from 'react'
import AddFilterPop from './AddFilterPop'
import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/reports/add.svg"
import { ContextReport } from '../../../../../../../contexts/reportContext'
const AddFilter = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.filter_portion}>
      {
        contextFilterReport.summaryTab === 0 ?
        <div className={`${style.add_filter_button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleAddNewFilterPop}>
            <span><img src={AddIcon} alt="" /></span>
            <span>Add Filter</span>
        </div> : 
        <div className={`${style.add_filter_button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleAddNewFilterPop}>
            <span><img src={AddIcon} alt="" /></span>
            <span>Add Custom Filter</span>
        </div>
      }
      
      { contextFilterReport.addNewFilterPop ? <AddFilterPop /> : null }
      
    </div>
  )
}

export default AddFilter
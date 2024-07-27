
import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/down.svg"
import { ContextReport } from '../../../../../../../contexts/reportContext'
import { useContext } from 'react'
import AddNewFilterPop from './AddNewFilterPop'
const AddNewFilter = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={`${style.add_filter_buttons_area} d-flex align-items-center`}>
        <div className={style.filter_portion}>
          <label htmlFor="">Filter 1</label>
          <div className={`${style.drop_down_area} ${style.small} d-flex align-items-center justify-content-between`} onClick={contextFilterReport.handleNewAddFilterPop}>
              <span>Select...</span> 
              <img src={DownArrow} alt="" />
          </div>
          { contextFilterReport.newAddFilterPop ?  <AddNewFilterPop /> : null  }
        </div>
    </div>
  )
}

export default AddNewFilter
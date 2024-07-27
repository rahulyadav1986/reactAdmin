import { useContext } from 'react'
import style from './style.module.scss'
import ResetCrossIcon from "/assets/dashboard/main_dashboard/admin/reports/resetCross.svg"
import ResetIcon from "/assets/dashboard/main_dashboard/admin/reports/resetIcon.svg"
import { ContextReport } from '../../../../../../../contexts/reportContext'
const ResetDefaultPop = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={`${style.reset_default_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>contextFilterReport.handleResetDefaultPop(false)}></div>
        <div className={`${style.main_area} d-flex flex-column align-items-center`}>
            <span className={style.cross} onClick={()=>contextFilterReport.handleResetDefaultPop(false)}><img src={ResetCrossIcon} alt="" /></span>
            <span className={style.icon}><img src={ResetIcon} alt="" /></span>
            <h2>Reset Filters Confirmation</h2>
            <p>Are you sure you would like to clear the filters to default state?</p>
            <div className={style.button_wrap}>
                <div className={style.button} onClick={contextFilterReport.handleFinalReset}>Set to default filters</div>
                <div className={`${style.button} ${style.cancel}`} onClick={()=>contextFilterReport.handleResetDefaultPop(false)}>Cancel</div>
            </div>
        </div>
    </div>
  )
}

export default ResetDefaultPop
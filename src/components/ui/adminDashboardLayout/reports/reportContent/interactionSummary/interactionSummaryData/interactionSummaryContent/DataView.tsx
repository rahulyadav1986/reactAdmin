import style from './style.module.scss'
import Cross from '/assets/dashboard/main_dashboard/admin/reports/checkCross.svg'
import Check from '/assets/dashboard/main_dashboard/admin/reports/check.svg'
import SummaryTable from './SummaryTable'
import { useContext } from 'react'
import { ContextReport } from '../../../../../../../../contexts/reportContext'
const DataView = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <>
        <div className={`${style.summary_view_check_wrapper} d-flex align-items-center`}>
            <div className={style.check_box}>
                <input type="checkbox" name="" id="summary" />
                <label htmlFor="summary" className='d-flex align-items-center' onClick={contextFilterReport.handleSummaryCheck}>
                    <span className={`${style.check_toggle} d-flex align-items-center`}>
                        <span className={style.hide}><img src={Cross} alt="" /></span>
                        <span className={style.show}><img src={Check} alt="" /></span>
                    </span>
                    <span className={style.check_text}>
                        <span className={style.hide}>Show Summary View</span>
                        <span className={style.show}>Hide Summary View</span>
                    </span>
                </label>
            </div>
            {
                contextFilterReport.summaryCheck ? 
                <ul className={`${style.view_summary_wrapper} d-flex `}>
                <li>
                    <span>Voice Calls</span>
                    <span className={style.no}>5408</span>
                </li>
                <li>
                    <span>Talk time</span>
                    <span className={style.no}>
                    11<span className={style.time_para}>h</span> 
                    07<span className={style.time_para}>m</span> 
                    55<span className={style.time_para}>s</span> 
                    </span>
                </li>
                <li>
                    <span>Hold Time</span>
                    <span className={style.no}>
                    11<span className={style.time_para}>h</span> 
                    07<span className={style.time_para}>m</span> 
                    55<span className={style.time_para}>s</span> 
                    </span>
                </li>
                <li>
                    <span>Handle Time</span>
                    <span className={style.no}>
                    11<span className={style.time_para}>h</span> 
                    07<span className={style.time_para}>m</span> 
                    55<span className={style.time_para}>s</span> 
                    </span>
                </li>
                <li>
                    <span>Wrap up Time</span>
                    <span className={style.no}>
                    11<span className={style.time_para}>h</span> 
                    07<span className={style.time_para}>m</span> 
                    55<span className={style.time_para}>s</span> 
                    </span>
                </li>
                <li>
                    <span>Avg Handling Time</span>
                    <span className={style.no}>
                    11<span className={style.time_para}>h</span> 
                    07<span className={style.time_para}>m</span> 
                    55<span className={style.time_para}>s</span> 
                    </span>
                </li>
                </ul> : null
            }
            
        </div>
        <SummaryTable />
    </>
  )
}

export default DataView
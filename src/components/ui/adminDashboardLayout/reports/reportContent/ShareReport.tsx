import { useContext } from 'react'
import ReportTagsInput from './ReportTagsInput'
import style from './style.module.scss'
import { ContextReport } from '../../../../../contexts/reportContext'
import Cross from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
const ShareReport = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={`${style.report_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>contextFilterReport.handleSharePop(false)}></div>
        <div className={style.main_area}>
            <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                <h3>Share Report</h3>
                <span className={style.Cross} onClick={()=>contextFilterReport.handleSharePop(false)}><img src={Cross} alt="" /></span>
            </div>
            <div className={style.form_area_wrapper}>
                <div className={style.notify_area}>
                    <div className={style.portion}>
                        <span className={style.notify}>Notify people once the report is ready</span>
                        <div className={style.checkbox}>
                        <input type="checkbox" name="" id="email" />
                        <label htmlFor="email"><span></span>Email</label>
                        </div>
                        <label htmlFor="emailId">Recipients' email ids</label>
                        <ReportTagsInput placeholder="Enter Email Id" />
                    </div>
                    <div className={style.portion}>
                        <div className={style.checkbox}>
                        <input type="checkbox" name="" id="whatsapp" />
                        <label htmlFor="whatsapp"><span></span>WhatsApp</label>
                        </div>
                        <label htmlFor="WhatsApp">Recipients' WhatsApp numbers</label>
                        <ReportTagsInput placeholder="Enter WhatsApp" />
                    </div>
                </div>
            </div>
            <div className={`${style.action_wrapper_area} d-flex align-items-center justify-content-end`}>
              <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleSharePop(false)}>Cancel</div>
              <div className={`${style.button} ${style.active} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleSharePop(false)}>Share</div>
            </div>
        </div>
     </div>
  )
}

export default ShareReport
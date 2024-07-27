import { useContext } from 'react'
import style from './style.module.scss'
import { ContextReport } from '../../../../contexts/reportContext'
import Cross from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import View1 from "/assets/dashboard/main_dashboard/admin/reports/view1.png"
import View3 from "/assets/dashboard/main_dashboard/admin/reports/view3.png"
import View4 from "/assets/dashboard/main_dashboard/admin/reports/view4.png"
import ViewHoverIcon from "/assets/dashboard/main_dashboard/admin/reports/six-dot.svg"
const CustomerReports = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <>
        {
            contextFilterReport.customerReportsPop === true ? 
            <div className={`${style.customer_reports_pop_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>contextFilterReport.handleCustomerReportsPop(false)}></div>
                <div className={style.main_area}>
                    <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                        <h3>First Report</h3>
                        <span className={style.Cross} onClick={()=>contextFilterReport.handleCustomerReportsPop(false)}><img src={Cross} alt="" /></span>
                    </div>
                    <div className={style.form_area_wrapper}>
                        <div className={style.portion}>
                            <label htmlFor="ReportName">Report name <span className='red'>*</span></label>
                            <input type="text" name="ReportName" id="ReportName" placeholder='Name your report' className={style.form_control} />
                        </div>
                        <div className={style.portion}>
                            <label htmlFor="Description">Description</label>
                            <textarea name="Description" id="Description" placeholder='Describe the report description' className={`${style.form_control} ${style.textarea}`} ></textarea>
                        </div>
                        <div className={style.portion}>
                            <label htmlFor="Description">Choose the view</label>
                            <ul className={`${style.view_list_area} d-flex align-items-center`}>
                                <li className='d-flex flex-column align-items-center'>
                                    <span className={style.hover_icon}><img src={ViewHoverIcon} alt="" /></span>
                                    <img src={View1} alt="" />
                                    <h6>Tabular View</h6>
                                </li>
                                <li className='d-flex flex-column align-items-center'>
                                    <span className={style.hover_icon}><img src={ViewHoverIcon} alt="" /></span>
                                    <img src={View1} alt="" />
                                    <h6>Pivot View</h6>
                                </li>
                                <li className='d-flex flex-column align-items-center'>
                                    <span className={style.hover_icon}><img src={ViewHoverIcon} alt="" /></span>
                                    <img src={View3} alt="" />
                                    <h6>Summary</h6>
                                </li>
                                <li className='d-flex flex-column align-items-center'>
                                    <span className={style.hover_icon}><img src={ViewHoverIcon} alt="" /></span>
                                    <img src={View4} alt="" />
                                    <h6>I am not sure</h6>
                                </li>
                            </ul>
                        </div>
                        <div className={style.portion}>
                            <label htmlFor="ZuqoAI">Ask Zuqo AI</label>
                            <textarea name="ZuqoAI" id="ZuqoAI" placeholder='You can ask Zuqo AI to generate report with tabular view by taking customer performance reports' className={`${style.form_control} ${style.textarea}`} ></textarea>
                        </div>
                        <div className={`${style.button_wrap} d-flex align-items-center justify-content-end`}>
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleCustomerReportsPop(false)}>Proceed</div>
                        </div>
                    </div>
                </div>
            </div> : null
        }
        
    </>
    
  )
}

export default CustomerReports
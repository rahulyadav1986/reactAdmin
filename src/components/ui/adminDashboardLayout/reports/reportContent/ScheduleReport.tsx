import { useContext } from 'react'
import style from './style.module.scss'
import Cross from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import DateIcon from "/assets/dashboard/main_dashboard/admin/reports/date.svg"
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import TimeIcon from "/assets/dashboard/main_dashboard/admin/reports/time.svg"
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import { ContextReport } from '../../../../../contexts/reportContext'
import ReportTagsInput from './ReportTagsInput'
import { ReportTypeData, SummaryChannelFilterTimeData } from './Data'
const ScheduleReport = () => {
  const contextFilterReport = useContext(ContextReport)

  return (
     <div className={`${style.report_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>contextFilterReport.handleSchedulePop(false)}></div>
        <div className={style.main_area}>
            {
              contextFilterReport.blankOvarlay ? <div className={style.ovarlay} onClick={contextFilterReport.handleBlankOvarlay}></div> : null
            }            
            <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                <h3>Schedule Report</h3>
                <span className={style.Cross} onClick={()=>contextFilterReport.handleSchedulePop(false)}><img src={Cross} alt="" /></span>
            </div>
            <div className={style.form_area_wrapper}>
              <div className={style.portion}>
                <label htmlFor="Report Type">Report Type <span className={style.red}>*</span></label>
                <div className={style.report_tags_wrapper}>
                    <div className={style.report_tags_main_wrapper} onClick={()=>contextFilterReport.handleReportTypePop(true)}>
                        <ReportTagsInput placeholder="Enter a Words" />
                    </div>
                    {
                      contextFilterReport.reportTypePop ?
                      <div className={style.report_type_pop_wrapper}>
                        <div className={style.search_wrapper}>
                          <div className={`${style.search_box}  d-flex align-items-center`}>
                            <img src={SearchIcon} alt="" />
                            <input type="text" name="" id="" placeholder="Search reports" />
                          </div>
                        </div>
                        <div className={style.filter_check}>
                          {
                              ReportTypeData.map((item)=>{
                                  return(
                                    <div className={style.check_portion} key={item.id}>
                                        <div className={`${style.category_title} ${contextFilterReport.reportCheckSub === item.id ? style.rotate : null } d-flex align-items-center justify-content-between`} onClick={()=>contextFilterReport.handleReportCheckSub(item.id)}>
                                          <h4>{item.category.name}</h4>
                                          <img src="/assets/dashboard/main_dashboard/admin/reports/downArrow.svg" alt="" />
                                        </div> 
                                        {
                                          contextFilterReport.reportCheckSub === item.id ?
                                          <div className={style.check_box_main_wrapper}>
                                              {
                                                item.category.list.map((checkItem)=>{
                                                  return(
                                                    <div className={style.check_box_wrapper}  key={checkItem.id}>
                                                        <input type="checkbox" id={checkItem.checkId} value={checkItem.report}/>
                                                        <label htmlFor={checkItem.checkId}>
                                                            <span></span>
                                                            {checkItem.report}
                                                        </label>
                                                    </div>
                                                  )
                                                })
                                              }
                                          </div> : null
                                        }
                                    </div>
                                      
                                  )
                              })
                          }
                        </div>
                        <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                            <div className={`${style.button} d-flex align-items-center justify-content-center`}  onClick={()=>contextFilterReport.handleReportTypePop(false)}>Cancel</div>
                            <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleReportTypePop(false)}>Apply</div>
                        </div>
                      </div> : null
                    }
                    
                </div>
                
              </div>
              <div className={style.portion}>
                <label htmlFor="Run">Run</label>
                <div className={`${style.date} d-flex align-items-center`} onClick={contextFilterReport.handleRunPop}>
                  <span><img src={DateIcon} alt="" /></span> 
                  <span>{contextFilterReport.runValue}</span>
                  <span className={style.caret}><img src={DownArrow} alt="" /></span>
                </div>
                {
                  contextFilterReport.runPop ? 
                  <ul className={style.drop_area}>
                    <li onClick={contextFilterReport.handleRunValue}>Daily</li>
                    <li onClick={contextFilterReport.handleRunValue}>Weekly</li>
                    <li onClick={contextFilterReport.handleRunValue}>Monthly</li>
                  </ul> : null
                }
                
              </div>
              <div className={style.portion}>
                <label htmlFor="Time">Time</label>
                <div className={`${style.date} d-flex align-items-center`} onClick={contextFilterReport.handleTimePop}>
                  <span><img src={TimeIcon} alt="" /></span> 
                  <span>{contextFilterReport.timeValue}</span>
                  <span className={style.caret}><img src={DownArrow} alt="" /></span>
                </div>
                {
                  contextFilterReport.timePop ? 
                  <ul className={style.drop_area}>
                    {
                      SummaryChannelFilterTimeData.map((item)=>{
                        return(
                          <li key={item.id} onClick={contextFilterReport.handleTimeValue}>{item.label}</li>
                        )
                      })
                    }
                    
                  </ul> : null
                }
                
              </div>
              <div className={style.notify_area}>
                <div className={style.portion} onClick={contextFilterReport.handleReportTypePopBlank}>
                    <span className={style.notify}>Notify people once the report is ready</span>
                    <div className={style.checkbox}>
                      <input type="checkbox" name="" id="email" />
                      <label htmlFor="email"><span></span>Email</label>
                    </div>
                    <label htmlFor="emailId">Recipients' email ids</label>
                    <ReportTagsInput placeholder="Enter Email Id"  />
                </div>
                <div className={style.portion} onClick={contextFilterReport.handleReportTypePopBlank}>
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
              <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleSchedulePop(false)}>Save As Draft</div>
              <div className={`${style.button} ${style.active} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleSchedulePop(false)}>Schedule</div>
            </div>
        </div>
     </div>
  )
}

export default ScheduleReport
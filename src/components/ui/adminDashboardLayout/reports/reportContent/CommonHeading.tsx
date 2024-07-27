import style from './style.module.scss'
import { ReportSidebarData } from '../reportSidebar/Data'
import { useContext } from "react"
import { ContextReport } from "../../../../../contexts/reportContext"
import TimerIcon from "/assets/dashboard/main_dashboard/admin/reports/timer.svg"
import SentIcon from "/assets/dashboard/main_dashboard/admin/reports/sentIcon.svg"
import DownoadIcon from "/assets/dashboard/main_dashboard/admin/reports/downloadIcon.svg"
import AddIcon from "/assets/dashboard/main_dashboard/admin/reports/add.svg"
import ScheduleReport from './ScheduleReport'
import ShareReport from './ShareReport'
import { createPortal } from 'react-dom'
import HamburgarIcon from "/assets/dashboard/side_panel/hamburger.svg"
import useOutside from '../../../../../hooks/useOutside'
const CommonHeading = () => {
  const contextFilterReport = useContext(ContextReport)
  const [dropDownload, setDropDownload, refDownload] = useOutside(false)
  return (
    <>
        {
            ReportSidebarData.map((item)=>{
                return(
                    <>
                        {
                            item.menuCat.map((menu)=>{
                                return(
                                    <>
                                        {
                                            menu.subCatItem.map((subMenu)=>{
                                                return(
                                                    <>
                                                        {
                                                            contextFilterReport.reportSidebarTab === subMenu.subCatItemId ? 
                                                            <div className={`${style.common_header_area} d-flex align-items-center justify-content-between`}>
                                                                <span className={`d-flex align-items-center`}> <span className={`${style.hamburgar} `} onClick={contextFilterReport.handleReportHamburgar}><img src={HamburgarIcon} alt="" /></span> {subMenu.menuName}</span> 
                                                                
                                                                {
                                                                    contextFilterReport.reportSidebarTab === 18 ? 
                                                                    <div className={`${style.create_schedule_button} d-flex align-items-center justify-content-center`} onClick={()=>contextFilterReport.handleSchedulePop(true)}>
                                                                        <span><img src={AddIcon} alt="" /></span>
                                                                        <span>Create Schedule</span>
                                                                   </div> :
                                                                    <>
                                                                        {
                                                                            contextFilterReport.summaryDataView ?
                                                                            <div className={`${style.action_buttons_area} d-flex align-items-center`}>
                                                                                <div className={`${style.button} d-flex align-items-center`} onClick={()=>contextFilterReport.handleSchedulePop(true)}>
                                                                                    <span><img src={TimerIcon} alt="" /></span>
                                                                                    <span>Schedule</span>
                                                                                </div>
                                                                                <div className={`${style.button} d-flex align-items-center`} onClick={()=>contextFilterReport.handleSharePop(true)}>
                                                                                    <span><img src={SentIcon} alt="" /></span>
                                                                                    <span>Share</span>
                                                                                </div>
                                                                                <div className={`${style.button} ${style.download}`} ref={refDownload}>
                                                                                    <div className=' d-flex align-items-center' onClick={()=>setDropDownload(!dropDownload)} style={{'height' : '36px'}}>
                                                                                        <span><img src={DownoadIcon} alt="" /></span>
                                                                                        <span>Download</span>
                                                                                    </div>
                                                                                    {
                                                                                        dropDownload ?
                                                                                        <ul className={style.download_option_wrapper}>
                                                                                            <li>Excel</li>
                                                                                            <li>PDF</li>
                                                                                        </ul> : null
                                                                                    }
                                                                                    
                                                                                </div>
                                                                            </div> : null
                                                                        }
                                                                        
                                                                    </>
                                                                }

                                                                
                                                                
                                                            </div> : null 
                                                        }
                                                    </>
                                                    
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </>
                )
            })
        }
        {
            contextFilterReport.schedulePop === true ? createPortal(<ScheduleReport />,document.body)  : null
        }

        {
            contextFilterReport.sharePop === true ? createPortal(<ShareReport />,document.body) : null
        }
    </>   
  )
}

export default CommonHeading
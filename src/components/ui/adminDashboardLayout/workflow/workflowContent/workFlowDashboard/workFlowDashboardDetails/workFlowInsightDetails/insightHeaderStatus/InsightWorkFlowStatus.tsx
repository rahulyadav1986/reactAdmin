import style from './style.module.scss'
import { WorkflowHeaderStatusData } from './Data'
import Icon1 from "/assets/dashboard/main_dashboard/admin/insights/details/icon1.svg"
import Icon2 from "/assets/dashboard/main_dashboard/admin/insights/details/icon2.svg"
import Icon3 from "/assets/dashboard/main_dashboard/admin/insights/details/icon3.svg"
import Icon4 from "/assets/dashboard/main_dashboard/admin/insights/details/icon4.svg"
const InsightWorkFlowStatus = () => {
  return (
    <>
        <ul className={`${style.workflow_insight_status_wrap} d-flex align-items-center`}>
            {
                WorkflowHeaderStatusData.map((item)=>{
                    return(
                    <li key={item.id} className='d-flex align-items-center'>
                        <span>
                        {
                            item.type === 'Call Hits' ? <img src={Icon1} alt="" /> : 
                            item.type === 'Transferred to Agents' ? <img src={Icon2} alt="" /> :
                            item.type === 'Menus' ? <img src={Icon3} alt="" /> :
                            item.type === 'Menus Accessed' ? <img src={Icon3} alt="" /> :
                            item.type === 'Modules' ? <img src={Icon4} alt="" /> :
                            item.type === 'Modules Accessed' ? <img src={Icon4} alt="" /> :
                            item.type === 'Assignments' ? <img src={Icon2} alt="" /> :
                            item.type === 'Disconnected' ? <img src={Icon2} alt="" /> : null
                        }
                        
                        </span>
                        <span className='d-flex flex-column'>
                        <span className={style.label}>{item.type}</span>
                        <span className={style.no}>{item.value}</span>
                        </span>
                    </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default InsightWorkFlowStatus
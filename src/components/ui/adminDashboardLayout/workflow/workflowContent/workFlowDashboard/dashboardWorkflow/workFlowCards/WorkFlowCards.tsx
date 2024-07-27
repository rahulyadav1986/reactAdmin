import { Link } from 'react-router-dom'
import { DashboardInsightData } from '../../Data'
import WorkflowChart from './WorkflowChart'
import style from './style.module.scss'
import RightArrow from "/assets/dashboard/main_dashboard/admin/insights/right.svg"

const WorkFlowCards = () => {
  return (
    <div className={style.cards_area_wrapper}>
        {
            DashboardInsightData.map((item)=>{
                let sum = item.workflowList.reduce(function(prev:any, current:any) {
                return prev + current.value
                }, 0);
                return(
                <div key={item.id} className={style.card}>
                    <div className={`${style.card_header} d-flex align-items-center`}>
                        <div className={style.icon} style={{'backgroundColor' : item.primaryColor}}><img src={`/assets/dashboard/main_dashboard/admin/insights/${item.icon}`} alt="" /></div>
                        <div className='d-flex flex-column'>
                            <h2 className={style.main_heading} style={{'color' : item.primaryColor}}>{item.name}</h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    <div className={style.card_content}>
                        <h3>Worflows</h3>
                        <div className={`${style.main_wrapper} align-items-center`}>
                        <ul className={style.list_wrap}>
                            {
                                item.workflowList.map((datavalue)=>{
                                return(
                                    <li className='d-flex align-items-center justify-content-between'>
                                    <span className='d-flex align-items-center'>
                                        <span className={style.color_bg} style={{'background': `linear-gradient(180deg, ${datavalue.color1} 0%, ${datavalue.color2} 100%)`}}></span>
                                        <span>{datavalue.name}</span>
                                    </span>
                                    <span className={style.no}>{datavalue.value}</span>
                                    </li>
                                )
                                })
                            }
                        </ul>
                        <div className={style.chart_area}>
                            <div className={style.no_area}>{sum}</div>
                            <WorkflowChart key={item.id} datavalue={item.workflowList} />
                        </div>
                        </div>
                        <Link className={`${style.button} d-flex align-items-center justify-content-center`}  to={`${item.id}`}>View Details <span><img src={RightArrow} alt="" /></span></Link>
                    </div>
                </div>
                )
            })
        }
        
    </div>
  )
}

export default WorkFlowCards
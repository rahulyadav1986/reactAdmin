import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/insights/add.svg"
import CallIcon from "/assets/dashboard/main_dashboard/admin/insights/call.svg"
import SurveyIcon from "/assets/dashboard/main_dashboard/admin/insights/survey.svg"
import BotIcon from "/assets/dashboard/main_dashboard/admin/insights/chat.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/insights/edit.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/admin/insights/play.svg"
import DotsIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import { RecentWorkflow } from "../../Data"
import { Link } from 'react-router-dom'

const RecentWorkflows = () => {
  return (
    <div className={style.recent_workflow_area_wrapper}>
        <div className={`${style.head} d-flex align-items-center justify-content-between`}>
        <h2>Recent Workflows</h2>
        <Link to={''}>View All <span><img src={AddIcon} alt="" /></span></Link>
        </div>
        <ul className={style.recent_workflows_table_wrap}>
        {
            RecentWorkflow.map((item)=>{
            return(
                <li>
                    <div className={`${style.details} d-flex align-items-center`}>
                        <div className={`${style.icon} ${item.type === 'IVR' ? style.ivr : item.type === 'Survey' ? style.survey : item.type === 'Bot' ? style.bot : null}`}>
                            <img src={`${item.type === "IVR" ? CallIcon : item.type === "Survey" ? SurveyIcon : item.type === "Bot" ? BotIcon : null}`} alt="" />
                        </div>
                        <div>
                            <div className='d-flex align-items-center'>
                                <h4>{item.message}</h4>
                                <span className={`${style.status} ${item.status === 'DRAFT' ? style.draft : item.status === 'LIVE' ? style.live : item.status === 'REVIEW' ? style.review : null}`}>{item.status}</span>
                                <span>{item.date}</span>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    <div className={`${item.deployedStatus === true ? style.deployed : style.notdeployed}`}>
                        <span>{item.deployed}</span>
                    </div>
                    <ul className={style.actions}>
                        <li>
                            <span><img src={EditIcon} alt="" /></span> 
                            <span>Edit</span>
                        </li>
                        <li>
                            <span><img src={PlayIcon} alt="" /></span> 
                            <span>test</span>
                        </li>
                        <li>
                            <span><img src={DotsIcon} alt="" /></span> 
                            <span>More</span>
                        </li>
                    </ul>
                </li>
            )
            })
        }
            
        </ul>
    </div>
  )
}

export default RecentWorkflows
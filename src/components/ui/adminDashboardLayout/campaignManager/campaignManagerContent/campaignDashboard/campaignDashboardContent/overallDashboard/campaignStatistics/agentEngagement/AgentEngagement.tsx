import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import { AgentEngagementData } from './Data'

const AgentEngagement = () => {
  const AgentEngagementStatus = AgentEngagementData.map((engData)=>{
    return(
      <div className={style.portion} key={engData.id}>
        <h5>{engData.label}</h5>
        <span className={style.status}><span>{engData.value}</span></span>
      </div>
    )
  })
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Agent Engagement</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.performance_details}>
        {AgentEngagementStatus}
      </div>
    </>
  )
}

export default AgentEngagement
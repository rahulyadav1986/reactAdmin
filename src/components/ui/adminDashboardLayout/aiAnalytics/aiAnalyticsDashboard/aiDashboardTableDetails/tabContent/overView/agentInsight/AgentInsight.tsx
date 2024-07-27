import style from './style.module.scss'
import CustomerExtraDetails from './customerExtraDetails/CustomerExtraDetails'
import UserDetails from './userDetails/UserDetails'
import StatusType from './statusType/StatusType'
const AgentInsight = () => {
    
  return (
    <div className={style.agent_insight_wrapper}>
        <h2>AGENT Insights</h2>
        <UserDetails />
        <StatusType />
        <CustomerExtraDetails />
    </div>
  )
}

export default AgentInsight
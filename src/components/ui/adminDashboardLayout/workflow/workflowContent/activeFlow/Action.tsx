import { useContext } from 'react'
import MorePop from './MorePop'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import DotsIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/vertical.svg"
const Action = () => {
  const contextWorkFlow = useContext(ContextWorkflow)
  return (
    <>
        <button onClick={()=>contextWorkFlow.handleActiveFlowTableDataPop(true)}>
            <span><img src={DotsIcon} alt="" /></span> 
            <span>More</span>
        </button>
        {
            contextWorkFlow.activeFlowHasTableDataPop === true ? 
            <MorePop /> : null
        }
    </>
  )
}

export default Action
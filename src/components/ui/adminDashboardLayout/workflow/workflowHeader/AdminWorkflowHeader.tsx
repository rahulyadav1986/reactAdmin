import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/add.svg"
import FilteIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import RefreshIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/refresh.svg"
import { ContextWorkflow } from '../../../../../contexts/workflowContext'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import ActiveWorkFlowStepPop from '../workflowContent/activeWorkFlowStepPop/ActiveWorkFlowStepPop'
const AdminWorkflowHeader = () => {
  const contextWorkFlow =  useContext(ContextWorkflow)
  return (
    <div className={`${style.admin_workflow_header} d-flex align-items-center justify-content-between`}>
       <div className={`${style.work_flow_header_area} d-flex align-items-center justify-content-between`}>
          <h1>Workflows</h1>
          <div className={`${style.filter_wrap_area} d-flex align-items-center`}>
            <div className={`${style.filter_button_area} d-flex align-items-center`}>
              <span className={style.refresh}><img src={RefreshIcon} alt="" /></span>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>Type: <strong>Any</strong> </span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>Status: <strong>Any</strong> </span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>Assigned by: <strong>Any</strong> </span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>Assigne : <strong>You & 2more</strong> </span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>Channel : <strong>All</strong> </span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
              <div className={`${style.filter_button} d-flex align-items-center`}>
                <span>More Filters</span>
                <span><img src={FilteIcon} alt="" /></span>
              </div>
            </div>
            
            <div className={`${style.new_workflow_button} d-flex align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkFlowPop(true)}>
              <span><img src={AddIcon} alt="" />
              </span> New Workflow</div>
            </div>
            {
              contextWorkFlow.newWorkflowPop === true ? createPortal(<ActiveWorkFlowStepPop />, document.body): null
            }
       </div>
    </div>
  )
}

export default AdminWorkflowHeader
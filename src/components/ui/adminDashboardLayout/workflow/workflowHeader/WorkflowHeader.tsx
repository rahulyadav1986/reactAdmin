import ActionIcons from './actionIcons/ActionIcons'
import Bedcrumbs from './bedcrumbs/Bedcrumbs'
import style from './style.module.scss'
import WorkflowTab from './workflowTabs/WorkflowTab'
import { useContext } from 'react'
import { ContextWorkflow } from '../../../../../contexts/workflowContext'
import { useLocation } from 'react-router-dom'
import AdminWorkflowHeader from './AdminWorkflowHeader'

const WorkflowHeader = () => {
  const contextWorkFlow = useContext(ContextWorkflow)
  const location = useLocation()
  const WorkflowStudioLocation = location.pathname.indexOf('/workflow-studio')>=0
  const CommonLocation = location.pathname.indexOf('/platform-configuration')>=0 || location.pathname.indexOf('/reports')>=0 || location.pathname.indexOf('/campaign-manager')>=0
  console.log(`"Platform confir" ${CommonLocation}`)
  return (
    <>
      {
        contextWorkFlow.sidebarTab === 0 ? null :
        contextWorkFlow.sidebarTab === 1 ? 
        <>
          {
            contextWorkFlow.finalWorkflowfromNewPop === true ?
            <div className={`${style.work_flow_header_area} d-flex align-items-center justify-content-between`}>
              <div className={`${style.left} d-flex align-items-center`}>
                  <Bedcrumbs />
                  <WorkflowTab />
              </div>
              <ActionIcons /> 
            </div> : 
            <>
              {
                CommonLocation === true ? 
                <AdminWorkflowHeader /> : null
              }
              {
                WorkflowStudioLocation === true ? 
                <div className={`${style.work_flow_header_area} d-flex align-items-center justify-content-between`}><h1>Workflows</h1></div> : null
              }
            </>
          }
          
        </> : null
      }
      
    </>
    
    
  )
}

export default WorkflowHeader
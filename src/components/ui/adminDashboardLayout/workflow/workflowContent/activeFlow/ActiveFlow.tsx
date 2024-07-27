
import ActiveFlowContent from './ActiveFlowContent'
import SidebarTab from './SidebarTab'
import style from './style.module.scss'
const ActiveFlow = () => {
  return (
    <div className={`${style.active_workflow_wrapper} d-flex`}>
        <SidebarTab />
        <ActiveFlowContent />
        
    </div>
  )
}

export default ActiveFlow
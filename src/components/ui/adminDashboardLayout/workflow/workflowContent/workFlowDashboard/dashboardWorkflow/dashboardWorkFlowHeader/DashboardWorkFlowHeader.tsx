import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/add.svg"
import BlackAddIcon from "/assets/dashboard/main_dashboard/admin/insights/black_add.svg"
import ListIcon from "/assets/dashboard/main_dashboard/admin/insights/list.svg"
import DownArrow from "/assets/dashboard/main_dashboard/admin/insights/down.svg"
import { ContextWorkFlowInsight } from '../../../../../../../../contexts/workFlowInsightContext'
import { useContext } from 'react'
import { ContextWorkflow } from '../../../../../../../../contexts/workflowContext'
import useOutside from '../../../../../../../../hooks/useOutside'
const DashboardWorkFlowHeader = () => {
  const contentWorkFlowIntent = useContext(ContextWorkFlowInsight)
  const contextWorkFlow =  useContext(ContextWorkflow)
  
  
  const [drop, setDrop, ref] = useOutside(false)

  return (
    <div className={`${style.heading_wrapper} d-flex align-items-center justify-content-between`}>
        <div className={`${style.left} d-flex flex-column`}>
            <h2>Workflow Studio Insights Dashboard</h2>
            <p>Unlock Real-time Performance Metrics and Analytics for Your Workflows. Monitor, Optimize, and Excel!</p>
        </div>
        <div className={`${style.right} d-flex align-items-center`}>
            <div className={`${style.intents_drop_down}`}  ref={ref}>
                <div className={`${style.main_label_button} d-flex align-items-center justify-content-between`} onClick={()=>setDrop(!drop)}>
                    <span>Intents</span>
                    <span><img src={DownArrow} alt="" /></span>
                </div>
                {
                    drop ?
                    <ul className={style.drop_down_wrapper}>
                        <li onClick={()=>contentWorkFlowIntent.handleViewIntent(true)}>
                            <span><img src={ListIcon} alt="" /></span>
                            <span>View Intents</span>
                        </li>
                        <li onClick={()=>contextWorkFlow.handleCreateIntent(true)}>
                            <span><img src={BlackAddIcon} alt="" /></span>
                            <span>New Intent</span>
                        </li>
                    </ul> : null
                }
                
            </div>
            <div className={`${style.new_workflow_button } d-flex align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkFlowPop(true)}>
                <span><img src={AddIcon} alt="" /></span> New Workflow
            </div>
        </div>
    </div>
  )
}

export default DashboardWorkFlowHeader
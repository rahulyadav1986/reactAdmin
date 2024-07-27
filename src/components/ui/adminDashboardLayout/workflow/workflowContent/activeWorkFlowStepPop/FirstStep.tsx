import {useContext} from "react"
import style from './style.module.scss'
import { ChooseWorkflowList } from './Data'
import { ContextWorkflow } from "../../../../../../contexts/workflowContext"
const FirstStep = () => {
  const contextWorkFlow = useContext(ContextWorkflow)
  return (
    <>
        <h1>What kind of workflow you want to build?</h1>
        <ul className={style.choose_workflow_list}>
        {
            ChooseWorkflowList.map((item)=>{
            return(
                <li key={item.id} className={`${style.portion} d-flex align-items-center`} onClick={()=>{contextWorkFlow.handleNewWorkflowPopSecondStep(true,item.label)}}>
                    <span><img src={`/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/${item.icon}`} alt="" /></span>
                    <span>
                        <h5>{item.label}</h5>
                        <p>{item.text}</p>
                    </span>
                </li>
            )
            })
        }
        </ul>
        <div className={`${style.back_button} align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkflowPopBack(false)}>Back</div>
    </>
  )
}

export default FirstStep
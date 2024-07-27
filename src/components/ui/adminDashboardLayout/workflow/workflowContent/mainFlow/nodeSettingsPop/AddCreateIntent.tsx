import {useContext} from "react"
import style from './style.module.scss'
import SeacrIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/search.svg"
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext';
import AddIntent from "./AddIntent";
const AddCreateIntent = () => {
  const contextWorkflow = useContext(ContextWorkflow)
  return (
    <div className={`${style.add_create_intent} d-flex align-items-center`}>
        <div className={`${style.wrap} d-flex align-items-center justify-content-between`} onClick={contextWorkflow.handleAddIntentPop}>
            <span>Add or create an Intent</span>
            <span><img src={SeacrIcon} alt="" /></span>
        </div>
        {/* {
            contextWorkflow.addIntentPop ? <AddIntent /> : null
        } */}
        <AddIntent />
    </div>
  )
}

export default AddCreateIntent
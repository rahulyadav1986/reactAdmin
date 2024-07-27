import style from './style.module.scss'
import ImportIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/import.svg"
import WindowsIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/windows.svg"
import ServerIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/addContacts/api.svg"
import AddContactsPop from './AddContactsPop'
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import ActiveWorkFlowStepPop from '../../../workflow/workflowContent/activeWorkFlowStepPop/ActiveWorkFlowStepPop'
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import { createPortal } from 'react-dom'

const AddContacts = ({onDataParse}:any) => {
    console.log("on data parse",onDataParse);
  const contextCampaignManager = useContext(ContextCampaignManager)
  const contextWorkFlow = useContext(ContextWorkflow);
  return (
    <div className={style.add_contacts_wrapper}>
        <div className={style.head}>
            <h3>Add Contacts</h3>
            <h2>How would you like to  add contacts to this list?</h2>
            <p>You must have permission to market to imported contacts, and each contact must contain an email address</p>
        </div>
        <div className={style.card_wrapper}>
            <div className={style.card} onClick={()=>contextCampaignManager.handleImportContactsPop("file")}>
                <div className={style.icon}>
                    <img src={ImportIcon} alt="" />
                </div>
                <h4>Import from a file</h4>
                <p>Import contacts from csv or xls file or tab delimited text file<br /><span>Sample File</span></p>
            </div>
            <div className={style.card} onClick={()=>contextCampaignManager.handleImportContactsPop("manual")}>
                <div className={style.icon}>
                    <img src={WindowsIcon} alt="" />
                </div>
                <h4>Add Contacts Manually</h4>
                <p>Create contacts in bulk using an interface</p>
            </div>
            <div className={style.card} onClick={contextWorkFlow.handleWorkflowPopfromCampaign} >
                <div className={style.icon}>
                    <img src={ServerIcon} alt="" />
                </div>
                <h4>Using API</h4>
                <p>Import contacts from external service that uses API information</p>
            </div>
        </div>
        { contextCampaignManager.importContactsPop === "file" ? <AddContactsPop onDataParse={onDataParse}/> : null}
        {
            contextWorkFlow.newWorkflowPop ? 
            createPortal(<ActiveWorkFlowStepPop />, document.body ) :  null
          }
    </div>
  )
}

export default AddContacts
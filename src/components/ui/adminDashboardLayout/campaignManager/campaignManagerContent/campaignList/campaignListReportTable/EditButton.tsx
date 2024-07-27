
import { useContext } from 'react'
import EditIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/edit.svg'
import EditLockIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/editLock.png'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
const EditButton = ({toast}:any) => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <>
    {
        !contextCampaignManager.inlineEdit ? <img  onClick={()=>{contextCampaignManager.handleInlineEdit(true), toast("You Can Edit Table Row")}} src={EditIcon} alt="" /> : <img  onClick={()=>{contextCampaignManager.handleInlineEdit(false), toast("You Can't Edit Table Row")}} src={EditLockIcon} alt="" />
    }
    </>
  )
}

export default EditButton
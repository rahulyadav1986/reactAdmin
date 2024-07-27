import style from './style.module.scss'
import FilterButtons from './FilterButtons'
import CampaignListTable from './CampaignListTable'
import { useCallback, useContext, useState } from 'react'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import NewContactPop from "../NewContactPop"
import AddContactsPop from '../AddContactsPop'
const CampaignListReportTable = ({onDataParse,backToParent}:any) => {
  console.log("Campaign list report table");
  const contextCampaignManager = useContext(ContextCampaignManager);
  const addTypeSelectHandler = useCallback((type: any) => {
    //if (type == "file") {
      contextCampaignManager.handleImportContactsPop(type);
   // }
  }, [contextCampaignManager.importContactsPop]);
  const [isEditing,setIsEditing] = useState(null);
  return (
    <div className={style.campaign_report_area_wrapper}>
      <FilterButtons isEditing={isEditing}  onEditHandler={setIsEditing}/>
      <CampaignListTable backToParent={backToParent} onEditHandler={setIsEditing} editId={isEditing}/>
     
      {contextCampaignManager.campaignNewContactsfromSubList === true ? <NewContactPop onTypeSelect={addTypeSelectHandler} /> : null}

      {contextCampaignManager.importContactsPop == "file" ? <AddContactsPop onDataParse={onDataParse} /> : null}
    </div>

  )
}

export default CampaignListReportTable
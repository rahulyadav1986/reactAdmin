import { useCallback, useContext, useEffect } from 'react'
import style from './style.module.scss'
import AddNode from '/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/table_add.svg'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import LinkedCampaignsList from './linkedCampaingsList/LinkedCampaignsList'
const LinkedCampaings = ({ linkedCampaigns,listItem,campaignNameList }: any) => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  useEffect(()=>{
    console.log("listItem obj",listItem,campaignNameList);
  },[listItem]);
  const onCampaignAddHandler = useCallback((id:string|number)=>{
    if(contextCampaignManager.campaignNodePop == "")
    {
      contextCampaignManager.handleCampaignNodePop(id);
    }
    else if(contextCampaignManager.campaignNodePop == id)
    {
      contextCampaignManager.handleCampaignNodePop("");
    }
    else
    {
      contextCampaignManager.handleCampaignNodePop(id);
    }
  },[contextCampaignManager.campaignNodePop]);
  const onCampaignSelection = useCallback((selectedList:number[])=>{
    console.log("selected list",selectedList);
    listItem['linkedCampaigns'] = selectedList;
    contextCampaignManager.handleAddEditCampaignList(listItem);
    contextCampaignManager.allCampaigns.map((el)=>{
     if(selectedList.indexOf(el.id) >= 0)
     {
        if(el.list.indexOf(listItem.id) < 0)
        {
          el['list'].push(listItem.id);
          contextCampaignManager.handleAddEditCampaigns(el);
        }
     }
     else
     {
      if(el.list.indexOf(listItem.id) >= 0)
        {
          el['list'] = el['list'].filter((item:any)=>item != listItem.id);
          contextCampaignManager.handleAddEditCampaigns(el);
        }
     }
    });
  },[listItem,contextCampaignManager.handleAddEditCampaignList,contextCampaignManager.allCampaigns,contextCampaignManager.handleAddEditCampaigns]);
  return (
    <div className={style.linked_campaings}>
      {linkedCampaigns.length > 0 && <span className={style.display}>{campaignNameList[linkedCampaigns[0]] != undefined ? campaignNameList[linkedCampaigns[0]]:'Campaign 1'} {linkedCampaigns.length > 1 ? '& ' + (linkedCampaigns.length - 1) + ' more' : null}</span>}
      <span className={style.add_icon} onClick={()=>onCampaignAddHandler(listItem.id)}><img src={AddNode} alt="" /></span>
      {contextCampaignManager.campaignNodePop == listItem.id ? <LinkedCampaignsList listItem={listItem} campaignSelectionHandler={onCampaignSelection}/> : null}

    </div>
    
  )
}

export default LinkedCampaings
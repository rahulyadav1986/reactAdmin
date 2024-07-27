import { useCallback, useContext, useState } from 'react'
import style from './style.module.scss'
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
const LinkedCampaignsList = ({listItem,campaignSelectionHandler}:any) => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  const [selectedList,setSelectedList] = useState(listItem['linkedCampaigns']);
  const [searchItem, setSearchItem] = useState('');
  const onSelectAllCheck = useCallback((event: any) => {
    setSearchItem("");
    setSelectedList([]);
    if (event.target.checked) {
       const allIdArr = contextCampaignManager.allCampaigns.map((el)=>(el.type == listItem.purpose || listItem.purpose == "general")?el.id:false);
       setSelectedList(allIdArr);
    }
}, [searchItem, selectedList]);
  const onselectHandler = useCallback((event:any,elID:number)=>{
   // alert(event.target.checked);
    if(event.target.checked == true)
    {
        setSelectedList((selectedList:any) => [...selectedList, elID]);
    }
    else
    {
        setSelectedList((selectedList:any) => selectedList.filter((el:any) => el != elID));
    }
  },[selectedList]);


  return (
    <>
        <div className="overlay" onClick={()=>contextCampaignManager.handleCampaignNodePop("")}></div>
        <div className={style.skill_drop_area_wrapper}>
            <div className={style.top_area}>
                <div className={`${style.search_box} d-flex align-items-center`}>
                    <img src={SearchIcon} alt="" />
                    <input type="text" name="searchItem"  value={searchItem} onChange={(event)=>setSearchItem(event.target.value)} id="" placeholder='Search skills' />
                </div>
                <div className={style.check_box_wrapper}>
                    <input type="checkbox" name="" id="selectAll" onChange={onSelectAllCheck}/>
                    <label htmlFor="selectAll">
                        <span></span>
                        Select All
                    </label>
                </div>
            </div>
            <div className={style.filter_area}>
                {
                    contextCampaignManager.allCampaigns.map((item)=>{
                        return(
                            ((item.type == listItem.purpose || listItem.purpose == "general") && (searchItem == "" || (searchItem != "" && listItem.listname.indexOf(searchItem) >= 0)) ) && <div className={style.check_box_wrapper} key={item.name}>
                                <input type="checkbox" id={item.name} name={item.name} value={item.id}  onChange={(event)=>onselectHandler(event,item.id)}  checked={selectedList.indexOf(item.id) >= 0?true:false}/>
                                <label htmlFor={item.name}>
                                    <span></span>
                                    {item.name}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleCampaignNodePop("")}>Cancel</div>
                <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={()=>{campaignSelectionHandler(selectedList),contextCampaignManager.handleCampaignNodePop("")}}>Apply</div>
            </div>
        </div>
    </>
  )
}

export default LinkedCampaignsList
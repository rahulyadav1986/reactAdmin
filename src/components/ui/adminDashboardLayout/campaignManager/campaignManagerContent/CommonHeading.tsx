import { useCallback, useContext, useEffect, useState } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../contexts/campaignManagerContext'
import { CampaignManagerSidebarData } from '../campaignManagerSidebar/Data'
import HamburgarIcon from "/assets/dashboard/side_panel/hamburger.svg"
const CommonHeading = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <>
        {
            CampaignManagerSidebarData.map((menu)=>{
                return(
                    <>
                        {                            
                            menu.menuList.map((subMenu)=>{
                                return(
                                    <>
                                        {
                                            contextCampaignManager.campaignManagerSidebarTab === subMenu.tabId ?
                                            <div className={style.common_header_area}>
                                                <span className={`${style.hamburgar} `} onClick={contextCampaignManager.handleCampaignHamburgar}><img src={HamburgarIcon} alt="" /></span>
                                                {
                                                    subMenu.tabId === 1 ? "Campaigns Overview" :
                                                    subMenu.tabId === 2 ? "Campaigns Dashboard" :
                                                    subMenu.tabId === 5 ? "Campaign Workflow Studio" :
                                                    subMenu.tabId === 4 ? <ListHeading /> :
                                                    subMenu.tabId === 6 ? <ReportHeading /> :
                                                    <span dangerouslySetInnerHTML={{ __html: subMenu.menuName }}/>
                                                }
                                            </div> : null
                                        }
                                    </>
                                )
                            })
                        }
                    </>
                )
            })
        }
    </>
    
  )
}

export default CommonHeading

export const ListHeading = ()=>{
    const contextCampaignManager = useContext(ContextCampaignManager);
    const getCampaignData = useCallback((id: any) => {
        if (id != "" && id != undefined) {
            let selectedObj: any = {};
            contextCampaignManager.allCampaignLists.forEach((campaigns, index: any) => {
                        if (campaigns.id == id) {
                            selectedObj = campaigns;
                        }
                if (index == contextCampaignManager.allCampaignLists.length - 1) {
                    console.log("selected obj heading", selectedObj);
                    // return selectedObj;
                    setCampaignInfo(selectedObj);
                }
            });
        }
        else {
            //return {};
            setCampaignInfo({ listname: "" });
        }
    }, [contextCampaignManager.allCampaignLists]);

    const [campaignInfo,setCampaignInfo] = useState({listname:""});
    useEffect(()=>{
        getCampaignData(contextCampaignManager.selectedCampaignList);
        console.log("Heading campaign list",contextCampaignManager.selectedCampaignList);
       
    },[contextCampaignManager.selectedCampaignList]);
    return(
        <>  
            {
                contextCampaignManager.finalImportDoc !== true ? 
                contextCampaignManager.addContact !== true ? 'List' :
                <>
                    <span className={style.list_parent} onClick={contextCampaignManager.handleSetAddContactsFromList}>List</span> 
                    <span className={style.listname}>/ <span>{campaignInfo.listname} </span></span>
                </> 
                :
                <>
                    <span className={style.list_parent} onClick={contextCampaignManager.handleSetAddContactsFromList}>List</span> 
                    <span className={style.listname}>/ <span>{campaignInfo.listname} </span></span>
                </>
            } 
            
        </>
    )
}


export const ReportHeading = ()=>{
    const contextCampaignManager = useContext(ContextCampaignManager)
    return(
        <>
            {
                contextCampaignManager.campaignReportList !== true ? 'Reports' :
                <>
                    <span className={style.list_parent} onClick={contextCampaignManager.handleSetAddContactsFromReport}>Reports</span> 
                    <span className={style.listname}>/ <span>Creditcard report</span></span>
                </>
            }
        </>
        
    )
}
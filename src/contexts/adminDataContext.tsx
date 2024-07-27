import { ReactNode, createContext, useState } from "react";
type ContentProps = {
    children: ReactNode;
}
export const ContextAdminData = createContext({
    allWorkflowList: new Array(),
    handleWorkFlowList:(_item:any)=>{},

    allCampaignsList: new Array(),
    handleAllCampaignList: (_item:any)=>{},

    allContactList: new Array(),
    handleAllContactList:(_item:any)=>{}

    
});
export const AdminDataContext = (props: ContentProps) => {
    const [allWorkflowList,setAllWorkFlowList] = useState(new Array());
    const handleWorkFlowList = (item:any)=>{
        setAllWorkFlowList([...allWorkflowList,item]);
    };
    // const getInitialCampaignList = ()=>{
    //     if(localStorage.getItem("campaigns") != undefined && localStorage.getItem("campaigns") != null)
    //     {
    //         let campaignString:any = localStorage.getItem("campaigns");
    //         let campaignArr:any = JSON.parse(campaignString);
    //         if(campaignArr.length > 0)
    //         {
    //             return campaignArr;
    //         }
    //         else
    //         {
    //             return new Array();
    //         }

    //     }
    //     else
    //     {
    //         return new Array();
    //     }
    // };
    const [allCampaignsList,setAllCampaignLists] = useState(new Array());
    const handleAllCampaignList = (_item:any)=>{
        //console.log("all campaigns e",item);
        if(localStorage.getItem("campaigns") != null)
        {
            let item:any = localStorage.getItem("campaigns");
            setAllCampaignLists(JSON.parse(item));
            //alert(JSON.stringify(item));
        }
        
    };

    const [allContactList,setAllContactList] = useState(new Array());
    const handleAllContactList = (item:any)=>{
        setAllContactList([...allContactList,item]);
    };
    return (<ContextAdminData.Provider value={{
        allWorkflowList,
        handleWorkFlowList,

        allCampaignsList,
        handleAllCampaignList,

        allContactList,
        handleAllContactList
    }}
    >
         {props.children}
    </ContextAdminData.Provider>)
}
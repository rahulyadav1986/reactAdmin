
import { ReactNode, SetStateAction, createContext,  useState } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextPlatformConfiguration = createContext({
    platformConfigurationTab: 0,
    handlePlatformConfigurationTab: (_id:any) =>{},

    createCallScript: false,
    handleCreateCallScript:(_id:any) =>{},

    masterScript: "",
    handleMasterScript:(_id:any) =>{},

    newScriptPop: false,
    handleNewScriptPop: (_id:any) =>{},

    advertisement: true,
    handleAdvertisement: (_id:any) =>{},

    skillDrop: "",
    handleSkillDrop: (_id:any)=>{},

    callScriptInputValue: { scriptName: "", scriptDescription:"" },
    onChangeHandleInputData:(_e:any)=>{},

    handleSubmitCallScript: (_e:any) =>{},

    allScripts:new Array(),

    manageScriptInfo:(_item:any)=>{},
    deleteScriptInfo:(_id:any)=>{},


    allMasterScripts: new Array(),
    manageMasterScripts: (_item:any)=>{},
    deleteMasterScript:(_id:any)=>{},

    platFormUserTab: 0,
    handlePlatFormUserTab:(_id:any)=>{},

    hamburgarSidebarToggle: false,
    handleHamburgarSidebarToggle: (_id:any)=>{},

    recentAddUserlist: null,
    handleRecentAddUserList: (_id:any)=>{}
    


   

});

export const PlatformConfigurationContext = (props: ContentProps)=> {
    
    const [platformConfigurationTab, setPlatformConfigurationTab] = useState(0)
    const handlePlatformConfigurationTab = (id:any)=>{
        setPlatformConfigurationTab(id)
        setHamburgarSidebarToggle(false)
        if(id === 2){
            setAddUserList(null)
        }
    }

    const [createCallScript, setCreateCallScript] = useState(false)
    const handleCreateCallScript = (id:any)=>{
        setCreateCallScript(id)
    }


    const [masterScript, setMasterScript] = useState("")
    const handleMasterScript = (id:any)=>{
        setMasterScript(id)
    } 

    const [newScriptPop, setNewScriptPop] = useState(false)
    const handleNewScriptPop = (id:any)=>{
        setNewScriptPop(id)
    }

   
     
    const [advertisement, setAdvertisement] = useState(true)
    const handleAdvertisement = (id:any)=>[
            setAdvertisement(id)
    ]

    const [skillDrop, setSkillDrop] = useState("")
    const handleSkillDrop = (id:any)=>{
        setSkillDrop(id)
        console.log(id)
    }

    const [callScriptInputValue, setCallScriptInputValue] = useState({
        scriptName: "",
        scriptDescription:""
    })

    const onChangeHandleInputData = (e:any)=>{
        setCallScriptInputValue({...callScriptInputValue,[e.target.name]:e.target.value})
        console.log(callScriptInputValue)
    }

    const [callScriptStoreValue, setCallScriptStoreValue]: any[] = useState([])

    const handleSubmitCallScript = (e: any)=>{
        e.preventDefault();
        setCallScriptStoreValue([
            ...callScriptStoreValue, callScriptInputValue
        ]);
        console.log(callScriptInputValue)
    }
    const [allScripts,setAllScripts] = useState(new Array());
    
    const manageScriptInfo = (item:any)=>{
        if(item.id != undefined && item.id != null)
        {
            console.log("selected item 1",item,allScripts);
            setAllScripts((script)=>{
                script.map((el,i)=>{
                    console.log(el.id,item.id)
                    if(el.id == item.id)
                    {
                        console.log("selected item",item);

                        script[i] = item;
                    }
                });
                return script;
            });
            return item.id;
        }
        else
        {
            item.id = allScripts.length+1;
            setAllScripts([...allScripts,item]);
            return item.id;
        }

    };

    const deleteScriptInfo = (id:any)=>{
        setAllScripts((script)=>{
            let scriptArr = script.filter((el)=>el.id != id);
           // console.log("script list",scriptArr);
            return scriptArr;
        });
    };
   

    const [allMasterScripts,setAllMasterScripts] = useState(new Array());
    const manageMasterScripts = (item:any)=>{
        if(item.id != undefined && item.id != null)
        {
            console.log("master item",item);
            setAllMasterScripts((script)=>{
                script.map((el,i)=>{
                    if(el.id == item.id)
                    {
                        console.log(el,item);
                        script[i] = item;
                        if(item.weightage  != el.weightage)
                        {
                            onWeightageChangeHandler(script[i]);
                        }
                    }
                });
                return script;
            });
            
        }
        else
        {
            item.id = allMasterScripts.length+1;
            setAllMasterScripts([...allMasterScripts,item]);
        }
    };

    const deleteMasterScript = (id:any)=>{
        setAllMasterScripts((script)=>{
            let scriptArr = script.filter((el)=>el.id != id);
            //console.log("script list",scriptArr);
            return scriptArr;
        });
    };

    const onWeightageChangeHandler = (script:any)=>{
        console.log("weight ",script,allScripts,allMasterScripts);
        allScripts.map((el)=>{
            if(el.sectionIds.length > 0)
            {
                let weightage = 0;
                el.sectionIds.map((sectionId:any,index:any)=>{
                    let selectedSection:any = allMasterScripts.filter((item)=>item.id == sectionId);
                    console.log("selected section",selectedSection);
                    if(selectedSection.length > 0)
                    {
                        weightage += selectedSection[0].weightage;
                    }
                    if(index == el.sectionIds.length - 1)
                    {
                        manageScriptInfo({...el,...{weightage:weightage}});
                    }
                });
            }
        });

    };


    const [platFormUserTab, setPlatFormUserTab] = useState(0)
    const handlePlatFormUserTab = (id:any)=>{
        setPlatFormUserTab(id)
    }


    const [hamburgarSidebarToggle, setHamburgarSidebarToggle] = useState(false)
    const handleHamburgarSidebarToggle = (id:any)=>{
        setHamburgarSidebarToggle(id)
    }

    const [recentAddUserlist, setAddUserList] = useState(null)
    const handleRecentAddUserList = (id: SetStateAction<any>)=>{
        setAddUserList(id)
        
        
    }

    

    return (
        <ContextPlatformConfiguration.Provider value={{
            platformConfigurationTab,
            handlePlatformConfigurationTab,

            createCallScript,
            handleCreateCallScript,

            masterScript,
            handleMasterScript,

            newScriptPop,
            handleNewScriptPop,

            advertisement,
            handleAdvertisement,

            skillDrop,
            handleSkillDrop,

            callScriptInputValue,
            onChangeHandleInputData,

            handleSubmitCallScript,
            allScripts,
            manageScriptInfo,
            deleteScriptInfo,
           
            allMasterScripts,
            manageMasterScripts,
            deleteMasterScript,

            platFormUserTab,
            handlePlatFormUserTab,

            hamburgarSidebarToggle,
            handleHamburgarSidebarToggle,

            recentAddUserlist,
            handleRecentAddUserList
            

            
        }}>
            {props.children}
        </ContextPlatformConfiguration.Provider>
    );
}
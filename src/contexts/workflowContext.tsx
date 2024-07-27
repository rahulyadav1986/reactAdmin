import { ReactNode, createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Node } from "reactflow";
type ContentProps = {
    children: ReactNode;
}
export const ContextWorkflow = createContext({
    workflowModuleTab: { name: 0, nodeInfo: {} },
    handleWorkflowModuleTab: (_item: any) => { },

    workflowSettingsPop: false,
    handleWorkflowSettingsPop: (_id: any) => { },

    settingsNodeTab: 0,
    handleSettingsNodeTab: (_id: any) => { },

    selectedNodeForSetting: {} as Node,
    handleWorkflowSettings: (_selectedNode: any) => { },

    newWorkflowPop: false,
    handleNewWorkFlowPop: (_id: any) => { },
    handleNewWorkflowPopBack: (_id: any) => { },

    newWorkflowPopFirstStep: false,

    newWorkflowPopSecondStep: false,
    handleNewWorkflowPopSecondStep: (_id: any, _item: any) => { },
    handleNewWorkflowPopSecondStepBack: (_id: any) => { },

    newWorkflowPopThirdStep: false,
    handleNewWorkflowPopThirdStep: (_id: any) => { },
    handleNewWorkflowPopThirdStepBack: (_id: any) => { },


    handlePassWorkflowPopData: (_id: any) => { },

    workflowSettingMediaTab: 0,
    handleWorkflowSettingMediaTab: (_id: any) => { },

    workflowSettingTypeTab: 0,
    handleWorkflowSettingTypeTab: (_id: any) => { },

    addIntentPop: false,
    handleAddIntentPop: () => { },
    handleCloseAddIntentPop: () => { },

    createIntent: false,
    handleCreateIntent: (_id: any) => { },
    selectedNetworkFlowType: "",
    setNetworkFlowType:(_item:any)=>{},
    selectedNetworkFlowName: "",
    setSelectedNetworkFlowName: (_item: any) => { },

    sidebarTab: 0,
    handleSidebarTab: (_id: any) => { },

    finalWorkflowfromNewPop: false,
    handleFinalWorkflowfromNewPop: (_id: any) => { },
    setFinalWorkflowfromNewPop: (_id: any) => { },

    workFlowModuleTabList: new Array(),
    handleWorkFlowModuleTabList: (_item: any, _method: any = "add") => { },


    inputIntent: { id: 0, name: "", utterances: [] },
    // handleIntentChange: (_e:any)=>{},
    handleOnsubmitIntent: (_e: any, _item: any, _process: any) => { },
    showIntentValue: [],

    handleRemoveIntent: (_index: any) => { },
    handleEditIntent: (_index: any) => { },
    handleEditIntentFromNode: (_item: any, _nodeId: any) => { },
    openedNodeIntent: 0,
    intentClick: false,

    addConditionPop: false,
    handleAddConditionPop: (_id: any) => { },

    addConditionVariablePop: false,
    handleAddConditionVariablePop: (_id: any) => { },

    addFinalCondition: false,
    handleAddFinalCondition: (_id: any) => { },

    actionConditionPop: false,
    handleActionConditionPop: (_id: any) => { },

    actionConditionSet: false,
    handleActionConditionSet: (_id: any) => { },

    currentRunningWorkFlow: "",
    handleCurrentRunningWorkFlow: (_item: any) => { },

    selectedFlowRunningType: "",
    handleSelectedFlowRunningType: (_id: any) => { },

    variableConditionAfterClick: false,
    handleVariableConditionAfterClick: (_id: any) => { },

    webHookURLPop: false,
    handleWebHookURLPop: (_id: any) => { },
    hookItem: "GET",
    handleGetItem: (_item: any) => { },

    activeFlowHasTableDataPop: false,
    handleActiveFlowTableDataPop: (_id: any) => { },

    

    handleWorkflowPopfromCampaign: () => { },

    runningWorkflowInfo:"",
    handleRunningWorkflowInfo:(_item:any)=>{}



});

export const WorkflowContext = (props: ContentProps) => {

    const [workflowModuleTab, setWorkflowModuleTab] = useState({ name: 0, nodeInfo: "" })
    const handleWorkflowModuleTab = (item: any) => [
        setWorkflowModuleTab(item)
    ]

    const [workflowSettingsPop, setWorkflowSettingsPop] = useState(false)
    const handleWorkflowSettingsPop = (id: any) => {
        setWorkflowSettingsPop(id);
        if (id === false) {
            handleWorkflowSettings({} as Node);
        }
    }

    const [settingsNodeTab, setSettingsNodeTab] = useState(0)
    const handleSettingsNodeTab = (id: any) => {
        setSettingsNodeTab(id)
    }
    const [selectedNodeForSetting, setSelectedNodeForSetting] = useState({} as Node);
    const handleWorkflowSettings = (selectedNode: any) => {
        setSelectedNodeForSetting(selectedNode);
    };




    const [newWorkflowPop, setNewWorkflowPop] = useState(false)
    const handleNewWorkFlowPop = (id: any) => {
        setNewWorkflowPop(id)
        setNewWorkflowPopFirstStep(true)
        console.log(id)
    }
    const handleNewWorkflowPopBack = (id: any) => {
        setNewWorkflowPop(id)
        setNewWorkflowPopFirstStep(false)
        setNewWorkflowPopSecondStep(false)
        setNewWorkflowPopThirdStep(false)
    }

    const [newWorkflowPopFirstStep, setNewWorkflowPopFirstStep] = useState(true)

    const [newWorkflowPopSecondStep, setNewWorkflowPopSecondStep] = useState(false)

    const [selectedNetworkFlowType, setNetworkFlowType] = useState("");
    const [selectedNetworkFlowName, setSelectedNetworkFlowName] = useState("");
    const handleNewWorkflowPopSecondStep = (id: any, item: any) => {
        setNewWorkflowPopSecondStep(id)
        setNewWorkflowPopFirstStep(false);
        setNetworkFlowType(item);
    }
    const handleNewWorkflowPopSecondStepBack = (id: any) => {
        setNewWorkflowPopSecondStep(id)
        setNewWorkflowPopFirstStep(true);
        setNetworkFlowType("");
    }

    const [newWorkflowPopThirdStep, setNewWorkflowPopThirdStep] = useState(false)
    const handleNewWorkflowPopThirdStep = (id: any) => {
        setNewWorkflowPopThirdStep(id)
        setNewWorkflowPopSecondStep(false);

    }
    const handleNewWorkflowPopThirdStepBack = (id: any) => {
        setNewWorkflowPopThirdStep(id)
        setNewWorkflowPopSecondStep(true)
    }

    const [finalWorkflowfromNewPop, setFinalWorkflowfromNewPop] = useState(false)
    const handleFinalWorkflowfromNewPop = (id: any) => {
        setFinalWorkflowfromNewPop(id)
        setSidebarTab(1);
        navigate('/admin/dashboard/workflow-studio')
        console.log(id)
    }

    const [workFlowModuleTabList, setWorkFlowModuleTabList] = useState(new Array());
    const handleWorkFlowModuleTabList = (item: any, method: any = 'add') => {
        if (method == 'add') {
            setWorkFlowModuleTabList([...workFlowModuleTabList, item]);
        }
        else if (method == "delete") {
            setWorkFlowModuleTabList((el: any) => {
                console.log(el);
                let tabList = el.filter((elm: any) => elm.name != item.name);
                console.log("filtered tab", tabList);
                return tabList;
            });
        }
        else if(method == 'renew')
        {
            setWorkFlowModuleTabList(item);
        }
        else {
            setWorkFlowModuleTabList([]);
        }
    };



    const navigate = useNavigate()
    const handlePassWorkflowPopData = (id: any) => {
        navigate(id)
    }


    const [workflowSettingMediaTab, setWorkflowSettingMediaTab] = useState(0)
    const handleWorkflowSettingMediaTab = (id: any) => {
        setWorkflowSettingMediaTab(id)
    }

    const [workflowSettingTypeTab, setWorkflowSettingTypeTab] = useState(0)
    const handleWorkflowSettingTypeTab = (id: any) => {
        setWorkflowSettingTypeTab(id)
    }

    const [addIntentPop, setAddIntentPop] = useState(false)
    const handleAddIntentPop = () => {
        setAddIntentPop(!addIntentPop)
    }
    const handleCloseAddIntentPop = () => {
        setAddIntentPop(false)
    }

    const [createIntent, setCreateIntent] = useState(false)
    const handleCreateIntent = (id: any) => {
        setCreateIntent(id);
        setInputIntent({
            id: 0,
            name: "",
            utterances: []
        });
    }



    const location = useLocation()
    const LocationWorkflow = location.pathname.indexOf('/workflow-studio') >= 0
    const AiAnalytics = location.pathname.indexOf('/ai-analytics') >= 0
    const PlatformConfiguration = location.pathname.indexOf('/platform-configuration') >= 0
    const [sidebarTab, setSidebarTab] = useState(0)
    const handleSidebarTab = (id: any) => {
        console.log("dashboard sidebar",id);
        setSidebarTab(id)
        LocationWorkflow ? navigate('/admin/dashboard/workflow-studio') : AiAnalytics ? navigate('/admin/dashboard/ai-analytics') : PlatformConfiguration ? navigate('/admin/dashboard/platform-configuration') : null
        console.log(
            `
            ${LocationWorkflow ? `Location from Workflow, ${id}` :
                AiAnalytics ? `Location from Ai AnaLytics, ${id}` :
                    PlatformConfiguration ? `Location from Ai AnaLytics, ${id}` : null
            }
            `
        )


    }



    const [inputIntent, setInputIntent] = useState({
        id: 0,
        name: "",
        utterances: []
    })

    // const handleIntentChange = (e:any)=>{
    //     setInputIntent({
    //         ...inputIntent,
    //         [e.target.name]:e.target.value
    //     })
    // }

    const [showIntentValue, setShowIntentValue]: any[] = useState([])
    const [intentClick, setIntentClick]: any[] = useState(false)
    const [openedNodeIntent, setOpenedNodeIntent] = useState(0);


    const handleOnsubmitIntent = (e: any, item: any, process: any) => {
        e.preventDefault();
        // alert(process);
        if (process == 'New') {
            setShowIntentValue([
                ...showIntentValue, item
            ]);
        }
        else {
            setShowIntentValue((el: any) => {
                el.map((value: any, index: any) => {
                    if (value.id == item.id) {
                        el[index] = item;
                    }
                });
                return el;
            });
        }
        setOpenedNodeIntent(0);
        // setInputIntent({
        //     name: "",
        //     utterances : ""
        // })

    }


    const handleRemoveIntent = (index: any) => {
        const filterData = showIntentValue.filter((_item: any, i: any) => i !== index)
        setShowIntentValue(filterData)
    }

    const handleEditIntent = (index: any) => {
        setCreateIntent(true);
        const editdata = showIntentValue[index];
        setInputIntent({
            id: editdata.id,
            name: editdata.name,
            utterances: editdata.utterances
        })
        setIntentClick(true);
    }
    const handleEditIntentFromNode = (editdata: any, nodeId: any) => {
        setCreateIntent(true);
        // const editdata = showIntentValue[index];
        setInputIntent({
            id: editdata.id,
            name: editdata.name,
            utterances: editdata.utterances
        })
        setIntentClick(true);
        setOpenedNodeIntent(nodeId);
    }

    const [addConditionPop, setAddConditionPop] = useState(false)
    const handleAddConditionPop = (id: any) => {
        setAddConditionPop(id)
        setActionConditionPop(false)
    }

    const [addConditionVariablePop, setAddConditionVariablePop] = useState(false)
    const handleAddConditionVariablePop = (id: any) => {
        setAddConditionVariablePop(id)
        setAddConditionPop(false)
    }

    const [addFinalCondition, setAddFinalCondition] = useState(false)
    const handleAddFinalCondition = (id: any) => {
        setAddFinalCondition(id)
        setAddConditionVariablePop(false)
    }

    const [actionConditionPop, setActionConditionPop] = useState(false)
    const handleActionConditionPop = (_id: any) => {
        setActionConditionPop(!actionConditionPop)
    }

    const [actionConditionSet, setActionConditionSet] = useState(false)
    const handleActionConditionSet = (id: any) => {
        setActionConditionSet(id)
        setActionConditionPop(false)
    }

    const [currentRunningWorkFlow, setCurrentRunningWorkflow] = useState("");
    const handleCurrentRunningWorkFlow = (item: any) => {
        setCurrentRunningWorkflow(item);
    }
    const [selectedFlowRunningType, setSelectedFlowRunningType] = useState("");
    const handleSelectedFlowRunningType = (item: any) => {
        setSelectedFlowRunningType(item);
    }

    const [variableConditionAfterClick, setVariableConditionAfterClick] = useState(false)
    const handleVariableConditionAfterClick = (id: any) => {
        setVariableConditionAfterClick(id)
    }

    const [webHookURLPop, setWebHookURLPop] = useState(false)
    const handleWebHookURLPop = (_id: any) => {
        setWebHookURLPop(!webHookURLPop)

    }

    const [hookItem, setHookItem] = useState("GET")
    const handleGetItem = (item: any) => {
        setHookItem(item)
    }


    const [activeFlowHasTableDataPop, setActiveFlowHasTableDataPop] = useState(false)

    const handleActiveFlowTableDataPop = (_id: any) => {
        setActiveFlowHasTableDataPop(!activeFlowHasTableDataPop,)
    }


    // const handleTableDataFromPlatformConfig = () => {
    //     navigate('/admin/dashboard/ai-analytics')
    //     setSidebarTab(2)
    // }

    const handleWorkflowPopfromCampaign = () => {
        setNewWorkflowPop(true)
        setNewWorkflowPopFirstStep(false)
        setNewWorkflowPopSecondStep(false)
        setNewWorkflowPopThirdStep(true)
    }

    const [runningWorkflowInfo,handleRunningWorkflowInfo] = useState("");

    return (
        <ContextWorkflow.Provider value={{
            workflowModuleTab,
            handleWorkflowModuleTab,

            workflowSettingsPop,
            handleWorkflowSettingsPop,

            settingsNodeTab,
            handleSettingsNodeTab,
            selectedNodeForSetting,
            handleWorkflowSettings,

            newWorkflowPop,
            handleNewWorkFlowPop,
            handleNewWorkflowPopBack,

            newWorkflowPopFirstStep,

            newWorkflowPopSecondStep,
            handleNewWorkflowPopSecondStep,
            handleNewWorkflowPopSecondStepBack,

            newWorkflowPopThirdStep,
            handleNewWorkflowPopThirdStep,
            handleNewWorkflowPopThirdStepBack,

            handlePassWorkflowPopData,

            workflowSettingMediaTab,
            handleWorkflowSettingMediaTab,

            workflowSettingTypeTab,
            handleWorkflowSettingTypeTab,

            addIntentPop,
            handleAddIntentPop,
            handleCloseAddIntentPop,

            createIntent,
            handleCreateIntent,
            selectedNetworkFlowType,
            setNetworkFlowType,

            selectedNetworkFlowName,
            setSelectedNetworkFlowName,

            sidebarTab,
            handleSidebarTab,

            finalWorkflowfromNewPop,
            handleFinalWorkflowfromNewPop,
            setFinalWorkflowfromNewPop,

            workFlowModuleTabList,
            handleWorkFlowModuleTabList,

            inputIntent,
            //  handleIntentChange,
            handleOnsubmitIntent,
            showIntentValue,
            handleRemoveIntent,
            handleEditIntent,
            handleEditIntentFromNode,
            openedNodeIntent,
            intentClick,

            addConditionPop,
            handleAddConditionPop,

            addConditionVariablePop,
            handleAddConditionVariablePop,

            addFinalCondition,
            handleAddFinalCondition,

            actionConditionPop,
            handleActionConditionPop,

            actionConditionSet,
            handleActionConditionSet,

            currentRunningWorkFlow,
            handleCurrentRunningWorkFlow,

            selectedFlowRunningType,
            handleSelectedFlowRunningType,

            variableConditionAfterClick,
            handleVariableConditionAfterClick,

            webHookURLPop,
            handleWebHookURLPop,
            hookItem,
            handleGetItem,


            activeFlowHasTableDataPop,
            handleActiveFlowTableDataPop,

            

            handleWorkflowPopfromCampaign,

            runningWorkflowInfo,
            handleRunningWorkflowInfo


        }}>
            {props.children}
        </ContextWorkflow.Provider>
    );
}
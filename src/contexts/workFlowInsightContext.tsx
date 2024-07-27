import { ReactNode, createContext, useState,  } from "react";
type ContentProps ={
    children: ReactNode;
}



export const ContextWorkFlowInsight = createContext({
    intentsMainDropDown: false,
    handleIntentsMainDropDown: (_id:any)=>{},

    viewIntent: false,
    handleViewIntent: (_id:any)=>{},

    insightWorkFlowTab: 0,
    handleInsightWorkFlowTab: (_id:any)=>{}
    

});


export const WorkFlowInsightContext = (props: ContentProps)=> {
   
    const [intentsMainDropDown, setIntentsMainDropDown] = useState(false)
    const handleIntentsMainDropDown = ()=>{
        setIntentsMainDropDown(!intentsMainDropDown)
    }

    const [viewIntent, setViewIntent] = useState(false)
    const handleViewIntent = (id:any)=>{
        setViewIntent(id)
        setIntentsMainDropDown(false)
    }

    const [insightWorkFlowTab, setInsightWorkFlowTab] = useState(0)
    const handleInsightWorkFlowTab = (id:any)=>{
        setInsightWorkFlowTab(id)
    }

    return (
        <ContextWorkFlowInsight.Provider value={{
            intentsMainDropDown,
            handleIntentsMainDropDown,

            viewIntent,
            handleViewIntent,

            insightWorkFlowTab,
            handleInsightWorkFlowTab

        }}>
            {props.children}
        </ContextWorkFlowInsight.Provider>
    );
}
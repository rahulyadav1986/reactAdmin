
import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}
export const ContextCallerDetails = createContext({
    callerdetailsTab: 1,
    handleCalletTab: (_id:any)=>{}
});

export const CallerDetailsContext = (props: ContentProps)=> {
    
    const [callerdetailsTab, setCallerdetailsTab] = useState(1)
    const handleCalletTab = (id:any)=>{
        setCallerdetailsTab(id)
    }
    
    return (
        <ContextCallerDetails.Provider value={{
            callerdetailsTab,
            handleCalletTab
        }}>
            {props.children}
        </ContextCallerDetails.Provider>
    );
}
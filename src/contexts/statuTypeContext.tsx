
import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextStatusType = createContext({
    queueStatusType: 0,
    handleQueueStatusType: (_id:any)=>{}
});

export const StatusTypeContext = (props: ContentProps)=> {
    
    const [queueStatusType, setQueueStatusType] = useState(0)
    const handleQueueStatusType = (id:any)=>{
        setQueueStatusType(id)
    }

    return (
        <ContextStatusType.Provider value={{
            queueStatusType,
            handleQueueStatusType

            
        }}>
            {props.children}
        </ContextStatusType.Provider>
    );
}
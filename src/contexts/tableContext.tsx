
import { ReactNode, createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type ContentProps ={
    children: ReactNode;
}
export const ContextTable = createContext({
    callLogTab: 0,
    handleCallLogTab: (_id:number)=>{},

    tableTypeTab: 0,
    handleTableTypeTab: (_id:number)=>{},

    tableChannelTab: 0,
    handleTableChannelTab: (_id:number)=>{},

    tableFilterToggle: false,
    handleTableFilterToggle: ()=>{},

    interactionTabValue: 0,
    handleInteractionTab: (_id:number)=>{},

    verifyPop: false,
    handleVerifyPop: (_id:any)=>{},    

    dobToggle: null,
    handleDobToggle: (_i:any)=>{},

    registerPhoneToggle: null,
    handleRegisterPhoneToggle: (_i:any)=>{},

    registerAddressToggle: null,
    handleRegisterAddressToggle: (_i:any)=>{},

    registerAccountToggle: null,
    handleRegisterAccountToggle: (_i:any)=>{},

    callCardBreakdownTab: 0,
    handleCallCardBreakdownTab: (_id:any)=>{},

    handleJoinChat:(_id:any)=>{},
    handleAccept:(_id:any)=>{},
    handleSupJoinCall: (_id:any)=>{},
    handleSupVideoCall: (_id:any)=>{},

    callerdetailsTab: 1,
    handleCalletTab: (_id:any)=>{}
});

export const TableContext = (props: ContentProps)=> {
    const [callLogTab, setCallLogTab] = useState(0)
    const handleCallLogTab = (id:number)=>{
        setCallLogTab(id)
    }

    const [tableTypeTab, setTableTypeTab] = useState(0)
    const handleTableTypeTab = (id:number)=>{
        setTableTypeTab(id)
    }
   
    const [tableChannelTab, setTableChannelTab] = useState(0)
    const handleTableChannelTab = (id:number)=>{
        setTableChannelTab(id)
    }

    const [tableFilterToggle, setTableFilterToggle] = useState(false)
    const handleTableFilterToggle = ()=>{
        setTableFilterToggle(!tableFilterToggle)
    }

    const [interactionTabValue, setInteractionTabValue] = useState(0)
    const handleInteractionTab = (id:number)=>{
        setInteractionTabValue(id)
        setCallerdetailsTab(1)
    }

    const [verifyPop, setVerifyPop] = useState(false)
    const handleVerifyPop = (id:any)=>{
        setVerifyPop(id)
        setDobToggle(null)
        setRegisterPhoneToggle(null)
        setRegisterAddressToggle(null)
        setRegisterAccountToggle(null)
    }

    

    const [dobToggle, setDobToggle] = useState(null)
    const handleDobToggle = (i:any)=>{
        setDobToggle(dobToggle === i ? -1 : i)
    }

    const [registerPhoneToggle, setRegisterPhoneToggle] = useState(null)
    const handleRegisterPhoneToggle = (i:any)=>{
        setRegisterPhoneToggle(registerPhoneToggle === i ? -1 : i)
    }

    const [registerAddressToggle, setRegisterAddressToggle] = useState(null)
    const handleRegisterAddressToggle = (i:any)=>{
        setRegisterAddressToggle(registerAddressToggle === i ? -1 : i)
    }

    const [registerAccountToggle, setRegisterAccountToggle] = useState(null)
    const handleRegisterAccountToggle = (i:any)=>{
        setRegisterAccountToggle(registerAccountToggle === i ? -1 : i)
    }


    const [callCardBreakdownTab, setCallCardBreakdownTab] = useState(0)
    const handleCallCardBreakdownTab = (id:any)=>{
        setCallCardBreakdownTab(id)
    }
    const location = useLocation()
    const navigate = useNavigate()
    const CurrentLocation = location.pathname.indexOf('/agent')>=0
    const handleJoinChat = (id:any)=>{
        handleInteractionTab(id)
        navigate(`${CurrentLocation ? '/agent' : '/supervisor'}/dashboard/interaction-center`)
    }
    
    const handleAccept = (id:any)=>{
        handleInteractionTab(id)
        navigate(`${CurrentLocation ? '/agent' : '/supervisor'}/dashboard/interaction-center`)
    }

    const handleSupJoinCall = (id:any)=>{
        handleInteractionTab(id)
        navigate(`${CurrentLocation ? '/agent' : '/supervisor'}/dashboard/interaction-center`)
        console.log(id)
    }

    const handleSupVideoCall = (id:any)=>{
        handleInteractionTab(id)
        navigate(`${CurrentLocation ? '/agent' : '/supervisor'}/dashboard/interaction-center`)
    }


    const [callerdetailsTab, setCallerdetailsTab] = useState(1)
    const handleCalletTab = (id:any)=>{
        setCallerdetailsTab(id)
        if(id === 2){
            setInteractionTabValue(1)
        }
    }







 

    

    

    
    
    return (
        <ContextTable.Provider value={{
            callLogTab,
            handleCallLogTab,

            tableTypeTab,
            handleTableTypeTab,

            tableChannelTab,
            handleTableChannelTab,

            tableFilterToggle,
            handleTableFilterToggle,

            interactionTabValue,
            handleInteractionTab,

            verifyPop,
            handleVerifyPop,

            dobToggle,
            handleDobToggle,

            registerPhoneToggle,
            handleRegisterPhoneToggle,

            registerAddressToggle,
            handleRegisterAddressToggle,

            registerAccountToggle,
            handleRegisterAccountToggle,

            callCardBreakdownTab,
            handleCallCardBreakdownTab,

            handleJoinChat,
            handleAccept,
            handleSupJoinCall,
            handleSupVideoCall,


            callerdetailsTab,
            handleCalletTab

            
        }}>
            {props.children}
        </ContextTable.Provider>
    );
}
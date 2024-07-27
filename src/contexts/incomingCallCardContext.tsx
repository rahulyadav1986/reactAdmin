import { ReactNode, createContext, useState, useEffect  } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextInComingCallCard = createContext({
    
    incomeCallcard: false,
    handleIncomingCallCard: ()=>{},

    declineIncomingCall: false,
    handleDeclineCall: (_id:any)=>{},

    handleDeclineCallSave: ()=>{},

    selectReason: false,
    handleSelectReason: ()=>{},

    selectReasonValue: {label: "Select Reason"},
    handleSelectReasonValue: (_item:any)=>{},

    selectError: false,
    handleSelectReasonValidate: ()=>{},

    validateButton: true,
    saveButton: false,

    
});


export const IncomingCallContext = (props: ContentProps)=> {
    
    const [incomeCallcard, setIncomingCallCard] = useState(false)

    const handleIncomingCallCard = ()=>{
        setDeclineIncomingCall(true)
    }

    useEffect(() => {
        const delay = setTimeout(() => {
          setIncomingCallCard(true)
          console.log(incomeCallcard)
        }, 3000);
        return () => clearTimeout(delay);
    }, []);

    const [declineIncomingCall,  setDeclineIncomingCall] = useState(false)  

    const handleDeclineCall = (id:any)=>{
        setDeclineIncomingCall(id)
        setSelectError(false)
        setSelectReason(false)
        setSelectReasonValue({label: "Select Reason"})
        setValidateButton(true)
        setSaveButton(false)
        
        
    }
    const [selectError, setSelectError] = useState(false)
    const handleDeclineCallSave = ()=>{
        setIncomingCallCard(false)
        setDeclineIncomingCall(false)
        
    }

    const [selectReason, setSelectReason] = useState(false)

    const handleSelectReason = ()=>{
        setSelectReason(!selectReason)
    }

    const [selectReasonValue, setSelectReasonValue] = useState({label: "Select Reason"})

    
    const [validateButton, setValidateButton] = useState(true)
    const [saveButton, setSaveButton] = useState(false)

    
    const handleSelectReasonValue = (item:any)=>{
        setSelectReasonValue(item)
        console.log(item)
        setSelectReason(false)
        setSelectError(false)
        setValidateButton(false)
        setSaveButton(true)
    }

    
    const handleSelectReasonValidate = ()=>{
        setSelectError(true)
        
        
    }

    



    
    
    


   
    
    return (
        <ContextInComingCallCard.Provider value={{
            incomeCallcard,
            handleIncomingCallCard,

            declineIncomingCall,
            handleDeclineCall,

            handleDeclineCallSave,

            selectReason,
            handleSelectReason,

            selectReasonValue,
            handleSelectReasonValue,

            selectError,
            handleSelectReasonValidate,

            validateButton,
            saveButton,

           
        }}>
            {props.children}
        </ContextInComingCallCard.Provider>
    );
}
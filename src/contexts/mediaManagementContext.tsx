
import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}
export const ContextMediaManagement = createContext({
    tabPad: 0,
    handleTab: (_id:any)=>{},

    endPopup: false,
    handleEndPopup: (_id:any)=>{},

    handleClosePopup: (_id:boolean)=>{},

    aiRecomendation: false,
    handleAiRecomendation: ()=>{},

    aiPop: false,
    handleAiPop: ()=>{},

    disPositionValue: {id:"", label:"Select disposition"},
    handleDisPositionValue: (_item:any)=>{},
    disPostionPlaceholder: true,
    showDisPostionPlaceholder: false,
    handleDispotionRemove: (_item:any)=>{},
    dispositionPop:false,
    handleDispositionPop: ()=>{},
    secondDisPositionValue: {id:"", label:"Select..."},
    handleSecondDisPositionValue: (_item:any)=>{},
    secondDisPostionPlaceholder: false,
    secondDispositionPop: false,
    showSecondDisPostionPlaceholder: false,
    handleScondDispotionRemove: (_item:any)=>{},
    dateValue: {label: "Select date and time"},
    datePlaceholder: false,
    showDatePlaceholder: false,
    datePopup: false,
    handleDatePop:(_id:any)=>{},
    handleSecondDispositionPop: (_id:any)=>{},
    userDrop: false,
    handleUserDrop: (_id:any)=>{},
    agentTransferPop: false,
    handleAgentTransferPopup: (_id:any) =>{},
    keyPadPop: false,
    handleKeyPadPop: (_id:any)=> {},
    conferencePop: false,
    handleConferencePop: (_id:any)=>{},
    screenSharingPop:false,
    handlScreenSharingPop:(_id:any)=>{},
    coBrowsePop: false,
    handlCoBrowsePop: (_id:any)=>{},
    initiateCoBrowse: false,
    handleInitiateBrowsePallet: ()=>{},
    joinBrowseSession: false,
    handleJoinBrowseSessionPallet: ()=>{},
    accountFormsPallet: false,
    handleAccountFormPallet: ()=>{},
    shareLinkPallet: false,
    handleShareLinkPallet: ()=>{},
    customerPhonePallet: false,
    handleCustomerPhonePallet: ()=>{},
    proceedFirstStep: false,
    handleProceedFirstStep: ()=>{},
    proceedBrowserPallet: true,
    handleProceedBrowserPallet: ()=>{},
    proceedFirstStepButton: true,
    conferenceType: 0,
    handleConferenceType: (_id: any)=>{}

});

export const MediaManagementContext = (props: ContentProps)=> {
    const [tabPad, setTabPad] = useState(0)

    const handleTab = (id:any)=>{
        setTabPad(tabPad === id ? -1 : id)
    }

    const [endPopup, setEndPopup] = useState(false)
    const handleEndPopup = (id:any)=>{
        setEndPopup(id)
        handleClosePopup(id)
        setDispositionPop(false)
        setDispositionValue({id:"", label:"Select disposition"})
        setsecondDisPositionValue({id: "", label: "Select..."})
        setDisPostionPlaceholder(true)
        setSecondDispositionPop(false)
        setShowDisPostionPlaceholder(false)
        setSecondDisPostionPlaceholder(false)
        setshowSecondDisPostionPlaceholder(false)
        setDatePlaceholder(false)
        setDatePopup(false)
    }
    const handleClosePopup = (id:any)=>{
        setTabPad(id)
    }


    const [aiRecomendation, setAiRecomendation]= useState(false)
    const handleAiRecomendation = ()=>{
        setAiRecomendation(true)
    }


    const [aiPop, setAiPop] = useState(false)
    const handleAiPop = ()=>{
        setAiPop(!aiPop)
    }

    const [disPositionValue, setDispositionValue] = useState({id:"", label:"Select disposition"})
    const [disPostionPlaceholder, setDisPostionPlaceholder] = useState(true)
    const [showDisPostionPlaceholder, setShowDisPostionPlaceholder] = useState(false)
    const [dispositionPop, setDispositionPop] = useState(false)

    const [secondDisPositionValue, setsecondDisPositionValue] = useState({id:"", label:"Select..."})
    const [secondDisPostionPlaceholder, setSecondDisPostionPlaceholder] = useState(false)
    const [secondDispositionPop, setSecondDispositionPop] = useState(false)
    const [showSecondDisPostionPlaceholder, setshowSecondDisPostionPlaceholder] = useState(false)

    const [dateValue] = useState({label:"Select date and time"})
    const [datePlaceholder, setDatePlaceholder] = useState(false)
    const [showDatePlaceholder] = useState(false)
    const [datePopup, setDatePopup] = useState(false)


    
    

 
    

    const handleDispositionPop = ()=>{
        setDispositionPop(true)
    }

    const handleSecondDispositionPop = ()=>{
        setSecondDispositionPop(true)
        setDispositionPop(false)
        setSecondDisPostionPlaceholder(true)
    }

    const handleDisPositionValue = (item:any)=>{
        setDispositionValue(item)
        setDisPostionPlaceholder(false)
        setShowDisPostionPlaceholder(true)
        setDispositionPop(false)
        setSecondDisPostionPlaceholder(true)
        setSecondDispositionPop(true)
    }

    const handleDispotionRemove = (item:any)=>{
        setDispositionValue(item)
        setDisPostionPlaceholder(true)
        setShowDisPostionPlaceholder(false)
        setSecondDispositionPop(false)
        setDatePlaceholder(false)
        setDispositionPop(false)
        setDispositionValue({id:"", label:"Select disposition"})
        setsecondDisPositionValue({id: "", label: ""})
        setshowSecondDisPostionPlaceholder(false)
        setDatePopup(false)
    }

    const handleSecondDisPositionValue = (item:any)=>{
        setsecondDisPositionValue(item)
        setSecondDispositionPop(false)
        setSecondDisPostionPlaceholder(false)
        setshowSecondDisPostionPlaceholder(true)
        setDatePlaceholder(true)
        setDatePopup(true)
    }

    const handleScondDispotionRemove = ()=>{
        setSecondDisPostionPlaceholder(true)
        setshowSecondDisPostionPlaceholder(false)
        setDatePopup(false)
        setDatePlaceholder(false)
        setSecondDispositionPop(true)
        setsecondDisPositionValue({id:"", label:"Select..."})
    }

    const handleDatePop = (id:any)=>{
        setDatePopup(id)
    }


    const [agentTransferPop, setAgentTransferPop]=useState(false)
    const [userDrop, setUserDrop] = useState(false)
    const handleAgentTransferPopup = (id:any)=>{
        setAgentTransferPop(id)
        console.log(id)
        handleClosePopup(id)
        setUserDrop(false)
    }
    const handleUserDrop = (id:any)=>{
        setUserDrop(id)
        console.log(id)
        
    }

    const [keyPadPop, setKeyPadPop] = useState(false)
    const handleKeyPadPop = (id:any)=>{
        setKeyPadPop(id)
        console.log(id)
        handleClosePopup(id)
    }

    const [conferencePop, setConferencePop] = useState(false)
    const handleConferencePop = (id:any)=>{
        setConferencePop(id)
        console.log(id)
        handleClosePopup(id)
        setUserDrop(false)
    }
    const [conferenceType, setConferenceType] = useState(0)
    const handleConferenceType = (id:any)=>{
        setConferenceType(id)
        setUserDrop(false)
    }


    const [screenSharingPop, setScreenSharingPop] = useState(false)
    const handlScreenSharingPop = (id:any)=>{
        setScreenSharingPop(id)
        console.log(id)
        handleClosePopup(id)
        setJoinBrowseSession(false)
    }


    const [coBrowsePop, setCoBrowsePop] = useState(false)
    const handlCoBrowsePop = (id:any)=>{
        setCoBrowsePop(id)
        setInitiateCoBrowse(false)
        setJoinBrowseSession(false)
        setProceedBrowserPallet(true)
        setProceedFirstStep(false)
        setShareLinkPallet(false)
        setCustomerPhonePallet(false)
        setProceedFirstStepButton(true)
        setAccountFormsPallet(false)
        handleClosePopup(id)
        
    }

    const [initiateCoBrowse, setInitiateCoBrowse] = useState(false)
    const handleInitiateBrowsePallet = ()=>{
        setInitiateCoBrowse(!initiateCoBrowse)
        setJoinBrowseSession(false)
    }
    const [joinBrowseSession, setJoinBrowseSession] = useState(false)
    const handleJoinBrowseSessionPallet = ()=>{
        setJoinBrowseSession(!joinBrowseSession)
        setInitiateCoBrowse(false)
    }
    const [accountFormsPallet, setAccountFormsPallet] = useState(false)
    const handleAccountFormPallet = ()=>{
        setAccountFormsPallet(!accountFormsPallet)
    }
    const [shareLinkPallet, setShareLinkPallet] = useState(false)
    const handleShareLinkPallet = ()=>{
        setShareLinkPallet(!shareLinkPallet)
    }
    const [customerPhonePallet, setCustomerPhonePallet] = useState(false)
    const handleCustomerPhonePallet = ()=>{
        setCustomerPhonePallet(!customerPhonePallet)
    }
    const [proceedFirstStep, setProceedFirstStep] = useState(false)
    const [proceedFirstStepButton, setProceedFirstStepButton] = useState(true)
    const handleProceedFirstStep = ()=>{
        setProceedFirstStep(true)
        setProceedBrowserPallet(false)
        setProceedFirstStepButton(false)
    }
    const [proceedBrowserPallet, setProceedBrowserPallet] = useState(true)
    const handleProceedBrowserPallet = ()=>{
        setProceedBrowserPallet(!proceedBrowserPallet)
    }


    return (
        <ContextMediaManagement.Provider value={{
            tabPad,
            handleTab,

            endPopup,
            handleEndPopup,

            handleClosePopup,

            aiRecomendation,
            handleAiRecomendation,

            aiPop,
            handleAiPop,

            disPositionValue,
            handleDisPositionValue,
            disPostionPlaceholder,
            showDisPostionPlaceholder,
            handleDispotionRemove,
            dispositionPop,
            handleDispositionPop,
            secondDisPositionValue,
            handleSecondDisPositionValue,
            secondDisPostionPlaceholder,
            secondDispositionPop,
            showSecondDisPostionPlaceholder,
            handleScondDispotionRemove,
            datePlaceholder,
            showDatePlaceholder,
            dateValue,
            datePopup,
            handleDatePop,
            handleSecondDispositionPop,
            userDrop,
            handleUserDrop,
            agentTransferPop,
            handleAgentTransferPopup,
            keyPadPop,
            handleKeyPadPop,
            conferencePop,
            handleConferencePop,
            screenSharingPop,
            handlScreenSharingPop,
            coBrowsePop,
            handlCoBrowsePop,
            initiateCoBrowse,
            handleInitiateBrowsePallet,
            joinBrowseSession,
            handleJoinBrowseSessionPallet,
            accountFormsPallet,
            handleAccountFormPallet,
            shareLinkPallet,
            handleShareLinkPallet,
            customerPhonePallet,
            handleCustomerPhonePallet,
            proceedFirstStep,
            handleProceedFirstStep,
            proceedBrowserPallet,
            handleProceedBrowserPallet,
            proceedFirstStepButton,
            conferenceType,
            handleConferenceType
        }}>
            {props.children}
        </ContextMediaManagement.Provider>
    );
}
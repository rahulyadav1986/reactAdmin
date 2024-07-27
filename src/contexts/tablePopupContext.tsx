import { ReactNode, createContext, useState  } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextTablePopup = createContext({
    voiceCallRecordingPop: false,
    handlVoiceCallRecordingPop: (_id:any)=>{},

    emailConversationPop: false,
    handlEmailCoversationPop: (_id:any)=>{},

    videoCallRecordingPop:false,
    handlVideoCallRecordingPop: (_id:any)=>{},

    chatConversationPop: false,
    handlChatConversationPop: (_id:any)=>{},

    supAudioCallPop: false,
    handleSupAudioCallPop: (_id:any)=>{},

    supVideoCallPop: false,
    handleSupVideoCallPop: (_id:any)=>{},

    supChatPop: false,
    handleChatPop: (_id:any)=>{},

    supChatInsidePop: false,
    handleChatInsidePop: (_id:any)=>{},

    wfhPop: false,
    handleWhfPop: (_id:any)=>{},

    violationPop: null,
    handleViolationPop: (_id:any)=>{},
    handleFinalViolationClose: (_id:any)=>{},

    qualityFormPopup: false,
    handleQualityFormPopup: (_id:any)=>{},
    handleQualityFormPopupFinal: ()=>{}

    

});


export const TablePopupContext = (props: ContentProps)=> {
    const [voiceCallRecordingPop, setVoiceCallRecordingPop] = useState(false)
    const handlVoiceCallRecordingPop = (id:any)=>{
        setVoiceCallRecordingPop(id)
        console.log(`Audio Call Recording popup ${id}`)
    }

    const [emailConversationPop, setEmailConversationPop] = useState(false)
    const handlEmailCoversationPop = (id:any)=>{
        setEmailConversationPop(id)
        console.log( `Email Conversation popup ${id}`)
    }

    const [videoCallRecordingPop, setVideoCallRecordingPop] = useState(false)
    const handlVideoCallRecordingPop = (id:any)=>{
        setVideoCallRecordingPop(id)
        console.log( `Video Call Recording popup ${id}`)
    }

    const [chatConversationPop, setChatConversationPop] = useState(false)
    const handlChatConversationPop = (id:any)=>{
        setChatConversationPop(id)
        console.log( `Chat Conversion popup ${id}`)
    }

    const [supAudioCallPop, setSupAudioCallPop] = useState(false)
    const handleSupAudioCallPop = (id:any)=>{
        setSupAudioCallPop(id)
    }

    const [supVideoCallPop, setSupVideoCallPop] = useState(false)
    const handleSupVideoCallPop = (id:any)=>{
        setSupVideoCallPop(id)
    }

    const [supChatPop, setSupChatPop] = useState(false)
    const handleChatPop = (id:any)=>{
        setSupChatPop(id)
    }

    const [supChatInsidePop, setSupChatInsidePop] = useState(false)
    const handleChatInsidePop = (id:any)=>{
        setSupChatInsidePop(id)
    }

    const [wfhPop, setWfhPop] = useState(false)
    const handleWhfPop = (id:any)=>{
        setWfhPop(id)
    }

    const [violationPop, setViolationPop] = useState(null)
    const handleViolationPop = (id:any)=>{
        setViolationPop(id)
    }
    const handleFinalViolationClose = (id:any)=>{
        setWfhPop(false)
        setViolationPop(id)
    }

    const [qualityFormPopup, setQualityFormPopup] = useState(false)
    const handleQualityFormPopup = (id:any)=>{
        setQualityFormPopup(id)
    }

    const handleQualityFormPopupFinal = ()=>{
        setQualityFormPopup(false)
        setChatConversationPop(false)
        handleChatInsidePop(false)
        setSupChatPop(false)
        setSupAudioCallPop(false)
        setVoiceCallRecordingPop(false)
        setVideoCallRecordingPop(false)
        setSupVideoCallPop(false)
    }
    
    return (
        <ContextTablePopup.Provider value={{
            voiceCallRecordingPop,
            handlVoiceCallRecordingPop,

            emailConversationPop,
            handlEmailCoversationPop,

            videoCallRecordingPop,
            handlVideoCallRecordingPop,

            chatConversationPop,
            handlChatConversationPop,

            supAudioCallPop,
            handleSupAudioCallPop,

            supVideoCallPop,
            handleSupVideoCallPop,

            supChatPop,
            handleChatPop,

            supChatInsidePop,
            handleChatInsidePop,

            wfhPop,
            handleWhfPop,

            violationPop,
            handleViolationPop,

            handleFinalViolationClose,

            qualityFormPopup,
            handleQualityFormPopup,
            handleQualityFormPopupFinal

        }}>
            {props.children}
        </ContextTablePopup.Provider>
    );
}
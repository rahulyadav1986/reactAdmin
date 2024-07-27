
import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}
export const ContextAiAnalytics = createContext({
    aiAnalyticsDetailsTab: 0,
    handleAiAnalyticsDetailsTab: (_id:any)=>{},

    voiceConversationTranscript: false,
    handleVoiceConversationTranscript: ()=>{},

    isPlaying: true,
    handlePlayPauseButtton: (_id:any)=>{}
});

export const AiAnalyticsContext = (props: ContentProps)=> {
    
    const [aiAnalyticsDetailsTab, setAiAnalyticsDetailsTab] = useState(0)
    const handleAiAnalyticsDetailsTab = (id:any)=>{
        setAiAnalyticsDetailsTab(id)
    }

    const [voiceConversationTranscript, setVoiceConversationTranscript] = useState(false)
    const handleVoiceConversationTranscript = ()=>{
        setVoiceConversationTranscript(!voiceConversationTranscript)
        console.log(voiceConversationTranscript)
    }
    const [isPlaying, setIsPlaying] = useState(true)
    const handlePlayPauseButtton = (id:any)=>{ 
        setIsPlaying(id)
    }

    return (
        <ContextAiAnalytics.Provider value={{
            aiAnalyticsDetailsTab,
            handleAiAnalyticsDetailsTab,

            voiceConversationTranscript,
            handleVoiceConversationTranscript,

            isPlaying,
            handlePlayPauseButtton
        }}>
            {props.children}
        </ContextAiAnalytics.Provider>
    );
}
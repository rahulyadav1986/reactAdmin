
import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}
export const ContextSocialPopup = createContext({
   
    whatsAppMessahePop: false,
    handleWhatsAppMessagePopup: (_id:any)=>{}
   
});

export const SocialPopupContext = (props: ContentProps)=> {
    
    const [whatsAppMessahePop, setWhatsAppMessahePop] = useState(false)
    const handleWhatsAppMessagePopup = (id:any)=>{
        setWhatsAppMessahePop(id)
    }
    
    return (
        <ContextSocialPopup.Provider value={{
            whatsAppMessahePop,
            handleWhatsAppMessagePopup
        }}>
            {props.children}
        </ContextSocialPopup.Provider>
    );
}
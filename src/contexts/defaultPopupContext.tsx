
import { ReactNode, createContext, useState, useEffect } from "react";
type ContentProps ={
    children: ReactNode;
}
export const ContextDefaultPopup = createContext({
    defaultPopup: false,
    handleDefaultPopup: ()=>{}
   
});

export const DefaultPopupContext = (props: ContentProps)=> {
    
    const [defaultPopup, setDefaultPopup] = useState(false)

    useEffect(() => {
        const delay = setTimeout(() => {
            setDefaultPopup(true)
          console.log(defaultPopup)
        }, 3000);
        return () => clearTimeout(delay);
    }, []);
   
    const handleDefaultPopup = ()=>{
        setDefaultPopup(false)
    }
    
    return (
        <ContextDefaultPopup.Provider value={{
            defaultPopup,
            handleDefaultPopup
        }}>
            {props.children}
        </ContextDefaultPopup.Provider>
    );
}

import { ReactNode, createContext, useState } from "react";
type ContentProps ={
    children: ReactNode;
}

export const Context = createContext({
    callToggle: false,
    handleCallToggle: ()=>{},
    hamToggle: false,
    handleHamburgerToggle: ()=>{},
    searchToggle: false,
    handleSearchToggle: ()=>{},
    profileDrop: false,
    handleProfilePopToggle: ()=>{},
    statusDrop: false,
    handleStatusToggle: (_e:any)=>{},
    statusValue: "",
    interactionTabValue: 0,
    handleInteractionTab: (_id:any)=>{}
   
    
});

export const AppContext = (props: ContentProps)=> {
    // header state
    const [callToggle, setCallToggle] = useState(false);    
    const [statusDrop, setStatusDrop] = useState(false);
    const [statusValue, setStatusValue] = useState("Please Select")

    const [hamToggle, setHamToggle] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);
    const [profileDrop, setProfileDrop] = useState(false);
    const handleCallToggle = () => {
        setCallToggle(!callToggle)
        setStatusDrop(false)
        setHamToggle(false)
        setSearchToggle(false)
        setProfileDrop(false)
    };
    const handleStatusToggle = (e:any) => {
        setStatusDrop(!statusDrop)
        setCallToggle(false)
        setHamToggle(false)
        setSearchToggle(false)
        setProfileDrop(false)

        setStatusValue(e.target.textContent)
    };

    const handleHamburgerToggle = ()=>{
        setHamToggle(!hamToggle)
        setCallToggle(false)
        setStatusDrop(false)
        setSearchToggle(false)
        setProfileDrop(false)
    }
    const handleSearchToggle = ()=>{
        setSearchToggle(!searchToggle)
        setHamToggle(false)
        setCallToggle(false)
        setStatusDrop(false)
        setProfileDrop(false)
    }
    const handleProfilePopToggle = ()=>{
        setProfileDrop(!profileDrop)
        setCallToggle(false)
        setStatusDrop(false)
        setHamToggle(false)
        setSearchToggle(false)
    }
    // header state

    // interaction center 
    const [interactionTabValue, setInteractionTabValue] = useState(0)
    const handleInteractionTab = (id:any)=>{
        setInteractionTabValue(id)
    }


    return (
        <Context.Provider value={{
            callToggle,
            handleCallToggle,
            hamToggle,
            handleHamburgerToggle,
            searchToggle,
            handleSearchToggle,
            profileDrop,
            handleProfilePopToggle,
            statusDrop,
            handleStatusToggle,
            statusValue,
            interactionTabValue,
            handleInteractionTab

            
        }}>
            {props.children}
        </Context.Provider>
    );
}



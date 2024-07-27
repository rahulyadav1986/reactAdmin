
import { ReactNode, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
type ContentProps ={
    children: ReactNode;
}
export const ContextTicketManagement = createContext({
    ticketType: "",
    handleTicketType: (_e:any) =>{},
    ticketTablePopUp: 0,
    handleTicketTablePop: (_id:any)=>{}
   
});

export const TicketManagementContext = (props: ContentProps)=> {
    
    const location = useLocation()
    let defaultValue = ""
    location.pathname === '/agent/dashboard/ticket-management' ? defaultValue="Tickets assigned by me" : defaultValue = "All Tickets"
    const [ticketType, setTicketType] = useState(defaultValue)
    const handleTicketType = (e:any)=>{
      setTicketType(e.target.textContent)
      console.log(e.target.textContent)
    }
    const [ticketTablePopUp, setTicketTablePopUp] = useState(0)

    const handleTicketTablePop = (id:any)=>{
        setTicketTablePopUp(id)
    }
    
    return (
        <ContextTicketManagement.Provider value={{
            ticketType,
            handleTicketType,
            ticketTablePopUp,
            handleTicketTablePop
        }}>
            {props.children}
        </ContextTicketManagement.Provider>
    );
}
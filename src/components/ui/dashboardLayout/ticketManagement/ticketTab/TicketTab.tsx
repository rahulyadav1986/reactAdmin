import {useContext} from "react"
import style from './style.module.scss'
import AllTicketIcon from "/assets/ticketmanagement/allTickets.svg"
import OpenTicketIcon from "/assets/ticketmanagement/openTickets.svg"
import TicketAssignbyMeIcon from "/assets/ticketmanagement/ticketsAssignMe.svg"
import TeamTicketsIcon from "/assets/ticketmanagement/teamTickets.svg"
import { ContextTicketManagement } from "../../../../../contexts/ticketManagementContext"
import { useLocation } from "react-router-dom"

const TicketTab = () => {
  const ticketTypeContext = useContext(ContextTicketManagement)
  const location = useLocation()
  return (
    <div className={style.side_panel_area}>
        <h2>Ticket Management</h2>
        <ul className={style.filter_list}>
            {
                location.pathname === '/agent/dashboard/ticket-management' ?
                <li onClick={ticketTypeContext.handleTicketType}>
                    <span><img src={TicketAssignbyMeIcon} alt="" /></span>
                    <span>Tickets assigned by me</span>
                </li>
                :
                location.pathname === '/supervisor/dashboard/ticket-management' ?
                <>
                    <li onClick={ticketTypeContext.handleTicketType}>
                        <span><img src={AllTicketIcon} alt="" /></span>
                        <span>All tickets</span>
                    </li> 
                    <li onClick={ticketTypeContext.handleTicketType}>
                        <span><img src={OpenTicketIcon} alt="" /></span>
                        <span>Open Tickets</span>
                    </li>
                    <li onClick={ticketTypeContext.handleTicketType}>
                        <span><img src={TeamTicketsIcon} alt="" /></span>
                        <span>Teams’ Tickets</span>
                    </li>
                </>
                :
                null
                
            }
            
            
        </ul>
    </div>
  )
}

export default TicketTab
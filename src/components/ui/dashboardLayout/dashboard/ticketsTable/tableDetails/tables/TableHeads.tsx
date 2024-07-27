import { useLocation } from "react-router-dom"
import TicketTableHead from "./TicketTableHead"
import TableCommonHead from "./TableCommonHead"

export const CommonTableHead = () => {
  const location = useLocation()
  const CurrentLocation = location.pathname.indexOf('/ticket-management')>=0
  return (
    <>
        {
            CurrentLocation ?  <TicketTableHead /> : <TableCommonHead />
        }
    </>
    
  )
}


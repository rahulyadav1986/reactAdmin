import { useLocation } from 'react-router-dom'
import TicketTableBody from './TicketTableBody'
import TableCommonBody from './TableCommonBody'


const CommonTableBody = () => {
  const location = useLocation()
  const CurrentLocation = location.pathname.indexOf('/ticket-management')>=0
  return (
    <>
        {
            CurrentLocation ?
            <TicketTableBody />
            :
            <TableCommonBody />
        }
    </>
    
  )
}

export default CommonTableBody



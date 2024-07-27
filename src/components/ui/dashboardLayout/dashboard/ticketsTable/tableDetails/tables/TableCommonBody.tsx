

import { useLocation } from 'react-router-dom'
import AgentTableBody from './AgentTableBody'
import SupervisorTableBody from './SupervisorTableBody'
import AdminTableBody from './AdminTableBody'

const TableCommonBody = () => {
  
  const location = useLocation()
  const AgentLocation = location.pathname.indexOf('/agent')>=0
  const SupervisorLocation = location.pathname.indexOf('/supervisor')>=0
  const AdminLocation = location.pathname.indexOf('/admin')>=0
  return (
    <tbody>
        {
            AgentLocation ? <AgentTableBody /> : SupervisorLocation ? <SupervisorTableBody /> : AdminLocation ? <AdminTableBody /> : null
        }
    </tbody>
  )
}

export default TableCommonBody
// import { useContext } from "react"

// import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext"
// import AddResource from "../addUser/AddResource"
import Dashboard from "./dashboard/Dashboard"


const SuperDashboard = () => {
  // const contextSuperAdmin = useContext(ContextSuperAdminDashboard)
  return (
    <>
      {/* {
        contextSuperAdmin.addResourceType ? <AddResource /> : <Dashboard />
      } */}
      <Dashboard />
    </>
  )
}

export default SuperDashboard
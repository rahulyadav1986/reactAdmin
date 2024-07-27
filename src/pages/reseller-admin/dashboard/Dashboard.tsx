import style from "./style.module.scss"
// import { useContext } from 'react'
// import { ContextSuperAdminDashboard } from '../../../contexts/superAdminContext'
// import Companies from "../../../components/ui/superAdminDashboardLayout/companies/Companies"
// import Resellers from "../../../components/ui/superAdminDashboardLayout/resellers/Resellers"
import SuperDashboard from "../../../components/ui/superAdminDashboardLayout/superDashboard/SuperDashboard"

const Dashboard = () => {
    // const contextSuperAdminSidebarTab = useContext(ContextSuperAdminDashboard)
  return (
    <div className={style.common_wrapper}>
        {/* {
            contextSuperAdminSidebarTab.sidebarTab === 0 ? 
            <SuperDashboard /> :
            contextSuperAdminSidebarTab.sidebarTab === 1 ? 
            <Companies /> :
            contextSuperAdminSidebarTab.sidebarTab === 2 ? 
            <Resellers /> : null
        } */}
        <SuperDashboard />
    </div>
  )
}

export default Dashboard
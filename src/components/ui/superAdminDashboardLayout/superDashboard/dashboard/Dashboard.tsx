
import { useContext } from "react"
import ChartCards from "../chartCards/ChartCards"
import StatusCards from "../statusCards/StatusCards"
import style from "./style.module.scss"
import AddIcon from "/assets/dashboard/main_dashboard/superAdmin/add.svg"
import { ContextSuperAdminDashboard } from "../../../../../contexts/superAdminContext"
import { useLocation } from "react-router-dom"

const Dashboard = () => {
  const {handleCreateVendor} = useContext(ContextSuperAdminDashboard)
  const location = useLocation()
  const ResellerAdminLocation = location.pathname.indexOf('/reseller-admin')>=0
  return (
    <>
        <h1 className={style.header}>Dashboard</h1>
        <div className={`${style.header_button_area_wrapper} d-flex flex-column align-items-center`}>
            <h2>Explore the power of your {ResellerAdminLocation ? 'Reseller' : 'Super Admin'} dashboard.</h2>
            <h3>Get started by <strong>creating your first Company</strong>  and streamline your management process.</h3>
            <div className={`${style.button_wrapper} d-flex align-items-center`}>
                {/* <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextSuperAdmin.addUserfromList('company')}>
                    <span><img src={AddIcon} alt="" /></span><span>Create Company</span>
                </div>
                {
                  ResellerAdminLocation ? null : 
                  <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextSuperAdmin.handleAddResourcePage('reseller')}>
                        <span>Create Reseller</span>
                    </div>  
                } */}

                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>handleCreateVendor('companies')}>
                    <span><img src={AddIcon} alt="" /></span><span>Create Company</span>
                </div>
                {
                  ResellerAdminLocation ? null : 
                  <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>handleCreateVendor('resellers')}>
                        <span>Create Reseller</span>
                    </div>  
                }
                
            </div>
        </div>
        <StatusCards />
        <ChartCards />
    </>
  )
}

export default Dashboard
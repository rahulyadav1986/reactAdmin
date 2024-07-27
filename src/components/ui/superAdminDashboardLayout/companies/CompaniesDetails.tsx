import { useContext } from "react"
import style from "../listDetails.module.scss"
import LeftDetails from "../listDetails/LeftDetails"
import RightDetails from "../listDetails/RightDetails"
import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext"
import AddMainUser from "../addUser/AddMainUser"

const CompaniesDetails = ({item}:any) => {
  const contextSuperAdmin = useContext(ContextSuperAdminDashboard);
  console.log("company details",item)
  return (
    <div className={style.detals_wrapper}>
      <ul className={style.breadcrumb}>
          <li className={style.active} onClick={()=>contextSuperAdmin.handleSideBarTab(0)}>Dashboard</li>
          <li className={style.active} onClick={()=>contextSuperAdmin.handleSideBarTab(1)}>Companies</li>
          {
            contextSuperAdmin.addMainUser ? <li>New Company</li> : <li>{item.companyName}</li>
          }
      </ul>
      {
        contextSuperAdmin.addMainUser ?  <AddMainUser item={item} /> : 
        <div className={`${style.details_main} d-flex justify-content-between flex-wrap`} >
          <LeftDetails item={item} type="company" editUserFromList={contextSuperAdmin.editUserFromList}/>
          <RightDetails item={item} type="company"  />
        </div>
      }
       
    </div>
  )
}

export default CompaniesDetails
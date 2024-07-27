import { useContext } from "react"
import style from "../listDetails.module.scss"
import LeftDetails from "../listDetails/LeftDetails"
import RightDetails from "../listDetails/RightDetails"
import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext"
import AddMainUser from "../addUser/AddMainUser"

const ResellerDetails = ({item,editUserFromList}:any) => {
  const contextSuperAdmin = useContext(ContextSuperAdminDashboard)
  return (
    <div className={style.detals_wrapper}>
      <ul className={style.breadcrumb}>
          <li className={style.active} onClick={()=>contextSuperAdmin.handleSideBarTab(0)}>Dashboard</li>
          <li className={style.active} onClick={()=>contextSuperAdmin.handleSideBarTab(2)}>Resellers</li>
          {
            contextSuperAdmin.addMainUser ? <li>New Reseller</li> : <li>{item.companyName}</li>
          }
          
      </ul>
      
      {
        contextSuperAdmin.addMainUser ?  <AddMainUser item={item} /> : 
        <div className={`${style.details_main} d-flex justify-content-between flex-wrap`}>
          <LeftDetails item={item} type="reseller" editUserFromList={editUserFromList}/>
          <RightDetails item={item} type="reseller"  />
        </div>
      }
      
      
      
       
    </div>
  )
}

export default ResellerDetails
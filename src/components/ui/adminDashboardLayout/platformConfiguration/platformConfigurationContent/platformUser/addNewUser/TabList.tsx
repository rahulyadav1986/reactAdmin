
import style from './style.module.scss'
import RolesPermissionIcon  from "/assets/dashboard/main_dashboard/admin/platformConfiguration/user/tabIcon1.svg"
import TeamsIcon  from "/assets/dashboard/main_dashboard/admin/platformConfiguration/user/tabIcon2.svg"
import ContactIcon  from "/assets/dashboard/main_dashboard/admin/platformConfiguration/user/tabIcon3.svg"
const TabList = ({addUserTab, handleAddUserTab}:any) => {  
  return (
    <div className={style.tab_list_wrapper}>
      <div className={style.main_wrapper}>
        <h3>You may like to act on</h3>
        <ul className={style.tab_list}>
          <li className={`${addUserTab === 0 && style.active} d-flex align-items-center`} onClick={()=>handleAddUserTab(0)}>
            <span><img src={RolesPermissionIcon} alt="" /></span>
            <div>
              <h4>Basic Information</h4>
              <p>Add or remove the statuses for the agent to use it while interacting with customers</p>
            </div>
          </li>
          <li className={`${addUserTab === 1 && style.active} d-flex align-items-center`} onClick={()=>handleAddUserTab(1)}>
            <span><img src={RolesPermissionIcon} alt="" /></span>
            <div>
              <h4>Roles & Permission</h4>
              <p>Add or remove the statuses for the agent to use it while interacting with customers</p>
            </div>
          </li>
          <li className={`${addUserTab === 2 && style.active} d-flex align-items-center`} onClick={()=>handleAddUserTab(2)}>
            <span><img src={TeamsIcon} alt="" /></span>
            <div>
              <h4>Teams</h4>
              <p>Manage teams, or groups quickly and assign possible actions</p>
            </div>
          </li>
          <li className={`${addUserTab === 3 && style.active} d-flex align-items-center`} onClick={()=>handleAddUserTab(3)}>
            <span><img src={ContactIcon} alt="" /></span>
            <div>
              <h4>Contacts</h4>
              <p>Manage metadata to add or remove contact details.</p>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default TabList
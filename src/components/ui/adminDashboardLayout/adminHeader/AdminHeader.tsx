import {useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './style.module.scss'
import Logo from "/assets/dashboard/main_dashboard/admin/logo.svg"
import SbiLogo from "/assets/dashboard/main_dashboard/superAdmin/sbiLogo.png"
import GridIcon from "/assets/dashboard/main_dashboard/admin/grid.svg"
import DownArrowIcon from "/assets/dashboard/main_dashboard/admin/downArrow.svg"
import CircleIcon from "/assets/dashboard/main_dashboard/admin/circle.svg"
import BellIcon from "/assets/dashboard/main_dashboard/admin/bell.svg"
import Profile from '../../dashboardLayout/dashboardHeader/profile/Profile'
import AdminMainMenu from '../adminMainMenu/AdminMainMenu'
import { ContextHeader } from '../../../../contexts/headerContext'
import useOutside from '../../../../hooks/useOutside'
const AdminHeader = () => {
  const contextAdminMainMenu = useContext(ContextHeader)
  const location = useLocation()

  const AdminLocation = location.pathname.indexOf('/admin')>=0
  const SuperAdminLocation = location.pathname.indexOf('/super-admin')>=0
  const ResellerAdminLocation = location.pathname.indexOf('/reseller-admin')>=0
  
  const currentLocation = 
  location.pathname.indexOf('/admin/dashboard/inbox')>=0 ? 'Inbox' : 
  location.pathname.indexOf('/admin/dashboard/workflow-studio')>=0 ? 'Workflow Studio' : 
  location.pathname.indexOf('/admin/dashboard/interaction-dashboard')>=0 ? 'Interaction Dashboard' : 
  location.pathname.indexOf('/admin/dashboard/ai-analytics')>=0 ? 'AI Analytics' : 
  location.pathname.indexOf('/admin/dashboard/platform-configuration')>=0 ? 'Platform Configuration' : 
  location.pathname.indexOf('/admin/dashboard/reports')>=0 ? 'Reports' : 
  location.pathname.indexOf('/admin/dashboard/rule-craft')>=0 ? 'Rule Craft' : 
  location.pathname.indexOf('/admin/dashboard/campaign-manager')>=0 ? 'Campaign Manager' : 'Overview'
  const [drop, setDrop, ref] = useOutside(false)
  return (
    <div className={`${style.admin_header_wrapper} ${SuperAdminLocation ? style.superAdminHeader : ResellerAdminLocation ? style.resellerAmin : null} d-flex align-items-center justify-content-between`}>
      {/* {
        contextAdminMainMenu.adminMainMenu || contextAdminMainMenu.profileDrop ? <div className={style.overlay} onClick={contextAdminMainMenu.handleDefaultOverlay}></div> : null
      } */}
       
       {/* <div className={`${style.left} d-flex align-items-center justify-content-between`}>
           <Link to={'/admin/dashboard'} className={style.logo}> <img src={Logo} alt=""  onClick={contextAdminMainMenu.handleDefaultOverlay}/> </Link>
           <div className={`${style.toggle_menu_wrapper}`} >
              <span className={`${style.toggle_menu_main} d-flex align-items-center`} onClick={()=>contextAdminMainMenu.handleAdminMainMenuToggle(true)}>
                <span><img src={GridIcon} alt="" /></span> 
                <span className={style.label}>{currentLocation}</span> 
                <span className={`${contextAdminMainMenu.adminMainMenu ? style.active : null}`}><img src={DownArrowIcon} alt="" /></span> 
              </span>
              {
                contextAdminMainMenu.adminMainMenu ? <><div className='overlay' onClick={()=>contextAdminMainMenu.handleAdminMainMenuToggle(false)} style={{'top': '64px'}}></div><AdminMainMenu /></> : null
              }
           </div>
           
       </div> */}
       <div className={`${style.left} d-flex align-items-center justify-content-between`} ref={ref}>
           <Link to={`${AdminLocation ? '/admin/dashboard' : SuperAdminLocation ? '/super-admin/dashboard' : ResellerAdminLocation ? '/reseller-admin/dashboard' : null}`} className={`${style.logo} d-flex align-items-center`}>
            {
              ResellerAdminLocation ? <img src={SbiLogo} alt="" /> :
              <>
                <img src={Logo} alt="" /> {SuperAdminLocation && <span>Super Administrator</span>} 
              </>
            }
             
            </Link>
           {
            SuperAdminLocation || ResellerAdminLocation ? null : 
            <div className={`${style.toggle_menu_wrapper}`} >
                <span className={`${style.toggle_menu_main} d-flex align-items-center`} onClick={()=>setDrop(!drop)} ref={ref}>
                  <span><img src={GridIcon} alt="" /></span> 
                  <span className={style.label}>{currentLocation}</span> 
                  <span className={`${drop ? style.active : null}`}><img src={DownArrowIcon} alt="" /></span> 
                </span>
                {
                  drop ? <><div className='overlay' onClick={()=>setDrop(false)} style={{'top': '64px'}}></div><AdminMainMenu setDrop={setDrop}/></> : null
                }
            </div>
           }
           
           
       </div>
       <div className={`${style.right} d-flex align-items-center`}>
          <ul className={`${style.icon_area} d-flex align-items-center`} onClick={contextAdminMainMenu.handleDefaultOverlay}>
            <li><img src={CircleIcon} alt="" /></li>
            <li><img src={BellIcon} alt="" /></li>
          </ul>
          <Profile />
       </div>
    </div>
  )
}

export default AdminHeader
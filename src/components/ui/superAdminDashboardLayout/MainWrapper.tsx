import { Outlet, useLocation } from 'react-router-dom'
import style from './style.module.scss'
import AdminHeader from '../adminDashboardLayout/adminHeader/AdminHeader'
import SuperAdminSideBar from './superAdminSidebar/SuperAdminSideBar'

const MainWrapper = () => {
    
  const location = useLocation()
  const LocationSuperandResellerSidebar =
  location.pathname.indexOf('/super-admin/dashboard/view-profile')>=0 || location.pathname.indexOf('/super-admin/dashboard/settings')>=0 || location.pathname.indexOf('/super-admin/dashboard/keyboard-shortcuts')>=0  || location.pathname.indexOf('/reseller-admin/dashboard/view-profile')>=0 || location.pathname.indexOf('/reseller-admin/dashboard/settings')>=0 || location.pathname.indexOf('/reseller-admin/dashboard/keyboard-shortcuts')>=0
  return (
    <div className={`${style.dashboard_wrapper} `}>
        <AdminHeader />
        <div className={style.main_wrapper}>
          {
            LocationSuperandResellerSidebar ? null : <SuperAdminSideBar />
          }
          <Outlet />
        </div>
        <div className={style.footer_area}>© {new Date().getFullYear()} Zuqo Corporation. All rights reserved.</div>
    </div>
  )
}

export default MainWrapper
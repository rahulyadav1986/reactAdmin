import { Outlet, useLocation } from 'react-router-dom'
import AdminHeader from './adminHeader/AdminHeader'
import AdminSideBar from './adminSidebar/AdminSideBar'
import style from './style.module.scss'
// import { useContext } from 'react'
// import { ContextHeader } from '../../../contexts/headerContext'

const MainWrapper = () => {
    const location = useLocation()
    const currentLocation = location.pathname.indexOf('/admin/dashboard/workflow-studio') >= 0 ||
    location.pathname.indexOf('/admin/dashboard/interaction-center') >= 0 ||
    location.pathname.indexOf('/admin/dashboard/ai-analytics') >= 0 ||
    location.pathname.indexOf('/admin/dashboard/platform-configuration') >= 0 ||
    location.pathname.indexOf('/admin/dashboard/reports') >= 0
    // const defaultHeaderContext = useContext(ContextHeader)
  return (
    <div className={`${style.dashboard_wrapper} ${currentLocation ? style.sidebar_container : null}`}>
        {/* {
            defaultHeaderContext.adminMainMenu || defaultHeaderContext.profileDrop ? <div className={style.overlay} onClick={defaultHeaderContext.handleDefaultOverlay}></div> : null
        } */}
        <AdminHeader />
        <div className={style.main_wrapper}>
            {currentLocation ? <AdminSideBar key={"Location"} /> : null}
            <Outlet />
        </div>
        <div className={style.footer_area}>© {new Date().getFullYear()} Zuqo Corporation. All rights reserved.</div>
    </div>
  )
}

export default MainWrapper
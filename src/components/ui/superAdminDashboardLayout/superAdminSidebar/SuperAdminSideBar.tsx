import { useContext } from 'react'
// import { SuperAdminSidebarData } from './Data'
import style from './style.module.scss'
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'
import { useLocation } from 'react-router-dom'



const SuperAdminSideBar = () => {
    const contextSuperAdminSidebarTab = useContext(ContextSuperAdminDashboard)
    const location = useLocation()
    const handleNavigation = (index: number) => {
        contextSuperAdminSidebarTab.handleAddResourcePage(null);
        // if(index == 1 || index == 2)
        // {
        contextSuperAdminSidebarTab.handleSideBarTab(index);
        //}

        
    };



    return (
        <ul className={`${style.admin_sidebar_wrapper} admin_sidebar_wrapper side_panelsuper_admin d-flex flex-column align-items-center`}>
            {/* {
            SuperAdminSidebarData.map((item, index)=>{
                return(
                    <li key={index} onClick={()=>contextSuperAdminSidebarTab.handleSideBarTab(item.id)} className={`${contextSuperAdminSidebarTab.sidebarTab === item.id ? style.active : null}`}>
                        <img src={`/assets/dashboard/main_dashboard/admin/sidebar/${item.icon}`} alt="" />
                        <span className={`${style.label}`}>{item.label}</span> 
                    </li>
                )
            })
        } */}

            {/* {
                SuperAdminSidebarData.map((item, index) => {
                    return (

                        <li key={index} className={`${contextSuperAdminSidebarTab.sidebarTab === index ? style.active : null}`} onClick={() => { contextSuperAdminSidebarTab.handleSideRoute(index), handleNavigation(index) }}>
                            <img src={`/assets/dashboard/main_dashboard/admin/sidebar/${item.icon}`} alt="" />
                            <span className={`${style.label}`}>{item.label}</span>
                        </li>

                    )
                })
            } */}

            <li className={`${location.pathname === "/super-admin/dashboard" ? style.active : null}`} onClick={() => { contextSuperAdminSidebarTab.handleSideRoute(0), handleNavigation(0) }}>
                <img src={`/assets/dashboard/main_dashboard/admin/sidebar/dashboard.svg`} alt="" />
                <span className={`${style.label}`}>Dashboard</span>
            </li>
            <li className={`${location.pathname === "/super-admin/dashboard/companies"  ? style.active : null}`} onClick={() => { contextSuperAdminSidebarTab.handleSideRoute(1), handleNavigation(1) }}>
                <img src={`/assets/dashboard/main_dashboard/admin/sidebar/companies.svg`} alt="" />
                <span className={`${style.label}`}>Companies</span>
            </li>
            <li className={`${location.pathname === "/super-admin/dashboard/resellers" ? style.active : null}`} onClick={() => { contextSuperAdminSidebarTab.handleSideRoute(2), handleNavigation(2) }}>
                <img src={`/assets/dashboard/main_dashboard/admin/sidebar/resellers.svg`} alt="" />
                <span className={`${style.label}`}>Resellers</span>
            </li>

        </ul>
    )
}

export default SuperAdminSideBar
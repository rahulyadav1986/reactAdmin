import { NavLink } from 'react-router-dom'
// import { ContextHeader } from '../../../../contexts/headerContext'
import { AdminMainMenuData } from './Data'
import style from './style.module.scss'
import {useContext} from 'react'
import { ContextWorkflow } from '../../../../contexts/workflowContext'
const AdminMainMenu = ({setDrop}:any) => {
//   const contextAdminMainMenu = useContext(ContextHeader)
  const contextWorkFlow = useContext(ContextWorkflow)
  return (
    <ul className={style.admin_main_menu_wrapper}>
        {
            AdminMainMenuData.map((item,_i)=>{
                return(
                    <li key={item.id} onClick={()=>setDrop(false)}>
                        <NavLink to={item.link}>
                            <span className={style.main_wrap} onClick={()=>{contextWorkFlow.handleSidebarTab(0)}}>
                                <span className={`${style.label} d-flex align-items-center`}>
                                    <span><img src={item.icon} alt="" /></span> 
                                    <span className={style.main_menu_title}>{item.label}</span>
                                </span>
                                <p>{item.tagline}</p>
                            </span>
                        </NavLink>
                    </li>
                )
            })
        }
        
    </ul>
  )
}

export default AdminMainMenu
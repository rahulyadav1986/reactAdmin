
import style from './style.module.scss'
import { MenuData } from './Data'
import { NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ContextHeader } from '../../../../contexts/headerContext'
const DashboardSideBar = () => {
  
  const location = useLocation()
  const defaultHeaderContext = useContext(ContextHeader)
  return (
    <ul className={`${style.panel_wrapper} d-flex flex-column side_panel_wrapper`}>
      {
        MenuData.map((item,i)=>{
          const CurrentLocation = location.pathname.indexOf('/agent' )>=0 ? `/agent/dashboard` : `/supervisor/dashboard`
          // console.log('Print Url', `/agent/dashboard/${item.link}`)
          console.log('Print Current' ,location.pathname)
          return(
            <>
              <li key={i} onClick={defaultHeaderContext.handleDefaultOverlay}>
                <NavLink to={`${CurrentLocation}/${item.link}`}>
                  <span className={`${style.icon} icon`}><img src={item.icon} alt={item.labelName} /></span> 
                  <span className={`${style.label} label`}>{item.labelName}</span> 
                </NavLink>
              </li> 
            </>
            
          )
        })
      }
      
    </ul>
  )
}

export default DashboardSideBar
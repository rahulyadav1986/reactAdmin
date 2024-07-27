import { useContext } from 'react'
import { PlatformSidebarData } from './Data'
import style from './style.module.scss'
import { ContextPlatformConfiguration } from '../../../../../contexts/platformConfigurationContext'

const SideBarConfiguration = () => {
  const contextPlatformConfiguration = useContext(ContextPlatformConfiguration)

  return (
    <div className={`${style.sidebar_area} ${contextPlatformConfiguration.hamburgarSidebarToggle ? style.open : null}`}>
        {
          PlatformSidebarData.map((item,i)=>{
            return(
                <div className={style.menu_area} key={i}>
                    {
                        item.menuCatName === "" || null ? null : <h2>{item.menuCatName}</h2>
                    }
                    <ul className={style.menu}>
                        {
                            item.menuCat.map((menuItem,menuIndex)=>{
                                return(
                                    <li key={menuIndex} className={`${contextPlatformConfiguration.platformConfigurationTab === menuItem.tabID ? style.active : null}`} onClick={()=>contextPlatformConfiguration.handlePlatformConfigurationTab(menuItem.tabID)}>
                                        <span className={style.icon}><img src={menuItem.menuIcon} alt="" /></span>
                                        <span dangerouslySetInnerHTML={{__html: menuItem.menuCatName}} />
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            )
          })  
        }
        
    </div>
  )
}

export default SideBarConfiguration
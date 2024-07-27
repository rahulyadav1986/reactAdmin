import style from './style.module.scss'
import { PlatformSidebarData } from '../sideBarConfiguration/Data'
import HamburgarIcon from "/assets/dashboard/side_panel/hamburger.svg"
import { useContext } from 'react'
import { ContextPlatformConfiguration } from '../../../../../contexts/platformConfigurationContext'
const CommonHeading = () => {
  const contextPlatformConfiguration = useContext(ContextPlatformConfiguration)
  return (
    <>
        {
            PlatformSidebarData.map((item)=>{
              return(
                  <>
                    {
                      item.menuCat.map((menuItem,menuIndex)=>{
                          return(
                            <>
                              {
                                contextPlatformConfiguration.platformConfigurationTab === menuItem.tabID ?
                                <div key={menuIndex} className={`${style.common_header_area} d-flex align-items-center`}>
                                  <span className={`${style.hamburgar} `} onClick={()=>contextPlatformConfiguration.handleHamburgarSidebarToggle(true)}><img src={HamburgarIcon} alt="" /></span>
                                  {/* <span dangerouslySetInnerHTML={{__html: menuItem.menuCatName}} /> */}
                                  {                                   
                                    menuItem.tabID === 0 ? "At Glance" : 
                                    menuItem.tabID === 1 ? "Channels" :
                                    menuItem.tabID === 2 ? <UserHeading /> :
                                    menuItem.tabID === 15 ? "Call Script" : <span dangerouslySetInnerHTML={{__html: menuItem.menuCatName}} />
                                    
                                  }
                                  
                                </div> : null
                              }
                            </>
                          )
                      })
                    }
                  </>
              )
            })  
          }
    </>
  )
}

export default CommonHeading


export const UserHeading = ()=>{
    const contextPlatformConfiguration = useContext(ContextPlatformConfiguration)
    console.log(contextPlatformConfiguration.recentAddUserlist)
    return(
      <>
          {
            contextPlatformConfiguration.recentAddUserlist !== true ? "Users" : 
            <ul className={`${style.breadcrumb} d-flex align-items-center`}>
              <li onClick={()=>contextPlatformConfiguration.handleRecentAddUserList(false)}>Platform Settings</li>
              <li>Users</li>
              <li>New User</li>
            </ul>
          }
      </>
    )
  }
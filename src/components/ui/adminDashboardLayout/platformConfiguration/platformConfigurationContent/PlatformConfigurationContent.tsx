import { useContext } from 'react'
import style from "./style.module.scss"
import { ContextPlatformConfiguration } from '../../../../../contexts/platformConfigurationContext'
import PlatformSettings from './platformSettings/PlatformSettings'
import CallScript from './callScript/CallScript'
import PlatformUser from './platformUser/PlatformUser'
import CommonHeading from './CommonHeading'

const PlatformConfigurationContent = () => {
  const contextPlatformConfiguration = useContext(ContextPlatformConfiguration)
  return (
    <>
        {contextPlatformConfiguration.hamburgarSidebarToggle ? <div className={style.common_ovarlay} onClick={()=>contextPlatformConfiguration.handleHamburgarSidebarToggle(false)}></div> : null}
        <div className={style.platform_content_wrapper}>
          <CommonHeading />          
          {
              contextPlatformConfiguration.platformConfigurationTab === 0 ? <PlatformSettings /> :
              contextPlatformConfiguration.platformConfigurationTab === 1 ? "1" :
              contextPlatformConfiguration.platformConfigurationTab === 2 ? <PlatformUser /> :
              contextPlatformConfiguration.platformConfigurationTab === 3 ? "3" :
              contextPlatformConfiguration.platformConfigurationTab === 4 ? "4" :
              contextPlatformConfiguration.platformConfigurationTab === 5 ? "5" :
              contextPlatformConfiguration.platformConfigurationTab === 6 ? "6" :
              contextPlatformConfiguration.platformConfigurationTab === 7 ? "7" :
              contextPlatformConfiguration.platformConfigurationTab === 8 ? "8" :
              contextPlatformConfiguration.platformConfigurationTab === 9 ? "9" :
              contextPlatformConfiguration.platformConfigurationTab === 10 ? "10" :
              contextPlatformConfiguration.platformConfigurationTab === 11 ? "11" :
              contextPlatformConfiguration.platformConfigurationTab === 12 ? "12" :
              contextPlatformConfiguration.platformConfigurationTab === 13 ? "13" :
              contextPlatformConfiguration.platformConfigurationTab === 14 ? "14" :
              contextPlatformConfiguration.platformConfigurationTab === 15 ? <CallScript /> :
              contextPlatformConfiguration.platformConfigurationTab === 16 ? "16" :
              contextPlatformConfiguration.platformConfigurationTab === 17 ? "17" :
              contextPlatformConfiguration.platformConfigurationTab === 18 ? "18" :
              contextPlatformConfiguration.platformConfigurationTab === 19 ? "19" : null
          }
        </div>
        
    </>
  )
}

export default PlatformConfigurationContent


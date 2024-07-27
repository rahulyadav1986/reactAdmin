import style from "./style.module.scss"
import PlatformConfigurationContent from '../platformConfigurationContent/PlatformConfigurationContent'
import SideBarConfiguration from '../sideBarConfiguration/SideBarConfiguration'
import { PlatformConfigurationContext } from "../../../../../contexts/platformConfigurationContext"

const DashboardConfiguration = () => {
  return (
    <div className={style.dashboard_wrapper}>
      <PlatformConfigurationContext>
        <SideBarConfiguration />
        <PlatformConfigurationContent />
      </PlatformConfigurationContext>
    </div>
  )
}

export default DashboardConfiguration
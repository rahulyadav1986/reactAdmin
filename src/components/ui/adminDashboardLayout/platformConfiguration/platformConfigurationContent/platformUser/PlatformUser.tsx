import style from "./style.module.scss"
import { useContext } from "react"
import PlatformUserListWithFilter from "./PlatformUserListWithFilter"
import { ContextPlatformConfiguration } from "../../../../../../contexts/platformConfigurationContext"
import AddNewUser from "./addNewUser/AddNewUser"

const PlatformUser = () => {
  const platFormConfig = useContext(ContextPlatformConfiguration)
  return (
    <div className={style.platform_user_wrapper}>
      <div className={style.details_wrappper}>
        { platFormConfig.recentAddUserlist === true ?  <AddNewUser /> : <PlatformUserListWithFilter /> }      
      </div>
    </div>
      
  )
}

export default PlatformUser
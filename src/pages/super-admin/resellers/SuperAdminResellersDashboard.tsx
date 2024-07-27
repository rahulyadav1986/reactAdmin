import style from "./style.module.scss"
import Resellers from '../../../components/ui/superAdminDashboardLayout/resellers/Resellers'

const SuperAdminResellersDashboard = () => {
  return (
    <div className={style.common_wrapper}>
      <Resellers />
    </div>
  )
}

export default SuperAdminResellersDashboard
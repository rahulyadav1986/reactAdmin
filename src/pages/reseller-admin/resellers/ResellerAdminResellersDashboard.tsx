import style from "./style.module.scss"
import Resellers from '../../../components/ui/superAdminDashboardLayout/resellers/Resellers'

const ResellerAdminResellersDashboard = () => {
  return (
    <div className={style.common_wrapper}>
      <Resellers />
    </div>
  )
}

export default ResellerAdminResellersDashboard
import style from "./style.module.scss"
import Companies from '../../../components/ui/superAdminDashboardLayout/companies/Companies'

const ResellerAdminCompaniesDashboard = () => {
  return (
    <div className={style.common_wrapper}>
      <Companies />
    </div>
  )
}

export default ResellerAdminCompaniesDashboard
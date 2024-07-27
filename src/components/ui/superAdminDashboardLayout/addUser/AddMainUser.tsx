import { useContext } from 'react'
import style from './style.module.scss'
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'
import MainUserForm from './MainUserForm'

const AddMainUser = ({item}:any) => {
  const contextSuperAdmin = useContext(ContextSuperAdminDashboard)
  return (
    <div className={style.user_form_area_wrapper}>
        <div className={style.main_head_area_wrapper}>
            <div className={style.main_user}>
                <h1>Create a user for {item.companyName}</h1>
                <p>You can create an {contextSuperAdmin.addMainUser === 'reseller' ? 'Reseller' : 'Company'}, have basic details and share the platform link with credentials</p>
            </div>
        </div>
        <MainUserForm />
    </div>
  )
}

export default AddMainUser
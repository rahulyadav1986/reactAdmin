import { useContext } from 'react'
import style from './style.module.scss'
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'
// import UserForm from './UserForm'
import ResellerForm from './ResellerForm'
import CompanyForm from './CompanyForm'
import { Link } from 'react-router-dom'





const AddResource = () => {
  const {handleAddResourcePage, addResourceType} = useContext(ContextSuperAdminDashboard)
  return (
    <div className={style.user_form_area_wrapper}>
        <ul className={style.breadcrumb}>
            {/* <li className={style.active} onClick={()=>handleAddResourcePage(false)}>Dashboard</li>
            <li>New {addResourceType === 'companies' ? 'Company' : addResourceType === 'resellers' ? 'Reseller' : null}</li> */}
            <li className={style.active}><Link to={'/super-admin/dashboard'}>Dashboard</Link></li>
            <li className={style.active} onClick={()=>handleAddResourcePage(false)}>{addResourceType === 'companies' ? 'Companies' : addResourceType === 'resellers' ? 'Resellers' : null}</li>
            <li>New {addResourceType === 'companies' ? 'Company' : addResourceType === 'resellers' ? 'Reseller' : null}</li>
        </ul>
        <div className={style.main_head_area_wrapper}>
            <div className={style.main}>
                <h1>Set up the {addResourceType === 'companies' ? 'company' : addResourceType === 'resellers' ? 'reseller' : null} </h1>
                <p>You can create an {addResourceType === 'companies' ? 'company' : addResourceType === 'resellers' ? 'reseller' : null}, have basic details and share the platform link with credentials</p>
            </div>
        </div>
        {
          addResourceType === 'resellers' ? <ResellerForm /> :   <CompanyForm />
        }
      
    </div>
  )
}

export default AddResource
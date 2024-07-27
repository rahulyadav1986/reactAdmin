import style from './style.module.scss'
import VerticalGridIcon from "/assets/dashboard/main_dashboard/admin/verticalGrid.svg"
import CardIconTotalCompanies from "/assets/dashboard/main_dashboard/superAdmin/c1.svg"
import CardIconActive from "/assets/dashboard/main_dashboard/superAdmin/c2.svg"
import CardIconInActive from "/assets/dashboard/main_dashboard/superAdmin/c3.svg"
import { ContextSuperAdminDashboard } from '../../../../../contexts/superAdminContext'
import { useContext } from 'react'
const ResellersCompaniesCard = () => {
  const {companyListLS, userList} = useContext(ContextSuperAdminDashboard)
  const resellerCompanies = companyListLS.filter(item => {
      return item.underReseller != ''
  })

  const activeResellerCompanies = companyListLS.filter(item => {
    return item.isSuspended == false && item.underReseller != ''
  })

  const inactiveResellerCompanies = companyListLS.filter(item => {
    return item.isSuspended == true && item.underReseller != ''
  })

  const resellerCompanyIds = resellerCompanies.map(item => {
    return item.id
  })

  const resellerUsers = userList.filter(item => {
    return resellerCompanyIds.includes(item.companyID ?? '')
  })

  const resellerAdminUsers = userList.filter(item => {
    return resellerCompanyIds.includes(item.companyID ?? '') && ['Administrator'].includes(item.userType)

  })

  return (
    <div className={style.card}>
      <div className={`${style.heading} d-flex align-items-center`}>
        <span><img src={VerticalGridIcon} alt="" /></span>
        <h2><strong>Resellers'</strong> Companies</h2>
      </div>
      <div className={`${style.list_result_area} d-flex justify-content-between`}>
        <ul className={style.company_status}>
          <li className='d-flex'>
            <span><img src={CardIconTotalCompanies} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Total COMPANIES</h4>
                <span>{resellerCompanies.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Active</h4>
                <span>{activeResellerCompanies.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconInActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>InActive</h4>
                <span>{inactiveResellerCompanies.length}</span>
            </div>
          </li>
          
        </ul>
        <ul className={style.user_status}>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Total Users</h4>
            <span>{resellerUsers.length}</span>
          </li>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Administrators</h4>
            <span>{resellerAdminUsers.length}</span>
          </li>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Inactive Users</h4>
            <span>{inactiveResellerCompanies.length}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ResellersCompaniesCard
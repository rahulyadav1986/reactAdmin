import style from './style.module.scss'
import VerticalGridIcon from "/assets/dashboard/main_dashboard/admin/verticalGrid.svg"
import CardIconTotalCompanies from "/assets/dashboard/main_dashboard/superAdmin/c1.svg"
import CardIconActive from "/assets/dashboard/main_dashboard/superAdmin/c2.svg"
import CardIconInActive from "/assets/dashboard/main_dashboard/superAdmin/c3.svg"
import CardIconPending from "/assets/dashboard/main_dashboard/superAdmin/c4.svg"
import { ContextSuperAdminDashboard } from '../../../../../contexts/superAdminContext'
import { useContext } from 'react'

const OwnedCompaniesCard = () => {
  const {companyListLS, userList} = useContext(ContextSuperAdminDashboard)
  const ownedCompanies = companyListLS.filter(item => {
    return item.underReseller == ''
  })

  const activeCompanies = ownedCompanies.filter(item => {
    return !item.isSuspended
  })

  const ownedCompanyIds = ownedCompanies.map(item => {
    return item.id
  })

  const ownedCompanyUsers = userList.filter(item => {
    return ownedCompanyIds.includes(item.companyID??'')
  })

  const inactiveUsers = ownedCompanyUsers.filter(item => {
    return item.isSuspended
  })

  const adminUsers = ownedCompanyUsers.filter(item => {
    return ['Administrator'].includes(item.userType)
  })


  return (
    <div className={style.card}>
      <div className={`${style.heading} d-flex align-items-center`}>
        <span><img src={VerticalGridIcon} alt="" /></span>
        <h2><strong>Owned</strong> Companies</h2>
      </div>
      <div className={`${style.list_result_area} d-flex justify-content-between`}>
        <ul className={style.company_status}>
          <li className='d-flex'>
            <span><img src={CardIconTotalCompanies} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Total COMPANIES</h4>
                <span>{ownedCompanies.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Active</h4>
                <span>{activeCompanies.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconInActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>InActive</h4>
                <span>{ownedCompanies.length - activeCompanies.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconPending} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>PENDING INVITATIONS</h4>
                <span>01</span>
            </div>
          </li>
        </ul>
        <ul className={style.user_status}>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Total Users</h4>
            <span>{ownedCompanyUsers.length}</span>
          </li>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Administrators</h4>
            <span>{adminUsers.length}</span>
          </li>
          <li className='d-flex align-items-center justify-content-between'>
            <h4>Inactive Users</h4>
            <span>{inactiveUsers.length}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OwnedCompaniesCard
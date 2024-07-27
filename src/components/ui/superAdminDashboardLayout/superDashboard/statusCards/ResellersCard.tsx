import style from './style.module.scss'
import VerticalGridIcon from "/assets/dashboard/main_dashboard/admin/verticalGrid.svg"
import CardIconTotalCompanies from "/assets/dashboard/main_dashboard/superAdmin/c1.svg"
import CardIconActive from "/assets/dashboard/main_dashboard/superAdmin/c2.svg"
import CardIconInActive from "/assets/dashboard/main_dashboard/superAdmin/c3.svg"
import CardIconPending from "/assets/dashboard/main_dashboard/superAdmin/c4.svg"
import { ContextSuperAdminDashboard } from '../../../../../contexts/superAdminContext'
import { useContext } from 'react'

const ResellersCard = () => {
  const {resellerListLS} = useContext(ContextSuperAdminDashboard)
  const activeResellers = resellerListLS.filter(item => {
    return !item.isSuspended
  })
  return (
    <div className={style.card}>
      <div className={`${style.heading} d-flex align-items-center`}>
        <span><img src={VerticalGridIcon} alt="" /></span>
        <h2>Resellers</h2>
      </div>
      <div className={`${style.list_result_area} d-flex justify-content-between`}>
        <ul className={style.company_status}>
          <li className='d-flex'>
            <span><img src={CardIconTotalCompanies} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Total COMPANIES</h4>
                <span>{resellerListLS.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>Active</h4>
                <span>{activeResellers.length}</span>
            </div>
          </li>
          <li className='d-flex'>
            <span><img src={CardIconInActive} alt="" /></span>
            <div className='d-flex flex-column'>
                <h4>InActive</h4>
                <span>
                {resellerListLS.length - activeResellers.length}
                </span>
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
      </div>
    </div>
  )
}

export default ResellersCard
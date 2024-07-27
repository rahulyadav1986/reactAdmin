import style from './style.module.scss'
import Icon1 from "/assets/dashboard/main_dashboard/admin/campaignManager/ovarallDashboard/rs1.svg"
import Icon2 from "/assets/dashboard/main_dashboard/admin/campaignManager/ovarallDashboard/ca2.svg"
const ReachablityAnalyticsDetails = () => {
  return (
    <div className={style.reach_statistics_details_wrapper}>
      <ul className={`${style.statics_details}`}>
          <li className='d-flex align-items-center'>
            <span><img src={Icon1} alt="" /></span>
            <div>
              <h3>TOTAL CONTACTS</h3>
              <p>3,520</p>
            </div>
          </li>
          <li className='d-flex align-items-center'>
            <span><img src={Icon1} alt="" /></span>
            <div>
              <h3>Reached Contacts</h3>
              <p>3,480</p>
            </div>
          </li>
          <li className='d-flex align-items-center'>
            <span><img src={Icon2} alt="" /></span>
            <div>
              <h3>Unreached Contacts</h3>
              <p>340</p>
            </div>
          </li>
          
      </ul>
    </div>
  )
}

export default ReachablityAnalyticsDetails
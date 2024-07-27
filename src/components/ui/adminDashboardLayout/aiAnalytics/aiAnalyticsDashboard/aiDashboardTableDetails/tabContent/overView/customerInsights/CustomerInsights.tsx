import style from './style.module.scss'
import AvatarIcon  from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pro1.png"
import CallSmallIcon from '/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/callSmall.svg'
import CustomerSentiment from './customerSentiment/CustomerSentiment'
import StatusType from './statusType/StatusType'
import CustomerExtraDetails from './customerExtraDetails/CustomerExtraDetails'
const CustomerInsights = () => {
  return (
    <div className={style.customer_insight_wrapper}>
        <h2>Customer Insights</h2>
        <ul className={`${style.customer_details} d-flex align-items-center justify-content-between`}>
            <li className='d-flex align-items-center'>
                <span className={style.avatar}><img src={AvatarIcon} alt="" /></span>
                <span className={`${style.details} d-flex flex-column justify-content-between`}>
                    <strong className={style.name}>Preetam Kulakarni</strong>
                    <span className={style.no}>+91 849***8493</span>
                </span>
            </li>
            <li className={`${style.details} d-flex flex-column justify-content-between`}>
                <span>ACTIVE SINCe</span>
                <strong>4 years</strong>
            </li>
            <li className={`${style.details} d-flex flex-column justify-content-between`}>
                <span>LAST INTERACTION ON</span>
                <strong className='d-flex align-items-center'>12 May 2023, 04:00pm <img src={CallSmallIcon} style={{'marginLeft':'7px'}} alt="" /></strong>
            </li>
            <li className={`${style.details} d-flex flex-column justify-content-between`}>
                <span>Customer Satisfaction</span>
                <strong className={style.satisfaction_level}>Satisfied</strong>
            </li>
        </ul>
        <div className={style.customer_status_contact_details_wrapper}>
            <CustomerSentiment />
            <StatusType />
        </div>
        <CustomerExtraDetails />
    </div>
  )
}

export default CustomerInsights
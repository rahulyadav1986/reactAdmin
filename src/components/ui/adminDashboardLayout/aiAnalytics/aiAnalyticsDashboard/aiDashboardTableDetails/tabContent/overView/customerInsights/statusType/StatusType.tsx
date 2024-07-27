import style from './style.module.scss'
import EmailIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/email.svg"
import InfoIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/info_outline.svg"
const StatusType = () => {
  return (
    <div className={style.status_type_wrapper}>
        <div className={style.portion}>
            <h2>Preferred<br />channel CHOICE</h2>
            <span>
                <span><img src={EmailIcon} className={style.email} alt="" /></span>
                <span>Email</span>
            </span>
        </div>
        <div className={style.portion}>
            <h2># of times<br />connected</h2>
            <span>12 times</span>
        </div>
        <div className={style.portion}>
            <h2>COMMON<br />REASON</h2>
            <span>
                <span>Pricing</span>
                <span><img src={InfoIcon} className={style.info} alt="" /></span>
            </span>
        </div>
    </div>
  )
}

export default StatusType
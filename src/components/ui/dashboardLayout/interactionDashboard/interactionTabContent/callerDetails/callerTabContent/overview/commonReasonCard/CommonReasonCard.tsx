import style from './style.module.scss'
import EmailIcon from '/assets/interactionCenter/profileCard/email.svg'
const CommonReasonCard = () => {
  return (
    <div className={style.commonReasonCard}>
        <h2>Preferred<br />channel CHOICE</h2>
        <div className={`${style.email} d-flex align-items-center`}>
            <span><img src={EmailIcon} alt="" /></span>
            <span>Email</span>
        </div>
        <div className={style.bottom_line}>
            <h5>COMMON REASON</h5>
            <h6>Quality Issue</h6>
        </div>
    </div>
  )
}

export default CommonReasonCard
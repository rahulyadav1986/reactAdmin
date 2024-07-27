import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import { ContactedAtemptBreakDownData } from './Data'

const ContactedAtemptBreakdown = () => {
  const firstAttempt = Number(ContactedAtemptBreakDownData.firstAttempt)
  const secondAttempt = Number(ContactedAtemptBreakDownData.secondAttempt)
  const thirdAttempt = Number(ContactedAtemptBreakDownData.thirdAttempt)
  const TotalAttempts = firstAttempt + secondAttempt + thirdAttempt
  
  const firstAttemptPer = firstAttempt / TotalAttempts * 100
  const secondAttemptPer = (secondAttempt / TotalAttempts) * 100
  const thirdAttemptPer = (thirdAttempt / TotalAttempts) * 100
  console.log(TotalAttempts, firstAttemptPer, secondAttemptPer, thirdAttemptPer)
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Contacted - Attempts Breakdown</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.performance_details}>
        <div className={style.portion}>
          <h5>FIRST ATTEMPT</h5>
          <span className={style.no} style={{'color': '#8786AE'}}>{ContactedAtemptBreakDownData.firstAttempt}</span>
        </div>
        <div className={style.portion}>
          <h5>SECOND ATTEMPT</h5>
          <span className={style.no} style={{'color': '#86A7AE'}}>{ContactedAtemptBreakDownData.secondAttempt}</span>
        </div>
        <div className={style.portion}>
          <h5>THIRD ATTEMPT</h5>
          <span className={style.no} style={{'color': '#4E545F'}}>{ContactedAtemptBreakDownData.thirdAttempt}</span>
        </div>
      </div>
      <div className={style.bar_status}>
        <span style={{'width': `${firstAttemptPer}%`, 'backgroundColor': '#8786AE'}}></span>
        <span style={{'width': `${secondAttemptPer}%`, 'backgroundColor': '#86A7AE'}}></span>
        <span style={{'width': `${thirdAttemptPer}%`, 'backgroundColor': '#4E545F'}}></span>
      </div>
    </>
  )
}

export default ContactedAtemptBreakdown
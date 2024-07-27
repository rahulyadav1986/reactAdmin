import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"

const ChannelEffectiveness = () => {
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Channel Effectiveness</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.performance_details}>
        <div className={style.portion}>
          <h5>Voice Call Answer Rate</h5>
          <span className={style.no}>65%</span>
        </div>
        <div className={style.portion}>
          <h5>SMS Delivery Rate</h5>
          <span className={style.no}>80%</span>
        </div>
        <div className={style.portion}>
          <h5>Messaging Read Rate</h5>
          <span className={style.no}>75%</span>
        </div>
      </div>
      
    </>
    
  )
}

export default ChannelEffectiveness
import style from './style.module.scss'
import LayerIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/layers.svg"
import OutBoundArrowIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/call_ongoing.svg"
import InboundArrowIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/call_received.svg"
import UpArrorIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/arrow_upward.svg"
import InboundChart from './InboundChart'
import OutboundChart from './OutboundChart'
const AiInteractionStatus = () => {
  return (
    <div className={style.interaction_status_header}>
      <div className={`${style.card} d-flex align-items-center justify-content-center`}>
          <h2>Total Interactions</h2>
          <div className={style.show}>
            <span className={style.icon}>
              <img src={LayerIcon} alt="" />
            </span>
            <span>899</span>
          </div>
          <div className={`${style.bottom_status} d-flex align-items-center`}>
            <span><img src={UpArrorIcon} alt="" /></span> <span> <strong>1.9%</strong> vs  last 7 days</span> 
          </div>
      </div>
      <div className={`${style.card} d-flex align-items-center justify-content-between`}>
          <div className={`${style.bound_area}`}>
            <h5>Inbound</h5>
            <span className={`${style.stas} d-flex align-items-end`}>
              <span className={style.blue}>540</span>
              <span className={style.percentage}>60%</span>
              <span className={style.icon}><img src={InboundArrowIcon} alt="" /></span>
            </span>
            <div className={`${style.bottom_status} d-flex align-items-center`}>
              <span><img src={UpArrorIcon} alt="" /></span> <span> <strong>3.2%</strong>vs  last 7 days</span> 
            </div>
          </div>
          <div className={`${style.graph_area} graph_area`}>
            <InboundChart />
          </div>
      </div>
      <div className={`${style.card} d-flex align-items-center justify-content-between`}>
          <div className={`${style.bound_area}`}>
            <h5>Outbound</h5>
            <span className={`${style.stas} d-flex align-items-end`}>
              <span className={style.blue}>349</span>
              <span className={style.percentage}>60%</span>
              <span className={style.icon}><img src={OutBoundArrowIcon} alt="" /></span>
            </span>
            <div className={`${style.bottom_status} d-flex align-items-center`}>
              <span><img src={UpArrorIcon} alt="" /></span> <span> <strong>3.2%</strong>vs  last 7 days</span> 
            </div>
          </div>
          <div className={`${style.graph_area} graph_area`}>
            <OutboundChart />
          </div>
      </div>
    </div>
  )
}

export default AiInteractionStatus

import DistributionConversationIntentOutcomesChart from './DistributionConversationIntentOutcomesChart'
import DistributionConversationIntentsChart from './DistributionConversationIntentsChart'
import style from './style.module.scss'
import ActionIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const IntentAnalysis = () => {
  return (
    <div className={style.intent_analysis_wrapper}>
      <h2>INTENT ANALYSIS</h2>
      <div className={`${style.card_wrapper} ${style.top} d-flex justify-content-between`}>
          <div className={style.card}>
              <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                  <h3>Distribution of Conversation Intents</h3>
                  <span><img src={ActionIcon} alt="" /></span>
              </div>
              <div className={`${style.graph_area_wrapper} d-flex align-items-center justify-content-between`}>
                  <ul className={`${style.details}`}>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#FE6AA5'}}></span>
                              <span>Cancellation of product</span>
                          </span>
                          <span><strong>11%</strong></span>
                      </li>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#FE6AA5'}}></span>
                              <span>Complaint calls</span>
                          </span>
                          <span><strong>12%</strong></span>
                      </li>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#138EFF'}}></span>
                              <span>Technical Support</span>
                          </span>
                          <span><strong>20.75%</strong></span>
                      </li>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#3EBB03'}}></span>
                              <span>Billing Inquiries</span>
                          </span>
                          <span><strong>18%</strong></span>
                      </li>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#5F63F2'}}></span>
                              <span>Account Management</span>
                          </span>
                          <span><strong>25.50%</strong></span>
                      </li>
                      <li>
                          <span>
                              <span className={style.color_icon} style={{'backgroundColor': '#20C997'}}></span>
                              <span>Service Outages</span>
                          </span>
                          <span><strong>12.50%</strong></span>
                      </li>
                  </ul>
                  <div className={`${style.graph_area} graph_area_intent`}>
                    <DistributionConversationIntentsChart />
                  </div>
              </div>
          </div>
          <div className={style.card}>
              <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                  <h3>Distribution of Conversation Intent Outcomes</h3>
                  <span><img src={ActionIcon} alt="" /></span>
              </div>
              <div className={style.graph_area_wrapper}>
                  <DistributionConversationIntentOutcomesChart />
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default IntentAnalysis
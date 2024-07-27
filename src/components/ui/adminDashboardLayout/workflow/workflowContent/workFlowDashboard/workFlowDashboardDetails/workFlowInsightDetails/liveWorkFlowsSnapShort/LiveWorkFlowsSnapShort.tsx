import { LiveWorkFlowSnapShotData } from './Data'
import style from './style.module.scss'
import LineIcon from "/assets/dashboard/main_dashboard/admin/insights/line.svg"
import MoreIcon from "/assets/dashboard/main_dashboard/admin/insights/more.svg"

const LiveWorkFlowsSnapShort = () => {
  return (
    <div className={style.live_workflow_report_wrapper}>
        <div className={style.card}>
            <div className={`${style.status_header}`}>
                <h2>Live Workflows Snapshot</h2>
            </div>
            <div className={style.table_area_wrapper}>
              <table>
                 <thead>
                    <tr>
                      <th>
                          <div className={style.checkbox}>
                              <input type="checkbox" name="thead_check" id="1" />
                              <label htmlFor="1"><span></span></label>
                          </div>
                      </th>
                      <th>WORKFLOW NAME</th>
                      <th>WORKFLOW TYPE</th>
                      <th>SUCCESS RATE</th>
                      <th>ERROR RATE</th>
                      <th>AVG RESPONSE TIME (SEC)</th>
                      <th>customer satisfaction </th>
                      <th></th>
                    </tr>
                 </thead>
                 <tbody>
                  {
                    LiveWorkFlowSnapShotData.map((item)=>{
                      return(
                        <tr>
                          <td>
                              <div className={style.checkbox}>
                                  <input type="checkbox" name="thead_check" id={item.id} />
                                  <label htmlFor={item.id}><span></span></label>
                              </div>
                          </td>
                          <td className={style.workflow}>
                            <strong>{item.name}</strong>
                            <span>{item.desc}</span>
                          </td>
                          <td>
                            <span className={style.type}>{item.type}</span>
                            <span>Deployed on: {item.deployed}</span>
                          </td>
                          <td>
                            <span className={style.success_rate}>{item.successRate}</span>
                            <span>Last week {item.lastWeekSuccessRate}</span>
                          </td>
                          <td>
                            <span className={style.error_rate}>{item.errorrate}</span>
                            <span>Last week {item.lastWeekErrorRate}</span>
                          </td>
                          <td>
                            <div className='d-flex align-items-center'>
                                <div>
                                  <span className={style.response_time}>{item.responseTime}</span>
                                  <span>Target {item.target}</span>
                                </div>
                                <div className={style.graph}>
                                  <img src={LineIcon} alt="" />
                                </div>
                            </div>
                          </td>
                          <td>
                            <span className={style.customer_satisfaction}>SUPER HAPPY - {item.satisfactionLevel}</span>
                            <span>Last week {item.lastWeekSatisfactionLevel}</span>
                          </td>
                          <td><img src={MoreIcon} alt="" /></td>
                        </tr>
                      )
                    })
                  }
                    
                 </tbody>
              </table>
            </div>
        </div>
    </div>
    
  )
}

export default LiveWorkFlowsSnapShort
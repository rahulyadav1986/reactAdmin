import CampaignAnalyticsChart from './CampaignAnalyticsChart'
import { CampaignStatisticsData } from './Data'
import style from './style.module.scss'
import Icon1 from "/assets/dashboard/main_dashboard/admin/campaignManager/ovarallDashboard/ca1.svg"
import Icon2 from "/assets/dashboard/main_dashboard/admin/campaignManager/ovarallDashboard/ca2.svg"
const CampaignAnalyticsDetails = () => {
  return (
    <div className={style.campaign_analytics_details_wrapper}>
      <ul className={`${style.statics_details} d-flex`}>
          <li className='d-flex align-items-center'>
            <span><img src={Icon1} alt="" /></span>
            <div>
              <h3>TOTAL CAMPAIGNS</h3>
              <p>{CampaignStatisticsData.totalCampaigns}</p>
            </div>
          </li>
          <li className='d-flex align-items-center'>
            <span><img src={Icon2} alt="" /></span>
            <div>
              <h3>LIVE</h3>
              <p>{CampaignStatisticsData.live}</p>
            </div>
          </li>
          <li className='d-flex align-items-center'>
            <span><img src={Icon2} alt="" /></span>
            <div>
              <h3>COMPLETED</h3>
              <p>{CampaignStatisticsData.completed}</p>
            </div>
          </li>
          <li className='d-flex align-items-center'>
            <span><img src={Icon2} alt="" /></span>
            <div>
              <h3>ONHOLD</h3>
              <p>{CampaignStatisticsData.onhold}</p>
            </div>
          </li>
      </ul>
      <div className={style.graph_area}>
        <CampaignAnalyticsChart CampaignStatisticsData={CampaignStatisticsData} />
      </div>
      
    </div>
  )
}

export default CampaignAnalyticsDetails
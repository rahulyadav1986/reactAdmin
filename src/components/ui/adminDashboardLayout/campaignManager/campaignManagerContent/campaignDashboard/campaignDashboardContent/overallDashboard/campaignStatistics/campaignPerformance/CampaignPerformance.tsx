import style from './style.module.scss'
import styleParent from '../../style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import UpwardArrow from "/assets/dashboard/main_dashboard/admin/interactionCenter/arrow_upward.svg"
import DownwardArrow from "/assets/dashboard/main_dashboard/admin/campaignManager/ovarallDashboard/arrow_downward.svg"
import { CampaignPerformanceData } from './Data'

const CampaignPerformance = () => {
  return (
    <>
      <div className={`${styleParent.head_area} d-flex align-items-center justify-content-between`}>
        <h3>Campaigns Performance</h3>
        <span><img src={VerticalDots} alt="" /></span>
      </div>
      <div className={style.performance_details}>
        <div className={style.portion}>
          <h5>Average Conversion Rate</h5>
          <span className={style.status}><span>{CampaignPerformanceData.avarageConversionRate}</span> </span>
          <div className={`${style.bottom_status} d-flex align-items-center`}>
            <span><img src={`${CampaignPerformanceData.avarageConversionRateStatus !== 'upward' ? DownwardArrow : UpwardArrow }`} alt="" /></span> 
            <span><strong className={`${CampaignPerformanceData.avarageConversionRateStatus !== 'upward' && style.danger}`}>{CampaignPerformanceData.avarageConversionRatePer}%</strong> vs  last 7 days</span>
          </div>
        </div>
        <div className={style.portion}>
          <h5>TOP PERFORMING CAMPAIGN</h5>
          <span className={style.status}>{CampaignPerformanceData.performingCampaigns}</span>
          <div className={`${style.bottom_status} d-flex align-items-center`}>
            <span><img src={`${CampaignPerformanceData.performingCampaignsConversionRateStatus !== 'upward' ? DownwardArrow : UpwardArrow }`} alt="" /></span> 
            <span><strong className={`${CampaignPerformanceData.performingCampaignsConversionRateStatus !== 'upward' && style.danger}`}>{CampaignPerformanceData.performingCampaignsConversionRatePer}%</strong> Conversion Rate: 18%</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampaignPerformance
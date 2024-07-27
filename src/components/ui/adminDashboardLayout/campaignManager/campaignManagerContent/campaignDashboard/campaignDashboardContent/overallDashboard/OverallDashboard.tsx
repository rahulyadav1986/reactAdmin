
import CampaignStatistics from "./campaignStatistics/CampaignStatistics"
import OverallDashboardFilter from "./overallDashboardFilter/OverallDashboardFilter"
import ReachablityStatistics from "./reachablityStatistics/ReachablityStatistics"
import style from "./style.module.scss"

const OverallDashboard = () => {
  return (
    <div className={style.ovarall_dashboard_wrapper}>
       <OverallDashboardFilter />
       <div className={style.statistics_grid_area_wrapper}>
          <div className={style.dashboard_main_section}>
            <h2>CAMPAIGN STATISTICS</h2>
            <div className={style.dashboard_section}>
              <CampaignStatistics />
            </div>
          </div>
          <div className={style.dashboard_main_section}>
            <h2>Reachability STATISTICS</h2>
            <div className={style.dashboard_section}>
              <ReachablityStatistics />
            </div>
          </div>
       </div>
    </div>
  )
}

export default OverallDashboard
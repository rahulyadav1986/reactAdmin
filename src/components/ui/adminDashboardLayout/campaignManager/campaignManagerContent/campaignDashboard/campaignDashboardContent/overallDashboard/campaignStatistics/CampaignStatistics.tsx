import style from "../style.module.scss"
import AgentEngagement from "./agentEngagement/AgentEngagement"
import CampaignAnalyticsDetails from "./campaignAnalyticsDetails/CampaignAnalyticsDetails"
import CampaignPerformance from "./campaignPerformance/CampaignPerformance"
import CampaignTable from "./campaignTable/CampaignTable"
import ImpressionConversionsChart from "./impressionConversionsChart/ImpressionConversionsChart"
const CampaignStatistics = () => {
  return (
    <>
        <CampaignAnalyticsDetails />
        <div className={style.card}>
          <CampaignPerformance />
        </div>
        <div className={style.card}>
          <ImpressionConversionsChart />
        </div>
       
        <div className={style.card}>
          <AgentEngagement />
        </div>
        <CampaignTable />
    </>
  )
}

export default CampaignStatistics
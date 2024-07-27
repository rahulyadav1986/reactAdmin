import CampaignReportContent from './campaignReportContent/CampaignReportContent'
import CampaignReportListFilter from './campaignReportListFilter/CampaignReportListFilter'
import CampaignReportTab from './campaignReportTab/CampaignReportTab'
import style from './style.module.scss'

const CampaignReportList = () => {
  return (
    <div className={style.campaign_list_wrapper}>
       <CampaignReportListFilter />
        <div className={style.tab_wrapper}>
          <CampaignReportTab />
        </div>       
       <CampaignReportContent />
    </div>
  )
}

export default CampaignReportList
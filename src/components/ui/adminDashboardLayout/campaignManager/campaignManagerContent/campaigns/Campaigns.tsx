import CampaignsContent from './campaignsContent/CampaignsContent'
import CampaignsTab from './campaignsTab/CampaignsTab'
import style from './style.module.scss'

const Campaigns = () => {
  return (
    <div className={style.campaigns_dashboard_wrapper}>
        <CampaignsTab />
        <CampaignsContent />
    </div>
  )
}

export default Campaigns
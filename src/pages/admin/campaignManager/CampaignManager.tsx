import style from './style.module.scss'
import CampaignManagerDashboard from '../../../components/ui/adminDashboardLayout/campaignManager/CampaignManagerDashboard'

const CampaignManager = () => {
    // const contextWorkflowSidebarTab = useContext(ContextWorkflow)
    return (
      <div className={style.campaign_manager_wrapper}>
          {/* <WorkflowHeader />
          {
            contextWorkflowSidebarTab.sidebarTab === 0 ? 
            <CampaignManagerDashboard /> : 
            contextWorkflowSidebarTab.sidebarTab === 1 ? 
            <ActiveFlow /> : 
            contextWorkflowSidebarTab.sidebarTab === 2 ? 
            <WorkFlowInsightDetails /> : null
          } */}
          <CampaignManagerDashboard />
      </div>

      

    )
}

export default CampaignManager
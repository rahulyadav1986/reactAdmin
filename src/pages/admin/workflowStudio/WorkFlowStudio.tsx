import style from './style.module.scss'
import WorkflowHeader from '../../../components/ui/adminDashboardLayout/workflow/workflowHeader/WorkflowHeader'
import WorkflowContent from '../../../components/ui/adminDashboardLayout/workflow/workflowContent/WorkflowContent'
import { ReactFlowProvider } from 'reactflow'
// import AdminSideBar from '../../../components/ui/adminDashboardLayout/adminSidebar/AdminSideBar'
const WorkFlowStudio = () => {
  // const headerContext = useContext(ContextHeader);
  // const contextWorkFlow = useContext(ContextWorkflow); 
  // useEffect(()=>{
  //   console.log("header from campaign",headerContext.navigateFromCampaign);
  //   if(headerContext.navigateFromCampaign != "")
  //   {
  //     contextWorkFlow.handleSidebarTab(1);
  //     headerContext.handleNavigateFromCampaign("");
  //   }
  // },[headerContext.navigateFromCampaign]);
  return (
    <ReactFlowProvider>
    <div className={style.work_flow_studio_wrapper}>
        <WorkflowHeader />
        <div className={style.work_flow_content_area}>
          <WorkflowContent />
        </div>
    </div>
    </ReactFlowProvider>
  )
}

export default WorkFlowStudio
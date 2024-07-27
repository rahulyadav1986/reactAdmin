import { HeaderContext } from '../../../contexts/headerContext'
import ScrollToTop from '../../../router/ScrollToTop'
import { WorkflowContext } from '../../../contexts/workflowContext'
import { WorkFlowInsightContext } from '../../../contexts/workFlowInsightContext'
import { AdminDataContext } from '../../../contexts/adminDataContext'
import MainWrapper from './MainWrapper'

const AdminDashboardLayout = () => {
  
  
  return (
    <>
      <ScrollToTop />
      <AdminDataContext>
        <HeaderContext>
          <WorkflowContext>
            <WorkFlowInsightContext>
               <MainWrapper />
            </WorkFlowInsightContext>
          </WorkflowContext>
        </HeaderContext>
      </AdminDataContext>
    </>
  )
}

export default AdminDashboardLayout
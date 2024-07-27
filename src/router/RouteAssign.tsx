import { Navigate, Route } from "react-router-dom"
import AuthLayout from "../components/ui/authLayout/AuthLayout"
import DashboardLayout from "../components/ui/dashboardLayout/DashboardLayout"
import SignIn from "../pages/auth/signin/SignIn"
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword"
import NotFound from "../pages/notFound/NotFound"

import AgentDashboard from "../pages/agent/dashboard/Dashboard"
import AgentInteractionCenter from "../pages/agent/interactionCenter/InteractionCenter"
import AgentTicketManagement from "../pages/agent/ticketManagement/TicketManagement"
import AgentLeads from "../pages/agent/leads/Leads"
import AgentMissedcalls from "../pages/agent/missedCalls/Missedcalls"
import AgentVoiceMail from "../pages/agent/voiceMail/VoiceMail"
import AgentCallBacks from "../pages/agent/callBacks/CallBacks"
import AgentVrm from "../pages/agent/vrm/Vrm"
import AgentReports from "../pages/agent/reports/Reports"
import AgentSettings from "../pages/agent/settings/Settings"
import AgentEmail from "../pages/agent/email/Email"


import SupervisorDashboard from "../pages/supervisor/dashboard/Dashboard"
import SupervisorInteractionCenter from "../pages/supervisor/interactionCenter/InteractionCenter"
import SupervisorTicketManagement from "../pages/supervisor/ticketManagement/TicketManagement"
import SupervisorLeads from "../pages/supervisor/leads/Leads"
import SupervisorMissedcalls from "../pages/supervisor/missedCalls/Missedcalls"
import SupervisorVoiceMail from "../pages/supervisor/voiceMail/VoiceMail"
import SupervisorCallBacks from "../pages/supervisor/callBacks/CallBacks"
import SupervisorVrm from "../pages/supervisor/vrm/Vrm"
import SupervisorReports from "../pages/supervisor/reports/Reports"
import SupervisorSettings from "../pages/supervisor/settings/Settings"
import SupervisorEmail from "../pages/supervisor/email/Email"
import AdminDashboardLayout from "../components/ui/adminDashboardLayout/AdminDashboardLayout"


import AdminDashboard from "../pages/admin/dashboard/Dashboard"
import WorkFlowStudio from "../pages/admin/workflowStudio/WorkFlowStudio"
import WorkFlowDashboardDetails from "../components/ui/adminDashboardLayout/workflow/workflowContent/workFlowDashboard/workFlowDashboardDetails/WorkFlowDashboardDetails"
import WorkFlowInsightDetails from "../components/ui/adminDashboardLayout/workflow/workflowContent/workFlowDashboard/workFlowDashboardDetails/workFlowInsightDetails/WorkFlowInsightDetails"
import AiAnalytics from "../pages/admin/aiAnalytics/AiAnalytics"
import AiDashboardTableDetails from "../components/ui/adminDashboardLayout/aiAnalytics/aiAnalyticsDashboard/aiDashboardTableDetails/AiDashboardTableDetails"
import PlatformConfiguration from "../pages/admin/platformConfiguration/PlatformConfiguration"
import Reports from "../pages/admin/reports/Reports"
import CampaignManager from "../pages/admin/campaignManager/CampaignManager"
import RuleCraft from "../pages/admin/ruleCraft/RuleCraft"
import InteractionDashboard from "../pages/admin/interactionDashboard/InteractionDashboard"
import SuperAdminDashboardLayout from "../components/ui/superAdminDashboardLayout/SuperAdminLayout"
import SuperAdminDashboard from "../pages/super-admin/dashboard/Dashboard"

import ResellerAdminDashboardLayout from "../components/ui/superAdminDashboardLayout/SuperAdminLayout"
import ResellerAdminDashboard from "../pages/super-admin/dashboard/Dashboard"
import SuperAdminCompaniesDashboard from "../pages/super-admin/companies/SuperAdminCompaniesDashboard"
import SuperAdminResellersDashboard from "../pages/super-admin/resellers/SuperAdminResellersDashboard"
import ResellerAdminCompaniesDashboard from "../pages/reseller-admin/companies/ResellerAdminCompaniesDashboard"
import ResellerAdminResellersDashboard from "../pages/reseller-admin/resellers/ResellerAdminResellersDashboard"







const RouteAssign = () => {
  return (
    <>

   
     
      <Route path='/' element={<AuthLayout/>} >
          <Route index element={<Navigate to='agent/signin' />} />
          <Route path="agent" element={<SignIn />}>
              <Route index element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/agent/forgot-password" element={<ForgotPassword />} />

          
          <Route path="supervisor" element={<SignIn />}>
              <Route index element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/supervisor/forgot-password" element={<ForgotPassword />} />

          <Route path="admin" element={<SignIn />}>
              <Route index element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />

          <Route path="super-admin" element={<SignIn />}>
              <Route index element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/super-admin/forgot-password" element={<ForgotPassword />} />

          <Route path="reseller-admin" element={<SignIn />}>
              <Route index element={<SignIn />} />
              <Route path="signin" element={<SignIn />} />
          </Route>
          <Route path="/reseller-admin/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route path='agent/dashboard' element={<DashboardLayout/>} >
         <Route index element={<AgentDashboard />} />
         <Route path='dashboard' element={<AgentDashboard />} />
         <Route path='interaction-center' element={<AgentInteractionCenter />} />
         <Route path='ticket-management' element={<AgentTicketManagement />} />
         <Route path='leads' element={<AgentLeads />} />
         <Route path='missed-calls' element={<AgentMissedcalls />} />
         <Route path='voice-mail' element={<AgentVoiceMail />} />
         <Route path='call-backs' element={<AgentCallBacks />} />
         <Route path='vrm' element={<AgentVrm />} />
         <Route path='email' element={<AgentEmail />} />
         <Route path='reports' element={<AgentReports />} />
         <Route path='settings' element={<AgentSettings />} />
         <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='supervisor/dashboard' element={<DashboardLayout/>} >
         <Route index element={<SupervisorDashboard />} />
         <Route path='dashboard' element={<SupervisorDashboard />} />
         <Route path='interaction-center' element={<SupervisorInteractionCenter />} />
         <Route path='ticket-management' element={<SupervisorTicketManagement />} />
         <Route path='leads' element={<SupervisorLeads />} />
         <Route path='missed-calls' element={<SupervisorMissedcalls />} />
         <Route path='voice-mail' element={<SupervisorVoiceMail />} />
         <Route path='call-backs' element={<SupervisorCallBacks />} />
         <Route path='vrm' element={<SupervisorVrm />} />
         <Route path='email' element={<SupervisorEmail />} />
         <Route path='reports' element={<SupervisorReports />} />
         <Route path='settings' element={<SupervisorSettings />} />
         <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='admin/dashboard' element={<AdminDashboardLayout/>} >
         <Route index element={<AdminDashboard />} />
         <Route path='dashboard' element={<AdminDashboard />} />
         <Route path='workflow-studio' element={<WorkFlowStudio />} />
         <Route path='workflow-studio/:id' element={<WorkFlowDashboardDetails />} />
         <Route path='workflow-studio/:id/:id' element={<WorkFlowInsightDetails />} />
         <Route path='interaction-dashboard' element={<InteractionDashboard />} />
         <Route path='ai-analytics' element={<AiAnalytics />} />
         <Route path='ai-analytics/:id' element={<AiDashboardTableDetails />} />
         <Route path='platform-configuration' element={<PlatformConfiguration />} />
         <Route path='rule-craft' element={<RuleCraft />} />
         <Route path='reports' element={<Reports />} />
         <Route path='campaign-manager' element={<CampaignManager />} />
         <Route path="*" element={<NotFound />} />
      </Route>


      <Route path='super-admin/dashboard' element={<SuperAdminDashboardLayout/>} >
         <Route index element={<SuperAdminDashboard />} />
         <Route path='dashboard' element={<SuperAdminDashboard />} />
         <Route path='companies' element={<SuperAdminCompaniesDashboard />} />
         <Route path='resellers' element={<SuperAdminResellersDashboard />} />
         <Route path="*" element={<NotFound />} />
      </Route>
      

      <Route path='reseller-admin/dashboard' element={<ResellerAdminDashboardLayout/>} >
         <Route index element={<ResellerAdminDashboard />} />
         <Route path='dashboard' element={<ResellerAdminDashboard />} />
         <Route path='companies' element={<ResellerAdminCompaniesDashboard />} />
         <Route path='resellers' element={<ResellerAdminResellersDashboard />} />
         <Route path="*" element={<NotFound />} />
      </Route>
     
      
      <Route path="*" element={<NotFound />} />

      
    </>
  )
}

export default RouteAssign
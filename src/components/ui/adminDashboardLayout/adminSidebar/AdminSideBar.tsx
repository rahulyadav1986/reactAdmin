
import style from './style.module.scss'
import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextWorkflow } from '../../../../contexts/workflowContext'
import { AdminAiAnalyticsSidebarData, AdminPlatformConfigurationSidebarData, AdminWorkFlowSidebarData } from './Data'
import { useLocation } from 'react-router-dom'
import { ContextHeader } from '../../../../contexts/headerContext'

const AdminSideBar = () => {
  const contextWorkflowSidebarTab = useContext(ContextWorkflow)
  const defaultHeaderContext = useContext(ContextHeader)
  const location = useLocation()
  const LocationWorkflow = location.pathname.indexOf('/workflow-studio')>=0
  const LocationAiAnalytics = location.pathname.indexOf('/ai-analytics')>=0 
  const LocationCommon = location.pathname.indexOf('/platform-configuration')>=0 || location.pathname.indexOf('/reports')>=0 || location.pathname.indexOf('/campaign-manager')>=0
  const [locationPage] = useState(location.pathname)
  useEffect(()=>{
    console.log("Location",LocationAiAnalytics,LocationWorkflow,LocationCommon)
    if(LocationWorkflow){
      contextWorkflowSidebarTab.handleSidebarTab(0)
    } else if(LocationAiAnalytics){
      contextWorkflowSidebarTab.handleSidebarTab(0)
    } else if(LocationCommon){
      contextWorkflowSidebarTab.handleSidebarTab(0)
    }
  },[locationPage,LocationWorkflow,LocationAiAnalytics, LocationCommon])
  
  const onMenuItemSelect = useCallback((index:any)=>{
    // if(index != 1 && LocationWorkflow)
    // {
    //   contextWorkflowSidebarTab.handleFinalWorkflowfromNewPop(false);
    // }
    contextWorkflowSidebarTab.handleSidebarTab(index);
    defaultHeaderContext.handleProfilePopToggle
  },[contextWorkflowSidebarTab,LocationWorkflow]);
  return (
    <>
      <ul className={`${style.admin_sidebar_wrapper} admin_sidebar_wrapper d-flex flex-column align-items-center`}>
        {
          LocationWorkflow ?
            AdminWorkFlowSidebarData.map((item, i) => {
              return (
                <li key={item.id} className={`${contextWorkflowSidebarTab.sidebarTab === i ? style.active : null}`} onClick={() => onMenuItemSelect(i)}>
                  <img src={`/assets/dashboard/main_dashboard/admin/sidebar/${item.icon}`} alt="" />
                  <span className={`${style.label}`}>{item.label}</span>
                </li>
              )
            }) :
            LocationAiAnalytics ?
            AdminAiAnalyticsSidebarData.map((item,i)=>{
              return(
                <li key={item.id} className={`${contextWorkflowSidebarTab.sidebarTab === i ? style.active : null}`} onClick={()=>onMenuItemSelect(i)}>
                  <img src={`/assets/dashboard/main_dashboard/admin/sidebar/${item.icon}`} alt="" />
                  <span className={`${style.label}`}>{item.label}</span> 
                </li>
              )
            }) :
            LocationCommon ?
            AdminPlatformConfigurationSidebarData.map((item,i)=>{
              return(
                <li key={item.id} className={`${contextWorkflowSidebarTab.sidebarTab === i ? style.active : null}`} onClick={()=>onMenuItemSelect(i)}>
                  <img src={`/assets/dashboard/main_dashboard/admin/sidebar/${item.icon}`} alt="" />
                  <span className={`${style.label}`}>{item.label}</span> 
                </li>
              )
            }) : null
          }
      </ul>
    </>

  )
}

export default AdminSideBar
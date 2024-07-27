import {useContext} from "react"
import style from './style.module.scss'
import SortIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/sort.svg"
import NewWorkflowBG from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/new-workflow-bg.gif"
import AddIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/add.svg"
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import { useLocation } from "react-router-dom"
import ActiveFlowContentFromConfigurationTable from "./ActiveFlowContentFromConfigurationTable"
import LeftArrow from "/assets/dashboard/main_dashboard/admin/insights/arrow-left.svg"
import RightArrow from "/assets/dashboard/main_dashboard/admin/insights/arrow-right.svg"
import ReactPaginate from "react-paginate"
const ActiveFlowContent = () => {
  const contextWorkFlow =  useContext(ContextWorkflow)
  const location = useLocation()
  const CommonLocation = location.pathname.indexOf('/platform-configuration')>=0 || location.pathname.indexOf('/reports')>=0 || location.pathname.indexOf('/campaign-manager')>=0
  return (
    <div className={style.active_workflow_content_wrapper}>
        <div className={style.table_content_area_wrapper}>
            <table className={style.tickettable}>
                <thead>
                    {
                        CommonLocation ? 
                        <tr>
                            <th align="left">Name & Description</th>
                            <th align="left">Workflow Type</th>
                            <th align="left">Assigned to</th>
                            <th align="left">Status</th>
                            <th align="left">Version</th>
                            <th align="left">Open Since</th>
                            <th align="left"><span className='d-flex align-items-center'>Created on <span><img src={SortIcon} alt="" /></span></span></th>
                            <th align="left">Actions</th>
                        </tr>
                        :
                        <tr>
                            <th>Name & Description</th>
                            <th>Workflow Type</th>
                            <th>Assigned to</th>
                            <th>Status</th>
                            <th>Version</th>
                            <th>State</th>
                            <th><span className='d-flex align-items-center'>Created on <span><img src={SortIcon} alt="" /></span></span></th>
                            <th>Actions</th>
                        </tr>
                    }
                    
                </thead>
                {
                    CommonLocation ? 
                    <ActiveFlowContentFromConfigurationTable /> : null
                }
            </table>
            {
                CommonLocation ?
                <div className={`${style.table_filter_area} d-flex align-items-center justify-content-between`}>
                    <button className='d-flex align-items-center'>
                        <span><img src={LeftArrow} alt="" /></span>
                        <span>Previous</span>
                    </button>
                    <ReactPaginate
                        previousLabel =""
                        nextLabel = ""
                        breakLabel = "..."
                        pageRangeDisplayed={3}
                        pageCount={8}
                        breakClassName="breakline"
                        breakLinkClassName="breakline_link"
                        pageClassName="page_item"
                        pageLinkClassName="page_item_link"
                        activeClassName="page_item_active"
                        activeLinkClassName="page_item_link_active"
                        previousClassName="previous"
                        nextClassName="next"
                        containerClassName={'pagination'}
                    />
                    <button className='d-flex align-items-center'>
                        <span>Next</span>
                        <span><img src={RightArrow} alt="" /></span>
                    </button>
                </div> : null
            }
            
        </div>
        {
            CommonLocation ? null :
            <div className={`${style.main_area} d-flex flex-column align-items-center`}>
                <span><img className={style.workflow_bg} src={NewWorkflowBG} alt="" /></span> 
                <h1>You have not created workflows yet</h1>
                <p>Start creating your first flow. You can create IVR, Message Bot, Inbound Voice, Outbound Voice, Survey & Campaigns</p>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkFlowPop(true)}>
                    <span><img src={AddIcon} alt="" /></span> New Workflow
                </div>
            </div>
        }
        
    </div>
  )
}

export default ActiveFlowContent
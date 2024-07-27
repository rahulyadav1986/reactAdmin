import Table from './Table'
import style from './style.module.scss'
import IVRIcon from "/assets/dashboard/main_dashboard/admin/insights/iPhone.svg"
import AddIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/add.svg"
import LeftArrow from "/assets/dashboard/main_dashboard/admin/insights/arrow-left.svg"
import RightArrow from "/assets/dashboard/main_dashboard/admin/insights/arrow-right.svg"
import ReactPaginate from 'react-paginate'
import { useContext } from 'react'
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import { createPortal } from 'react-dom'
import ActiveWorkFlowStepPop from '../../activeWorkFlowStepPop/ActiveWorkFlowStepPop'
import { Link } from 'react-router-dom'


const WorkFlowDashboardDetails = () => {
  const contextWorkFlow =  useContext(ContextWorkflow)
  return (
    <>
      <div className={style.workflow_details_wrapper}>
            <div className={style.card}>
                <div className={`${style.card_header} d-flex align-items-center justify-content-between`}>
                    <div className='d-flex align-items-center'>
                      <div className={style.icon}  style={{'backgroundColor' : 'rgb(183, 143, 4)'}}><img src={IVRIcon} alt="" /></div>
                      <Link className='d-flex flex-column' to={'/admin/dashboard/workflow-studio'}>
                          <h2 className={style.main_heading} style={{'color' : 'rgb(183, 143, 4)'}}>IVR</h2>
                          <p>Streamline interactions. Enhance efficiency.</p>
                      </Link>
                    </div>
                    <div className={`${style.right_filter_area} d-flex align-items-center`}>
                        <div className={`${style.filter_area} d-flex align-items-center`}>
                          <button className={`${style.button} d-flex align-items-center`}>All Workflows</button>
                          <button className={`${style.button} d-flex align-items-center`}>Draft</button>
                          <button className={`${style.button} d-flex align-items-center`}>Pending Approval</button>
                          <button className={`${style.button} d-flex align-items-center`}>Approved</button>
                          <button className={`${style.button} d-flex align-items-center`}>Live</button>
                          <div className={`${style.time_wrap} d-flex align-items-center justify-content-end`}>
                              <span>Refresh Live<br />data for every</span>
                              <button className={`${style.button} d-flex align-items-center`}>15 Secs</button>
                          </div>
                        </div>
                        <div className={`${style.new_workflow_button} d-flex align-items-center justify-content-center`} onClick={()=>contextWorkFlow.handleNewWorkFlowPop(true)}>
                            <span><img src={AddIcon} alt="" /></span> New Workflow
                        </div>
                    </div>
                    
                </div>
                <div className={style.table_area_wrap}>
                  <Table />
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
                  </div>
                </div>
            </div>
      </div>
      
      {
        contextWorkFlow.newWorkflowPop === true ? createPortal(<ActiveWorkFlowStepPop />, document.body): null
      }
    </>
    
  )
}

export default WorkFlowDashboardDetails
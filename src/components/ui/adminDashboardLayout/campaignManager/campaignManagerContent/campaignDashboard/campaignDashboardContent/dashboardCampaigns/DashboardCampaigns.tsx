import { DashboardCampaignList } from '../Data'
import style from './style.module.scss'
import UsersIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/ci1.svg"
import CallIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/ci2.svg"
import MicIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/mic.svg"
import UserIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/user.svg"
import DotsVerticalIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
import CodesBreakDownChart from './CodesBreakDownChart'
import ContactedChart from './ContactedChart'
import useToggle from '../../../../../../../../hooks/useToggle'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import { useContext } from 'react'
import useOutside from '../../../../../../../../hooks/useOutside'
const DashboardCampaigns = () => {
  const [campaignTypeDrop, _toggleCampaignType] = useToggle(false)
  const contextcampaignManager = useContext(ContextCampaignManager)
  const [drop, setDrop, ref] = useOutside(false)
  return (
    <>
        <div className={`${style.heading_wrap} d-flex align-items-center justify-content-between`}>
            <h2>{contextcampaignManager.dashboardCampaignTypeValue}</h2>
            {/* <div className={`${style.drop_down_area} ${campaignTypeDrop && style.active}`}>
                <div className='d-flex align-items-center justify-content-between' onClick={toggleCampaignType}>
                    <span>Campaign <strong>{contextcampaignManager.dashboardCampaignTypeValue}</strong></span>
                    <img src="/assets/dashboard/main_dashboard/admin/reports/down.svg" alt="" />
                </div>
                {
                    campaignTypeDrop && 
                    <ul className={`${style.filter_pop_wrapper}`}>
                        {
                            DashboardCampaignList.map((item)=>{
                                return(
                                    <li key={item.id} onClick={()=>{contextcampaignManager.handleDashboardCampaignType(item.id), toggleCampaignType(false)}}><span onClick={contextcampaignManager.handleDashboardCampaignTypeValue}>{item.camapignCategory.name}</span> </li>
                                )
                            })
                        }
                    </ul>
                }
                
            </div> */}
            <div className={`${style.drop_down_area} ${campaignTypeDrop && style.active}`}>
                <div ref={ref}>
                    <div className='d-flex align-items-center justify-content-between' onClick={()=>setDrop(!drop)}>
                        <span>Campaign <strong>{contextcampaignManager.dashboardCampaignTypeValue}</strong></span>
                        <img src="/assets/dashboard/main_dashboard/admin/reports/down.svg" alt="" />
                    </div>
                    {
                        drop && 
                        <ul className={`${style.filter_pop_wrapper}`}>
                            {
                                DashboardCampaignList.map((item)=>{
                                    return(
                                        <li key={item.id} onClick={()=>{contextcampaignManager.handleDashboardCampaignType(item.id), setDrop(false)}}><span onClick={contextcampaignManager.handleDashboardCampaignTypeValue}>{item.camapignCategory.name}</span> </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
                
            </div>
        </div>
        {
            DashboardCampaignList.map((item)=>{
                return(
                    <>
                        {
                            contextcampaignManager.dashboardCampaignType === item.id ? 
                            <div className={style.details_area}>
                                <div className={style.top}>
                                    <div className={`${style.portion} ${style.campaign}`}>
                                        <h4>CAMPAIGN DETAILS</h4>
                                        <ul className={style.list}>
                                            <li className='d-flex flex-column'>
                                                <h5>TYpe</h5>
                                                <span className='d-flex align-items-center'>
                                                    <span className={style.icon}><img src={MicIcon} alt="" /></span>
                                                    {item.camapignCategory.campaignDetails.type}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>STATUS</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.status}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>STARTED ON</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.startedOn}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>ESTIMATED COMPLETION</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.estimatedComplition}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>Region</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.region}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>BUDGET</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.budget}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>Conversion Rate Goal</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.conversionRateGoal}
                                                </span>
                                            </li>
                                            <li className='d-flex flex-column'>
                                                <h5>Manager</h5>
                                                <span>
                                                    {item.camapignCategory.campaignDetails.manager}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.portion} ${style.contacts}`}>
                                        <h4>CONTACTS</h4>
                                        <ul className={style.list}>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UsersIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>TOTAL LEADS</h5>
                                                    <span>{item.camapignCategory.contacts.totalLeads}</span>
                                                </div>
                                                
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={CallIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>DAILED LEADS</h5>
                                                    <span>{item.camapignCategory.contacts.dailedLeads}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={CallIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>CONNECTED</h5>
                                                    <span>{item.camapignCategory.contacts.connected}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={CallIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>NOT CONNECTED</h5>
                                                    <span>{item.camapignCategory.contacts.notConnected}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={CallIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>CONTACTABLE %</h5>
                                                    <span>{item.camapignCategory.contacts.contactable}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`${style.portion} ${style.agents}`}>
                                        <h4>AGENTS</h4>
                                        <ul className={style.list}>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AGENTS ASSIGNED</h5>
                                                    <span>{item.camapignCategory.agents.agentsAssigned}</span>
                                                </div>
                                                
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AGENTS On Calls</h5>
                                                    <span>{item.camapignCategory.agents.agentsOnCalls}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AGENTS ON READY</h5>
                                                    <span>{item.camapignCategory.agents.agentsOnReady}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AGENTS ON BREAK</h5>
                                                    <span>{item.camapignCategory.agents.avarageOnBreak}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AVG CALLS/AGENT</h5>
                                                    <span>{item.camapignCategory.agents.avarageCalls}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>AVG CALL DURATION</h5>
                                                    <span>{item.camapignCategory.agents.avarageCallDuration}</span>
                                                </div>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <span className={style.icon}><img src={UserIcon} alt="" /></span>
                                                <div className='d-flex flex-column'>
                                                    <h5>OCCUPANCY RATE</h5>
                                                    <span>{item.camapignCategory.agents.occupancyRate}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className={style.grid_area}>
                                    <div className={style.col}>
                                        <div className={`${style.details_portion} ${style.graph_card_area}`}>
                                            <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
                                                <h2>Campaign - Disposition Codes Breakdown</h2>
                                                <span><img src={DotsVerticalIcon} alt="" /></span>
                                            </div>
                                            <CodesBreakDownChart />
                                        </div>
                                        <div className={style.details_portion}>
                                            <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
                                                <h2>Contacted - Attempts Breakdown</h2>
                                                <span><img src={DotsVerticalIcon} alt="" /></span>
                                            </div>
                                            
                                            <ul className={`${style.list} d-flex`}>
                                                <li>
                                                    <h5>FIRST ATTEMPT</h5>
                                                    <span className={style.no}>{item.camapignCategory.attemptBreakdown.firstAttempt}</span>
                                                </li>
                                                <li>
                                                    <h5>SECOND ATTEMPT</h5>
                                                    <span className={style.no}>{item.camapignCategory.attemptBreakdown.secondAttempt}</span>
                                                </li>
                                                <li>
                                                    <h5>THIRD ATTEMPT</h5>
                                                    <span className={style.no}>{item.camapignCategory.attemptBreakdown.thirdAttempt}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.col}>
                                        <div className={`${style.details_portion} ${style.graph_card_area}`}>
                                            <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
                                                <h2>Contacted vs Non Contacted </h2>
                                                <span><img src={DotsVerticalIcon} alt="" /></span>
                                            </div>
                                            <ContactedChart />
                                        </div>
                                        <div className={style.details_portion}>
                                            <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
                                                <h2>Contacted - Attempts Breakdown</h2>
                                                <span><img src={DotsVerticalIcon} alt="" /></span>
                                            </div>
                                            
                                            <ul className={`${style.list} d-flex`}>
                                                <li>
                                                    <h5>Churn Rate</h5>
                                                    <span className={style.no}>{item.camapignCategory.rateBreakdown.currentRate}</span>
                                                </li>
                                                <li>
                                                    <h5>List Penetration Rate</h5>
                                                    <span className={style.no}>{item.camapignCategory.rateBreakdown.listPenetrationRate}</span>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div> : null
                        }
                        
                    </>
                )
            })
        }
        
    </>
    
  )
}

export default DashboardCampaigns
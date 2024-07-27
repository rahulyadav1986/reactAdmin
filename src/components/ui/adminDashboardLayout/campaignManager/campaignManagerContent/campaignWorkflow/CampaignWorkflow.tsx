import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/reports/add.svg"
import WorkflowAvatar from "/assets/dashboard/main_dashboard/admin/campaignManager/workflow/w1.png"
import MessageIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/workflow/message.svg"
import AddBlackIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/add.svg"
// import useToggle from '../../../../../../hooks/useToggle'
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import useOutside from '../../../../../../hooks/useOutside'
import StepCampaignPop from '../campaigns/campaignsContent/liveView/stepCampaignPop/StepCampaignPop'

const CampaignWorkflow = () => {
    //   const [createCampaignPop, toggleCreateCampaignPop] = useToggle(false)
    const contextCampaignManager = useContext(ContextCampaignManager)
    const [drop, setDrop, ref] = useOutside(false)
    return (
        <div className={style.campaign_work_wrapper}>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <div className={style.headings}>
                    <h2>Workflow Studio - Automate Campaigns</h2>
                    <p>Unlock Real-time Performance Metrics and Analytics for Your Workflows. Monitor, Optimize, and Excel!</p>
                </div>
                <div className={`${style.campaign_button}`} ref={ref}>
                    {/* <div className='d-flex align-items-center' onClick={toggleCreateCampaignPop}>
                    <span><img src={AddIcon} alt="" /></span>
                    <span>New Campaign Workflow</span>
                </div> */}
                    <div className='d-flex align-items-center' onClick={() => setDrop(!drop)}>
                        <span><img src={AddIcon} alt="" /></span>
                        <span>New Campaign Workflow</span>
                    </div>
                    {/* {
                    createCampaignPop && 
                    <ul className={`${style.campaign_workflow_pop_wrap}`}>
                        <li className="d-flex align-items-center" onClick={()=>{contextCampaignManager.handleLiveViewCreateCampaignPop('sms'), toggleCreateCampaignPop(false)}}>
                            <span><img src={AddBlackIcon} alt="" /></span>
                            <span>Create SMS Campaign</span>
                        </li>
                        <li className="d-flex align-items-center" onClick={()=>{contextCampaignManager.handleLiveViewCreateCampaignPop('voice'), toggleCreateCampaignPop(false)}}>
                            <span><img src={AddBlackIcon} alt="" /></span>
                            <span>Create Voice Campaign</span>
                        </li>
                        <li className="d-flex align-items-center" onClick={()=>{contextCampaignManager.handleLiveViewCreateCampaignPop('whatsapp'), toggleCreateCampaignPop(false)}}> 
                            <span><img src={AddBlackIcon} alt="" /></span>
                            <span>Create Whatsapp Campaign</span>
                        </li>
                    </ul>
                } */}

                    {
                        drop &&
                        <ul className={`${style.campaign_workflow_pop_wrap}`}>
                            <li className="d-flex align-items-center" onClick={() => { contextCampaignManager.handleCreateContentPopType('sms'), setDrop(false) }}>
                                <span><img src={AddBlackIcon} alt="" /></span>
                                <span>Create SMS Campaign</span>
                            </li>
                            <li className="d-flex align-items-center" onClick={() => { contextCampaignManager.handleCreateContentPopType('voice'), setDrop(false) }}>
                                <span><img src={AddBlackIcon} alt="" /></span>
                                <span>Create Voice Campaign</span>
                            </li>
                            <li className="d-flex align-items-center" onClick={() => { contextCampaignManager.handleCreateContentPopType('whatsapp'), setDrop(false) }}>
                                <span><img src={AddBlackIcon} alt="" /></span>
                                <span>Create Whatsapp Campaign</span>
                            </li>
                        </ul>
                    }


                </div>
            </div>
            <div className={style.campaign_workflow_card_area}>
                <div className={`${style.card} d-flex`}>
                    <div className={style.image_area}><img src={WorkflowAvatar} alt="" /></div>
                    <div className={style.details}>
                        <div className={`${style.heading} d-flex align-items-center`}>
                            <span className={style.icon}><img src={MessageIcon} alt="" /></span>
                            <div>
                                <h3>Welcome subscribers</h3>
                                <p>SMS</p>
                            </div>
                        </div>
                        <p>Edited <span>12 mins ago</span> by Naveen</p>
                        <p>Created <span>12 Dec 2023, 09:09am</span> by you</p>
                        <span className={style.status}>IN PROGRESS</span>
                    </div>
                </div>
                <div className={`${style.card} d-flex`}>
                    <div className={style.image_area}><img src={WorkflowAvatar} alt="" /></div>
                    <div className={style.details}>
                        <div className={`${style.heading} d-flex align-items-center`}>
                            <span className={style.icon}><img src={MessageIcon} alt="" /></span>
                            <div>
                                <h3>Welcome subscribers</h3>
                                <p>SMS</p>
                            </div>
                        </div>
                        <p>Edited <span>12 mins ago</span> by Naveen</p>
                        <p>Created <span>12 Dec 2023, 09:09am</span> by you</p>
                        <span className={style.status}>DRAFT</span>
                    </div>
                </div>
            </div>
            {
                contextCampaignManager.createCampaignPopType ? <StepCampaignPop campaignInfo={null} /> : null
            }

        </div>
    )
}

export default CampaignWorkflow
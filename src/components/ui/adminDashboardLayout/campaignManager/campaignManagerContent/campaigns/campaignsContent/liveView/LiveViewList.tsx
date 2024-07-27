import style from './style.module.scss'
import { LiveViewCampaignData } from '../Data'
import AtIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/atIcon.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/play.svg"
import PauseIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/pause.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/edit.svg"
import DeleteIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/delete.svg"
import MoreIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/verticalDots.svg"
import BigMicIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/bigMic.svg"
import BigWhatsAppIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/whatsapp.svg"
import ChainIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/chain.svg"
import { useContext, useEffect, useState } from 'react'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import moment from 'moment'
import useOutside from '../../../../../../../../hooks/useOutside'
import { ContextHeader } from '../../../../../../../../contexts/headerContext'
import { useNavigate } from 'react-router-dom'
//import { ContextAdminData } from '../../../../../../../../contexts/adminDataContext'
const LiveViewList = ({ onCampaignEditBtnClick }: any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);
    const headerContext = useContext(ContextHeader);
    const [campaignList, setCampaignList] = useState(contextCampaignManager.allCampaigns);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("refresh campaign list", contextCampaignManager.allCampaigns);
        setCampaignList(contextCampaignManager.allCampaigns)
    }, [contextCampaignManager.allCampaigns])
    //const contextAdminData = useContext(ContextAdminData);
    // useEffect(() => {
    //     console.log("all campaigns list", contextCampaignManager.allCampaigns);

    //     //localStorage.setItem("campaigns",JSON.stringify(contextCampaignManager.allCampaigns));
    //     //contextAdminData.handleAllCampaignList(contextCampaignManager.allCampaigns);

    // }, [contextCampaignManager.allCampaigns]);
    //console.log(contextCampaignManager.allCampaigns)

    const [dropMorePop, setDropMorePop, refDropMorePop] = useOutside(false)
    const [dropSubMorePop, setDropSubMorePop, refDropSubMorePop] = useOutside(false)
    const handleMorePop = (id: any) => {
        setDropMorePop(dropMorePop === id ? -1 : id)
    }


    const handleMoreSubPop = (id: any) => {
        setDropSubMorePop(dropSubMorePop === id ? -1 : id)
        console.log(id)
        // setDropSubMorePop(!dropSubMorePop)
    }


    const addNewWorkflow = (campaignItem: any) => {
        let campaignObj = { ...campaignItem };
        campaignObj['flowName'] = campaignItem.name;
        campaignObj['connectedWith'] = campaignItem.id;
        delete campaignObj['id'];
        console.log("campaign to add", campaignObj, localStorage.getItem("savedFlows"));
        let savedFlows: any = localStorage.getItem("savedFlows");
        if (savedFlows == null) {
            campaignObj['id'] = 1;
            savedFlows = {};
            savedFlows['Campaigns'] = [campaignObj];
        }
        else {
            savedFlows = JSON.parse(savedFlows);
            console.log("saved flows", savedFlows);
            if (savedFlows['Campaigns']) {
                campaignObj['id'] = savedFlows['Campaigns'].length + 1;
                savedFlows['Campaigns'].push(campaignObj);
            }
            else {
                campaignObj['id'] = 1;
                savedFlows['Campaigns'] = [campaignObj];
            }
        }
        localStorage.setItem("savedFlows", JSON.stringify(savedFlows));
        campaignItem['connectFlowID'] = campaignObj['id'];
        contextCampaignManager.handleAddEditCampaigns(campaignItem);
        console.log("final campaign data", campaignItem, campaignObj);
        headerContext.handleNavigateFromCampaign(JSON.stringify(campaignObj));
        navigate("/admin/dashboard/workflow-studio")
    };

    // go to chained flow ---------------------
    const goToConnetedWorkflow = (workflowID: any) => {
        let savedFlows: any = localStorage.getItem("savedFlows");
        if (savedFlows != null) {
            savedFlows = JSON.parse(savedFlows);
            if (savedFlows['Campaigns']) {
                let selectedFlow = savedFlows['Campaigns'].filter((el: any) => el.id == workflowID);
                if (selectedFlow.length > 0) {
                    console.log("selected flow", selectedFlow[0])
                    headerContext.handleNavigateFromCampaign(JSON.stringify(selectedFlow[0]));
                    navigate("/admin/dashboard/workflow-studio")
                }
                else {
                    alert("the connected workflow does not exist");
                }
            }
            else {
                alert("the connected workflow does not exist");
            }
        }
        else {
            alert("the connected workflow does not exist");
        }
    }

    // get available campaigns to tag -------------
    const getAvailableCampaigns = () => {
        return new Promise((resolve) => {

            let savedFlows: any = localStorage.getItem("savedFlows");
            if (savedFlows == null) {
                resolve(new Array());
            }
            else {
                savedFlows = JSON.parse(savedFlows);
                if (savedFlows['Campaigns']) {
                    let selected: any = new Array();
                    LiveViewCampaignData.map((el) => {
                        if (el.tabId == contextCampaignManager.campaignsLiveViewTab) {
                            savedFlows['Campaigns'].map((item: any, i: number) => {
                                // console.log("item", item, el.campaignType);
                                if (item.type == el.campaignType && (item.connectedWith == undefined || item.connectedWith == null)) {
                                    selected.push(item);
                                }
                                if (i == savedFlows['Campaigns'].length - 1) {
                                    // console.log(selected);
                                    resolve(selected);
                                }
                            })
                        }
                    });

                }
                else {
                    resolve(new Array());
                }
            }
        });
    };
    const [availableCampaigns, setAvailableCampaigns] = useState(new Array());
    useEffect(() => {
        getAvailableCampaigns().then((avCampaigns: any) => {
            console.log("av cam", avCampaigns)
            setAvailableCampaigns(avCampaigns);
        });
        //setAvailableCampaigns();
    }, [contextCampaignManager.campaignsLiveViewTab]);

    const connectWithExistingCampaign = (campaign:any,workflow:any) => {
        let newflowObj = {...campaign};
       // newflowObj['connectedWith'] = campaign.id;
        delete newflowObj.id;
        console.log("campaign to add", newflowObj, localStorage.getItem("savedFlows"));
        let savedFlows: any = localStorage.getItem("savedFlows");
        if (savedFlows != null) {
            savedFlows = JSON.parse(savedFlows);
            console.log("saved flows", savedFlows);
            if (savedFlows['Campaigns']) {
                //let selectedFlow = savedFlows['Campaigns'].filter((el:any)=>el.id == workflow['id']);
                savedFlows['Campaigns'].map((el:any,index:number)=>{
                    if(el.id == workflow['id'])
                    {
                        savedFlows['Campaigns'][index] = {...el,...newflowObj};
                        savedFlows['Campaigns'][index]['workflow'] = el['workflow'];
                        savedFlows['Campaigns'][index]['connectedWith'] = campaign.id;
                        console.log("selected flow",savedFlows);
                        localStorage.setItem("savedFlows", JSON.stringify(savedFlows));
                        campaign['connectFlowID'] = el['id'];
                        campaign['workflow'] = el['workflow'];
                        contextCampaignManager.handleAddEditCampaigns(campaign);
                        console.log(campaign,savedFlows['Campaigns'][index])
                        headerContext.handleNavigateFromCampaign(JSON.stringify(savedFlows['Campaigns'][index]));
                        navigate("/admin/dashboard/workflow-studio")
                    }
                });
                // if(selectedFlow.length > 0)
                // {
                //     // selectedFlow[0] = {...selectedFlow[0],...newflowObj};
                //     // console.log("selected flow",selectedFlow[0]);
                //     // localStorage.setItem("savedFlows", JSON.stringify(savedFlows));
                //     // campaign['connectFlowID'] = workflow['id'];
                //     // contextCampaignManager.handleAddEditCampaigns(campaign);
                //     // console.log("final campaign data", campaign, campaignObj);
                //     // headerContext.handleNavigateFromCampaign(JSON.stringify(campaignItem));
                //     // navigate("/admin/dashboard/workflow-studio")
                // }
            }
        }

    };
    const onDeteteCampaign = (campaignItem:any)=>{
        if(confirm("Are you sure want to delete the campaign? Please press 'OK' to proceed.") == true)
        {
            console.log("campaign item",campaignItem);
            if(campaignItem.connectFlowID != undefined && campaignItem.connectFlowID != "" && campaignItem.connectFlowID != null)
            {
                let allWorkflowJson = (localStorage.getItem("savedFlows") != null)?localStorage.getItem("savedFlows"):null;
                if(allWorkflowJson != null)
                {
                    console.log("all workflows",JSON.parse(allWorkflowJson));
                    let allWorkflows = JSON.parse(allWorkflowJson);
                    if(allWorkflows['Campaigns'])
                    {
                        allWorkflows['Campaigns'].forEach((el:any,index:number)=>{
                            if(el.id == campaignItem.connectFlowID || el.connectedWith == campaignItem.id)
                            {
                                delete allWorkflows['Campaigns'][index]['connectedWith'];
                            }
                            if(index == allWorkflows['Campaigns'].length - 1)
                            {
                                localStorage.setItem("savedFlows",JSON.stringify(allWorkflows));
                                contextCampaignManager.deleteCampaign(campaignItem.id);
                                getAvailableCampaigns().then((avCampaigns: any) => {
                                    console.log("av cam", avCampaigns)
                                    setAvailableCampaigns(avCampaigns);
                                });
                            }
                        });
                    }
                }
                
            }
            else
            {
                contextCampaignManager.deleteCampaign(campaignItem.id);
            }
        }
    };
    return (
        <>
            {
                LiveViewCampaignData.map((item) => {
                    return (
                        <>
                            {
                                contextCampaignManager.campaignsLiveViewTab === item.tabId &&
                                <ul className={style.list_wrapper}>
                                    {
                                        campaignList.map((campaignItem, index) => {
                                            return (
                                                <>
                                                    {
                                                        campaignItem.type == item.campaignType &&
                                                        <li className={`${style.parent} ${campaignItem.status === 'SCHEDULED' ? style.schedule : null} d-flex align-items-center justify-ntent-between`} key={index}>
                                                            <div className={style.left}>
                                                                <div className={`${style.title_area} d-flex align-items-center`}>
                                                                    <div className='d-flex align-items-center'>
                                                                        <span className={`${style.icon} ${item.campaignType === 'sms' ? style.sms : item.campaignType === 'voice' ? style.voice : item.campaignType === 'whatsapp' ? style.whatsapp : null}`}>
                                                                            <img src={`${item.campaignType === 'sms' ? AtIcon : item.campaignType === 'voice' ? BigMicIcon : item.campaignType === 'whatsapp' ? BigWhatsAppIcon : null}`} alt="" />
                                                                        </span>
                                                                        <h2>{campaignItem.name}</h2>
                                                                    </div>

                                                                    <span className={`${style.status} ${campaignItem.status === 'SCHEDULED' || campaignItem.status === 'DRAFT' ? style.black : campaignItem.status === 'COMPLETED' ? style.completed : null}`}>
                                                                        {campaignItem.status}
                                                                        {campaignItem.status === 'SCHEDULED' ? <span className={style.date}>{moment(campaignItem.startDate, "DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY, HH:mm:ss')}</span> : null}
                                                                    </span>
                                                                    {campaignItem.status === 'COMPLETED' ? <span className={style.completed_message}>{campaignItem.statusMessage}</span> : null}
                                                                </div>
                                                                <ul className={`${style.time_frame} d-flex align-items-center`}>
                                                                    {campaignItem.modified_at != "" && <li><span>Edited</span> <span className={style.time}>{moment().diff(moment(campaignItem.modified_at, "DD-MM-YYYY HH:mm:ss"), "minutes") >= 60 ? campaignItem.modified_at : moment().diff(moment(campaignItem.modified_at, "DD-MM-YYYY HH:mm:ss"), "minutes") + ' mins ago'}</span> <span>by you</span></li>}
                                                                    <li><span>Created</span> <span className={style.time}>{moment().diff(moment(campaignItem.created_at, "DD-MM-YYYY HH:mm:ss"), "minutes") >= 60 ? campaignItem.created_at : moment().diff(moment(campaignItem.created_at, "DD-MM-YYYY HH:mm:ss"), "minutes") + ' mins ago'}</span> <span>by you</span></li>
                                                                    {(campaignItem.status == 'started' || campaignItem.status == 'paused') && <li><span>Started</span> <span className={style.time}>Yesterday</span> <span>Ending in</span> <span className={style.time}>2 days</span></li>}
                                                                </ul>

                                                            </div>
                                                            <ul className={`${style.right} d-flex align-items-center justify-content-end`}>
                                                                {
                                                                    campaignItem.action === '' ? null :

                                                                        <li className={style.action}>
                                                                            <div className={`${style.action_button} ${campaignItem.action === 'Start' ? style.start : null} d-flex align-items-center justify-content-between`}>
                                                                                <span>{campaignItem.action}</span>
                                                                                <span className={style.icon}><img src={`${campaignItem.action === 'Start' ? PauseIcon : PlayIcon}`} alt="" /></span>
                                                                            </div>
                                                                        </li>
                                                                }
                                                                <li className={style.icon} onClick={() => onCampaignEditBtnClick(campaignItem.id)}><span><img src={EditIcon} alt="" /></span></li>
                                                                <li className={style.icon} onClick={()=>onDeteteCampaign(campaignItem)}><span><img src={DeleteIcon} alt="" /></span></li>
                                                                <li className={style.icon} ref={refDropMorePop}>
                                                                    <span onClick={() => handleMorePop(index)}><img src={MoreIcon} alt="" /></span>
                                                                    {
                                                                        campaignItem.connectFlowID != undefined && campaignItem.connectFlowID != null ?
                                                                            dropMorePop === index &&
                                                                            <ul className={style.more_option} ref={refDropMorePop}>
                                                                                <li onClick={() => goToConnetedWorkflow(campaignItem.connectFlowID)}><span><img src={ChainIcon} alt="" /></span> Post Campaign Chaining</li>
                                                                            </ul> :
                                                                            dropMorePop === index &&
                                                                            <ul className={`${style.more_option} ${style.new_sub}`} ref={refDropMorePop}>
                                                                                <li onClick={() => addNewWorkflow(campaignItem)}><span><img src={ChainIcon} alt="" /></span> Add New Workflow</li>
                                                                                {availableCampaigns?.length > 0 && <li className='d-flex flex-column' ref={refDropSubMorePop}>
                                                                                    <div className={`${dropSubMorePop === index && style.active} d-flex align-items-center justify-content-between`} onClick={() => handleMoreSubPop(index)} >
                                                                                        <span className='d-flex align-items-center'><span><img src={ChainIcon} alt="" /></span> Available Workflows </span>
                                                                                        <span className={style.add} ><img src="/assets/dashboard/main_dashboard/admin/downArrow.svg" alt="" /></span>
                                                                                    </div>
                                                                                    {
                                                                                        dropSubMorePop === index &&
                                                                                        <ul className={style.sub} ref={refDropSubMorePop}>
                                                                                            {
                                                                                                availableCampaigns?.map((cItem) => {
                                                                                                    return (<li onClick={()=>connectWithExistingCampaign(campaignItem, cItem)}>{cItem.flowName}</li>);
                                                                                                })
                                                                                            }

                                                                                            {/* <li>Option 2</li> */}
                                                                                        </ul>
                                                                                    }

                                                                                </li>}
                                                                            </ul>
                                                                    }

                                                                </li>
                                                            </ul>
                                                        </li>
                                                    }
                                                </>

                                            )
                                        })
                                    }
                                </ul>
                            }

                        </>
                    )
                })
            }
        </>
    )
}

export default LiveViewList
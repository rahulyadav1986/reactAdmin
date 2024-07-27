import { useCallback, useContext, useEffect, useState } from 'react';
import style from './style.module.scss'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import CheckIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/check.svg"
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext';
import StepForm from './stepForm/StepForm';

//type campaignData = { id: null, name: "", goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "", type: "", campaignWorkFlow: "", status: "", action: "Start", configurations: {}, rules: {} } | null;
const StepCampaignPop = ({ campaignInfo }: any) => {
    // console.log("campaign Info in step form",campaignInfo);
    const contextCampaignManager = useContext(ContextCampaignManager);
    let campaignObj = { id: null, name: "", goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "", type: contextCampaignManager.createCampaignPopType, workflow: "", status: "", action: "Start", workflowType: "Campaigns", configurations: {}, rules: {} };
    const getCampaignConfig = () => {
        // console.log("campaign info", campaignInfo, contextCampaignManager.allCampaigns);
        
        if (campaignInfo != undefined && campaignInfo != null && campaignInfo.id != "") {
            return { ...campaignObj, ...campaignInfo };
        }
        else {
            return campaignObj;
        }
    };
    const [savedCampaign, setSavedCampaign] = useState(getCampaignConfig);
    useEffect(() => {
        console.log("setting campaign info", savedCampaign)
        // setSavedCampaign(campaignInfo);
    }, [savedCampaign]);
    const onSaveCampaignHandler = useCallback((savedCampaign: any) => {
        console.log("qq update", savedCampaign);
        setSavedCampaign(savedCampaign);
    }, [savedCampaign]);
    const stepOneFromHead = () => {
        //if (contextCampaignManager.stepIconOne === true) {
        contextCampaignManager.handleCreateCampaignStepOne(true)
        // }

    }

    const stepTwoFromHead = () => {
        //if (contextCampaignManager.stepIconTwo === true) {
        contextCampaignManager.handleCreateCampaignStepTwo(true)
        // }
    }

    const stepThreeFromHead = () => {
        //if (contextCampaignManager.stepIconThree === true) {
        contextCampaignManager.handleCreateCampaignStepThree(true)
        // }
    }

    const stepThreeFromFour = () => {
        //if (contextCampaignManager.stepIconThree === true) {
        contextCampaignManager.handleCreateCampaignStepFour(true)
        // }
    }
    const closeCampaignPop = () => {
        setSavedCampaign(campaignObj);
        setTimeout(() => {
            contextCampaignManager.handleCancleCreateContentPopType();
        }, 300);
    }
    return (
        <div className={`${style.step_campaign_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className={style.ovarlay} onClick={closeCampaignPop}></div>
            <div className={`${style.main_area}`}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    {
                        contextCampaignManager.createCampaignPopType === 'sms' ? <h3>{contextCampaignManager.createCampaignPopType == true && savedCampaign != null ? savedCampaign.name : "New SMS Campaign"}</h3> :
                            contextCampaignManager.createCampaignPopType === 'voice' ? <h3>{contextCampaignManager.createCampaignPopType == true && savedCampaign != null ? savedCampaign.name : "New Voice Campaign"}</h3> :
                                contextCampaignManager.createCampaignPopType === 'whatsapp' ? <h3>{contextCampaignManager.createCampaignPopType == true && savedCampaign != null ? savedCampaign.name : "New Whatsapp Campaign"}</h3> : null
                    }
                    <span className={style.Cross} onClick={contextCampaignManager.handleCancleCreateContentPopType}><img src={CrossIcon} alt="" /></span>
                </div>
                <ul className={`${style.step_head_list} d-flex`}>
                    <li className={`${contextCampaignManager.createCampaignStepOne === true ? style.active : null} ${contextCampaignManager.stepIconOne ? style.completed : null}`} onClick={stepOneFromHead}>
                        <div className={style.step}>
                            {
                                contextCampaignManager.stepIconOne ? <span className={style.completed}><img src={CheckIcon} alt="" /></span> : <span className={style.no}>01</span>
                            }
                            <div className={style.text}>
                                <h4>General Information</h4>
                                <p>Your campaign basic info</p>
                            </div>
                        </div>

                    </li>
                    <li className={`${contextCampaignManager.createCampaignStepTwo === true ? style.active : null} ${contextCampaignManager.stepIconTwo ? style.completed : null}`} onClick={stepTwoFromHead}>
                        <div className={style.step}>

                            {
                                contextCampaignManager.stepIconTwo ? <span className={style.completed}><img src={CheckIcon} alt="" /></span> : <span className={style.no}>02</span>
                            }
                            <div className={style.text}>
                                <h4>Configurations</h4>
                                <p>Set defaults to your camp...</p>
                            </div>
                        </div>
                    </li>
                    <li className={`${contextCampaignManager.createCampaignStepThree === true ? style.active : null} ${contextCampaignManager.stepIconThree ? style.completed : null}`} onClick={stepThreeFromHead}>
                        <div className={style.step}>

                            {
                                contextCampaignManager.stepIconThree ? <span className={style.completed}><img src={CheckIcon} alt="" /></span> : <span className={style.no}>03</span>
                            }
                            <div className={style.text}>
                                <h4>Conditions or Rules</h4>
                                <p>Add custom conditions</p>
                            </div>
                        </div>
                    </li>

                    <li className={`${contextCampaignManager.createCampaignStepFour === true ? style.active : null} ${contextCampaignManager.stepIconFour ? style.completed : null}`} onClick={stepThreeFromFour}>
                        <div className={style.step}>

                            {
                                contextCampaignManager.stepIconFour ? <span className={style.completed}><img src={CheckIcon} alt="" /></span> : <span className={style.no}>04</span>
                            }
                            <div className={style.text}>
                                <h4>Add Campaign Lists</h4>
                                <p>Upload lists</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <StepForm campaignData={savedCampaign} onSaveCampaignHandler={onSaveCampaignHandler} />
            </div>



        </div>
    )
}

export default StepCampaignPop
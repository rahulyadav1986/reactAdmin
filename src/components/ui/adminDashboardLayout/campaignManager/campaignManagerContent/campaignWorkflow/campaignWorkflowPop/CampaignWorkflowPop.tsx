import style from './style.module.scss'
import {  useContext, useState } from 'react'

import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"

import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'

import NewCampaign from './../../campaigns/campaignsContent/liveView/campaignPop/NewCampaign';
import ChooseCampaignTemplatePop from './../../campaigns/campaignsContent/liveView/campaignPop/ChooseCampaignTemplatePop';

type campaignData = { id: null, name: "", list: [], goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "",type:"" ,workFlow:"",status:"",action:"Start",workflowType:"Campaigns", configurations:{},rules:{}} |null;

const CampaignWorkflowPop = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);

  const [savedCampaign, setSavedCampaign] = useState<campaignData | null>(null);

  const onSaveCampaignHandler = (savedCampaign: campaignData) => {
    setSavedCampaign(savedCampaign);
  };
  return (
    <div className={`${style.campaign_pop_wrapper} d-flex align-items-center justify-content-center`}>
      <div className={style.ovarlay} onClick={() => contextCampaignManager.handleLiveViewCreateCampaignPop(null)}></div>
      <div className={`${style.main_area} ${contextCampaignManager.campaignCreateWorkFlowChooseTemplate ? style.choose_campaign : null}`}>
        <div className={`${style.head} d-flex align-items-center justify-content-between`}>
          {
            contextCampaignManager.liveViewCreateCampaignPop === 'sms' ? <h3>New SMS Campaign</h3> :
              contextCampaignManager.liveViewCreateCampaignPop === 'voice' ? <h3>New Voice Campaign</h3> :
                contextCampaignManager.liveViewCreateCampaignPop === 'whatsapp' ? <h3>New Whatsapp Campaign</h3> : null
          }

          <span className={style.Cross} onClick={() => contextCampaignManager.handleLiveViewCreateCampaignPop(null)}><img src={CrossIcon} alt="" /></span>
        </div>


        {contextCampaignManager.liveViewChooseCampaignTemplate ? <ChooseCampaignTemplatePop campaignData={savedCampaign} /> : <NewCampaign onSaveCampaignHandler={onSaveCampaignHandler} />}
        {/* <div className="d-flex justify-content-end">
          {
            contextCampaignManager.campaignCreateWorkFlowChooseTemplate ?
              <>
                <button type="button" className={`${style.button} ${style.back} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleCampaignCreateWorkFlowChooseTemplate(false)}>Back</button>
                <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} >Continue</button>
              </>
              :
              <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={onSubmitHander}>Proceed</button>
          }

        </div> */}
      </div>

    </div>
  )
}

export default CampaignWorkflowPop
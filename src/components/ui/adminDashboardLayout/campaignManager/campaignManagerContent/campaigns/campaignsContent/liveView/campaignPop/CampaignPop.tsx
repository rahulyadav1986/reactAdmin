import style from './style.module.scss'
import { useCallback, useContext, useState } from 'react'
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg"
import NewCampaign from './NewCampaign'
import ChooseCampaignTemplatePop from './ChooseCampaignTemplatePop';
import { ContextAdminData } from '../../../../../../../../../contexts/adminDataContext'
type campaignData = { id: null, name: "", list: [], goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "",type:"" ,workFlow:"",status:"",action:"Start",workflowType:"Campaigns", configurations:{},rules:{}} |null;
const CampaignPop = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  const contextAdminData = useContext(ContextAdminData);
  const [savedCampaign,setSavedCampaign] = useState<campaignData|null>(null); 
  const onSaveCampaignHandler = useCallback((savedCampaign:campaignData)=>{
    setSavedCampaign(savedCampaign);
    console.log("qq",contextCampaignManager.allCampaigns);
    contextAdminData.handleAllCampaignList(contextCampaignManager.allCampaigns);
  },[contextCampaignManager.allCampaigns]);
  return (
    <div className={`${style.campaign_pop_wrapper} d-flex align-items-center justify-content-center`}>
        <div className={style.ovarlay} onClick={()=>contextCampaignManager.handleLiveViewCreateCampaignPop(null)}></div>
        <div className={`${style.main_area} ${contextCampaignManager.liveViewChooseCampaignTemplate ? style.choose_campaign : null}`}>
          <div className={`${style.head} d-flex align-items-center justify-content-between`}>
            {
              contextCampaignManager.createCampaignPopType === 'sms' ? <h3>{contextCampaignManager.liveViewChooseCampaignTemplate == true && savedCampaign != null?savedCampaign.name:"New SMS Campaign"}</h3> :
              contextCampaignManager.createCampaignPopType === 'voice' ? <h3>{contextCampaignManager.liveViewChooseCampaignTemplate == true && savedCampaign != null?savedCampaign.name:"New Voice Campaign"}</h3> :
              contextCampaignManager.createCampaignPopType === 'whatsapp' ? <h3>{contextCampaignManager.liveViewChooseCampaignTemplate == true && savedCampaign != null?savedCampaign.name:"New Whatsapp Campaign"}</h3> : null
            }
              
              <span className={style.Cross} onClick={()=>contextCampaignManager.handleLiveViewCreateCampaignPop(null)}><img src={CrossIcon} alt="" /></span>
          </div>

          
          { contextCampaignManager.liveViewChooseCampaignTemplate ? <ChooseCampaignTemplatePop campaignData={savedCampaign}/> : <NewCampaign onSaveCampaignHandler={onSaveCampaignHandler}/> }
          {/* <div className="d-flex justify-content-end">
            {
              contextCampaignManager.liveViewChooseCampaignTemplate ? 
              <>
                <button type="button" className={`${style.button} ${style.back} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleLiveViewChooseCampaignTemplate(false)}>Back</button> 
                <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} >Continue</button>
              </>             
              :
              <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleLiveViewChooseCampaignTemplate(true)}>Proceed</button>
            }
            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleLiveViewChooseCampaignTemplate(true)}>Proceed</button>  
          </div> */}
        </div>

        
        
    </div>
  )
}

export default CampaignPop
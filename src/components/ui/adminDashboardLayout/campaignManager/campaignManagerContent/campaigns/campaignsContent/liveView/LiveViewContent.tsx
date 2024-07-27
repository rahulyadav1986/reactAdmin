
import {  useContext, useEffect, useState } from 'react'
import LiveListFilter from './LiveListFilter'
import LiveViewList from './LiveViewList'
// import CampaignPop from './campaignPop/CampaignPop'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../contexts/campaignManagerContext'
import StepCampaignPop from './stepCampaignPop/StepCampaignPop'
// import CampaignPop from './campaignPop/CampaignPop'


const LiveViewContent = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);

  useEffect(() => {
    console.log("updated campaign list", contextCampaignManager.allCampaigns);
  }, [contextCampaignManager.allCampaigns]);

  const [campaignToEdit, setCampaignInfo] = useState(null);
  // on edit campaign ----
  const onEditCampaignHandler = (campaignID: any) => {
    const campaignData = contextCampaignManager.allCampaigns.filter((el)=>el.id == campaignID);
    console.log("edit campaign info", campaignID,campaignData);
    contextCampaignManager.handleCreateContentPopType(campaignData[0].type);
    setCampaignInfo(campaignData[0]);
  }
  //}, [campaignToEdit, contextCampaignManager.createCampaignPopType,setCampaignInfo]);
  useEffect(() => {
    if (contextCampaignManager.createCampaignPopType == null) {
      console.log("edit campaign info 1", campaignToEdit);
      setCampaignInfo(null);
    }
  }, [contextCampaignManager.createCampaignPopType])
  return (
    <div className={style.live_view_content_wrapper}>
      <LiveListFilter />
      <LiveViewList onCampaignEditBtnClick={onEditCampaignHandler} />
      {/* {
        contextCampaignManager.liveViewCreateCampaignPop ? 
        <CampaignPop /> : null
      } */}

      {/* {
        contextCampaignManager.createCampaignPopType === 'sms' || contextCampaignManager.createCampaignPopType === 'whatsapp' ? <CampaignPop /> : null
      } */}

      {/* {
        contextCampaignManager.createCampaignPopType === 'voice' ? 
        <StepCampaignPop /> : null
      } */}

      {
        contextCampaignManager.createCampaignPopType != null ? <StepCampaignPop campaignInfo={campaignToEdit} /> : null
      }

    </div>
  )
}

export default LiveViewContent
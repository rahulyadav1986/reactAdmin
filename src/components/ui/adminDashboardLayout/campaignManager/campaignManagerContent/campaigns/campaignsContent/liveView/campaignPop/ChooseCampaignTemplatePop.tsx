import { SetStateAction, useContext, useState } from 'react'
import style from './style.module.scss'
import Check from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/check.svg"
import { SmsCampaignTemplate, VoiceCampaignTemplate, WhatsappCampaignTemplate } from './Data'
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext'
import { ContextHeader } from '../../../../../../../../../contexts/headerContext'
import { useNavigate } from 'react-router-dom'
const ChooseCampaignTemplatePop = ({campaignData}:any) => {
    console.log("campaign data",campaignData);
  const contextCampaignManager = useContext(ContextCampaignManager);
  const headerContext = useContext(ContextHeader);
  const [livecampaignTab, setLiveCampaignTab] = useState(1);
  const navigate = useNavigate();
  const handleLiveCampaignTab = (id: SetStateAction<number>)=>{
    setLiveCampaignTab(id)
  }
  return (
    <>
         
        <div className={style.campaign_choose_wrapper}>
            <div className={`${style.portion_wrap} d-flex`}>
                <div className={style.portion}>
                    <div className={`${style.template_portion} d-flex align-items-center justify-content-center`}>
                        <span><img src={Check} alt="" /></span>
                    </div>
                    <h4>Blank Workflow</h4>
                </div>
            </div>
            <ul className={`${style.tab_button_area} d-flex align-items-center`}>
                <li className={`${ livecampaignTab === 1 ? style.active : null}`} onClick={()=>handleLiveCampaignTab(1)}>
                    Templates
                </li>
                <li className={`${ livecampaignTab === 2 ? style.active : null}`} onClick={()=>handleLiveCampaignTab(2)}>
                    Existing Workflows
                </li>
            </ul>
            {
                livecampaignTab === 1 ?
                <div className={`${style.portion_wrap} d-flex`}>
                    {
                        contextCampaignManager.createCampaignPopType === 'sms' ?
                        SmsCampaignTemplate.map((template)=>{
                            return(
                                <div key={template.id} className={style.portion}>
                                    <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/choose/${template.templateImage}`} alt="" />
                                    <h4>{template.name}</h4>
                                </div>
                            )
                        }) :
                        contextCampaignManager.createCampaignPopType === 'voice' ? 
                        VoiceCampaignTemplate.map((template)=>{
                            return(
                                <div key={template.id} className={style.portion}>
                                    <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/choose/${template.templateImage}`} alt="" />
                                    <h4>{template.name}</h4>
                                </div>
                            )
                        }) : 
                        contextCampaignManager.createCampaignPopType === 'whatsapp' ? 
                        WhatsappCampaignTemplate.map((template)=>{
                            return(
                                <div key={template.id} className={style.portion}>
                                    <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/choose/${template.templateImage}`} alt="" />
                                    <h4>{template.name}</h4>
                                </div>
                            )
                        }) : null
                    }
                    
                </div> : 
                livecampaignTab === 2 ? "Existing Workflows" : null
            }
            
        </div>
        <div className="d-flex justify-content-end">
            <button type="button" className={`${style.button} ${style.back} d-flex align-items-center justify-content-center`} onClick={()=>contextCampaignManager.handleLiveViewChooseCampaignTemplate(false)}>Back</button> 
            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>{headerContext.handleNavigateFromCampaign(JSON.stringify(campaignData)),navigate("/admin/dashboard/workflow-studio")}}>Continue</button>
        </div>
    </>
        
  )
}

export default ChooseCampaignTemplatePop
import { SetStateAction, useContext, useState } from 'react'
import style from './style.module.scss'
import Check from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/check.svg"
import { SmsCampaignTemplate, VoiceCampaignTemplate, WhatsappCampaignTemplate } from './Data'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
const ChooseCampaignTemplatePop = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  const [campaignWorkflowTab, setCampaignWorkflowTab] = useState(1)
  const handleCampaignWorkflowTab = (id: SetStateAction<number>)=>{
    setCampaignWorkflowTab(id)
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
                <li className={`${ campaignWorkflowTab === 1 ? style.active : null}`} onClick={()=>handleCampaignWorkflowTab(1)}>
                    Templates
                </li>
                <li className={`${ campaignWorkflowTab === 2 ? style.active : null}`} onClick={()=>handleCampaignWorkflowTab(2)}>
                    Existing Workflows
                </li>
            </ul>
            {
                campaignWorkflowTab === 1 ?
                <div className={`${style.portion_wrap} d-flex`}>
                    {
                        contextCampaignManager.campaignCreateWorkFlowPop === 'sms' ?
                        SmsCampaignTemplate.map((template)=>{
                            return(
                                <div key={template.id} className={style.portion}>
                                    <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/choose/${template.templateImage}`} alt="" />
                                    <h4>{template.name}</h4>
                                </div>
                            )
                        }) :
                        contextCampaignManager.campaignCreateWorkFlowPop === 'voice' ? 
                        VoiceCampaignTemplate.map((template)=>{
                            return(
                                <div key={template.id} className={style.portion}>
                                    <img src={`/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/choose/${template.templateImage}`} alt="" />
                                    <h4>{template.name}</h4>
                                </div>
                            )
                        }) : 
                        contextCampaignManager.campaignCreateWorkFlowPop === 'whatsapp' ? 
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
                campaignWorkflowTab === 2 ? "Existing Workflows" : null
            }
            
        </div>
    </>
        
  )
}

export default ChooseCampaignTemplatePop
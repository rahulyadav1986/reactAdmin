import { useContext } from 'react'
import GeneralInfo from './GeneralInfo'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext'
import Configurations from './Configurations'
import Conditions from './Conditions'
import AddCampaignList from './AddCampaignList'
import SmsWhatsappInfo from './SmsWhatsappInfo'
const StepForm = ({campaignData,onSaveCampaignHandler}:any) => {
  //console.log("step form data",campaignData);
  const contextCampaignManager = useContext(ContextCampaignManager)    
  return (    
        <>
            {
              contextCampaignManager.createCampaignStepOne === true ? <GeneralInfo campaignData={campaignData} onSaveCampaignHandler={onSaveCampaignHandler}/> : false
            }
            {
              contextCampaignManager.createCampaignStepTwo === true ? (campaignData.type === 'voice' ?<Configurations campaignData={campaignData} onSaveCampaignHandler={onSaveCampaignHandler}/> : <SmsWhatsappInfo campaignData={campaignData} onSaveCampaignHandler={onSaveCampaignHandler}/>): false
            }

            {
              contextCampaignManager.createCampaignStepThree === true ? <Conditions campaignData={campaignData} onSaveCampaignHandler={onSaveCampaignHandler}/> : false
            }

            {
              contextCampaignManager.createCampaignStepFour === true ? <AddCampaignList  campaignData={campaignData} onSaveCampaignHandler={onSaveCampaignHandler}/> : false
            } 
            
            
            
        </>    
  )
}

export default StepForm

import { useEffect, useState } from 'react';
import CampaignListReportTable from './campaignListReportTable/CampaignListReportTable'
import CampaignSublistDataLoader from './CampaignSublistDataLoader';
const CampaignSubList = () => {
  console.log("campaign sub list");
  const [loadingMessage, setLoadingMessage] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingMessage(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []); 
  return (
    <>
      {
        loadingMessage ? <CampaignSublistDataLoader /> :
        <div className="table_card_area">
          <CampaignListReportTable/>          
        </div>
      }
      
    </>
    
  )
}

export default CampaignSubList
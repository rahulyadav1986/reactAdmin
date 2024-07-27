
import { useCallback, useContext, useEffect, useState } from 'react'
import CampaignListReportCard from './campaignListReportCard/CampaignListReportCard'
import CampaignListReportTable from './campaignListReportTable/CampaignListReportTable'
import style from './style.module.scss'
import {  ContextCampaignManager } from '../../../../../../contexts/campaignManagerContext'
import AddContacts from './AddContacts'
import moment from 'moment'
//import CampaignSubList from './CampaignSubList'

const CampaignList = () => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  const [campaignData, setCampaignData] = useState({ id: "", contacts: new Array(), linkedCampaigns:new Array() });

  // get the parsed contact list data ------------------------
  const parsedDataHandler = useCallback((parsedData: any) => {
    console.log("parsed contact list 11", parsedData);
    if (parsedData.length > 0) {
      console.log("Parsed contact column", Object.keys(parsedData[0]));
      let columnArr = Object.keys(parsedData[0]);
      if (columnArr.length > 0 && columnArr.indexOf("C Name") >= 0 && columnArr.indexOf("C Mobile") >= 0 && columnArr.indexOf("C Email") >= 0) {
        contextCampaignManager.handleImportingStatus(true);
        if (campaignData.id != "") {
          if (campaignData.contacts.length > 0) {
            let contacts: any = [];
            parsedData.forEach((el: any, index: any) => {
              el['id'] = (campaignData.contacts.length)+index + 1;
              el['created_at'] = moment().format("DD-MM-YYYY HH:mm:ss");
              contacts.push(el);
              if (index == parsedData.length - 1) {
                let campaignItem = campaignData;
                 campaignItem['contacts'] = campaignData['contacts'].concat(contacts);
                 console.log("parsed updated contacts",campaignItem['contacts']);
                contextCampaignManager.handleAddEditCampaignList(campaignItem);
                setCampaignData({ ...campaignData, ["contacts"]: campaignItem['contacts'] });
                contextCampaignManager.handleSelectedCampaign(campaignData.id);
                //alert(11);
                setTimeout(()=>{
                  contextCampaignManager.handleImportingStatus(false);
                },200);

                //  contextCampaignManager.handleFinalImportDoc(true);
              }
            });
          }
          else {
            let contacts: any = [];
            parsedData.forEach((el: any, index: any) => {
              el['id'] = index + 1;
              el['created_at'] = moment().format("DD-MM-YYYY HH:mm:ss");
              contacts.push(el);
              if (index == parsedData.length - 1) {
                let campaignItem = campaignData;
                campaignItem['contacts'] = contacts;
                contextCampaignManager.handleAddEditCampaignList(campaignItem);
                setCampaignData({ ...campaignData, ["contacts"]: contacts });
                setTimeout(()=>{
                  contextCampaignManager.handleImportingStatus(false);
                },200);
                //  contextCampaignManager.handleFinalImportDoc(true);
              }
            });
          }
        }
      }
      else {
        alert("Uploaded file does not contain data as per format. Please try with another file");
        // contextCampaignManager.handleFinalImportDoc(true);
      }
    }
  }, [campaignData,contextCampaignManager.handleAddEditCampaignList,contextCampaignManager.allCampaignLists]);
  // const getCampaignData = useCallback((id: any) => {
  //   if (id != "" && id != undefined) {
  //     console.log("12 " + id);
  //     let selectedObj: any = {};
  //     contextCampaignManager.allCampaignLists.forEach((campaigns, index: any) => {
  //       console.log(16,campaigns.id,id.toString());
  //       if (campaigns.id == id) {
  //         selectedObj = campaigns;
  //       }
  //       if (index == contextCampaignManager.allCampaignLists.length - 1) {
  //         console.log("selected obj list", selectedObj);
  //         // return selectedObj;
  //         setCampaignData(selectedObj);
  //       }
  //     });
  //   }
  //   else {
  //     //return {};
  //     setCampaignData({ id: "", contacts: new Array() });
  //   }
  // }, [contextCampaignManager.allCampaignLists]);

  const goBacktocampaignList = useCallback(()=>{
    contextCampaignManager.handleSetAddContacts(true);
    contextCampaignManager.handleFinalImportDoc(true);
  },[campaignData,contextCampaignManager.addContact,contextCampaignManager.finalImportDoc]); 
  useEffect(() => {
    console.log("11 "+contextCampaignManager.selectedCampaignList);
    //getCampaignData(contextCampaignManager.selectedCampaignList);
    if (contextCampaignManager.selectedCampaignList != "" && contextCampaignManager.selectedCampaignList != undefined) {
      console.log("12 " + contextCampaignManager.selectedCampaignList);
      let selectedObj: any = {};
      contextCampaignManager.allCampaignLists.forEach((campaigns, index: any) => {
        console.log(16,campaigns.id,contextCampaignManager.selectedCampaignList.toString());
        if (campaigns.id == contextCampaignManager.selectedCampaignList) {
          selectedObj = campaigns;
        }
        if (index == contextCampaignManager.allCampaignLists.length - 1) {
          console.log("selected obj list", selectedObj);
          // return selectedObj;
          setCampaignData(selectedObj);
        }
      });
    }
    else {
      //return {};
      setCampaignData({ id: "", contacts: new Array(), linkedCampaigns:new Array() });
    }
  }, [contextCampaignManager.selectedCampaignList]);
  

  return (
    <div className={style.campaign_list_wrapper}>
      {
        contextCampaignManager.addContact !== true ?
          <>

            {
              contextCampaignManager.finalImportDoc !== true ?
                <CampaignListReportCard /> : null
            }
            <div className="table_card_area">
                <CampaignListReportTable onDataParse={parsedDataHandler} />
            </div>
          </> :
          <>
            {
              //contextCampaignManager.finalImportDoc !== true ?
              campaignData.contacts.length == 0 && contextCampaignManager.importContactsPop != "manual" ?
                //<AddContacts onDataParse={parsedDataHandler} /> : <CampaignSubList/>
                <AddContacts onDataParse={parsedDataHandler} backToParent={goBacktocampaignList}/> : <><CampaignListReportTable onDataParse={parsedDataHandler} backToParent={goBacktocampaignList}/></>
            }
          </>
      }

    </div>
  )
}

export default CampaignList
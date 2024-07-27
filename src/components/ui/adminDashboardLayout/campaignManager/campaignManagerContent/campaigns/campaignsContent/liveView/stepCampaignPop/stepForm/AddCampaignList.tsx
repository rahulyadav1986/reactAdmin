import { useCallback, useContext, useEffect, useState } from 'react';
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext';
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
// import useToggle from '../../../../../../../../../../hooks/useToggle';
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
// import Calendar from 'react-calendar';
import useOutside from '../../../../../../../../../../hooks/useOutside';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
//import moment from 'moment';

//const { RangePicker } = DatePicker;
const AddCampaignList = ({ campaignData, onSaveCampaignHandler }: any) => {
  const [dropList, setList, refList] = useOutside(false)
  const [dropDiallingStrategySort, setDiallingStrategySort, refDiallingStrategySort] = useOutside(false)
  const [dropDiallingStrategyColumn, setDiallingStrategyColumn, refDiallingStrategyColumn] = useOutside(false)
  const [dropReChurnStrategyUser, setReChurnStrategyUser, refReChurnStrategyUser] = useOutside(false)
  const [dropReChurnStrategySystem, setReChurnStrategySystem, refReChurnStrategySystem] = useOutside(false)
  const contextCampaignManager = useContext(ContextCampaignManager);
  const configObj = { list: null, diallingStrategy: null, diallingStrategyOrder: 'ASC', userDisposition: new Array(), systemDisposition: new Array(), rechurningStrategy: null, rechurningDateTime: "" };
  const [listInfo, setListInfo] = useState<any | null>(null);
  const [diallingStrategyColumn, setDiallingStrategyColumnList] = useState(new Array());

  useEffect(() => {
    console.log("list info", listInfo);

    if (listInfo != null) {

      if (listInfo.contacts.length > 0) {
        setDiallingStrategyColumnList(Object.keys(listInfo.contacts[0]).filter((el)=>el != 'id' && el != 'created_at'));
      }
      else {
        setDiallingStrategyColumnList(new Array());
        // onChangeCampaignListFormUpdate("diallingStrategy",null);
        // onChangeCampaignListFormUpdate("diallingStrategyOrder",'ASC');

      }
    }
    else {
      setDiallingStrategyColumnList(new Array());
      // onChangeCampaignListFormUpdate("diallingStrategy",null);
      // onChangeCampaignListFormUpdate("diallingStrategyOrder",'ASC');
      // resetDiallingStrategy();

    }
  }, [listInfo]);

  const getCampaignListConfig = useCallback(() => {
    // if (campaignData.listConfig != undefined && campaignData.listConfig != null && Object.keys(campaignData.listConfig).length > 0) {
    if (campaignData.list != null) {
      let selectedCampaign = contextCampaignManager.allCampaignLists.filter((el) => el.id == campaignData.list);
      if (selectedCampaign != undefined && selectedCampaign != null && selectedCampaign.length > 0) {
        setListInfo(selectedCampaign[0]);
      }
    }
    return { ...configObj, ...campaignData };
    // }
    // else {
    //   return configObj;
    // }
  }, [campaignData, configObj]);
  const [campaignListFormData, setCampaignListFormData] = useState(getCampaignListConfig);
  const [campaignFormData, setCampaignFormData] = useState(() => {
    if (campaignData != null) {
      return campaignData;
    }
    else {
      return { id: null, name: "", list: new Array(), goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "", type: contextCampaignManager.createCampaignPopType, workflow: "", status: "", action: "Start", workflowType: "Campaigns" };
    }
  });

  const [selectedDispoList, setSelectedDispoList] = useState(new Array());
  const [searchDisposition, setSearchDisposition] = useState("");
  useEffect(() => {
    setSearchDisposition("");
    if (dropReChurnStrategyUser) {
      setSelectedDispoList(campaignListFormData.userDisposition);
    }
    else {
      setSelectedDispoList(new Array());
    }
  }, [dropReChurnStrategyUser]);
  useEffect(() => {
    setSearchDisposition("");
    if (dropReChurnStrategySystem) {
      setSelectedDispoList(campaignListFormData.systemDisposition);
    }
    else {
      setSelectedDispoList(new Array());
    }
  }, [dropReChurnStrategySystem]);

  //const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, _setFilteredUsers] = useState(contextCampaignManager.allCampaignLists.filter((campaign) => campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType));
  // const [valueListDrop, toggleValueListDrop] = useToggle(false);
  // const [selectedList, setSelectedList] = useState(() => {
  //   if (campaignListFormData.list.length > 0) {
  //     return campaignListFormData.list.length;
  //   }
  //   else {
  //     return [];
  //   }
  // });
  // useEffect(() => {
  //   if (dropList) {
  //     // console.log("selected list 1", selectedList, campaignFormData.list);
  //     setSelectedList(campaignListFormData.list)
  //   }
  //   else {
  //     setSelectedList([]);
  //   }
  // }, [dropList]);

  useEffect(() => {
    campaignData = { ...campaignData, ...campaignListFormData };
    console.log("update campaign data", campaignData);
    onSaveCampaignHandler(campaignData);
  }, [campaignListFormData])
  // const onSelectAllCheck = useCallback((event: any) => {
  //   setSearchItem("");
  //   setFilteredUsers(contextCampaignManager.allCampaignLists.filter((campaign) => campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType));
  //   setSelectedList([]);
  //   if (event.target.checked) {

  //     contextCampaignManager.allCampaignLists.map((campaign) => {
  //       if (campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType) {
  //         setSelectedList((selectedList: []) => [...selectedList, campaign.id]);
  //       }
  //     });

  //   }
  // }, [searchItem, filteredUsers, selectedList]);
  // const handleInputChange = (e: { target: { value: any } }) => {
  //   const searchTerm = e.target.value;
  //   setSearchItem(searchTerm)


  //   const filteredItems = contextCampaignManager.allCampaignLists.filter((user) =>
  //     user.listname.toLowerCase().includes(searchTerm.toLowerCase()) && (user.purpose == 'general' || user.purpose == contextCampaignManager.createCampaignPopType)
  //   );

  //   setFilteredUsers(filteredItems);

  // }

  // const onCheckBoxChange = useCallback((event: any, elID: string | number) => {
  //   // console.log("selected checkboxes", selectedList);

  //   if (event.target.checked) {
  //     setSelectedList((selectedList: []) => [...selectedList, elID]);
  //   }
  //   else {
  //     setSelectedList((selectedList: []) => selectedList.filter((el) => el != elID));
  //   }
  // }, [selectedList]);

  const updateContactList = useCallback(() => {
    // console.log("selected list", campaignListFormData.list);
    if (campaignData.name != "") {
      const campaignInfo: any = contextCampaignManager.handleAddEditCampaigns(campaignData);
      console.log("after update campaign Info", campaignInfo,campaignData);
      if (campaignInfo.id) {
        contextCampaignManager.allCampaignLists.forEach((cList) => {
          console.log("if", cList, campaignFormData);
          if (campaignInfo.list == cList.id) {
            if (cList.linkedCampaigns.indexOf(campaignInfo.id) < 0) {
              cList['linkedCampaigns'].push(campaignInfo.id);
              contextCampaignManager.handleAddEditCampaignList(cList);
            }
          }
          else {
            if (cList.linkedCampaigns.indexOf(campaignInfo.id) >= 0) {
              cList['linkedCampaigns'] = cList['linkedCampaigns'].filter((lItem: number) => lItem != campaignInfo.id);
              contextCampaignManager.handleAddEditCampaignList(cList);
            }
          }

        });
        contextCampaignManager.handleCreateCampaignStepFinal(true);
      }
    }
    else {
      alert("Please review the form and fill all the mandatory data to finish.");
    }
    // toggleValueListDrop(false);
    // contextCampaignManager.handleCreateCampaignStepFinal(true);
  }, [campaignFormData, contextCampaignManager.handleAddEditCampaigns, onSaveCampaignHandler, setCampaignFormData]);
  const onChangeCampaignListFormUpdate = useCallback((fieldName: string, value: any) => {
    console.log(fieldName + " " + value)
    if (fieldName == 'list') {
      setCampaignListFormData({ ...campaignListFormData, ...{ "list": value, 'diallingStrategy': null, 'diallingStrategyOrder': 'ASC' } });
    }
    else {
      setCampaignListFormData({ ...campaignListFormData, [fieldName]: value });
    }

  }, [campaignListFormData]);
  // const applyList = useCallback(() => {
  //   console.log("apply list", selectedList);
  //   onChangeCampaignListFormUpdate("list", selectedList);
  //   //setDisplayList(selectedList);
  //   setList(false);
  // }, [selectedList, onChangeCampaignListFormUpdate]);

  // const [diallingColumnDrop, setDiallingColumnDrop] = useState(false)
  //const [diallingColumnDropValue, setDiallingColumnDropValue] = useState("Select Column")
  // const handleDiallingColumnDrop = ()=>{
  //   setDiallingColumnDrop(!diallingColumnDrop)
  //   setDiallingRowSortDrop(false)
  // }
  // const handleDiallingColumnValue = (e: any) => {
  //   setDiallingColumnDropValue(e.target.textContent)
  //   // setDiallingColumnDrop(false)
  //   setDiallingStrategyColumn(false)
  // }




  // const [diallingRowSortDrop, setDiallingRowSortDrop] = useState(false)
  //const [diallingRowSortDropValue, setDiallingRowSortDropValue] = useState("ASC")
  // const handleDiallingRowSortDrop = ()=>{
  //   setDiallingRowSortDrop(!diallingRowSortDrop)
  //   setDiallingColumnDrop(false)
  // }
  // const handleDiallingRowSortDropValue = (e: any) => {
  //   setDiallingRowSortDropValue(e.target.textContent)
  //   // setDiallingRowSortDrop(false)
  //   setDiallingStrategySort(false)
  // }
  // const [specificDateTime, setSpecificDateTime] = useState(0)
  // const handleChangeRadioValue = (id: any) => {
  //   setSpecificDateTime(id)
  // }



  const userDispoData = [
    {
      id: "1",
      skill: "Bad Call Quality"
    },
    {
      id: "2",
      skill: "Blank Call"
    },
    {
      id: "3",
      skill: "Asked to Call Back"
    }

  ]

  const systemDispoData = [
    {
      id: "1",
      skill: "Not Reachable"
    },
    {
      id: "2",
      skill: "Did Not Pick"
    },
    {
      id: "3",
      skill: "Disconnected"
    },
    {
      id: "4",
      skill: "Network Issue"
    }

  ]
  const onDispoListCheck = (_fieldName: string, e: any) => {
    //alert(e.target.checked)
    if (e.target.checked) {
      setSelectedDispoList([...selectedDispoList, e.target.value]);
    }
    else {
      console.log(e.target.value);
      console.log(selectedDispoList.filter((item) => item != e.target.value));
      setSelectedDispoList((selectedDispoList) => selectedDispoList.filter((item) => item != e.target.value));
    }
  }

  const applyDispoListCheck = (fieldName: string) => {
    // alert(fieldName);
    onChangeCampaignListFormUpdate(fieldName, selectedDispoList);
    if (fieldName == 'systemDisposition') {
      setReChurnStrategySystem(false);
    }
    else {
      setReChurnStrategyUser(false);
    }
  };

  const onSelectAllDispoCheck = useCallback((event: any, fieldName: string) => {
    setSearchDisposition("");
    setSelectedDispoList(new Array());
    if (event.target.checked) {
      if (fieldName == "userDisposition") {
        setSelectedDispoList(userDispoData.map((el) => el.skill));
      }
      else {
        setSelectedDispoList(systemDispoData.map((el) => el.skill));
      }
    }
  }, [searchDisposition, selectedDispoList, userDispoData, systemDispoData]);

  // const onDispoSearch = (e:any,fieldName:string)=>{
  //   setSearchDisposition(e.targe.value);
  //   if(fieldName == 'userDispostion')=>{

  //   }
  // };

  return (
    <>
      <div className={style.form_section_area}>
        {/* {
          listContactsDrop ? <div className={style.overlay} onClick={handleBlankLayer}></div> : null
        } */}
        <div className={style.form_area_wrapper}>
          <div className={style.general_information}>
            {/* <div className={style.portion}>
                      <label htmlFor="ListContacts">List (Contacts)</label>
                      <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleListContactsDropDrop}>
                          <span>{listContactsValue}</span>
                          <span><img src={DownArrow} alt="" /></span>
                      </div>
                      {
                          listContactsDrop && 
                          <>
                              <ul className={style.drop_area}>
                                  <li onClick={handleRetryDurationValue}>List 1</li>
                                  <li onClick={handleRetryDurationValue}>List 2</li>
                                  <li onClick={handleRetryDurationValue}>List 3</li>
                              </ul>
                          </>
                      }
                      
                  </div> */}
            <div className={style.portion} >
              <label htmlFor="list">List (Contacts)</label>
              <div ref={refList}>
                <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setList(!dropList)} >
                  {listInfo == null && <span>Choose the list</span>}
                  {listInfo != null && <span>{listInfo.listname}</span>}
                  <span><img src={DownArrow} alt="" /></span>
                </div>
                {
                  dropList == true &&
                  // <div className={`${style.skill_drop_area_wrapper} ${style.fixedWidth}`}>
                  //   {
                  //     // filteredUsers.length > 0 ?
                  //     <>
                  //       <div className={style.top_area}>
                  //         <div className={`${style.search_box} d-flex align-items-center`}>
                  //           <img src={SearchIcon} alt="" />
                  //           <input type="text" name="" id="" value={searchItem} placeholder='Search lists' onChange={handleInputChange} />
                  //         </div>
                  //         <div className={style.check_box_wrapper}>
                  //           <input type="checkbox" name="selectAll" id="selectAll" onChange={onSelectAllCheck} value={0} defaultChecked={false} />
                  //           <label htmlFor="selectAll">
                  //             <span></span>
                  //             Select All
                  //           </label>
                  //         </div>
                  //       </div>
                  //       <div className={style.filter_area}>
                  //         {
                  //           filteredUsers.length > 0 &&
                  //           filteredUsers.map((el) => {
                  //             return (
                  //               <div className={style.check_box_wrapper}>
                  //                 <input type="checkbox" id={el.listname} name={el.id} value={el.listname} onChange={(event) => onCheckBoxChange(event, el.id)} checked={selectedList.indexOf(el.id) >= 0 ? true : false} />
                  //                 <label htmlFor={el.listname}>
                  //                   <span></span>
                  //                   {el.listname}
                  //                 </label>
                  //               </div>
                  //             )
                  //           })
                  //         }
                  //       </div>

                  //       <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                  //         <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => setList(false)}>Cancel</div>
                  //         <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={applyList}>Apply</div>
                  //       </div>
                  //     </>
                  //     //: <p className={style.noData}>No Contact List Found</p>
                  //   }


                  // </div>
                  <>
                    <ul className={`${style.drop_area} ${style.fixedWidth}`}>
                      {
                        filteredUsers.length > 0 ?
                        filteredUsers.map((el) => {
                          return <li onClick={() => { onChangeCampaignListFormUpdate("list", el.id); setList(false), setDiallingStrategyColumnList(new Array()), setListInfo(el) }}>{el.listname}</li>
                        }) : <li>No List Available</li>
                      }
                    </ul>
                  </>
                }
              </div>
            </div>

            <div className={style.portion}>
              <label htmlFor="">Dialling Strategy</label>
              <div className={`${style.row_col}`}>
                <div className={style.select} >
                  <label htmlFor="">Select by Column</label>
                  <div ref={refDiallingStrategyColumn}>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDiallingStrategyColumn(!dropDiallingStrategyColumn)}>
                      <span>{(campaignListFormData.diallingStrategy != null && campaignListFormData.diallingStrategy != "") ? campaignListFormData.diallingStrategy : "Select Column"}</span>
                      <span><img src={DownArrow} alt="" /></span>
                    </div>
                    {
                      dropDiallingStrategyColumn &&
                      <ul className={style.drop_area}>
                        {/* <li onClick={handleDiallingColumnValue}>Customer Name</li>
                        <li onClick={handleDiallingColumnValue}>Customer Phone</li>
                        <li onClick={handleDiallingColumnValue}>Customer Email</li>
                        <li onClick={handleDiallingColumnValue}>Loan Amount</li> */}
                        {
                          diallingStrategyColumn.length > 0 ?
                          diallingStrategyColumn.map((el) => {
                            return <li onClick={() => { onChangeCampaignListFormUpdate("diallingStrategy", el), setDiallingStrategyColumn(false) }}>{el}</li>
                          }) : <li>No Column Found</li>
                        }
                      </ul>
                    }
                  </div>
                </div>
                <div className={style.select} >
                  <label htmlFor="">Order by</label>
                  <div ref={refDiallingStrategySort}>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDiallingStrategySort(!dropDiallingStrategySort)}>
                      <span>{campaignListFormData.diallingStrategyOrder}</span>
                      <span><img src={DownArrow} alt="" /></span>
                    </div>
                    {
                      dropDiallingStrategySort &&
                      <ul className={style.drop_area}>
                        <li onClick={() => { onChangeCampaignListFormUpdate("diallingStrategyOrder", "ASC"), setDiallingStrategySort(false) }}>ASC</li>
                        <li onClick={() => { onChangeCampaignListFormUpdate("diallingStrategyOrder", "DESC"), setDiallingStrategySort(false) }}>DESC</li>
                      </ul>
                    }
                  </div>
                </div>


              </div>
            </div>

            <div className={style.portion}>
              <label htmlFor="">Re-Churn Strategy</label>
              <div className={`${style.row_col}`}>

                <div className={style.select}>
                  <div  className={style.select_sec}>
                    <label htmlFor="">User Disposition</label>
                    <div ref={refReChurnStrategyUser}>
                      <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setReChurnStrategyUser(!dropReChurnStrategyUser)}>
                        <span>{campaignListFormData.userDisposition.length > 0 ? campaignListFormData.userDisposition.length + " disposition selected" : " --- Please select --- "}</span>
                        <span><img src={DownArrow} alt="" /></span>
                      </div>
                      {
                        dropReChurnStrategyUser &&

                        <div className={style.skill_drop_area_wrapper}>
                          <div className={style.top_area}>
                            <div className={`${style.search_box} d-flex align-items-center`}>
                              <img src={SearchIcon} alt="" />
                              <input type="text" name="userDisposition" id="" placeholder='Search User Disposition' value={searchDisposition} onChange={(e) => setSearchDisposition(e.target.value)} />
                            </div>
                            <div className={style.check_box_wrapper}>
                              <input type="checkbox" id="selectAll" onChange={(e) => onSelectAllDispoCheck(e, 'userDisposition')} />
                              <label htmlFor="selectAll">
                                <span></span>
                                Select All
                              </label>
                            </div>
                          </div>
                          <div className={style.filter_area}>
                            {
                              userDispoData.map((item) => {
                                return (
                                  item.skill.toLowerCase().indexOf(searchDisposition) >= 0 ? <div className={style.check_box_wrapper} key={item.id}>
                                    <input type="checkbox" id={"user_" + item.id} value={item.skill} onChange={(e) => onDispoListCheck("userDisposition", e)} checked={selectedDispoList.indexOf(item.skill) >= 0 ? true : false} />
                                    <label htmlFor={"user_" + item.id}>
                                      <span></span>
                                      {item.skill}
                                    </label>
                                  </div> : null
                                )
                              })
                            }
                          </div>
                          <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => setReChurnStrategyUser(false)}>Cancel</div>
                            <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={() => applyDispoListCheck("userDisposition")}>Apply</div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                </div>

                <div className={style.select} >
                  <div  className={style.select_sec}>
                    <label htmlFor="">System Disposition</label>
                    <div ref={refReChurnStrategySystem}>
                      <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setReChurnStrategySystem(!dropReChurnStrategySystem)}>
                        <span>{campaignListFormData.systemDisposition.length > 0 ? campaignListFormData.systemDisposition.length + " disposition selected" : " --- Please select --- "}</span>
                        <span><img src={DownArrow} alt="" /></span>
                      </div>
                      {
                        dropReChurnStrategySystem &&
                        <div className={style.skill_drop_area_wrapper}>
                          <div className={style.top_area}>
                            <div className={`${style.search_box} d-flex align-items-center`}>
                              <img src={SearchIcon} alt="" />
                              <input type="text" name="systemDispo" id="" placeholder='Search System Disposition' value={searchDisposition} onChange={(e) => setSearchDisposition(e.target.value)} />
                            </div>
                            <div className={style.check_box_wrapper}>
                              <input type="checkbox" id="selectAll" onChange={(e) => onSelectAllDispoCheck(e, 'systemDisposition')} />
                              <label htmlFor="selectAll">
                                <span></span>
                                Select All
                              </label>
                            </div>
                          </div>
                          <div className={style.filter_area}>
                            {
                              systemDispoData.map((item) => {
                                return (
                                  item.skill.toLowerCase().indexOf(searchDisposition) >= 0 ? <div className={style.check_box_wrapper} key={item.id}>
                                    <input type="checkbox" id={"system_" + item.id} value={item.skill} onChange={(e) => onDispoListCheck("systemDisposition", e)} checked={selectedDispoList.indexOf(item.skill) >= 0 ? true : false} />
                                    <label htmlFor={"system_" + item.id}>
                                      <span></span>
                                      {item.skill}
                                    </label>
                                  </div> : null
                                )
                              })
                            }
                          </div>
                          <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => setReChurnStrategySystem(false)}>Cancel</div>
                            <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={() => applyDispoListCheck("systemDisposition")}>Apply</div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                </div>


              </div>
              <div className={`${style.dialing_mode_wrapper}`}>
                <ul className={`${style.radio_wrapper} d-flex`}>
                  <li className='d-flex align-items-center' onClick={() => { onChangeCampaignListFormUpdate("rechurningStrategy", "campaign") }}>
                    <input type="radio" name="dialingMode" id="Predictive" value="campaign" checked={campaignListFormData.rechurningStrategy == 'campaign'} />
                    <label htmlFor="Predictive">
                      <span></span>When Campaign is Complemeted
                    </label>
                  </li>
                  <li className='d-flex align-items-center' onClick={() => { onChangeCampaignListFormUpdate("rechurningStrategy", "specific") }}>
                    <input type="radio" name="dialingMode" id="Preview" value="specific" checked={campaignListFormData.rechurningStrategy == 'specific'} />
                    <label htmlFor="Preview">
                      <span></span>Specific Date and Time
                    </label>
                  </li>

                </ul>
                {
                  campaignListFormData.rechurningStrategy === 'specific' &&
                  <>
                    <div className='d-flex align-items-center'>
                      <div style={{ 'margin': '15px' }}>
                        <Space>
                          <DatePicker showTime format="DD/MM/YYYY hh:mm A" onChange={(_date, dateString) => { onChangeCampaignListFormUpdate("rechurningDateTime", dateString) }} value={(campaignListFormData.rechurningDateTime != "" ? dayjs(campaignListFormData.rechurningDateTime, "DD/MM/YYYY hh:mm A") : "")} minDate={dayjs()} />
                        </Space>
                      </div>
                    </div>
                  </>
                }

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={contextCampaignManager.handleCancleCreateContentPopType}>Cancle</button>
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleCreateCampaignStepThree(true)}>Back</button>
        <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => { updateContactList() }}>Finish</button>
      </div>
    </>
  )
}

export default AddCampaignList
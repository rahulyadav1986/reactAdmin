import { useCallback, useContext, useEffect, useState } from 'react';
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext';
import CallIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/call.svg"
import TrashGreyIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trashGrey.svg"
import Arrow from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/arrowDown.svg"
import DragIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/drag.svg"
import AddRowIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/addRow.svg"
import useToggle from '../../../../../../../../../../hooks/useToggle';
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import ArrowRight from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/right_arrow.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/edit.svg"
import DeleteIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/delete.svg"
import SaveIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/save.svg"
import CheckedIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/correct.png"
import CheckedActiveIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/correctActive.png"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import NewList from '../newList/NewList';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import TimeList from './TimeList';
import useOutside from '../../../../../../../../../../hooks/useOutside';
//import moment from 'moment';
dayjs.extend(customParseFormat);
const Conditions = ({ campaignData, onSaveCampaignHandler }: any) => {
  const contextCampaignManager = useContext(ContextCampaignManager);
  // const cliPriorityRef: any = useRef(null);
  const [editingElement, seteditingElement] = useState(-1);
  //const [errorMessage,setErrorMessage] = [];

  const defaultList = [{ name: "Primary Mobile", maxAttempts: null, retryEnabled: false, retryDuration: null, retryUnit: 'second', cliPriority: [] }, { name: "Alternate Mobile", maxAttempts: null, retryEnabled: false, retryDuration: null, retryUnit: 'second', cliPriority: [] }, { name: "Home", maxAttempts: null, retryEnabled: false, retryDuration: null, retryUnit: 'second', cliPriority: [] }, { name: "Office", maxAttempts: null, retryEnabled: false, retryDuration: null, retryUnit: 'second', cliPriority: [] }, { name: "Others", maxAttempts: null, retryEnabled: false, retryDuration: null, retryUnit: 'second', cliPriority: [] }];
  const priorityList = [1, 2, 3];
  const cliList = ['123456898', '13234234234', '2312414234234', '11323232323', '1132323232', '1113434343'];
  const [cliSearchText, setCliSearchText] = useState("");
  const timeForm = { "startTime": "", "endTime": "", id: null };
  const [timeFormArr, setTimeFormArr] = useState(new Array());
  const conditionObj = { contactStrategy: defaultList, timeZoneValue: [], timeOfDay: {}, includeHoliday: false, holidayLists: [] };
  const [checkedDayList, setCheckedDayList] = useState(new Array());
  const [timeErrorMessage, setTimeErrorMessage] = useState(new Array());
  const [allHolidayList, setAllHolidayList] = useState(contextCampaignManager.holidayList);
  const [holidayToEdit, setHolidayToEdit] = useState(null);
  const getConditionInfo = () => {

    //if (campaignData.conditions != undefined && Object.keys(campaignData.conditions).length > 0) {
    // console.log("condition data", { ...conditionObj, ...campaignData }, conditionObj, campaignData)
    return { ...conditionObj, ...campaignData };
    // }
    // else {
    //   console.log("condition object", conditionObj)
    //   return conditionObj;
    // }
  };

  const [conditionForm, setConditionForm] = useState(getConditionInfo);

  useEffect(() => {
    console.log("saved campaign data", conditionForm);
    //const newCampaignData = { ...campaignData, ...conditionForm };
    // newCampaignData = { ...newCampaignData, ...conditionForm };
    onSaveCampaignHandler({ ...campaignData, ...conditionForm });
  }, [conditionForm]);
  // Function to update list on drop
  const handleDrop = (droppedItem: any) => {
    // console.log(droppedItem);
    handleCliDrop(false);
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...conditionForm.contactStrategy];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // console.log("updated list", updatedList, droppedItem);
    // Update State
    setConditionForm({ ...conditionForm, ['contactStrategy']: updatedList });
  };
  const [timeZoneDrop, toggleTimeZoneDrop] = useToggle(false);
  //const [timeZoneValue, setTimeZoneValue] = useState("Afghanistan Time (GMT+4:30)")
  const handleCallRationValue = useCallback((e: any) => {
    setConditionForm((conditionForm: any) => {
      if (conditionForm.timeZoneValue.length > 0) {
        conditionForm.timeZoneValue[0] = e.target.textContent;
      }
      else {
        conditionForm.timeZoneValue.push(e.target.textContent);
      }
      return conditionForm;
    });
    toggleTimeZoneDrop(false)
  }, [timeZoneDrop, conditionForm]);
  const handleBlankLayer = () => {
    toggleTimeZoneDrop(false);

  }

  const [accordion, setAccordion] = useState(((campaignData.type === 'voice') ? 1 : 2))
  const handleAccordion = (id: any) => {
    setAccordion(accordion === id ? -1 : id)
  }

  const [day, setday] = useState(-1)
  const handleDay = (id: any) => {
    //setday(day === id ? -1 : id);
    setday(id);
    if (day != id) {
      //  setTimeFormArr([]);
      console.log("conditionForm", conditionForm.timeOfDay[id], campaignData.timeOfDay, contextCampaignManager.allCampaigns.filter((el) => el.id == campaignData.id));
      //alert(Object.keys(conditionForm.timeOfDay).length);
      if (conditionForm.timeOfDay[id] != undefined && conditionForm.timeOfDay[id].length > 0) {
        setCheckedDayList(new Array());
        setTimeFormArr(conditionForm.timeOfDay[id]);
        seteditingElement(-1);
      }
      else {
        if (checkedDayList.length > 0) {
          if (timeFormArr.length > 0) {

            setTimeFormArr(timeFormArr);
          }
          else {
            setTimeFormArr([timeForm]);
          }
          seteditingElement(-1);
        }
        else {
          setTimeFormArr([]);
          seteditingElement(-1);
        }
      }
    }
  }
  // add time box ----
  const addTimeBox = useCallback(() => {
    setTimeFormArr([...timeFormArr, timeForm]);
    //seteditingElement(timeFormArr.length);
  }, [timeFormArr]);
  // remove timer block --------------
  const removeTimeBox = (index: number, id: string | null | number) => {
    if (id == null) {
      setTimeFormArr((timeFormArr) => timeFormArr.filter((_el, elindex) => elindex != index));
      const newconditionForm = { ...conditionForm };
      newconditionForm['timeOfDay'][day] = timeFormArr.filter((el) => el.id != id);
      setConditionForm(newconditionForm);
    }
    else {
      setTimeFormArr((timeFormArr) => timeFormArr.filter((el) => el.id != id));
      const newconditionForm = { ...conditionForm };
      newconditionForm['timeOfDay'][day] = timeFormArr.filter((el) => el.id != id);
      setConditionForm(newconditionForm);
    }
  };
  useEffect(() => {
    console.log("updated time form array", timeFormArr, conditionForm);
  }, [timeFormArr]);
  const [cliDrop, setCliDrop] = useState(null)
  const handleCliDrop = (id: any) => {
    setCliSearchText("");
    setCliDrop(cliDrop === id ? -1 : id)
  }

  const [dropSelectCli, setDropSelectCli, refDropSelectCli] = useOutside(null)

  const handleSelectCli = (id: any) => {
    setCliSearchText("");
    // setDropSelectCli(dropSelectCli === id ? -1 : id)
    setDropSelectCli(dropSelectCli === id ? -1 : id)
    console.log("get Selected cli" + dropSelectCli);
  }


  const onChange = (_time: Dayjs, timeString: any, index: number, fieldName: string) => {
    console.log("time change", fieldName, timeString, timeFormArr);
    const newTimeForm = [...timeFormArr];
    newTimeForm[index][fieldName] = timeString;
    setTimeFormArr(newTimeForm);

  };
  // on save time box -----
  const onSaveTimeBoxHandler = useCallback((index: number, id: number) => {
    seteditingElement(-1);
    setTimeErrorMessage(new Array());
    if (Object.keys(conditionForm.timeOfDay).length > 0) {
      if (conditionForm.timeOfDay[day] != undefined) {

        if (conditionForm.timeOfDay[day][index] != undefined) {
          const timeFormNewArr = [...timeFormArr];
          let errorCount = 0;
          console.log("timeFormArr", timeFormNewArr[index]);
          if (timeFormNewArr[index]['startTime'] == undefined || timeFormNewArr[index]['startTime'] == "" || timeFormNewArr[index]['endTime'] == undefined || timeFormNewArr[index]['endTime'] == "") {
            errorCount++;
            setTimeErrorMessage({ ...timeErrorMessage, [index]: "Please enter start time and end time." });
          }
          else if ((timeFormNewArr[index]['startTime'] != undefined && timeFormNewArr[index]['startTime'] != "" && dayjs(timeFormNewArr[index]['startTime'], "h:mm A").isBefore(dayjs("8:00 AM", "h:mm A")) == true) || (timeFormNewArr[index]['endTime'] != undefined && timeFormNewArr[index]['endTime'] != "" && dayjs(timeFormNewArr[index]['endTime'], "h:mm A").isAfter(dayjs("6:00 PM", "h:mm A")) == true)) {
            errorCount++;
            setTimeErrorMessage({ ...timeErrorMessage, [index]: "Campaign start and end time will be within 8:00 AM - 6:00 PM" });
          }
          else if (timeFormNewArr[index]['startTime'] != undefined && timeFormNewArr[index]['startTime'] != "" && timeFormNewArr[index]['endTime'] != undefined && timeFormNewArr[index]['endTime'] != "" && dayjs(timeFormNewArr[index]['endTime'], "h:mm A").diff(dayjs(timeFormNewArr[index]['startTime'], "h:mm A")) <= 0) {
            errorCount++;
            setTimeErrorMessage({ ...timeErrorMessage, [index]: "Please enter valid time range." });
          }
          else {
            let timeObj = { "startTime": timeFormArr[index]["startTime"], "endTime": timeFormArr[index]["endTime"], id: (id != null) ? id : index + 1 };
            timeFormNewArr[index] = timeObj;
            let dayData: any = { ...conditionForm.timeOfDay };
            dayData[day] = timeFormNewArr;
            setTimeFormArr([...timeFormNewArr]);
            // setTimeFormArr(()
            setConditionForm({ ...conditionForm, ['timeOfDay']: dayData });

          }
        }
        else {
          const timeFormNewArr = [...timeFormArr];
          timeFormNewArr[index]['id'] = timeFormNewArr.length + 1;
          const newTimeOfDay = { ...conditionForm['timeOfDay'] };
          newTimeOfDay[day] = timeFormNewArr;
          setTimeFormArr(timeFormNewArr);
          setConditionForm({ ...conditionForm, ['timeOfDay']: newTimeOfDay });
        }
      }
    }
  }, [conditionForm, timeFormArr, day]);
  const onCallStrategyChangeHandler = (callIndex: number, fieldName: string, event: any) => {
    // console.log("call index", callIndex, fieldName, event.target.value, event.target.checked);
    let contactStrategy = {...conditionForm['contactStrategy'][callIndex]};
    if (fieldName == "maxAttempts" || fieldName == 'retryDuration' || fieldName == 'retryUnit') {
      contactStrategy[fieldName] = (event.target.value != "") ? event.target.value : null;
      if (fieldName == "maxAttempts") {
        if (contactStrategy[fieldName] == null) {
          contactStrategy['cliPriority'] = [];
        }
        else if (parseInt(contactStrategy[fieldName]) < contactStrategy['cliPriority'].length) {
          contactStrategy['cliPriority'].splice(parseInt(contactStrategy[fieldName]), contactStrategy['cliPriority'].length);
        }
      }
      console.log(contactStrategy);
      setConditionForm({ ...conditionForm, ['contactStrategy']: conditionForm.contactStrategy.map((el:any,i:number)=>(i=== callIndex)?{...el,...contactStrategy}:el) });
    }
    else if (fieldName == 'retryEnabled') {
      contactStrategy['retryEnabled'] = (event.target.checked == true) ? true : false;
      setConditionForm({ ...conditionForm, ['contactStrategy']:  conditionForm.contactStrategy.map((el:any,i:number)=>(i=== callIndex)?{...el,...contactStrategy}:el) });
    }
    else if (fieldName == 'cliPriority') {
      if (event.target.checked) {
        contactStrategy['cliPriority'].push(event.target.value);
      }
      else {
        contactStrategy['cliPriority'] = contactStrategy['cliPriority'].filter((item: any) => item != event.target.value);
      }
      setConditionForm({ ...conditionForm, ['contactStrategy']:  conditionForm.contactStrategy.map((el:any,i:number)=>(i=== callIndex)?{...el,...contactStrategy}:el) });
    }
  };

  const onKeyPressHandler = useCallback((event: any) => {
    //let allowedKeyCode = [49, 50, 51, 8, 46];
    let allowedKeyCode = ["1", "2", "3", "Backspace", "Delete"];
    //console.log(allowedKeyCode.indexOf(event.key), event);
    if (allowedKeyCode.indexOf(event.key) < 0) {
      event.preventDefault();
    }
  }, []);

  const onChangeCliPriority = (callIndex: any, e: any, cli: any) => {
    //console.log(callIndex + " " + e.target.value);
    let contactStrategy = conditionForm.contactStrategy;
    contactStrategy[callIndex].cliPriority.splice(contactStrategy[callIndex].cliPriority.indexOf(cli), 1);
    //console.log(contactStrategy[callIndex].cliPriority);
    contactStrategy[callIndex].cliPriority.splice(e.target.value - 1, 0, cli);
    //console.log(contactStrategy[callIndex].cliPriority);
    setConditionForm({ ...conditionForm, ['contactStrategy']: contactStrategy });
  };

  const onCliSearchHandler = (e: any) => {
    setCliSearchText(e.target.value);
  };

  useEffect(() => {
    console.log("checked day list", checkedDayList, day);
    // alert(checkedDayList.length);
    if (checkedDayList.length == 0) {
      setTimeFormArr(new Array());
    }
  }, [checkedDayList]);

  // on day checkbox change ----------------
  const onDayCheckBoxChange = ((e: any) => {
    if (e.target.checked) {
      if (checkedDayList.length == 0) {
        setTimeFormArr([timeForm]);
      }
      setCheckedDayList([...checkedDayList, parseInt(e.target.value)]);
    }
    else {
      setCheckedDayList((checkedDayList) => checkedDayList.filter((el) => el != e.target.value));
    }
    //setTimeout(()=>{
    setday(parseInt(e.target.value));
    //},300);

  });

  useEffect(() => {
    if (checkedDayList.length == 0 && day != null) {
      if (conditionForm['timeOfDay'][day] != undefined && conditionForm['timeOfDay'][day].length > 0) {
        setTimeFormArr(conditionForm['timeOfDay'][day]);
      }
    }
  }, [checkedDayList])
  // add time range for multiple days --------------
  const addTimeRange = () => {
    setTimeErrorMessage([]);
    const newConditionForm = { ...conditionForm['timeOfDay'] };
    const newTimeForm = [...timeFormArr];
    let errorCount = 0;
    newTimeForm.map((el, index) => {
      console.log("time block", el);
      if (el['startTime'] == undefined || el['startTime'] == "" || el['endTime'] == undefined || el['endTime'] == "") {
        errorCount++;
        setTimeErrorMessage({ ...timeErrorMessage, [index]: "Please enter start time and end time." });
      }
      else if ((el['startTime'] != undefined && el['startTime'] != "" && dayjs(el['startTime'], "h:mm A").isBefore(dayjs("8:00 AM", "h:mm A")) == true) || (el['endTime'] != undefined && el['endTime'] != "" && dayjs(el['endTime'], "h:mm A").isAfter(dayjs("6:00 PM", "h:mm A")) == true)) {
        errorCount++;
        setTimeErrorMessage({ ...timeErrorMessage, [index]: "Campaign start and end time will be within 8:00 AM - 6:00 PM" });
      }
      else if (el['startTime'] != undefined && el['startTime'] != "" && el['endTime'] != undefined && el['endTime'] != "" && dayjs(el['endTime'], "h:mm A").diff(dayjs(el['startTime'], "h:mm A")) <= 0) {
        errorCount++;
        setTimeErrorMessage({ ...timeErrorMessage, [index]: "Please enter valid time range." });
      }
      else {
        // alert(index);
        if (errorCount == 0) {
          el['id'] = index + 1;
          if (index == newTimeForm.length - 1) {
            //   setTimeErrorMessage(new Array());
            // validateTimeRange().then((res) => {
            //   // alert(res);
            //   if (res == true) {
                checkedDayList.map((item, i) => {
                  newConditionForm[item] = newTimeForm;
                  if (i == checkedDayList.length - 1) {
                    setConditionForm({ ...conditionForm, ['timeOfDay']: newConditionForm });
                    setCheckedDayList(new Array());
                  }
                });

             // }
          //  });
          }

        }

      }
    })

    console.log("checked day list", checkedDayList, newConditionForm);
  };

  // delete a full day schedule --------
  const onDeleteDaySchedule = useCallback((day: number) => {
    const timeOfDay = { ...conditionForm['timeOfDay'] };
    delete timeOfDay[day];
    setConditionForm({ ...conditionForm, ['timeOfDay']: timeOfDay });
    contextCampaignManager.handleNewListPop(false);
  }, [conditionForm, contextCampaignManager.newListPop]);

  // const validateTimeRange = () => {
  //   return new Promise((resolve) => {
  //     let error = 0;
  //     for (let i = 0; i < timeFormArr.length; i++) {
  //       let comparingObj = timeFormArr[i];
  //       for (let j = i + 1; j < timeFormArr.length; j++) {
  //         // console.log("time comparison",comparingObj,timeFormArr[j],moment(timeFormArr[j].startTime,"h:mm A").isBetween(moment(comparingObj['startTime'],"h:mm A"),moment(comparingObj['endTime'],"h:mm A")),moment(timeFormArr[j].endTime,"h:mm A").isBetween(moment(comparingObj['startTime'],"h:mm A"),moment(comparingObj['endTime'],"h:mm A")));
  //         if (moment(timeFormArr[j].startTime, "h:mm A").isBetween(moment(comparingObj['startTime'], "h:mm A"), moment(comparingObj['endTime'], "h:mm A")) == true || moment(timeFormArr[j].endTime, "h:mm A").isBetween(moment(comparingObj['startTime'], "h:mm A"), moment(comparingObj['endTime'], "h:mm A")) == true) {
  //           // alert(j);
  //           setTimeErrorMessage({ ...timeErrorMessage, [j]: "This time range conflicts with another time range" });
  //           error++;
  //           //exit;
  //         }
  //         else if (moment(comparingObj.startTime, "h:mm A").isBetween(moment(timeFormArr[j]['startTime'], "h:mm A"), moment(timeFormArr[j]['endTime'], "h:mm A")) == true || moment(comparingObj.endTime, "h:mm A").isBetween(moment(timeFormArr[j]['startTime'], "h:mm A"), moment(timeFormArr[j]['endTime'], "h:mm A")) == true) {
  //           //  alert(i);
  //           setTimeErrorMessage({ ...timeErrorMessage, [i]: "This time range conflicts with another time range" });
  //           error++;
  //         }
  //       }
  //       if (i == timeFormArr.length - 1) {
  //         //  alert(error);
  //         console.log("time error", timeErrorMessage);
  //         resolve((error > 0) ? false : true);
  //       }
  //     }

  //   });
  // };

  // delete holiday list ---------

  const deleteHolidayList = (id:number)=>{
    if(confirm("Are you sure want to delete the holiday list? Press ok to proceed.") == true)
    {
      contextCampaignManager.deleteHolidayList(id);
    }
  };
  // on save holiday list ------------

  const onSaveHolidayList = (holidayListObj: any) => {
    contextCampaignManager.handleAddEditHolidayList(holidayListObj);
    contextCampaignManager.handleNewHolidayListPop(false);
  }

  // on holiday list checkbox select/de select -----------
  const onHolidaySelect = (event: any) => {
  //  alert(event.target.checked)
    let newholidayList = conditionForm['holidayLists'];
    if (event.target.checked == true) {
      //newholidayList.push(event.target.value);
      
      console.log("new holiday list",newholidayList);
      setConditionForm({ ...conditionForm, ['holidayLists']: [...newholidayList,event.target.value] });
    }
    else {
      setConditionForm({ ...conditionForm, ['holidayLists']: newholidayList.filter((el:number)=>el.toString() != event.target.value) });
    }
  };
  useEffect(() => {
    setAllHolidayList(contextCampaignManager.holidayList);
  }, [contextCampaignManager.holidayList]);
  return (
    <>
      <div className={`${style.form_section_area} ${style.conditions}`}>
        {
          timeZoneDrop ? <div className={style.overlay} onClick={handleBlankLayer}></div> : null
        }
        <div className={style.form_area_wrapper}>
          <div className={style.conditions_accordion_section}>
            {/* contact strategy block */}
            {campaignData.type === 'voice' &&
              <div className={style.accordion_item}>
                <div className={`${style.accordion_head} ${accordion === 1 && style.active} d-flex align-items-center justify-content-between`} onClick={() => handleAccordion(1)}>
                  <div className={`${style.left} d-flex align-items-center`}>
                    <span className={style.icon}><img src={CallIcon} alt="" /></span>
                    <span>Contact Strategy</span>
                  </div>
                  <div className={`${style.right} d-flex align-items-center`}>
                    {/* <span><img src={TrashIcon} alt="" /></span> */}
                    <span><img src={Arrow} alt="" /></span>
                  </div>
                </div>
                <div className={`${style.accordion_body} ${accordion === 1 ? style.open : style.close}`}>
                  <div className={`${style.table_wrapper} ${style.number}`}>
                    <label>Contact Handling Settings</label>
                    <table>
                      <thead>
                        <tr>
                          <th style={{ 'textAlign': 'center' }}>PRIORITY</th>
                          <th>CUSTOMER CONTACT</th>
                          <th>MAX ATTEMPTS</th>
                          <th>RETRY DURATION</th>
                          <th>CLI</th>
                        </tr>
                      </thead>
                      <DragDropContext onDragEnd={handleDrop}>
                        <Droppable droppableId="list-container">
                          {(provided) => (
                            <tbody
                              className="list-container"
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {conditionForm.contactStrategy.map((item: any, index: number) => (
                                <Draggable key={index} draggableId={item.name} index={index}>
                                  {(provided) => (
                                    <tr
                                      className="item-container"
                                      ref={provided.innerRef}
                                      {...provided.dragHandleProps}
                                      {...provided.draggableProps}
                                    >
                                      <td style={{ 'textAlign': 'center' }}>
                                        <span className={style.drag}><img src={DragIcon} alt="" /></span>
                                        {index + 1}
                                      </td>
                                      <td style={{ 'textTransform': 'capitalize' }}>{item.name}</td>
                                      <td><input type="text" id={"maxAttempts_" + index} name={"maxAttempts_" + index} className={style.max} value={conditionForm.contactStrategy[index].maxAttempts != null ? conditionForm.contactStrategy[index].maxAttempts : ""} onChange={(e) => { onCallStrategyChangeHandler(index, 'maxAttempts', e) }} maxLength={1} onKeyDown={onKeyPressHandler} onFocus={() => handleCliDrop(false)} /></td>
                                      <td>
                                        <div className='d-flex justify-content-between align-items-center'>
                                          <div className={`${style.pSConditions} d-flex align-items-center`}>
                                            <div className={style.switch_check}>
                                              <input type="checkbox" name={"retryEnabled_" + index} id={"retryEnabled_" + index} onChange={(e) => onCallStrategyChangeHandler(index, 'retryEnabled', e)} value={index} checked={(conditionForm.contactStrategy[index].retryEnabled) ? true : false} />
                                              <label htmlFor={"retryEnabled_" + index}>
                                                <span>{conditionForm.contactStrategy[index]['retryEnabled']}</span>
                                              </label>
                                            </div>
                                            <div className='d-flex'>
                                              <input type="text" name={"retryDuration_" + index} id={"retryDuration_" + index} onChange={(e) => onCallStrategyChangeHandler(index, 'retryDuration', e)} value={(conditionForm.contactStrategy[index]['retryDuration'] != null) ? conditionForm.contactStrategy[index]['retryDuration'] : ""} />
                                              <select name={"retryUnit_" + index} id={'retryUnit_' + index} onChange={(e) => onCallStrategyChangeHandler(index, 'retryUnit', e)} value={conditionForm.contactStrategy[index]['retryUnit']} onClick={() => handleCliDrop(index)}>
                                                <option value="second">Sec</option>
                                                <option value="minute">Mins</option>
                                                <option value="hour">Hours</option>
                                              </select>
                                            </div>
                                          </div>


                                        </div>
                                      </td>
                                      <td>
                                        <div className={style.priority_no_wrapper} ref={refDropSelectCli}>
                                          <div className={`${style.drop} d-flex align-items-center justify-content-between`}
                                            onClick={() => handleSelectCli(index)}>
                                            <span>{conditionForm.contactStrategy[index].cliPriority.length > 0 ? conditionForm.contactStrategy[index].cliPriority.length + ' CLI selected' : 'Select Cli Priority'}</span>
                                            <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                                          </div>
                                          {
                                            dropSelectCli === index &&
                                            <div className={style.drop_area} ref={refDropSelectCli}>
                                              <div className={`${style.search_area} `}>
                                                <div className={`${style.search_main} d-flex align-items-center justify-content-between`}>
                                                  <input type="text" name={"cli_search_" + index} id={"cli_search_" + index} onChange={onCliSearchHandler} />
                                                  <span><img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/search.svg" alt="" /></span>
                                                </div>

                                              </div>
                                              <ul>
                                                {
                                                  cliList.map((cli, cliIndex) => {
                                                    return (
                                                      (cli.indexOf(cliSearchText) < 0) ? null : <li>
                                                        <div className={style.check_box_wrapper}>
                                                          <input type="checkbox" id={"cliNumber_" + index + "_" + cliIndex} name={"cliNumber_" + index + "_" + cliIndex} value={cli} onChange={(e) => onCallStrategyChangeHandler(index, 'cliPriority', e)} disabled={(conditionForm.contactStrategy[index].maxAttempts != null && (conditionForm.contactStrategy[index].cliPriority.indexOf(cli) >= 0 || (parseInt(conditionForm.contactStrategy[index].maxAttempts) > conditionForm.contactStrategy[index].cliPriority.length && conditionForm.contactStrategy[index].cliPriority.indexOf(cli) < 0))) ? false : true} checked={(conditionForm.contactStrategy[index].cliPriority.indexOf(cli) >= 0 ? true : false)} />
                                                          <label htmlFor={"cliNumber_" + index + "_" + cliIndex}>
                                                            <span></span>
                                                            {cli}
                                                          </label>
                                                        </div>
                                                        {
                                                          conditionForm.contactStrategy[index].cliPriority.indexOf(cli) >= 0 &&
                                                          <select name={"cliPriority_" + index + "_" + cliIndex} id={"cliPriority_" + index + "_" + cliIndex} value={conditionForm.contactStrategy[index].cliPriority.indexOf(cli) + 1} onChange={(e) => onChangeCliPriority(index, e, cli)}>
                                                            {
                                                              priorityList.map((priority) => {
                                                                return (priority > conditionForm.contactStrategy[index].cliPriority.length) ? null : <option value={priority}>{priority}</option>;
                                                              })
                                                            }
                                                          </select>
                                                        }
                                                      </li>
                                                    )
                                                  })
                                                }
                                              </ul>

                                            </div>
                                          }

                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </tbody>
                          )}
                        </Droppable>
                      </DragDropContext>
                    </table>
                  </div>
                </div>
              </div>}

            {/* Time of day */}
            <div className={style.accordion_item}>
              <div className={`${style.accordion_head} ${accordion === 2 && style.active} d-flex align-items-center justify-content-between`} onClick={() => handleAccordion(2)}>
                <div className={`${style.left} d-flex align-items-center`}>
                  <span className={style.icon}><img src={CallIcon} alt="" /></span>
                  <span>Time of Day</span>
                </div>
                <div className={`${style.right} d-flex align-items-center`}>
                  {/* <span><img src={TrashIcon} alt="" /></span> */}
                  <span><img src={Arrow} alt="" /></span>
                </div>
              </div>
              <div className={`${style.accordion_body} ${accordion === 2 ? style.open : style.close}`}>
                <div className={style.new_time_range_wrapper}>
                  <ul className={`${style.new_day_wrapper} d-flex align-items-center`}>
                    <li className={`${day === 1 && style.active} d-flex align-items-center`} onClick={() => handleDay(1)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[1] == undefined || (conditionForm.timeOfDay[1] != undefined && conditionForm.timeOfDay[1].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="sa" value={1} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(1) >= 0 ? true : false} />
                            <label htmlFor="sa"><span></span></label>
                          </>
                          : <> {day === 1 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Sun <b>{(conditionForm.timeOfDay[1] != undefined && conditionForm.timeOfDay[1].length > 0) ? "(" + conditionForm.timeOfDay[1].length + ")" : null}</b></span>
                    </li>
                    <li className={`${day === 2 && style.active} d-flex align-items-center`} onClick={() => handleDay(2)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[2] == undefined || (conditionForm.timeOfDay[2] != undefined && conditionForm.timeOfDay[2].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="mon" value={2} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(2) >= 0 ? true : false} />
                            <label htmlFor="mon"><span></span></label>
                          </>
                          : <> {day === 2 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Mon <b>{(conditionForm.timeOfDay[2] != undefined && conditionForm.timeOfDay[2].length > 0) ? "(" + conditionForm.timeOfDay[2].length + ")" : null}</b> </span>
                    </li>
                    <li className={`${day === 3 && style.active} d-flex align-items-center`} onClick={() => handleDay(3)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[3] == undefined || (conditionForm.timeOfDay[3] != undefined && conditionForm.timeOfDay[3].length == 0)) ? <>
                          <input type="checkbox" name="day" id="tue" value={3} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(3) >= 0 ? true : false} />
                          <label htmlFor="tue"><span></span></label>
                        </>
                          : <> {day === 3 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>

                      <span className={`${style.no} d-flex align-items-center`}>Tue <b>{(conditionForm.timeOfDay[3] != undefined && conditionForm.timeOfDay[3].length > 0) ? "(" + conditionForm.timeOfDay[3].length + ")" : null}</b> </span>
                    </li>
                    <li className={`${day === 4 && style.active} d-flex align-items-center`} onClick={() => handleDay(4)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[4] == undefined || (conditionForm.timeOfDay[4] != undefined && conditionForm.timeOfDay[4].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="wed" value={4} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(4) >= 0 ? true : false} />
                            <label htmlFor="wed"><span></span></label>
                          </>
                          : <> {day === 4 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Wed <b>{(conditionForm.timeOfDay[4] != undefined && conditionForm.timeOfDay[4].length > 0) ? "(" + conditionForm.timeOfDay[4].length + ")" : null}</b> </span>
                    </li>
                    <li className={`${day === 5 && style.active} d-flex align-items-center`} onClick={() => handleDay(5)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[5] == undefined || (conditionForm.timeOfDay[5] != undefined && conditionForm.timeOfDay[5].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="thus" value={5} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(5) >= 0 ? true : false} />
                            <label htmlFor="thus"><span></span></label>
                          </>
                          : <> {day === 5 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Thu <b>{(conditionForm.timeOfDay[5] != undefined && conditionForm.timeOfDay[5].length > 0) ? "(" + conditionForm.timeOfDay[5].length + ")" : null}</b> </span>
                    </li>
                    <li className={`${day === 6 && style.active} d-flex align-items-center`} onClick={() => handleDay(6)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[6] == undefined || (conditionForm.timeOfDay[6] != undefined && conditionForm.timeOfDay[6].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="fri" value={6} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(6) >= 0 ? true : false} />
                            <label htmlFor="fri"><span></span></label>
                          </>
                          : <> {day === 6 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Fri <b>{(conditionForm.timeOfDay[6] != undefined && conditionForm.timeOfDay[6].length > 0) ? "(" + conditionForm.timeOfDay[6].length + ")" : null}</b> </span>
                    </li>
                    <li className={`${day === 7 && style.active} d-flex align-items-center`} onClick={() => handleDay(7)}>
                      <div className={`${style.day_check_wrap} `}>
                        {(conditionForm.timeOfDay[7] == undefined || (conditionForm.timeOfDay[7] != undefined && conditionForm.timeOfDay[7].length == 0)) ?
                          <>
                            <input type="checkbox" name="day" id="sat" value={7} onChange={(e) => onDayCheckBoxChange(e)} checked={checkedDayList.indexOf(7) >= 0 ? true : false} />
                            <label htmlFor="sat"><span></span></label>
                          </>
                          : <> {day === 7 ? <img src={CheckedActiveIcon} /> : <img src={CheckedIcon} />} </>
                        }
                      </div>
                      <span className={`${style.no} d-flex align-items-center`}>Sat <b>{(conditionForm.timeOfDay[7] != undefined && conditionForm.timeOfDay[7].length > 0) ? "(" + conditionForm.timeOfDay[7].length + ")" : null}</b> </span>
                    </li>
                  </ul>
                  {day != null && <div className={style.add_time_wrapper}>
                    {
                      timeFormArr.length > 0 &&
                      timeFormArr.map((item, timeIndex: number) => {
                        return (
                          <div className={style.portion_wrap} key={timeIndex}>
                            <div className={`${style.time_wrap} d-flex align-items-center`}>
                              <div className={`${style.time_area} d-flex align-items-center`}>
                                <div className={`${style.time_section} d-flex align-items-center`}>
                                  <label htmlFor="START">START &nbsp;
                                    {/* {dayjs(item['startTime'],"h:mm A")+" "+item['startTime']} */}
                                  </label>
                                  {/* {(editingElement == -1 || editingElement != item.id)+" "+editingElement+" "+item.id} */}
                                  <TimePicker onChange={(time, timeString) => onChange(time, timeString, timeIndex, "startTime")} format={'h:mm A'} value={item['startTime'] != undefined && item['startTime'] != "" ? dayjs(item['startTime'], "h:mm A") : null} inputReadOnly={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? true : false} open={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? false : undefined} allowClear={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? false : undefined} disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]} />
                                </div>
                              </div>
                              <span className={style.icon_arrow}><img src={ArrowRight} alt="" /></span>
                              <div className={`${style.time_area} d-flex align-items-center`}>
                                <div className={`${style.time_section} d-flex align-items-center`}>
                                  <label htmlFor="END">END &nbsp;</label>
                                  <TimePicker onChange={(time, timeString) => onChange(time, timeString, timeIndex, "endTime")} format={'h:mm A'} value={item['endTime'] != undefined && item['endTime'] != "" ? dayjs(item['endTime'], "h:mm A") : null} inputReadOnly={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? true : false} open={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? false : undefined} allowClear={((editingElement == -1 || editingElement != item.id) && item.id != null && checkedDayList.length == 0) ? false : undefined} disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]} />
                                </div>
                              </div>
                              {timeErrorMessage[timeIndex] && <span className={style.time_error_message}>{timeErrorMessage[timeIndex]}</span>}
                            </div>
                            <div className={`${style.action_wrap} d-flex align-items-center`}>
                              {/* {editingElement+" "+item.id+" "+checkedDayList.length} */}
                              {((item.id != null && editingElement == item.id) || (item.id == null && checkedDayList.length == 0)) && <img src={SaveIcon} alt="" onClick={() => onSaveTimeBoxHandler(timeIndex, item.id)} />}

                              {(editingElement != item.id && item.id != null && checkedDayList.length == 0) && <img src={EditIcon} alt="" onClick={() => seteditingElement(item.id)} />}
                              {((timeFormArr.length > 1 && checkedDayList.length > 0) || (timeFormArr.length > 0 && (item.id != null || (item.id == null && (conditionForm.timeOfDay[day] != undefined && conditionForm.timeOfDay[day].length > 0))))) && <img src={DeleteIcon} alt="" onClick={() => removeTimeBox(timeIndex, item.id)} />}
                            </div>

                            {/* <div className={`${style.add_button_new_line} d-flex align-items-center`}>
                          <span><img src={AddRowIcon} alt="" /></span>
                          <span>Add Another Range</span>
                        </div> */}
                          </div>
                        )
                      })
                    }
                  </div>}
                  <div className={`${style.button_wrapper} d-flex align-items-center justify-content-between`}>
                    {timeFormArr.length > 0 && <div>
                      <div className={`${style.add_button_new_line} d-flex align-items-center`} onClick={addTimeBox}>
                        <span><img src={AddRowIcon} alt="" /></span>
                        <span>Add Another Range</span>
                      </div>
                    </div>}
                    <div className='d-flex align-items-center'>
                      {checkedDayList.length > 0 && <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={addTimeRange}>Save Time Range</div>}
                      <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleNewListPop(true)}>Show Time List</div>
                    </div>

                  </div>
                </div>
                {contextCampaignManager.newListPop && <TimeList timeList={conditionForm.timeOfDay} onDeleteDaySchedule={onDeleteDaySchedule} />}


              </div>

            </div>

            {/* Time Zone */}
            <div className={style.accordion_item}>
              <div className={`${style.accordion_head} ${accordion === 3 && style.active} d-flex align-items-center justify-content-between`} onClick={() => handleAccordion(3)}>
                <div className={`${style.left} d-flex align-items-center`}>
                  <span className={style.icon}><img src={CallIcon} alt="" /></span>
                  <span>Time Zone</span>
                </div>
                <div className={`${style.right} d-flex align-items-center`}>
                  {/* <span><img src={TrashIcon} alt="" /></span> */}
                  <span><img src={Arrow} alt="" /></span>
                </div>
              </div>
              <div className={`${style.accordion_body} ${accordion === 3 ? style.open : style.close}`}>
                <div className={style.time_zone_wrapper}>
                  <label>Select time zone</label>
                  <div className={`${style.time_add_wrapper} d-flex align-items-center`}>
                    <div className={style.portion}>
                      <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleTimeZoneDrop}>
                        <span>{conditionForm.timeZoneValue[0] != undefined ? conditionForm.timeZoneValue[0] : ""}</span>
                        <span><img src={DownArrow} alt="" /></span>
                      </div>
                      {
                        timeZoneDrop &&
                        <>
                          <ul className={style.drop_area}>
                            <li onClick={handleCallRationValue}>Indian Time (GMT+5:30)</li>
                            <li onClick={handleCallRationValue}>Afghanistan Time (GMT+5:30)</li>
                            <li onClick={handleCallRationValue}>USA Time (GMT-4)</li>
                          </ul>
                        </>
                      }

                    </div>
                    {/* <div className={`${style.add_button_new_line} d-flex align-items-center`}>
                          <span><img src={AddRowIcon} alt="" /></span>
                          <span>Add Another Range</span>
                        </div> */}
                  </div>

                </div>
              </div>

            </div>

            {/* Holidays */}
            <div className={style.accordion_item}>
              <div className={`${style.accordion_head} ${accordion === 5 && style.active} d-flex align-items-center justify-content-between`} onClick={() => handleAccordion(5)}>
                <div className={`${style.left} d-flex align-items-center`}>
                  <span className={style.icon}><img src={CallIcon} alt="" /></span>
                  <span>Holidays</span>
                </div>
                <div className={`${style.right} d-flex align-items-center`}>
                  {/* <span><img src={TrashIcon} alt="" /></span> */}
                  <span><img src={Arrow} alt="" /></span>
                </div>
              </div>

              <div className={`${style.accordion_body} ${accordion === 5 ? style.open : style.close}`}>
                <div className={style.holiday_wrapper}>
                  <div className={style.switch_check}>
                    <input type="checkbox" name="includeHoliday" id="holiday" onChange={(event) => setConditionForm({ ...conditionForm, ['includeHoliday']: (event?.target.checked == true) ? true : false })} checked={conditionForm.includeHoliday == true ? true : false} />
                    <label htmlFor="holiday">
                      <span></span> Include Holidays
                    </label>
                  </div>
                  {conditionForm.includeHoliday == true && <div className={style.table_wrapper}>
                    {allHolidayList.length > 0 &&
                      <table>
                        <thead>
                          <tr>
                            <th>HOLIDAY LISTS</th>
                            <th>TotAL HOLIDAYS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            allHolidayList.map((el, index) => {
                              return (

                                <tr key={index}>
                                  <td>
                                    <div className={style.holiday_check_wrapper}>
                                      <input type="checkbox" name={"holiday_" + index} id={"h" + index} onChange={onHolidaySelect} value={el.id} checked={conditionForm.holidayLists.indexOf(el.id.toString()) >= 0 ? true : false}  />
                                      <label htmlFor={"h" + index}><span></span>{el.name}</label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex align-items-center justify-content-between' >
                                      <span onClick={() => { setHolidayToEdit(el), contextCampaignManager.handleNewHolidayListPop(true) }}>{el.holidays.length}</span>
                                      <img src={TrashGreyIcon} alt="" onClick={()=>deleteHolidayList(el.id)}/>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          }
                        </tbody>
                      </table>}
                    <div className={`${style.add_button_new_line} d-flex align-items-center`} onClick={() => { setHolidayToEdit(null), contextCampaignManager.handleNewHolidayListPop(true) }}>
                      <span><img src={AddRowIcon} alt="" /></span>
                      <span>Add New Holiday List</span>
                    </div>
                  </div>}
                </div>


              </div>

            </div>
          </div>
        </div>
        {contextCampaignManager.newHolidayListPop ? <NewList item={holidayToEdit} onSaveHolidayList={onSaveHolidayList} /> : null}


      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={contextCampaignManager.handleCancleCreateContentPopType}>Cancle</button>
        <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleCreateCampaignStepTwo(true)}>Back</button>
        <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => contextCampaignManager.handleCreateCampaignStepFour(true)}>Next</button>
      </div>
    </>
  )
}

export default Conditions
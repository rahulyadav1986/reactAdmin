
import style from './style.module.scss'
// import useToggle from '../../../../../../../../../../hooks/useToggle'
import { useContext, useState } from 'react'
import CalendarIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/calendar.svg"
import TrashGreyIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trashGrey.svg"
import AddRowIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/addRow.svg"
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext'
import useOutside from '../../../../../../../../../../hooks/useOutside'
import Calendar from 'react-calendar';
import moment from 'moment'
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const NewList = ({ item, onSaveHolidayList }: any) => {
   // console.log("edit holiday", item);
    const contextCampaignManager = useContext(ContextCampaignManager);
    //   const [listDrop, togleListDrop] = useToggle(false)
   // const [startDatate, onChange] = useState<Value>(new Date());

    const holidayFormObj = { id: null, name: "", repeat: "", holidays: [] };
    const [holidayForm, setHolidayForm] = useState((item != null) ? { ...holidayFormObj, ...item } : holidayFormObj);
    const newHolidayForm = { id: null, name: "", date: "" };
    const handleListDropValue = (e: any) => {
        setHolidayForm({ ...holidayForm, ['repeat']: e.target.textContent })
        // togleListDrop(false)
        setDropHoli(false)
    }
    const [dropHoli, setDropHoli, refDropHoli] = useOutside(false);
    // const [addHoliday, setAddHoliday] = useState(false);
    const saveHolidayList = () => {
        if (holidayForm.name == "") {
            alert("please enter holiday list name");
        }
        else {
            //onSaveHolidayList(holidayForm);
            validateHoliday().then((el)=>{
                if(el != "")
                {
                    alert(el);
                }
                else
                {
                    console.log("holiday form to save",holidayForm);
                    onSaveHolidayList(holidayForm);
                }
            });
        }
    };

    
    const addNewHolidayBlock = () => {
        const newForm = holidayForm['holidays'];
        setHolidayForm({...holidayForm,['holidays']:[...newForm,newHolidayForm]});
    }
    const onFieldUpdate = (value:string,index:number)=>{
        const newHolidays = holidayForm.holidays;
        newHolidays[index]['name'] = value;
        setHolidayForm({...holidayForm,['holidays']:newHolidays});
    };

    const [dropCalendar, setDropCalendar, refDropCalendar] = useOutside(false)
    const handleHolidayCalendar = (id: any) => {
        //alert(dropCalendar)
        setDropCalendar(dropCalendar === id ? -1 : id)

       
    }

    const onDateChange=(dateString:Value,index:number)=>{
        console.log("holiday list",dateString,dateString?.toString(),moment(dateString?.toString()).startOf('day').format("DD MMM "),holidayForm.holidays);
       const newHolidays = holidayForm.holidays;
       newHolidays[index].date = moment(dateString?.toString()).startOf('day').format("DD MMM ");
       setHolidayForm({...holidayForm,['holidays']:newHolidays});
       handleHolidayCalendar(index);
    };
    

    const validateHoliday = ()=>{
        return new Promise((resolve)=>{
            let errorMessage = "";
            for(let i = 0; i < holidayForm.holidays.length ; i++)
            {
                console.log("validate holiday",holidayForm.holidays[i]);
                if(holidayForm.holidays[i].name == "" || holidayForm.holidays[i].name == null || holidayForm.holidays[i].date == null || holidayForm.holidays[i].date == "")
                {
                    errorMessage = "Please set holiday name and date for all holidays";
                    break;
                }
            }
            if(errorMessage == "")
            {
                var valueArr = holidayForm.holidays.map((item:any)=>{ return item.date });
                var isDuplicate = valueArr.some((item:any, idx:number)=>{ 
                    return valueArr.indexOf(item) != idx 
                });
                resolve((isDuplicate)?'There are some conflicting holiday dates.Please correct and try saving once again':"");
            }
            else
            {
                resolve(errorMessage);
            }
        });
    }
    const deleteHoliday = (index:number)=>{
        const newForm = holidayForm['holidays'];
        setHolidayForm({...holidayForm,['holidays']:newForm.filter((el:any)=>newForm.indexOf(el) != index)});
    };
    
    return (
        <div className={`${style.new_list_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={() => contextCampaignManager.handleNewHolidayListPop(false)}></div>
            <div className={style.main_wrapper}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    <h3>New List</h3>
                    <span className={style.Cross} onClick={() => contextCampaignManager.handleNewHolidayListPop(false)}><img src="/assets/dashboard/main_dashboard/admin/reports/reportCross.svg" alt="" /></span>
                </div>
                <div className={style.form_area_wrapper}>
                    <div className={style.portion}>
                        <label htmlFor="ReportName">List name <span className="red">*</span></label>
                        <input type="text" name="name" id="ReportName" placeholder="Holiday Name" className={style.form_control} value={holidayForm.name} onChange={(event) => setHolidayForm({ ...holidayForm, ["name"]: event.target.value })} />
                    </div>
                    <div className={style.portion} ref={refDropHoli}>
                        <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDropHoli(!dropHoli)}>
                            <span>{holidayForm.repeat != "" ? holidayForm.repeat : "Select repeatation"}</span>
                            <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                        </div>
                        {
                            dropHoli &&
                            <ul className={style.drop_area}>
                                <li onClick={handleListDropValue}>Does Not Repeat</li>
                                <li onClick={handleListDropValue}>Repeat</li>
                                {/* <li onClick={handleListDropValue}>Goal 3</li> */}
                            </ul>
                        }

                    </div>
                    <div className={style.table_wrapper}>
                        {<table>
                            <thead>
                                <tr>
                                    <th>HOLIDAYS</th>
                                    <th>DATES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    holidayForm.holidays.length > 0 &&
                                    holidayForm.holidays.map((el: any,index:number) => {
                                        return (<tr key={index}>
                                            <td  ><input type='text' onChange={(event:any)=>onFieldUpdate(event.target.value,index)} value={el.name}/></td>
                                            <td>
                                                <div >
                                                    <div className='d-flex align-items-center justify-content-between' ref={refDropCalendar[index]}>
                                                        <div className='d-flex align-items-center'  >
                                                            <img src={CalendarIcon} alt="" className={style.dateIcon} onClick={() => handleHolidayCalendar(index)} />
                                                            <span>{el.date}</span>
                                                        </div>
                                                        <img src={TrashGreyIcon} alt="" onClick={()=>deleteHoliday(index)} />
                                                    </div>
                                                    {
                                                        dropCalendar === index &&
                                                        <div className={style.calendar_drop_area} ref={refDropCalendar}>
                                                            <Calendar onChange={(date:Value)=>onDateChange(date,index)} value={(el.date != null)?moment(el.date,"D MMM").toISOString():null} />
                                                        </div>
                                                    }
                                                </div>

                                            </td>
                                        </tr>)

                                    })
                                }
                                {/* {
                                    addHoliday == true && <tr>
                                        <td contentEditable="true">{}</td>
                                        <td ref={refDropCalendar}>
                                            <div className='d-flex align-items-center justify-content-between' onClick={()=>setDropCalendar(!dropCalendar)}>
                                                <div className='d-flex align-items-center'>
                                                    <img src={CalendarIcon} alt="" className={style.dateIcon} />
                                                    <span>14 Jan</span>
                                                </div>
                                                <img src={TrashGreyIcon} alt="" />
                                            </div>
                                            {
                                                dropCalendar &&
                                                <div className={style.calendar_drop_area}>
                                                    <Calendar />
                                                </div>
                                            }
                                            
                                        </td>
                                    </tr>
                                } */}
                                {/* <tr>
                                    <td>Pongal</td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <img src={CalendarIcon} alt="" className={style.dateIcon} />
                                                <span>14 Jan</span>
                                            </div>
                                            <img src={TrashGreyIcon} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Christmas day</td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <img src={CalendarIcon} alt="" className={style.dateIcon} />
                                                <span>14 Jan</span>
                                            </div>
                                            <img src={TrashGreyIcon} alt="" />
                                        </div>
                                    </td>
                                </tr> */}

                            </tbody>
                        </table>}
                    </div>
                    <div className={`${style.button_wrapper} d-flex align-items-center justify-content-between`}>
                        <div className={`${style.add_button_new_line} d-flex align-items-center`} onClick={() => addNewHolidayBlock()}>
                            <span><img src={AddRowIcon} alt="" /></span>
                            <span>Add New holiday</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={saveHolidayList}>Save</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewList
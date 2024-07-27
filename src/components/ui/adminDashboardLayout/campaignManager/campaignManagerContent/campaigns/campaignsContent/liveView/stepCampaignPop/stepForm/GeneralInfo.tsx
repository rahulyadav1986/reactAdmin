import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import CalendarImage from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/calendar.svg"
import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
// import useToggle from '../../../../../../../../../../hooks/useToggle'
import moment from 'moment'
import useOutside from '../../../../../../../../../../hooks/useOutside'
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const GeneralInfo = ({campaignData,onSaveCampaignHandler}:any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);
    
    const [startDate, onStartDateChange] = useState<Value>(()=>{
        if(campaignData != null && campaignData.startDate != "")
        {
            return moment(campaignData.startDate,"DD/MM/YYYY HH:mm:ss").toDate();
        }
        else
        {
            return null;
        }
    });
    const [endDate, onEndDateChange] = useState<Value>(()=>{
        if(campaignData != null && campaignData.endDate != "")
        {
            return moment(campaignData.endDate,"DD/MM/YYYY HH:mm:ss").toDate();
        }
        else
        {
            return null;
        }
    });

    
    const [campaignFormData, setCampaignFormData] = useState(()=>{
        if(campaignData != null)
        {
            return campaignData;
        }
        else
        {
            return { id: null, name: "", list: new Array(), goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "",type:contextCampaignManager.createCampaignPopType,workflow:"",status:"",action:"Start" ,workflowType:"Campaigns"};
        }
    });
    
    

    const [errorMessage, _setErrorMessage] = useState('');
    useEffect(()=>{
        if(campaignFormData.startDate != "" && campaignFormData.endDate != "")
        {
            campaignFormData.status = 'SCHEDULED';
        }
        else
        {
            campaignFormData.status = 'DRAFT';
        }
        onSaveCampaignHandler(campaignFormData);
    },[campaignFormData]);
    const proceedBtnHandler = useCallback(() => {
        // Check if the campaign name is not empty
        // if (campaignFormData.name !== "") {
        //     console.log(campaignFormData);
        //     if(campaignFormData.startDate != "" && campaignFormData.endDate != "")
        //     {
        //         campaignFormData.status = 'SCHEDULED';
        //     }
        //     else
        //     {
        //         campaignFormData.status = 'DRAFT';
        //     }
            // const savedItem = contextCampaignManager.handleAddEditCampaigns(campaignFormData);
            // console.log("saved item general",savedItem);
            // onSaveCampaignHandler(savedItem);
            // if(savedItem != null)
            // {
            //     console.log("qq one",contextCampaignManager.allCampaigns);
            // }
            contextCampaignManager.handleCreateCampaignStepTwo(true);
        // } else {
        //     // If the campaign name is empty, set an error message
        //     setErrorMessage("Please enter campaign name");
        // }
    }, [contextCampaignManager.createCampaignPop]);


    const onValueChange = useCallback((name: any, value: string | number | null | undefined | Value) => {
        if((name == "startDate" || name == "endDate") && value != null)
        {
            value = moment(value.toString()).startOf('day').format("DD/MM/YYYY HH:mm:ss");
        }
        console.log("value",value);
        setCampaignFormData({ ...campaignFormData, [name]: value });
        onSaveCampaignHandler(campaignFormData);
    }, [campaignFormData]);

    const [dropGoal, setDropGoal, refDropGoal] = useOutside(false)
    const [dropBudget, setDropBudget, refDropBudget] = useOutside(false)
    const [dropStartDate, setDropStartDate, refDropStartDate] = useOutside(false)
    const [dropEndDate, setDropEndDate, refDropEndDate] = useOutside(false)
  return (
    <>
        <div className={style.form_section_area}>
            
            <div className={style.form_area_wrapper}>
                <div className={style.general_information}>
                    <div className={style.portion}>
                        <label htmlFor="ReportName">Campaign name <span className='red'>*</span></label>
                        <input type="text" name="name" id="ReportName" placeholder='Coupon Opt-in Campaign' className={style.form_control} value={campaignFormData.name} onChange={(event) => onValueChange(event.target.name, event.target.value)} />
                        {errorMessage && <span className={style.error_message}>{errorMessage}</span>}
                    </div>
                    <div className={style.portion}>
                        <label htmlFor="goal">Goal</label>
                        <div ref={refDropGoal}>
                            <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDropGoal(!dropGoal)}>
                                <span>{campaignFormData.goal != ""?campaignFormData.goal:"Choose an objective  (Ex:Promote a product)"}</span>
                                <span><img src={DownArrow} alt="" /></span>
                            </div>
                            {
                                dropGoal && 
                                <>
                                    <ul className={style.drop_area}>
                                        <li onClick={()=>{onValueChange("goal","Goal 1"),setDropGoal(false)}}>Goal 1</li>
                                        <li onClick={()=>{onValueChange("goal","Goal 2"),setDropGoal(false)}}>Goal 2</li>
                                        <li onClick={()=>{onValueChange("goal","Goal 3"),setDropGoal(false)}}>Goal 3</li>
                                    </ul>
                                </>
                            }
                        </div>
                        
                        
                    </div>
                    <div className={style.portion}>
                        <label htmlFor="Budget">Budget</label>
                        <div ref={refDropBudget}>
                            <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDropBudget(!dropBudget)}>
                                <span>{campaignFormData.budget != ""?campaignFormData.budget:"Specify the budget for the campaign"}</span>
                                <span><img src={DownArrow} alt="" /></span>
                            </div>
                            {
                                dropBudget && 
                                <ul className={style.drop_area}>
                                    <li onClick={()=>{onValueChange("budget","Budget 1"),setDropBudget(false)}}>Budget 1</li>
                                    <li onClick={()=>{onValueChange("budget","Budget 2"),setDropBudget(false)}}>Budget 2</li>
                                    <li onClick={()=>{onValueChange("budget","Budget 3"),setDropBudget(false)}}>Budget 3</li>
                                </ul>
                            }
                        </div>
                        
                        
                    </div>
                    <div className={`${style.portion} d-flex justify-content-between flex-column`}>
                        <label htmlFor="Budget">Campaign Timeframe</label>
                        <div className={`${style.date_parent} d-flex align-items-center`}>
                            <div className={style.date_wrap}>
                                <div ref={refDropStartDate}>
                                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDropStartDate(!dropStartDate)}>
                                        <span>{startDate != null ? moment(startDate.toString()).format("DD/MM/YYYY") : "Start date"}</span>
                                        {/* <Calendar onChange={onChange} value={value} /> */}
                                        <span><img src={CalendarImage} alt="" /></span>
                                    </div>
                                    {
                                        dropStartDate &&
                                        <div className={`${style.drop_area} ${style.calendar}`}>
                                            <Calendar onChange={onStartDateChange} value={startDate} minDate={moment().toDate()} />
                                            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`} >
                                                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => setDropStartDate(false)}> Cancel </div>
                                                <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={() => { setDropStartDate(false), onValueChange('startDate', startDate) }}> Apply  </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                
                            </div>
                            <div className={style.date_wrap}>
                                <div ref={refDropEndDate}>
                                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => setDropEndDate(!dropEndDate)}>
                                        <span>   {endDate != null ? moment(endDate.toString()).format("DD/MM/YYYY") : "End date"}</span>
                                        <span><img src={CalendarImage} alt="" /></span>
                                    </div>
                                    {
                                        dropEndDate &&
                                        <div className={`${style.drop_area} ${style.calendar}`}>
                                            <Calendar onChange={onEndDateChange} value={endDate} minDate={moment().toDate()} />
                                            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`} >
                                                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => setDropEndDate(false)}> Cancel </div>
                                                <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={() => { setDropEndDate(false), onValueChange('endDate', endDate) }}> Apply  </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>        
            </div>
        </div>
        <div className="d-flex justify-content-end">
            <button type="button" className={`${style.button} ${style.cancle} d-flex align-items-center justify-content-center`} onClick={contextCampaignManager.handleCancleCreateContentPopType}>Cancle</button>
            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={proceedBtnHandler}>Next</button>
        </div>
    </>
  )
}

export default GeneralInfo
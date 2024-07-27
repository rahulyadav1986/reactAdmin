import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import CalendarImage from "/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/calendar.svg"
import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext'
//import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//type ValuePiece = Date | null;
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import Calendar from 'react-calendar'
import useToggle from '../../../../../../../../../hooks/useToggle'
import moment from 'moment'
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const NewCampaign = ({onSaveCampaignHandler}:any) => {
    
    const contextCampaignManager = useContext(ContextCampaignManager);

    //const [campaignFormData,setCampaignFormData] = useState({id:null,name:"",contactList:new Array(),goal:"",budget:"",campaignStartDate:"",campaignEndDate:"",status:""});

    const [startDate, onStartDateChange] = useState<Value>(null);
    const [endDate, onEndDateChange] = useState<Value>(null);

    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contextCampaignManager.allCampaignLists.filter((campaign) => campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType));
    const [errorMessage, _setErrorMessage] = useState('');
    const handleInputChange = (e: { target: { value: any } }) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)


        const filteredItems = contextCampaignManager.allCampaignLists.filter((user) =>
            user.listname.toLowerCase().includes(searchTerm.toLowerCase()) && (user.purpose == 'general' || user.purpose == contextCampaignManager.createCampaignPopType)
        );

        setFilteredUsers(filteredItems);

    }
    const [valueListDrop, toggleValueListDrop] = useToggle(false);
    const [dateStartDrop, toggleDateStartDrop] = useToggle(false);
    const [dateEndDrop, toggleDateEndDrop] = useToggle(false);
    const [selectedList, setSelectedList] = useState(new Array());
    const [campaignFormData, setCampaignFormData] = useState({ id: null, name: "", list: new Array(), goal: "", budget: "", startDate: "", endDate: "", created_at: "", modified_at: "",type:contextCampaignManager.createCampaignPopType,workflow:"",status:"",action:"Start" ,workflowType:"Campaigns"});
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
    const onCheckBoxChange = useCallback((event: any, elID: string | number) => {
        console.log("selected checkboxes", selectedList);

        if (event.target.checked) {
            setSelectedList((selectedList) => [...selectedList, elID]);
        }
        else {
            setSelectedList((selectedList) => selectedList.filter((el) => el != elID));
        }
    }, [selectedList]);

    const onValueChange = useCallback((name: any, value: string | number | null | undefined | Value) => {
        if((name == "startDate" || name == "endDate") && value != null)
        {
            value = moment(value.toString()).startOf('day').format("DD/MM/YYYY HH:mm:ss");
        }
        console.log("value",value);
        setCampaignFormData({ ...campaignFormData, [name]: value });
    }, [campaignFormData]);

    const proceedBtnHandler = useCallback(() => {
        // Check if the campaign name is not empty
       // if (campaignFormData.name !== "") {
            console.log(campaignFormData);
            if(campaignFormData.startDate != "" && campaignFormData.endDate != "")
            {
                campaignFormData.status = 'SCHEDULED';
            }
            else
            {
                campaignFormData.status = 'DRAFT';
            }
            // const savedItem = contextCampaignManager.handleAddEditCampaigns(campaignFormData);
            // console.log("saved item",savedItem);
            onSaveCampaignHandler(campaignFormData);
            if(campaignFormData != null)
            {
                console.log("qq one",contextCampaignManager.allCampaigns);
            }
          contextCampaignManager.handleLiveViewChooseCampaignTemplate(true);
        // } else {
        //     // If the campaign name is empty, set an error message
        //     setErrorMessage("Please enter campaign name");
        // }
    }, [errorMessage, contextCampaignManager.liveViewChooseCampaignTemplate,campaignFormData,contextCampaignManager.allCampaigns,contextCampaignManager.handleAddEditCampaigns]);


    const onSelectAllCheck = useCallback((event: any) => {
        setSearchItem("");
        setFilteredUsers(contextCampaignManager.allCampaignLists.filter((campaign) => campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType));
        setSelectedList([]);
        if (event.target.checked) {

            contextCampaignManager.allCampaignLists.map((campaign) => {
                if (campaign.purpose == 'general' || campaign.purpose == contextCampaignManager.createCampaignPopType) {
                    setSelectedList((selectedList) => [...selectedList, campaign.id]);
                }
            });

        }
    }, [searchItem, filteredUsers, selectedList]);

    useEffect(()=>{     
        if(valueListDrop)
        {
            console.log("selected list 1",selectedList,campaignFormData.list);
            setSelectedList(campaignFormData.list)
        }
        else
        {
            setSelectedList([]);
        }
    },[valueListDrop]);

    const updateContactList = useCallback(()=>{
        console.log("selected list",selectedList,campaignFormData.list);
        setCampaignFormData((campaignFormData)=>{
            campaignFormData['list'] = selectedList;
            return campaignFormData;
        });
        toggleValueListDrop(false);
    },[selectedList,campaignFormData]);

    
    return (
        <>
            <div className={style.form_area_wrapper}>
                <div className={style.portion}>
                    <label htmlFor="ReportName">Campaign name <span className='red'>*</span></label>
                    <input type="text" name="name" id="ReportName" placeholder='Coupon Opt-in Campaign' className={style.form_control} value={campaignFormData.name} onChange={(event) => onValueChange(event.target.name, event.target.value)} />
                    {errorMessage && <span className={style.error_msg}>{errorMessage}</span>}
                </div>
                <div className={style.portion}>
                    <label htmlFor="list">List (Contacts)</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => toggleValueListDrop(!valueListDrop)}>
                        {campaignFormData.list.length == 0 && <span>Choose the list</span>}
                        {campaignFormData.list.length > 0 && <span>{campaignFormData.list.length} contact{campaignFormData.list.length > 1 ? "s" : ""} selected</span>}
                        <span><img src={DownArrow} alt="" /></span>
                    </div>
                    {
                        valueListDrop == true &&
                        <div className={style.drop_area}>
                            {
                                // filteredUsers.length > 0 ?
                                <>
                                    <div className={style.top_area}>
                                        <div className={`${style.search_box} d-flex align-items-center`}>
                                            <img src={SearchIcon} alt="" />
                                            <input type="text" name="" id="" value={searchItem} placeholder='Search lists' onChange={handleInputChange} />
                                        </div>
                                        <div className={style.check_box_wrapper}>
                                            <input type="checkbox" name="selectAll" id="selectAll" onChange={onSelectAllCheck} value={0} defaultChecked={false} />
                                            <label htmlFor="selectAll">
                                                <span></span>
                                                Select All
                                            </label>
                                        </div>
                                    </div>
                                    <div className={style.filter_area}>
                                        {
                                            filteredUsers.length > 0 &&
                                            filteredUsers.map((el) => {
                                                return (
                                                    <div className={style.check_box_wrapper}>
                                                        <input type="checkbox" id={el.listname} name={el.id} value={el.listname} onChange={(event) => onCheckBoxChange(event, el.id)} checked={selectedList.indexOf(el.id) >= 0?true:false}/>
                                                        <label htmlFor={el.listname}>
                                                            <span></span>
                                                            {el.listname}
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => toggleValueListDrop(false)}>Cancel</div>
                                        <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={updateContactList}>Apply</div>
                                    </div>
                                </>
                                //: <p className={style.noData}>No Contact List Found</p>
                            }


                        </div>
                    }
                </div>
                <div className={style.portion}>
                    <label htmlFor="goal">Goal</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} >
                        <span>Choose an objective  (Ex:Promote a product)</span>
                        <span><img src={DownArrow} alt="" /></span>
                    </div>

                    {/* <ul className={style.drop_area}>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul> */}
                </div>
                <div className={style.portion}>
                    <label htmlFor="Budget">Budget</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                        <span>Specify the budget for the campaign</span>
                        <span><img src={DownArrow} alt="" /></span>
                    </div>
                    {/* <ul className={style.drop_area}>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul> */}
                </div>
                <div className={`${style.portion} d-flex justify-content-between flex-column`}>
                    <label htmlFor="Budget">Campaign Timeframe</label>
                    <div className={`${style.date_parent} d-flex align-items-center`}>
                        <div className={style.date_wrap}>
                            <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => toggleDateStartDrop(!dateStartDrop)}>
                                <span>Start date   {startDate != null ? moment(startDate.toString()).format("DD/MM/YYYY") : ""}</span>
                                {/* <Calendar onChange={onChange} value={value} /> */}
                                <span><img src={CalendarImage} alt="" /></span>
                            </div>
                            {
                                dateStartDrop &&
                                <div className={`${style.drop_area} ${style.calendar}`}>
                                    <Calendar onChange={onStartDateChange} value={startDate} minDate={moment().toDate()} />
                                    <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`} >
                                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => toggleDateStartDrop(false)}> Cancel </div>
                                        <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={() => { toggleDateStartDrop(false), onValueChange('startDate', startDate) }}> Apply  </div>
                                    </div>
                                </div>
                            }


                        </div>
                        <div className={style.date_wrap}>
                            <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={() => toggleDateEndDrop(!dateEndDrop)}>
                                <span>End date   {endDate != null ? moment(endDate.toString()).format("DD/MM/YYYY") : ""}</span>
                                <span><img src={CalendarImage} alt="" /></span>
                            </div>
                            {
                                dateEndDrop &&
                                <div className={`${style.drop_area} ${style.calendar}`}>
                                    <Calendar onChange={onEndDateChange} value={endDate} minDate={moment().toDate()} />
                                    <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`} >
                                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={() => toggleDateEndDrop(false)}> Cancel </div>
                                        <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={() => { toggleDateEndDrop(false), onValueChange('endDate', endDate) }}> Apply  </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
                {
                    contextCampaignManager.createCampaignPopType === 'voice' ?
                        <div className={style.portion}>
                            <label htmlFor="CampaignType">Campaign Type</label>
                            <div className={`${style.drop} d-flex align-items-center justify-content-between`}>
                                <span>Inbound</span>
                                <span><img src={DownArrow} alt="" /></span>
                            </div>
                            {/* <ul className={style.drop_area}>
                        <li>Daily</li>
                        <li>Weekly</li>
                        <li>Monthly</li>
                    </ul> */}
                        </div> : null
                }

            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={proceedBtnHandler}>Proceed</button>
            </div>
        </>
    )
}

export default NewCampaign
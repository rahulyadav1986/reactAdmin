import { useContext } from 'react';
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../../../contexts/campaignManagerContext';

const TimeList = ({ timeList,onDeleteDaySchedule }: any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);
    return (
        <div className={`${style.show_time_list_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={() => contextCampaignManager.handleNewListPop(false)}></div>
            <div className={style.main_area}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    <h3>Time Range List</h3>
                    <span className={style.Cross} onClick={() => contextCampaignManager.handleNewListPop(false)}><img src="/assets/dashboard/main_dashboard/admin/reports/reportCross.svg" alt="" /></span>
                </div>
                    {   
                        timeList[1] != undefined && timeList[1].length > 0 || timeList[2] != undefined && timeList[2].length > 0 || timeList[3] != undefined && timeList[3].length > 0 || timeList[4] != undefined && timeList[4].length > 0 || timeList[5] != undefined && timeList[5].length > 0 || timeList[6] != undefined && timeList[6].length > 0 || timeList[7] != undefined && timeList[7].length > 0 ?
                        <>
                            <div className={`${style.time_list_show_wrapper}`}>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>SUN {(timeList[1] != undefined && timeList[1].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(1)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {timeList[1] != undefined && timeList[1].length > 0 &&
                                            timeList[1].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>Mon {(timeList[2] != undefined && timeList[2].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(2)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {/* <li>10:15 AM - 12:30 PM</li>
                                    <li>12:15 AM - 13:30 PM</li>
                                    <li>14:15 AM - 15:30 PM</li> */}
                                        {timeList[2] != undefined && timeList[2].length > 0 &&
                                            timeList[2].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>Tue {(timeList[3] != undefined && timeList[3].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(3)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {timeList[3] != undefined && timeList[3].length > 0 &&
                                            timeList[3].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>wed {(timeList[4] != undefined && timeList[4].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(4)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {
                                            timeList[4] != undefined && timeList[4].length > 0 &&
                                            timeList[4].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>Thu {(timeList[5] != undefined && timeList[5].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(5)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {
                                            timeList[5] != undefined && timeList[5].length > 0 &&
                                            timeList[5].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>fri {(timeList[6] != undefined && timeList[6].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(6)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {
                                            timeList[6] != undefined && timeList[6].length > 0 &&
                                            timeList[6].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={style.portion_day_wrap}>
                                    <div className={style.day}>Sat {(timeList[7] != undefined && timeList[7].length > 0) && <img src="/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/list/trash.svg" alt="" onClick={()=>onDeleteDaySchedule(7)}/>}</div>
                                    <ul className={style.day_time_list}>
                                        {
                                            timeList[7] != undefined && timeList[7].length > 0 &&
                                            timeList[7].map((el: any) => {
                                                return <li>{el.startTime}-{el.endTime}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </> : <p className={style.no_data}>No Time Range Found on any Specific Day</p>
                    }
            </div>
        </div>
    )
}

export default TimeList
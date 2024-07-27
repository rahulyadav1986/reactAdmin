import { useCallback, useContext, useEffect, useState } from 'react'
import style from './style.module.scss'
import FilterLine from '/assets/dashboard/main_dashboard/filter_line.svg'
import AddIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/add.svg'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import { CampaignCategoryList, CampaignListTab, CampaignSubListTab } from './Data'
import NewListPop from './newListPop/NewListPop'
// import useToggle from '../../../../../../../hooks/useToggle'
import useOutside from '../../../../../../../hooks/useOutside'
const FilterButtons = ({isEditing,onEditHandler}:any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);

    // const [addColumnDrop, toggleAddColumnDrop] = useToggle(false);
    const [tempColumnInfo, setTempColumnInfo] = useState({ "columnName": "", "columnValue": "" });

    const [campaignData, setCampaignData] = useState({ listname: "", contacts: new Array(), linkedCampaigns:new Array() });
    const [dropAddColumn, setDropAddColumn, refAddColumn] = useOutside(false)
    useEffect(() => {
        if (contextCampaignManager.selectedCampaignList != "" && contextCampaignManager.selectedCampaignList != undefined) {
            let selectedObj: any = {};
            contextCampaignManager.allCampaignLists.forEach((campaigns, index: any) => {
                if (campaigns.id == contextCampaignManager.selectedCampaignList) {
                    selectedObj = campaigns;
                }
                if (index == contextCampaignManager.allCampaignLists.length - 1) {
                    // console.log("campaign contact selected obj tbody", selectedObj, initialContactcount);
                    // return selectedObj;
                    console.log("campaign contact initial", selectedObj.contacts.length);
                    setCampaignData(selectedObj);
                }
            });
        }
        else {
            //return {};
            setCampaignData({ listname: "", contacts: new Array(), linkedCampaigns:new Array() });
        }
    }, [contextCampaignManager.selectedCampaignList]);

    const onColumnValueChange = useCallback((evt: any) => {
        console.log(evt);
        const { name, value } = evt.target;
        setTempColumnInfo((tempColumnInfo) => ({ ...tempColumnInfo, [name]: value }));
    }, [tempColumnInfo]);
    
    const saveTempColumn = useCallback(() => {
        setDropAddColumn(false);
        if (tempColumnInfo.columnName == "") {
            alert("Please enter column name");
        }
        else {
            contextCampaignManager.handleTempColumnInfo(tempColumnInfo);
        }
    }, [tempColumnInfo, dropAddColumn, contextCampaignManager.tempColumnInfo]);

    useEffect(()=>{
        // if(columnName)
        if(contextCampaignManager.tempColumnInfo.columnName == "")
        {
             setTempColumnInfo({columnName:"",columnValue:""});
        }
     },[contextCampaignManager.tempColumnInfo]);

     
    return (
        <div className={`${style.head_filter_area} d-flex align-items-center justify-content-between`}>
            <ul className={`${style.tab_area_wrap} d-flex align-items-center`}>
                {
                    contextCampaignManager.finalImportDoc !== true && contextCampaignManager.addContact !== true ?
                        CampaignListTab.map((item) => {
                            return (
                                <li className={`${contextCampaignManager.campaignListTab === item.tabId ? style.active : null}`} onClick={() => contextCampaignManager.handleCampaignListTab(item.tabId)}>{item.label}</li>
                            )
                        }) :
                        CampaignSubListTab.map((item) => {
                            return (
                                <li className={`${contextCampaignManager.campaignListTab === item.tabId ? style.active : null}`} onClick={() => contextCampaignManager.handleCampaignListTab(item.tabId)}>{item.label}</li>
                            )
                        })
                }
            </ul>
            <div className={`${style.right_area_details_wrap} d-flex align-items-center`}>
                {
                    contextCampaignManager.finalImportDoc !== true && contextCampaignManager.addContact !== true ?
                        <ul className={`${style.tab_button_group_wrapper} tab_button_group_wrapper d-flex align-items-center`}>
                            <li className={`${contextCampaignManager.campaignFilterListTab === "0" ? style.active : null} ${style.button}`} onClick={() => contextCampaignManager.handleCampaignFilterListTab("0")}>All</li>
                            {
                                CampaignCategoryList.map((item) => {
                                    return (
                                        <li className={`${contextCampaignManager.campaignFilterListTab === item.name ? style.active : null} ${style.button}`} onClick={() => contextCampaignManager.handleCampaignFilterListTab(item.name)}>{item.name}</li>
                                    )
                                })
                            }
                        </ul> : null
                }
                {
                    contextCampaignManager.finalImportDoc !== true && contextCampaignManager.addContact !== true ?
                        <>
                            <div className={`${style.filter_button}  d-flex align-items-center`}>
                                Campaigns: <strong>All</strong>
                                <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
                            </div>
                            <div className={style.new_list_button} onClick={() => contextCampaignManager.handleCampaignNewListPop(true)}>
                                <div className={`${style.new_list_sub_button} d-flex align-items-center`}>
                                    <span><img src={AddIcon} alt="" /></span>
                                    <span>New List</span>
                                </div>
                            </div>
                        </> :
                        <>
                            {/* <div className={`${style.filter_button}  d-flex align-items-center`}>
                        Contacted : <strong>Yes</strong> 
                        <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
                    </div>
                    <div className={`${style.filter_button}  d-flex align-items-center`}>
                        Campaign : <strong>Creditcard (completed)</strong> 
                        <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
                    </div> */}
                            {(((campaignData.contacts.length == 0 && contextCampaignManager.importContactsPop == "manual") || (isEditing != null))) && <div className={style.new_list_button}  ref={refAddColumn}>
                                <div onClick={()=>setDropAddColumn(!dropAddColumn)} className={`${style.new_list_sub_button} d-flex align-items-center`}>
                                    <span><img src={AddIcon} alt="" /></span>
                                    <span>Add Column</span>
                                </div>
                                {
                                    dropAddColumn &&
                                    <div className={style.add_column_pop_wrap}>
                                        <div className={style.portion}>
                                            <label>Column name</label>
                                            <input type="text" name="columnName" id="ColumnName" placeholder="Type Column Name" value={tempColumnInfo.columnName} className={style.form_control} onChange={onColumnValueChange} />
                                        </div>
                                        <div className={style.portion}>
                                            <label>Column Value</label>
                                            <input type="text" name="columnValue" id="ColumValue" placeholder="Type Column Value" className={style.form_control} value={tempColumnInfo.columnValue} onChange={onColumnValueChange} />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={saveTempColumn}>Add</button>
                                        </div>
                                    </div>
                                }

                            </div>}
                            {/* <div className={style.new_list_button} onClick={() => {contextCampaignManager.handleCampaignNewContactsfromSubList(true), onEditHandler(null)}}>
                                <span><img src={AddIcon} alt="" /></span>
                                <span>New Contact</span>
                            </div> */}
                            <div className={style.new_list_button} onClick={() => {contextCampaignManager.handleImportContactsPop("manual"), onEditHandler(null)}}>
                                <div className={`${style.new_list_sub_button} d-flex align-items-center`}>
                                    <span><img src={AddIcon} alt="" /></span>
                                    <span>Add Contact</span>
                                </div>
                                
                            </div>
                            <div className={style.new_list_button} onClick={() => {contextCampaignManager.handleImportContactsPop("file"), onEditHandler(null)}}>
                                <div className={`${style.new_list_sub_button} d-flex align-items-center`}>
                                     <span><img src={AddIcon} alt="" /></span>
                                    <span>Upload File(csv,xls,xlsx)</span>
                                </div>
                               
                            </div>
                        </>
                }

            </div>
            {contextCampaignManager.campaignNewListPop === true ? <NewListPop /> : null}
        </div>
    )
}

export default FilterButtons
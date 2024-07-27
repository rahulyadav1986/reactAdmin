
import style from './style.module.scss'
import EditIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/edit.svg'
import EditLockIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/editLock.png'
import DeleteIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/delete.svg'
import VerticalDots from '/assets/dashboard/main_dashboard/admin/campaignManager/list/vertical.svg'
import { ContextCampaignManager } from '../../../../../../../contexts/campaignManagerContext'
import LinkedCampaings from './LinkedCampaings'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/reports/reportCross.svg";
import CrossIconManual from "/assets/dashboard/main_dashboard/admin/campaignManager/list/cross.svg"
import CheckIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/campaigns/check.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TablePagination from '../../../../../dashboardLayout/dashboard/ticketsTable/tablePagination/TablePagination'
import moment from 'moment'

const CampaignListTable = ({ backToParent,onEditHandler,editId }: any) => {
    const contextCampaignManager = useContext(ContextCampaignManager)
    const [coulmnLists, setCoulumnLists] = useState(new Array());
    const [campaignData, setCampaignData] = useState({ listname: "", contacts: new Array() , linkedCampaigns:new Array()});

    const [tempContactData, setTempContactData] = useState({ "C Name": "", "C Mobile": "", "C Email": "" });
    const onCampaignEditHandler = useCallback((id: number) => {
        contextCampaignManager.handleFinalImportDoc(true);
        contextCampaignManager.handleSetAddContacts(true);
        contextCampaignManager.handleSelectedCampaign(id);
    }, [contextCampaignManager.finalImportDoc, contextCampaignManager.addContact, contextCampaignManager.selectedCampaignList]);
    useEffect(() => {
        console.log("Heading and body selected campaign list",contextCampaignManager.selectedCampaignList);
        if (contextCampaignManager.selectedCampaignList != "" && contextCampaignManager.selectedCampaignList != undefined) {
            let selectedObj: any = {};
            contextCampaignManager.allCampaignLists.forEach((campaigns, index: any) => {
                if (campaigns.id == contextCampaignManager.selectedCampaignList) {
                    selectedObj = campaigns;
                }
                if (index == contextCampaignManager.allCampaignLists.length - 1) {
                    console.log("campaign contact initial", selectedObj.contacts.length, contextCampaignManager.selectedCampaignList);
                    if(selectedObj.contacts.length > 0)
                    {   
                       let tempInfo:any = {};
                       Object.keys(selectedObj.contacts[0]).map((el,i)=>{
                        if(el != "id")
                        {
                            tempInfo[el]= "";
                        }
                        if(i == Object.keys(selectedObj.contacts[0]).length - 1)
                        {
                            setTempContactData(tempInfo);
                        }
                       });
                    }
                    setCampaignData(selectedObj);
                }
            });
        }
        else {
            //return {};
            setCampaignData({ listname: "", contacts: new Array(), linkedCampaigns:new Array() });
        }
    }, [contextCampaignManager.selectedCampaignList, contextCampaignManager.isImporting]);
    useEffect(() => {
       if(contextCampaignManager.importContactsPop == "manual")
       {
        if(campaignData.contacts.length > 0)
        {   
            let tempInfo:any = {};
            Object.keys(campaignData.contacts[0]).map((el,i)=>{
            if(el != "id" && el != "created_at")
            {
                tempInfo[el]= "";
            }
            if(i == Object.keys(campaignData.contacts[0]).length - 1)
            {
                setTempContactData(tempInfo);
            }
            });
        }
       }
       }, [contextCampaignManager.importContactsPop]);
    useEffect(() => {
        // if(columnName)
        if (contextCampaignManager.tempColumnInfo.columnName != "") {
            if(coulmnLists.indexOf(contextCampaignManager.tempColumnInfo.columnName) < 0)
            {
                setCoulumnLists((coulmnLists: any) => [...coulmnLists, contextCampaignManager.tempColumnInfo.columnName]);
                if(editId == null)
                {
                    setTempContactData((tempContactData) => ({ ...tempContactData, [contextCampaignManager.tempColumnInfo.columnName]: contextCampaignManager.tempColumnInfo.columnValue }));
                }
                else
                {
                    setCampaignData((campaignData)=>{
                        if(campaignData.contacts.length > 0)
                        {
                            campaignData.contacts.map((contact)=>{
                                contact[contextCampaignManager.tempColumnInfo.columnName] = "";
                                if(contact.id == editId)
                                {
                                    contact[contextCampaignManager.tempColumnInfo.columnName] = contextCampaignManager.tempColumnInfo.columnValue;
                                }
                            });
                        }

                        return campaignData;
                    });
                }
                contextCampaignManager.handleTempColumnInfo("");
            }
            else
            {
                alert("Same column name already exists");
            }
        }
    }, [contextCampaignManager.tempColumnInfo]);
    return (
        <div className={style.table_responsive_wrap}>
            <table className={`${style.ticketTable}`}>
                {
                    contextCampaignManager.finalImportDoc !== true && contextCampaignManager.addContact !== true ? <CampaignListTableHead /> : null
                }
                {
                    contextCampaignManager.finalImportDoc !== true && contextCampaignManager.addContact !== true ? <CampaignListTableBody onCampaignEdit={onCampaignEditHandler} /> : <CampaignSubListTableBody coulmnLists={coulmnLists} setCoulumnLists={setCoulumnLists} campaignData={campaignData} setCampaignData={setCampaignData} backToParent={backToParent} tempContactData={tempContactData} setTempContactData={setTempContactData} onEditHandler={onEditHandler} editId={editId}/>
                }

            </table>
            {
                contextCampaignManager.finalImportDoc !== true ? null :
                    // <TablePagination
                    //     value={contextCampaignManager.display}
                    //     onChange={contextCampaignManager.handleTableDisplay}
                    //     list={campaignData.contacts.length}
                    //     tableDisplayByArrow={contextCampaignManager.tableDisplayByArrow}
                    //     next={() => contextCampaignManager.handleTableDisplaybyArrow(contextCampaignManager.display + 10)}
                    //     prev={() => contextCampaignManager.handleTableDisplaybyArrow(contextCampaignManager.display - 10)}
                    // />
                    <TablePagination />
            }
            <ToastContainer position="bottom-right" autoClose={1500} theme="dark" />
        </div>
    )
}

export default CampaignListTable


export const CampaignListTableHead = () => {
    return (
        <thead>
            <tr>
                <th>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="thead_check" id="thead_check" />
                        <label htmlFor=""><span></span></label>
                    </div>
                </th>
                <th>List Name</th>
                <th># CoNTACTS</th>
                <th>PURPOSE</th>
                <th>LINKED CAMPAIGNS</th>
                <th>LAST MODIFIED</th>
                <th>Last Assigned</th>
                <th></th>
            </tr>
        </thead>
    )
}

export const CampaignSubListTableHead = () => {
    return (
        <thead>
            <tr>
                <th>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="thead_check" id="thead_check" />
                        <label htmlFor=""><span></span></label>
                    </div>
                </th>
                <th>C Name</th>
                <th>C Mobile</th>
                <th>C Email</th>
                <th></th>
            </tr>
        </thead>
    )
}

export const CampaignListTableBody = ({ onCampaignEdit }: any) => {
    const contextCampaignManager = useContext(ContextCampaignManager);
    const campaignNameListHandler = useCallback(()=>{
        let nameList:any = {};
        contextCampaignManager.allCampaigns.map((el)=>{
            nameList[el.id] = el.name;
        });
        return nameList;
    },[contextCampaignManager.allCampaigns]);
    const [campaignNameList] = useState(campaignNameListHandler);
    
    // const deleteList = useCallback(()=>{
        
    // },[contextCampaignManager.deleteCampaignList]);
    return (
        <tbody>
            {

                contextCampaignManager.allCampaignLists.map((subItem, index) => {
                    //  const ItemList = item.type.list.map((subItem: any, index: any) => {
                    return (
                        (subItem.purpose == contextCampaignManager.campaignFilterListTab || contextCampaignManager.campaignFilterListTab == "0") ? <tr key={index}>
                            <td>
                                <div className={style.checkbox}>
                                    <input type="checkbox" name="thead_check" id={subItem.id} />
                                    <label htmlFor={subItem.id}><span></span></label>
                                </div>
                            </td>
                            <td onClick={() => onCampaignEdit(subItem.id)}>{subItem.listname} {subItem.type === 'dnc' ? <span className={style.dnc}>{subItem.type}</span> : null}</td>
                            <td>{(subItem.contacts != undefined)? subItem.contacts.length:0}</td>
                            <td><span className={style.tag}>{subItem.purpose}</span></td>
                            <td>
                                {/* <CampaignManagerContext> */}
                                    <LinkedCampaings linkedCampaigns={subItem.linkedCampaigns != undefined?subItem.linkedCampaigns:[]} listItem={subItem} campaignNameList={campaignNameList}/>
                                {/* </CampaignManagerContext> */}

                            </td>
                            <td>{subItem.lastModified}</td>
                            <td>{subItem.lastAssigned != undefined && subItem.lastAssigned.length > 0 ? subItem.lastAssigned : "-"}</td>
                            <td>
                                <ul className={`${style.action_icons} d-flex align-items-center`}>
                                    <li onClick={() => onCampaignEdit(subItem.id)}>
                                        {
                                            subItem.campaignStatus === true ?
                                                <img src={EditIcon} alt="" /> :
                                                <>
                                                    <img src={EditIcon} alt="" className={style.non_edit} />
                                                    <div className={style.not_edit_pop}>
                                                        <h5>Cannot be edited</h5>
                                                        <p>Looks like the campaigns are in progress and this list is being used in these campaigns. Please edit it later when campaigns are completed</p>
                                                    </div>
                                                </>

                                        }
                                    </li>
                                    <li onClick={()=>contextCampaignManager.deleteCampaignList(subItem.id)}><img src={DeleteIcon} alt="" /></li>
                                    <li><img src={VerticalDots} alt="" /></li>
                                </ul>
                            </td>

                        </tr> : null
                    )
                })
                // return (
                //     <>
                //         {
                //             contextCampaignManager.campaignFilterListTab !== 0 ?
                //                 contextCampaignManager.campaignFilterListTab === item.tabId && ItemList : ItemList
                //         }
                //     </>
                // )
                //})
            }

        </tbody>
    )
}

export const CampaignSubListTableBody = ({ campaignData, setCampaignData, coulmnLists, setCoulumnLists, backToParent, tempContactData,setTempContactData,onEditHandler,editId }: any) => {
    const contextCampaignManager = useContext(ContextCampaignManager)
    const [extraTablePop, setExtraTablePop] = useState(null);
    const [initialContactcount, setInitialContactCount] = useState(0);
    console.log("campaign data tbody", campaignData);

    const handleTableBodyPop = (id: SetStateAction<any>) => {
        setExtraTablePop(id)
    }

    const setContactList = useCallback((contactList: any[]) => {
        if (contactList.length > 0) {
            //if (Object.keys(contactList[0]).length > 0) {
            let filteredColumn: any = [];
            Object.keys(contactList[0]).map((el: any, index) => {
                if (el != "id" && el != "created_at") {
                    filteredColumn.push(el);
                }
                if (index == Object.keys(contactList[0]).length - 1) {
                    setCoulumnLists(filteredColumn);
                }
            });
            //}
        }
        else {
            if (contextCampaignManager.importContactsPop == "manual") {
                setCoulumnLists(Object.keys(tempContactData));
            }
            else {
                setCoulumnLists(new Array());
            }
        }
    }, []);
    useEffect(() => {
        if (campaignData.contacts.length !== initialContactcount) {
            console.log("campaign content update", campaignData.contacts.length);
            setContactList(campaignData.contacts);
            setInitialContactCount(campaignData.contacts.length);

            contextCampaignManager.handleAddEditCampaignList(campaignData);
            if (campaignData.contacts.length == 0) {
                // backToParent();
                contextCampaignManager.handleSetAddContacts(true);
                contextCampaignManager.handleSelectedCampaign(campaignData.id);
            }
        }
    }, [campaignData.contacts, contextCampaignManager.addContact, backToParent]);


    useEffect(() => {
        setContactList(campaignData.contacts);
        setInitialContactCount(campaignData.contacts.length);
    }, [campaignData]);

    //const [inlineEdit, setInlineEdit] = useState<Number | null>(null);
    const onEditRow = useCallback((event: any, itemIndex: any, columnName: any) => {
        console.log("edit row", event.target.textContent, itemIndex, columnName, campaignData.contacts[itemIndex]);
        if (campaignData.contacts[itemIndex]) {
            campaignData.contacts[itemIndex][columnName] = event.target.textContent;
            setCampaignData(campaignData);
        }
    }, [campaignData]);

    const deleteContact = useCallback((itemId: any) => {
        let filterContacts = campaignData.contacts.filter((el: { id: any }) => el.id != itemId);
        console.log("filtered contacts", filterContacts);
        setCampaignData({ ...campaignData, ['contacts']: filterContacts });
        if (filterContacts.length == 0) {
            contextCampaignManager.handleSetAddContacts(true);
            contextCampaignManager.handleSelectedCampaign('');
            contextCampaignManager.handleImportContactsPop("");
        }
    }, [campaignData, contextCampaignManager.addContact,contextCampaignManager.selectedCampaignList]);

    const onTypeNewRow = useCallback((event: any, columnName: string | number) => {
        tempContactData[columnName] = event.target.textContent;
    }, [tempContactData]);

    const saveNewContact = useCallback(() => {
        if (tempContactData["C Name"] == "" || (tempContactData["C Name"] != "" && tempContactData["C Name"].trim() == "")) {
            alert("Please add C Name to add contact");
        }
        else if (tempContactData["C Mobile"] == "" || (tempContactData["C Mobile"] != "" && tempContactData["C Mobile"].trim() == "")) {
            alert("Please add C Mobile to add contact");
        }
        else if (tempContactData["C Email"] == "" || (tempContactData["C Email"] != "" && tempContactData["C Email"].trim() == "")) {
            alert("Please add C Email to add contact");
        }
        else {
            let contacts = tempContactData;
            contacts["id"] = campaignData.contacts.length + 1;
            contacts['created_at'] = moment().format("DD-MM-YYYY HH:mm:ss");
            campaignData['contacts'].push(contacts);
            console.log("campaign data to save", campaignData);
            setCampaignData(campaignData);
            setInitialContactCount(campaignData.contacts.length);
            contextCampaignManager.handleAddEditCampaignList(campaignData);
            contextCampaignManager.handleImportContactsPop("");
           
        }

    }, [tempContactData, campaignData, contextCampaignManager.allCampaignLists, setCampaignData,setTempContactData]);
    return (
        <>
            <thead>
                <tr>
                    <th>No</th>
                    <th>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="thead_check" id="thead_check" />
                            <label htmlFor=""><span></span></label>
                        </div>
                    </th>
                    {

                        coulmnLists.length > 0 ?
                            <>
                                {
                                    coulmnLists.slice(0, 7).map((el: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
                                        return (<th>{el}</th>);
                                    })
                                }
                                <th></th>
                            </> :
                            <>
                                <th>C Name</th>
                                <th>C Mobile</th>
                                <th>C Email</th>
                                <th></th>
                            </>
                    }

                    {/* <th>Contacted</th>
                <th>Contacted date & Time</th>
                <th>USER DISPOSITION</th>
                <th>SYSTEM DISPOSITION</th>
                <th colSpan={2}>Notes</th> */}
                </tr>
            </thead>
            <tbody>
            {(contextCampaignManager.importContactsPop == 'manual') &&
                    <tr>
                        <td></td>
                        <td></td>
                        {
                            Object.keys(tempContactData).slice(0, 7).map((el: string | number) => {
                                return <td contentEditable={true} placeholder="Type here" onKeyUp={(event: any) => onTypeNewRow(event, el)}>{tempContactData[el]}</td>;
                            })

                        }

                        {/* <td contentEditable={true}></td>
                        <td contentEditable={true}></td> */}
                        <td>
                            <ul className={`${style.action_icons} d-flex align-items-center`}>
                                {
                                    coulmnLists.length > 7 ?
                                        <li className='d-flex align-items-center' onClick={() => handleTableBodyPop("new")}>
                                            <img src={VerticalDots} alt="" />
                                            <span className={style.no}>{coulmnLists.length - 7}</span>
                                        </li> : null
                                }
                                <li onClick={saveNewContact}><img src={CheckIcon} alt="" /></li>
                                <li><img style={{'width': '12px'}} src={CrossIconManual} alt="" onClick={()=>contextCampaignManager.handleImportContactsPop("")}/></li>
                            </ul>
                            {
                                extraTablePop === 'new' ? <CampaignSubListTableExtraValuePopBody item={tempContactData} coulmnLists={coulmnLists} handleTableBodyPop={handleTableBodyPop} editId={editId} onEditRow={onTypeNewRow} rowIndex={'new'} /> : null
                            }
                        </td>
                    </tr>
                }
                {
                    coulmnLists.length > 0 &&
                    campaignData.contacts.slice(0, contextCampaignManager.display).map((item: any, rowIndex: number) => {
                        return (
                            <tr key={item.id}>
                                <td>{rowIndex + 1}</td>
                                <td>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" name="thead_check" id={item.id} />
                                        <label htmlFor={item.id}><span></span></label>
                                    </div>
                                </td>
                                {
                                    coulmnLists.slice(0, 7).map((el: string | number) => {
                                        return (<td contentEditable={editId == item.id} onKeyUp={(event) => onEditRow(event, rowIndex, el)}>{(item[el] != undefined && item[el] != null && item[el] != "") ? item[el] : " --- "}</td>);
                                    })
                                }
                                <td>
                                    <ul className={`${style.action_icons} d-flex align-items-center`}>
                                        {
                                            coulmnLists.length > 7 ?
                                                <li className='d-flex align-items-center' onClick={() => handleTableBodyPop(item.id)}>
                                                    <img src={VerticalDots} alt="" />
                                                    <span className={style.no}>{coulmnLists.length - 7}</span>
                                                </li> : null
                                        }

                                        <li>
                                            {
                                                editId == item.id ? <img onClick={() => {  toast("You Can't Edit Table Row"),onEditHandler(null) }} src={EditLockIcon} alt="" /> : <img onClick={() => {  toast("You Can Edit Table Row"), onEditHandler(item.id) }} src={EditIcon} alt="" />
                                            }

                                        </li>
                                        <li onClick={() => deleteContact(item.id)}><img src={DeleteIcon} alt="" /></li>
                                    </ul>
                                    {
                                        extraTablePop === item.id ? <CampaignSubListTableExtraValuePopBody item={item} coulmnLists={coulmnLists} handleTableBodyPop={handleTableBodyPop} inlineEdit={editId} onEditRow={onEditRow} rowIndex={rowIndex} /> : null
                                    }
                                </td>

                            </tr>
                        )
                    })
                }

               

            </tbody>

        </>
    )
}


export const CampaignSubListTableExtraValuePopBody = ({ item, handleTableBodyPop, coulmnLists, inlineEdit, onEditRow, rowIndex }: any) => {
    return (
        <div className={`${style.extra_body_pop_wrapper} d-flex align-items-center justify-content-center`}>
            <div className="overlay" onClick={() => handleTableBodyPop(false)}></div>
            <div className={style.main_wrapper}>
                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                    <h3>{item["C Name"]}</h3>
                    <span className={style.Cross} onClick={() => handleTableBodyPop(false)}><img src={CrossIcon} alt="" /></span>
                </div>
                <ul className={style.detail_list_wrap}>
                    {
                        coulmnLists.slice(7, coulmnLists.length).map((el: string | number) => {
                            return (
                                rowIndex == 'new' ? <li className='d-flex'>
                                    <label>{el}</label>
                                    <span className={style.value} contentEditable={inlineEdit == item.id} onKeyUp={(event) => onEditRow(event,  el)} placeholder='type here'>{(item[el] != undefined && item[el] != null && item[el] != "") ? item[el] : ""}</span>
                                </li> :
                                    <li className='d-flex'>
                                        <label>{el}</label>
                                        <span className={style.value} contentEditable={inlineEdit == item.id} onKeyUp={(event) => onEditRow(event, rowIndex, el)}>{(item[el] != undefined && item[el] != null && item[el] != "") ? item[el] : " --- "}</span>
                                    </li>
                            );
                        })
                    }

                </ul>
            </div>

        </div>
    )
}
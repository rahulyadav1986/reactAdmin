
import { ReactNode, SetStateAction, createContext, useState } from "react";
// import { CampaignTableList } from "../components/ui/adminDashboardLayout/campaignManager/campaignManagerContent/campaignList/campaignListReportTable/Data";
import moment from "moment";
type ContentProps = {
    children: ReactNode;
}

export const ContextCampaignManager = createContext({
    campaignManagerSidebarTab: 1,
    handleCampaignManagerSidebarTab: (_id: any) => { },

    campaignHamburgar: false,
    handleCampaignHamburgar: () => { },

    createCampaignPop: false,
    handleCreateCampaignPop: () => { },

    advertisement: true,
    handleAdvertisement: (_id: any) => { },

    campaignDashboardTab: 1,
    handleCampaignDashboardTab: (_id: any) => { },

    campaignsTab: 1,
    handleCampaignsTab: (_id: any) => { },

    liveCampaignsAccordion: "1",
    handleLiveCampaignsAccordion: (_id: any) => { },

    campaignsLiveViewTab: 1,
    handleCampaignsLiveViewTab: (_id: any) => { },

    liveViewCreateCampaignPop: null,
    handleLiveViewCreateCampaignPop: (_id: any) => { },

    liveViewChooseCampaignTemplate: false,
    handleLiveViewChooseCampaignTemplate: (_id: any) => { },

    liveChooseCampaignTab: 1,
    handleLiveChooseCampaignTab: (_id: any) => { },

    campaignListTab: 1,
    handleCampaignListTab: (_id: any) => { },

    campaignFilterListTab: "0",
    handleCampaignFilterListTab: (_id: any) => { },

    campaignNewListPop: false,
    handleCampaignNewListPop: (_id: any) => { },

    campaignNodePop: "",
    handleCampaignNodePop: (_id: any) => { },

    importContactsPop: "",
    handleImportContactsPop: (_id: any) => { },

    addContact: false,
    handleSetAddContacts: (_id: any) => { },
    handleSetAddContactsFromList: () => { },

    selectedCampaignList: "",
    handleSelectedCampaign: (_id: any) => { },

    uploadDoc: false,
    handleUploadDoc: (_id: any) => { },

    finalImportDoc: false,
    handleFinalImportDoc: (_id: any) => { },

    handleManageList: () => { },
    handleAllContacts: () => { },

    campaignNewContactsfromSubList: false,
    handleCampaignNewContactsfromSubList: (_id: any) => { },

    createReportPop: false,
    handleCreateReportPop: (_id: any) => { },

    campaignReportList: false,
    handleCampaignReportList: (_id: any) => { },

    handleSetAddContactsFromReport: () => { },

    cardCampaignValue: "Select Campaign",
    campaignReportCardCampaignFilterDrop: false,
    handleCampaignReportCardCampaignFilterDrop: () => { },
    handleCampaignReportCardCampaignFilterSelect: (_e: any) => { },
    filterTextHighlighted: false,

    campaignReportTab: 1,
    handleCampaignReportTab: (_id: any) => { },

    campaignReportPop: null,
    handleCampaignReportPop: (_id: any) => { },

    campaignCreateWorkFlowPop: null,
    handleCampaignCreateWorkFlowPop: (_id: any) => { },

    campaignCreateWorkFlowChooseTemplate: false,
    handleCampaignCreateWorkFlowChooseTemplate: (_id: any) => { },

    dashboardCampaignType: 1,
    handleDashboardCampaignType: (_id: any) => { },

    dashboardCampaignTypeValue: "Credit Card Campaigns",
    handleDashboardCampaignTypeValue: (_e: any) => { },

    allCampaignLists: new Array(),
    handleAddEditCampaignList: (_item: any) => { },
    deleteCampaignList: (_itemId: number) => { },

    isImporting: false,
    handleImportingStatus: (_status: boolean) => { },

    inlineEdit: null,
    handleInlineEdit: (_id: any) => { },

    display: 10,
    handleTableDisplay: (_e: any) => { },

    tableDisplayByArrow: 10,
    handleTableDisplaybyArrow: (_id: any) => { },

    tempColumnInfo: { columnName: "", columnValue: "" },
    handleTempColumnInfo: (_item: any) => { },

    contactReportInfo: { "contactCount": 0, "contactCountInMonth": 0 },
    getContactReportInfo: () => { },

    allCampaigns: new Array(),
    handleAddEditCampaigns: (_item: any) => { },
    deleteCampaign: (_itemId: any) => { },


    createCampaignPopType: null,
    handleCreateContentPopType: (_id: any) => { },
    handleCancleCreateContentPopType: () => { },
    createCampaignStepOne: true,
    handleCreateCampaignStepOne: (_id: any) => { },
    createCampaignStepTwo: false,
    handleCreateCampaignStepTwo: (_id: any) => { },
    createCampaignStepThree: false,
    handleCreateCampaignStepThree: (_id: any) => { },
    createCampaignStepFour: false,
    handleCreateCampaignStepFour: (_id: any) => { },
    handleCreateCampaignStepFinal: (_id: any) => { },

    stepIconOne: false,
    stepIconTwo: false,
    stepIconThree: false,
    stepIconFour: false,

    newHolidayListPop: false,
    handleNewHolidayListPop: (_id: any) => { },


    newListPop: false,
    handleNewListPop: (_id: any) => { },

    holidayList: new Array(),
    handleAddEditHolidayList:(_item:any) => {},
    deleteHolidayList:(_id:any)=>{}



});

export const CampaignManagerContext = (props: ContentProps) => {

    const [campaignManagerSidebarTab, setCampaignManagerSidebarTab] = useState(1)
    const handleCampaignManagerSidebarTab = (id: number | SetStateAction<any>) => {
        setCampaignManagerSidebarTab(id)
        console.log("Campaign Manager" + id)
        setCampaignHamburgar(false)
        if (id === 4) {
            setFinalImportDoc(false)
            setFinalImportDoc(false)
            setAddContacts(false)
            setSelectedCampaignList("")
            setCampaignNewListPop(false)
        }
        if (id === 6) {
            setCampaignReportList(false)
        }
    }

    const [campaignHamburgar, setCampaignHamburgar] = useState(false)
    const handleCampaignHamburgar = () => {
        setCampaignHamburgar(!campaignHamburgar)
    }

    const [createCampaignPop, setCreateCampaignPop] = useState(false)
    const handleCreateCampaignPop = () => {
        setCreateCampaignPop(!createCampaignPop)
    }

    const [advertisement, setAdvertisement] = useState(true)
    const handleAdvertisement = (id: any) => [
        setAdvertisement(id)
    ]

    const [campaignDashboardTab, setCampaignDashboardTab] = useState(1)
    const handleCampaignDashboardTab = (id: number | SetStateAction<any>) => {
        setCampaignDashboardTab(id)
    }

    const [liveCampaignsAccordion, setLiveCampaignsAccordion] = useState("1")
    const handleLiveCampaignsAccordion = (id: any) => {
        setLiveCampaignsAccordion(liveCampaignsAccordion === id ? 1 : id)
    }

    const [campaignsTab, setCampaignsTab] = useState(1)
    const handleCampaignsTab = (id: number | SetStateAction<any>) => {
        setCampaignsTab(id)
    }

    const [campaignsLiveViewTab, setCampaignsLiveViewTab] = useState(1)
    const handleCampaignsLiveViewTab = (id: number | SetStateAction<any>) => {
        setCampaignsLiveViewTab(id)
    }

    const [liveViewCreateCampaignPop, setLiveViewCreateCampaignPop] = useState(null)
    const handleLiveViewCreateCampaignPop = (id: any) => {
        setLiveViewCreateCampaignPop(id)
        setLiveViewChooseCampaignTemplate(false)
    }

    const [liveViewChooseCampaignTemplate, setLiveViewChooseCampaignTemplate] = useState(false)
    const handleLiveViewChooseCampaignTemplate = (id: boolean | ((prevState: boolean) => boolean)) => {
        setLiveViewChooseCampaignTemplate(id)
    }

    const [liveChooseCampaignTab, setLiveChooseCampaignTab] = useState(1)
    const handleLiveChooseCampaignTab = (id: SetStateAction<number>) => {
        setLiveChooseCampaignTab(id)
    }

    const [campaignListTab, setCampaignListTab] = useState(1)
    const handleCampaignListTab = (id: SetStateAction<number>) => {
        setCampaignListTab(id)
    }

    const [campaignFilterListTab, setCampaignFilterListTab] = useState("0")
    const handleCampaignFilterListTab = (id: any) => {
        setCampaignFilterListTab(id)
    }

    const [campaignNewListPop, setCampaignNewListPop] = useState(false)
    const handleCampaignNewListPop = (id: boolean | ((prevState: boolean) => boolean)) => {
        setCampaignNewListPop(id)
    }

    const [selectedCampaignList, setSelectedCampaignList] = useState("");
    const handleSelectedCampaign = (id: any) => {
        console.log("selected id", id);
        setSelectedCampaignList(id);
    };

    const [addContact, setAddContacts] = useState(false)
    const handleSetAddContacts = (id: boolean | ((prevState: boolean) => boolean)) => {
        console.log("setting add contact", id);
        setAddContacts(id)
    }
    const handleSetAddContactsFromList = () => {
        setAddContacts(false)
        setSelectedCampaignList("")
        setCampaignNewListPop(false)
        setFinalImportDoc(false)
    }

    const [importContactsPop, setImportContactsPop] = useState("")
    const handleImportContactsPop = (id: string) => {
        setImportContactsPop(id)
        setUploadDoc(false)
        handleTempColumnInfo("");

    }

    const [uploadDoc, setUploadDoc] = useState(false)

    const handleUploadDoc = (id: boolean | ((prevState: boolean) => boolean)) => {
        setUploadDoc(id)

    }

    const [finalImportDoc, setFinalImportDoc] = useState(false)
    const handleFinalImportDoc = (id: boolean | ((prevState: boolean) => boolean)) => {
        setFinalImportDoc(id)
        setImportContactsPop("")
        handleTempColumnInfo("");
        setCampaignNewListPop(false)

    }

    const handleAllContacts = () => {
        setCampaignManagerSidebarTab(4)
        setFinalImportDoc(false)
        setAddContacts(false)
        setSelectedCampaignList("")
    }

    const handleManageList = () => {
        console.log("called")
        setCampaignManagerSidebarTab(4)
        setFinalImportDoc(true)
        setAddContacts(true)
        setSelectedCampaignList("1")

    }



    const [campaignNodePop, setCampaignNodePop] = useState("")
    const handleCampaignNodePop = (id: any) => {
        setCampaignNodePop(id);

    }

    const [createReportPop, setCreateReportPop] = useState(false)
    const handleCreateReportPop = (id: boolean | ((prevState: boolean) => boolean)) => {
        setCreateReportPop(id)
    }


    const [campaignReportList, setCampaignReportList] = useState(false)
    const handleCampaignReportList = (id: boolean | ((prevState: boolean) => boolean)) => {
        setCampaignReportList(id)
        setCreateReportPop(false)
    }

    const [campaignNewContactsfromSubList, setCampaignNewContactsfromSubList] = useState(false)
    const handleCampaignNewContactsfromSubList = (id: boolean | ((prevState: boolean) => boolean)) => [
        setCampaignNewContactsfromSubList(id)
    ]



    const handleSetAddContactsFromReport = () => {
        setCampaignReportList(false)
    }

    const [cardCampaignValue, setCardCampaignValue] = useState("Select Campaign")
    const [campaignReportCardCampaignFilterDrop, setCampaignCampaignReportCardCampaignFilterDrop] = useState(false)
    const [filterTextHighlighted, setFilterTextHighlighted] = useState(false)
    const handleCampaignReportCardCampaignFilterDrop = () => {
        setCampaignCampaignReportCardCampaignFilterDrop(!campaignReportCardCampaignFilterDrop)

    }
    const handleCampaignReportCardCampaignFilterSelect = (e: any) => {
        setCampaignCampaignReportCardCampaignFilterDrop(false)
        setCardCampaignValue(e.target.textContent)
        setFilterTextHighlighted(true)
    }

    const [campaignReportTab, setCampaignReportTab] = useState(1)
    const handleCampaignReportTab = (id: SetStateAction<number>) => {
        setCampaignReportTab(id)
    }


    const [campaignReportPop, setCampaignReportPop] = useState(null)
    const handleCampaignReportPop = (id: SetStateAction<null>) => {
        setCampaignReportPop(id)
    }


    const [campaignCreateWorkFlowPop, setCampaignCreateWorkFlowPop] = useState(null)
    const handleCampaignCreateWorkFlowPop = (id: any) => {
        setCampaignCreateWorkFlowPop(id)
        setCampaignCreateWorkFlowChooseTemplate(false)
    }

    const [campaignCreateWorkFlowChooseTemplate, setCampaignCreateWorkFlowChooseTemplate] = useState(false)
    const handleCampaignCreateWorkFlowChooseTemplate = (id: any) => {
        setCampaignCreateWorkFlowChooseTemplate(id)
    }

    const [dashboardCampaignTypeValue, setDashboardCampaignTypeValue] = useState("Credit Card Campaign")
    const [dashboardCampaignType, setDashboardCampaignType] = useState(1)
    const handleDashboardCampaignType = (id: SetStateAction<number>) => {
        setDashboardCampaignType(id)
    }
    const handleDashboardCampaignTypeValue = (e: any) => {
        setDashboardCampaignTypeValue(e.target.textContent)
    }
    const getAllContacts = () => {
        if (localStorage.getItem("contactLists") != null && localStorage.getItem("contactLists") != "") {
            let contactsListStr: any = localStorage.getItem("contactLists");
            let contactList = JSON.parse(contactsListStr);
            return contactList;
        }
        else {
            return new Array();
        }
    };

    const [allCampaignLists, setCampaignLists] = useState(getAllContacts);
    const handleAddEditCampaignList = (item: any) => {
        if (item.id == "") {
            item.id = allCampaignLists.length + 1;
            setCampaignLists((allCampaignLists: any) => {
                allCampaignLists.push(item);
                localStorage.setItem("contactLists", JSON.stringify(allCampaignLists));
                return allCampaignLists;
            });
            //   getContactReportInfo();
            return item;
        }
        else {
            console.log("update ele", item);
            setCampaignLists((allCampaignLists: any) => {
                allCampaignLists.map((el: any, index: any) => {
                    if (el.id == item.id) {
                        allCampaignLists[index] = item;
                        localStorage.setItem("contactLists", JSON.stringify(allCampaignLists));
                    }
                });

                return allCampaignLists;
            });
            //  getContactReportInfo();
            return item;
        }
    };
    const deleteCampaignList = (itemId: number) => {
        let contactListData: any = localStorage.getItem("contactLists");
        let contactListArr = (contactListData != null) ? JSON.parse(contactListData) : new Array();
        console.log(contactListArr);
        setCampaignLists((allCampaignLists: []) => {
            return allCampaignLists.filter((list: any) => list.id != itemId);
        });
        let filteredContacts = contactListArr.filter((contactList: any) => contactList.id != itemId);
        localStorage.setItem("contactLists", filteredContacts);
    };


    const [inlineEdit, setInlineEdit] = useState(null)
    const handleInlineEdit = (id: any) => {
        setInlineEdit(inlineEdit === id ? -1 : id)
        console.log(id)
    }


    const [isImporting, setIsImporting] = useState(false);
    const handleImportingStatus = (status: any) => {
        setIsImporting(status);
    };


    const [display, setDisplay] = useState(10)
    const handleTableDisplay = (e: any) => {
        setDisplay(e.target.value)
        console.log(e.target.value)
    }

    const [tableDisplayByArrow, _setTableDisplayByArrow] = useState(10)
    const handleTableDisplaybyArrow = (id: number) => {
        setDisplay(id)
        console.log(id)
    }

    const [tempColumnInfo, setTempColumnInfo] = useState({ columnName: "", columnValue: "" });
    const handleTempColumnInfo = (item: any) => {

        if (item == "") {
            setTempColumnInfo({ columnName: "", columnValue: "" })
        }
        else {
            setTempColumnInfo(item);
        }
    };

    const [contactReportInfo, setContactReportInfo] = useState({ "contactCount": 0, "contactCountInMonth": 0 });

    const getContactReportInfo = () => {
        let contactsInMonth: number = 0;
        let totalContacts: number = 0;
        console.log(allCampaignLists.length);
        if (allCampaignLists.length > 0) {
            allCampaignLists.forEach((campaign: any, i: number) => {
                if (campaign.contacts != undefined && campaign.contacts.length > 0) {
                    totalContacts += campaign.contacts.length;
                    campaign.contacts.map((el: any) => {
                        if (el.created_at != undefined && el.created_at != "") {
                            //console.log("date time",moment(el.created_at,"DD-MM-YYYY HH:mm:ss").isBetween(moment().startOf('month'),moment().endOf('month')));
                            if (moment(el.created_at, "DD-MM-YYYY HH:mm:ss").isBetween(moment().startOf('month'), moment().endOf('month'))) {
                                contactsInMonth++;
                            }
                        }
                    });
                }
                if (i == allCampaignLists.length - 1) {
                    setContactReportInfo({ "contactCount": totalContacts, "contactCountInMonth": contactsInMonth })
                }
            });
        }
        else {
            setContactReportInfo({ "contactCount": 0, "contactCountInMonth": 0 })
        }
    };

    const [allCampaigns, setAllCampaigns] = useState(() => {
        if (localStorage.getItem("campaigns") != null) {
            let item: any = localStorage.getItem("campaigns");
            return JSON.parse(item);
        }
        else {
            return new Array();
        }
    });
    const handleAddEditCampaigns = (item: any) => {
        let campaignData: any = localStorage.getItem("campaigns");
        let campaignArr = (campaignData != null) ? JSON.parse(campaignData) : new Array();
        console.log("update campaign in context",item);
        if (item.id != undefined && item.id != "") {
            setAllCampaigns((allCampaigns: any) => {
                allCampaigns.map((el: any, index: any) => {
                    if (el.id == item.id) {
                        allCampaigns[index] = item;
                    }
                });
                localStorage.setItem("campaigns", JSON.stringify(allCampaigns));
                return allCampaigns;
            });
            return item;
        }
        else {
            item.id = allCampaigns.length + 1;
            item.created_at = moment().format("DD-MM-YYYY HH:mm:ss");
            setAllCampaigns((allCampaigns: any) => [...allCampaigns, item]);
            campaignArr.push(item);
            localStorage.setItem("campaigns", JSON.stringify(campaignArr));
            console.log("campaigns add", allCampaigns);
            console.log("before list data", 1);
            // if (item.list.length > 0) {
            //     item.list.forEach((listId: any) => {
            //         console.log("after list data", listId);
            //         // setCampaignLists((lists) => {
            //         let listData: any = allCampaignLists.filter((el: any) => el.id == listId);
            //         if (listData.length > 0) {
            //             listData[0]['linkedCampaigns'].push(listId);
            //             handleAddEditCampaignList(listData[0]);

            //         }
            //         console.log("list data", listData)
            //     });
            // }
            return item;
        }


    };

    const deleteCampaign = (itemId: any) => {
        let campaignData: any = localStorage.getItem("campaigns");
        let campaignArr = (campaignData != null) ? JSON.parse(campaignData) : new Array();
        setAllCampaigns((allCampaigns: any) => {
            return allCampaigns.filter((campaign: any) => campaign.id != itemId);
        })
        let filteredCampaign = campaignArr.filter((campaign: any) => campaign.id != itemId);
        localStorage.setItem("campaigns", JSON.stringify(filteredCampaign));
    };


    const [createCampaignPopType, setCreateContentPopType] = useState(null)
    const handleCreateContentPopType = (id: any) => {
        setCreateContentPopType(id)
    }
    const handleCancleCreateContentPopType = () => {
        setCreateContentPopType(null)
        setCreateCampaignStepOne(true)
        setCreateCampaignStepTwo(false)
        setCreateCampaignStepThree(false)
        setCreateCampaignStepFour(false)

        setStepIconOne(false)
        setStepIconTwo(false)
        setStepIconThree(false)
        setStepIconFour(false)
    }



    const [createCampaignStepOne, setCreateCampaignStepOne] = useState(true)
    const [stepIconOne, setStepIconOne] = useState(false)
    const handleCreateCampaignStepOne = (id: any) => {
       
        if (id === true) {
            setStepIconTwo(false);
            setStepIconThree(false);
            setStepIconOne(false)
        }
        setCreateCampaignStepOne(id)
        setCreateCampaignStepTwo(false)
        setCreateCampaignStepThree(false)
        setCreateCampaignStepFour(false)
    }

    const [createCampaignStepTwo, setCreateCampaignStepTwo] = useState(false)
    const [stepIconTwo, setStepIconTwo] = useState(false)
    const handleCreateCampaignStepTwo = (id: any) => {
        setStepIconOne(true)
        if (id === true) {
            setStepIconTwo(false);
            setStepIconThree(false);
        }
        setCreateCampaignStepOne(false)
        setCreateCampaignStepTwo(id)
        setCreateCampaignStepThree(false)
        setCreateCampaignStepFour(false)
    }

    const [createCampaignStepThree, setCreateCampaignStepThree] = useState(false)
    const [stepIconThree, setStepIconThree] = useState(false)
    const handleCreateCampaignStepThree = (id: any) => {
        setStepIconOne(true)
        setStepIconTwo(true)
        if (id === true) {
            setStepIconThree(false)
        }
        setCreateCampaignStepOne(false)
        setCreateCampaignStepTwo(false)
        setCreateCampaignStepThree(id)
        setCreateCampaignStepFour(false)
    }

    const [createCampaignStepFour, setCreateCampaignStepFour] = useState(false)
    const [stepIconFour, setStepIconFour] = useState(false)
    const handleCreateCampaignStepFour = (id: any) => {
        setStepIconOne(true)
        setStepIconTwo(true)
        setStepIconThree(true)
        setCreateCampaignStepOne(false)
        setCreateCampaignStepTwo(false)
        setCreateCampaignStepThree(false)
        setCreateCampaignStepFour(id)
    }

    const handleCreateCampaignStepFinal = () => {
        setStepIconOne(false)
        setStepIconTwo(false)
        setStepIconThree(false)
        setStepIconFour(false)
        setCreateContentPopType(null)
        setCreateCampaignStepOne(true)
        setCreateCampaignStepTwo(false)
        setCreateCampaignStepThree(false)
        setCreateCampaignStepFour(false)
    }

    const [newHolidayListPop, setNewHolidayListPop] = useState(false)
    const handleNewHolidayListPop = (id: any) => {
        setNewHolidayListPop(id)
    }


    const [newListPop, setNewListPop] = useState(false)
    const handleNewListPop = (id:any)=>{
        setNewListPop(id)
    }

    const [holidayList,setHolidayList] = useState(()=>{
        if (localStorage.getItem("holidayList") != null) {
            let item: any = localStorage.getItem("holidayList");
            return JSON.parse(item);
        }
        else {
            return new Array();
        }
    });

    const handleAddEditHolidayList = (item:any)=>{
        const newHolidayList = [...holidayList];
        if(item.id != undefined && item.id != undefined)
        {
            console.log("holiday info to update",item);
            newHolidayList.map((el,index)=>{
                if(el.id  == item.id)
                {
                    newHolidayList[index] = item;
                    console.log("el update",el);
                }
            });
            console.log("new updated holiday list",newHolidayList);
            setHolidayList(newHolidayList);
            localStorage.setItem("holidayList",JSON.stringify(newHolidayList));
            return item;
        }
        else
        {
            item.id = newHolidayList.length+1;
            newHolidayList.push(item);
            setHolidayList([...holidayList,item]);
            localStorage.setItem("holidayList",JSON.stringify(newHolidayList));
            return item;
        }
    }

    const deleteHolidayList = (id:any)=>{
        let newHolidayLists = [...holidayList];
        newHolidayLists = newHolidayLists.filter((el)=>el.id != id);
        setHolidayList(newHolidayLists);
        localStorage.setItem("holidayList",JSON.stringify(newHolidayLists));
    }
    return (
        <ContextCampaignManager.Provider value={{
            campaignManagerSidebarTab,
            handleCampaignManagerSidebarTab,

            campaignHamburgar,
            handleCampaignHamburgar,

            createCampaignPop,
            handleCreateCampaignPop,

            advertisement,
            handleAdvertisement,

            campaignDashboardTab,
            handleCampaignDashboardTab,

            liveCampaignsAccordion,
            handleLiveCampaignsAccordion,

            campaignsTab,
            handleCampaignsTab,

            campaignsLiveViewTab,
            handleCampaignsLiveViewTab,

            liveViewCreateCampaignPop,
            handleLiveViewCreateCampaignPop,

            liveViewChooseCampaignTemplate,
            handleLiveViewChooseCampaignTemplate,

            liveChooseCampaignTab,
            handleLiveChooseCampaignTab,

            campaignListTab,
            handleCampaignListTab,

            campaignFilterListTab,
            handleCampaignFilterListTab,

            campaignNewListPop,
            handleCampaignNewListPop,

            campaignNodePop,
            handleCampaignNodePop,

            importContactsPop,
            handleImportContactsPop,

            uploadDoc,
            handleUploadDoc,

            finalImportDoc,
            handleFinalImportDoc,

            addContact,
            handleSetAddContacts,
            handleSetAddContactsFromList,

            selectedCampaignList,
            handleSelectedCampaign,

            handleManageList,
            handleAllContacts,

            campaignNewContactsfromSubList,
            handleCampaignNewContactsfromSubList,

            createReportPop,
            handleCreateReportPop,

            campaignReportList,
            handleCampaignReportList,

            handleSetAddContactsFromReport,

            cardCampaignValue,

            campaignReportCardCampaignFilterDrop,
            handleCampaignReportCardCampaignFilterDrop,
            handleCampaignReportCardCampaignFilterSelect,
            filterTextHighlighted,

            campaignReportTab,
            handleCampaignReportTab,

            campaignReportPop,
            handleCampaignReportPop,

            campaignCreateWorkFlowPop,
            handleCampaignCreateWorkFlowPop,

            campaignCreateWorkFlowChooseTemplate,
            handleCampaignCreateWorkFlowChooseTemplate,

            dashboardCampaignType,
            handleDashboardCampaignType,

            dashboardCampaignTypeValue,
            handleDashboardCampaignTypeValue,

            allCampaignLists,
            handleAddEditCampaignList,
            deleteCampaignList,

            isImporting,
            handleImportingStatus,

            inlineEdit,
            handleInlineEdit,

            display,
            handleTableDisplay,

            tableDisplayByArrow,
            handleTableDisplaybyArrow,

            tempColumnInfo,
            handleTempColumnInfo,

            contactReportInfo,
            getContactReportInfo,

            allCampaigns,
            handleAddEditCampaigns,
            deleteCampaign,

            createCampaignPopType,
            handleCreateContentPopType,
            handleCancleCreateContentPopType,
            createCampaignStepOne,
            handleCreateCampaignStepOne,
            createCampaignStepTwo,
            handleCreateCampaignStepTwo,
            createCampaignStepThree,
            handleCreateCampaignStepThree,
            createCampaignStepFour,
            handleCreateCampaignStepFour,
            handleCreateCampaignStepFinal,

            stepIconOne,
            stepIconTwo,
            stepIconThree,
            stepIconFour,

            newHolidayListPop,
            handleNewHolidayListPop,

            newListPop,
            handleNewListPop,

            holidayList,
            handleAddEditHolidayList,
            deleteHolidayList



        }}>
            {props.children}
        </ContextCampaignManager.Provider>
    );
}

import { ReactNode, createContext,  useState } from "react";
type ContentProps ={
    children: ReactNode;
}

export const ContextReport = createContext({
    reportSidebarTab: 1,
    handleReportSidebarTab: (_id:any)=>{},

    reportSubMenu: null,
    handleReportSubMenu: (_id:any)=>{},

    reportHamburgar: false,
    handleReportHamburgar: ()=>{},

    customerReportsPop: false,
    handleCustomerReportsPop: (_id:any)=>{},

    filterReportPop: false,
    handleFilterReportPop: ()=>{},

    filterReportOption: "Select type",
    handleFilterReportOption:(_e:any)=>{},
    filterTeam:true,
    filterTextHighlighted: false,

    filterTeamPop: false,
    handleFilterTeamPop: ()=>{},

    filterTeamSecondLevel: null,
    handleFilterTeamSecondLevel: (_id:any)=>{},

    filterTeamThirdLevel: null,
    handleFilterTeamThirdLevel: (_id:any)=>{},

    filterTeamFourthLevel: null,
    handleFilterTeamFourthLevel: (_id:any)=>{},

    filterSkillPop: false,
    handleFilterSkillPop: ()=>{},

    filterSkill: true,
    handleFilterSkill: ()=>{},

    filterDate: true,
    handleFilterDate: ()=>{},

    filterDatePop: false,
    handleFilterDatePop: ()=>{},

    addFilter: true,
    handleFilterDateApply: ()=>{},

    newAddFilterPop: false,
    handleNewAddFilterPop: ()=>{},

    addNewFilterPop: false,
    handleAddNewFilterPop: ()=>{},

    addNewFilter: false,
    handleAddNewFilter: ()=>{},
    handleApplyFinalFilter: ()=>{},
    handleAddnewFilterCancle: ()=>{},

    handleOverallDropOffFilter: ()=>{},

    summaryDataView: false,
    handleGenerateSummaryDataView: ()=>{},

    summaryCheck: false,
    handleSummaryCheck: ()=>{},

    summaryTab: 0,
    handleSummaryTab: (_id:any) =>{},

    summaryTableFilterChannelTab: false,
    handleSummaryTableFilterChannelTab: () =>{},

    resetDefaultPop: false,
    handleResetDefaultPop: (_id:any) =>{},

    handleFinalReset: ()=>{},

    schedulePop: false,
    handleSchedulePop: (_id:any)=>{},

    sharePop: false,
    handleSharePop: (_id:any)=>{},

    downloadSummaryReportPop: false,
    handleDownloadSummaryReportPop: (_id:any)=>{},

    blankOvarlay: false,

    runPop: false,
    handleRunPop: ()=>{},

    runValue: "--Select Schedule--",
    handleRunValue: (_e:any)=>{},

    timePop: false,
    handleTimePop: ()=>{},

    timeValue: "--Select Schedule--",
    handleTimeValue: (_e:any)=>{},

    handleBlankOvarlay: ()=>{},

    reportTypePop:false,
    handleReportTypePop:(_id:any)=>{},

    reportCheckSub: null,
    handleReportCheckSub: (_id:any)=>{},

    handleReportTypePopBlank: ()=>{}

});

export const ReportContext = (props: ContentProps)=> {
    
    const [reportSidebarTab, setReportSidebarTab] = useState(1)
    const handleReportSidebarTab = (id:any)=>{
        setReportSidebarTab(id)
        console.log( "Report Sidebar" +id)
        setReportHamburgar(false)
        setAddNewFilterPop(false)
        setNewAddFilterPop(false)
        setFilterDatePop(false)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
        setSummaryDataView(false)
        setSummaryTab(0)
    }

    const [reportSubMenu, setReportSubMenu] = useState(null)
    const handleReportSubMenu = (id:any)=>{
        setReportSubMenu(reportSubMenu === id ? -1 : id)
    }

    const [reportHamburgar, setReportHamburgar] = useState(false)
    const handleReportHamburgar = ()=>{
        setReportHamburgar(!reportHamburgar)
    }
    

    const [customerReportsPop, setCustomerReportsPop] = useState(false)
    const handleCustomerReportsPop = (id:any)=>{
        setCustomerReportsPop(id)
    }
    const [filterReportPop, setFilterReportPop] = useState(false)



    
    const handleFilterReportPop = ()=>{
        setFilterReportPop(!filterReportPop)
        setFilterTeamPop(false)
        setFilterSkillPop(false)
        setFilterDatePop(false)
        setNewAddFilterPop(false)
        setAddNewFilterPop(false)
    }




    const [filterReportOption, setFilterReportOption] = useState("Select type")
    const [filterTeam, setFilterTeam] = useState(true)
    const [filterTextHighlighted, setFilterTextHighlighted] = useState(false)
    const handleFilterReportOption = (e:any)=>{
        setFilterReportOption(e.target.textContent)
        setFilterReportPop(false)        
        setFilterTeam(true)
        setFilterTextHighlighted(true)
    }


    const [filterTeamPop, setFilterTeamPop] = useState(false)
    const handleFilterTeamPop = ()=>{
        setFilterTeamPop(!filterTeamPop)

        setFilterReportPop(false)
        setFilterSkillPop(false)
        setFilterDatePop(false)
        setNewAddFilterPop(false)
        setAddNewFilterPop(false)
    }
    

    const [filterTeamSecondLevel, setFilterTeamSecondLevel] = useState(null)
    const handleFilterTeamSecondLevel = (id:any)=>{
        setFilterTeamSecondLevel(filterTeamSecondLevel === id ? -1 : id)
    }

    const [filterTeamThirdLevel, setFilterTeamThirdLevel] = useState(null)
    const handleFilterTeamThirdLevel = (id:any)=>{
        setFilterTeamThirdLevel(filterTeamThirdLevel === id ? -1 : id)
    }

    const [filterTeamFourthLevel, setFilterTeamFourthLevel] = useState(null)
    const handleFilterTeamFourthLevel = (id:any)=>{
        setFilterTeamFourthLevel(filterTeamFourthLevel === id ? -1 : id)
    }

    const [filterSkill, setFilterSkill] = useState(true)
    const handleFilterSkill = ()=>{
        setFilterTeamPop(false)
        setFilterSkill(true)
    }

    const [filterSkillPop, setFilterSkillPop] = useState(false)
    const handleFilterSkillPop = ()=>{
        setFilterSkillPop(!filterSkillPop)
        setFilterReportPop(false)
        setFilterTeamPop(false)
        setFilterDatePop(false)
        setNewAddFilterPop(false)
        setAddNewFilterPop(false)
    }

    const [filterDate, setFilterDate] = useState(true)
    const [addFilter, setAddFilter] = useState(true)
    const handleFilterDate = ()=>{
        setFilterDate(true)
        setFilterSkillPop(false)
        setAddFilter(true)
    }

    const [filterDatePop, setFilterDatePop] = useState(false)   
    const handleFilterDatePop = ()=>{
        setFilterDatePop(!filterDatePop)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
        setNewAddFilterPop(false)
        setAddNewFilterPop(false)
    }
    const handleFilterDateApply = ()=>{
        setFilterDatePop(false)
    }

    const [newAddFilterPop, setNewAddFilterPop] = useState(false)
    const handleNewAddFilterPop = ()=>{
        setNewAddFilterPop(!newAddFilterPop)
        setFilterDatePop(false)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
        setAddNewFilterPop(false)
    }

    const [addNewFilterPop, setAddNewFilterPop] = useState(false)
    const handleAddNewFilterPop = ()=>{
        setAddNewFilterPop(!addNewFilterPop)
        setNewAddFilterPop(false)
        setFilterDatePop(false)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
    }

    const [addNewFilter, setAddNewFilter] = useState(false)
    const handleAddNewFilter = ()=>{
        setAddNewFilter(true)
    }
    const handleAddnewFilterCancle = ()=>{
        setNewAddFilterPop(false)
        console.log("filter apply")
    }
    const handleApplyFinalFilter = ()=>{
        setAddNewFilter(true)
        setAddNewFilterPop(false)
    }


    const handleOverallDropOffFilter = ()=>{
        setAddNewFilterPop(false)
        setNewAddFilterPop(false)
        setFilterDatePop(false)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
        console.log("Triggered")
    }

    







    
    

    const [summaryDataView, setSummaryDataView] = useState(false)
    const handleGenerateSummaryDataView = ()=>{
        setSummaryDataView(true)
        setAddNewFilterPop(false)
        setNewAddFilterPop(false)
        setFilterDatePop(false)
        setFilterSkillPop(false)
        setFilterReportPop(false)
        setFilterTeamPop(false)
    }

    const [summaryCheck, setSummaryCheck] = useState(false)
    const handleSummaryCheck = ()=>{
        setSummaryCheck(!summaryCheck)
    }

    const [summaryTab, setSummaryTab] = useState(0)
    const handleSummaryTab = (id:any)=>{
        setSummaryTab(id)
    }


    const [summaryTableFilterChannelTab, setSummaryTableFilterChannelTab] = useState(false)
    const handleSummaryTableFilterChannelTab = ()=>{
        setSummaryTableFilterChannelTab(!summaryTableFilterChannelTab)
    }


    const [resetDefaultPop, setResetDefaultPop] = useState(false)
    const handleResetDefaultPop = (id:any)=>{
        setResetDefaultPop(id)
        console.log("Reset Default" + id)
    }

    const handleFinalReset = ()=>{
        setFilterTeam(false)
        setFilterReportOption("Select type")
        setFilterSkill(false)
        setFilterDate(false)
        setAddFilter(false)
        setSummaryDataView(false)
        setResetDefaultPop(false)
        setAddNewFilter(false)
        setSummaryTab(0)
        console.log("Working")
    }



    const [schedulePop, setSchedulePop] = useState(false)
    const handleSchedulePop = (id:any)=>{
        setSchedulePop(id)
        setReportCheckSub(null)
    }

    const [sharePop, setSharePop] = useState(false)
    const handleSharePop = (id:any)=>{
        setSharePop(id)
    }

    const [downloadSummaryReportPop, setDownloadSummaryReportPop] = useState(false)
    const handleDownloadSummaryReportPop = ()=>{
        setDownloadSummaryReportPop(!downloadSummaryReportPop)
    }

    const [blankOvarlay, setBlankOvarlay] = useState(false)

    const [runPop, setRunPop] = useState(false)
    const [runValue, setRunValue] = useState("--Select Schedule--")
    const handleRunPop = ()=>{
        setRunPop(!runPop)
        setTimePop(false)
        setBlankOvarlay(true)
        setReportTypePop(false)
    }
    const handleRunValue = (e:any)=>{
        setRunValue(e.target.textContent)
        setRunPop(false)
    }



    const [timePop, setTimePop] = useState(false)
    const [timeValue, setTimeValue] = useState("--Select Frequency--")
    const handleTimePop = ()=>{
        setTimePop(!timePop)
        setRunPop(false)
        setBlankOvarlay(true)
        setReportTypePop(false)
    }
    const handleTimeValue = (e:any)=>{
        setTimeValue(e.target.textContent)
        setTimePop(false)
    }
    
    const handleBlankOvarlay = ()=>{
        setRunPop(false)
        setTimePop(false)
        setReportTypePop(false)
        setBlankOvarlay(!blankOvarlay)
    }

    const [reportTypePop, setReportTypePop] = useState(false)
    const handleReportTypePop = (id:any)=>{
        setReportTypePop(id)
        setReportCheckSub(null)
        setRunPop(false)
        setTimePop(false)
        setBlankOvarlay(true)
    }

    const [reportCheckSub, setReportCheckSub] = useState(null)
    const handleReportCheckSub = (id:any)=>{
        setReportCheckSub( reportCheckSub === id ? -1 : id)
    }
    
    const handleReportTypePopBlank = ()=>{
        setRunPop(false)
        setTimePop(false)
        setReportTypePop(false)
    }

    


    

    
    
    

    

    return (
        <ContextReport.Provider value={{
            reportSidebarTab,
            handleReportSidebarTab,

            reportSubMenu,
            handleReportSubMenu,

            reportHamburgar,
            handleReportHamburgar,

            customerReportsPop,
            handleCustomerReportsPop,

            filterReportPop,
            handleFilterReportPop,

            filterReportOption,
            handleFilterReportOption,
            filterTeam,
            filterTextHighlighted,

            filterTeamPop,
            handleFilterTeamPop,

            filterTeamSecondLevel,
            handleFilterTeamSecondLevel,

            filterTeamThirdLevel,
            handleFilterTeamThirdLevel,

            filterTeamFourthLevel,
            handleFilterTeamFourthLevel,

            filterSkillPop,
            handleFilterSkillPop,

            filterSkill,
            handleFilterSkill,

            filterDate,
            handleFilterDate,

            filterDatePop,
            handleFilterDatePop,

            addFilter,
            handleFilterDateApply,

            newAddFilterPop,
            handleNewAddFilterPop,

            addNewFilterPop,
            handleAddNewFilterPop,

            addNewFilter,
            handleAddNewFilter,
            handleApplyFinalFilter,
            handleAddnewFilterCancle,

            handleOverallDropOffFilter,


            summaryDataView,
            handleGenerateSummaryDataView,

            summaryCheck,
            handleSummaryCheck,

            summaryTab,
            handleSummaryTab,

            summaryTableFilterChannelTab,
            handleSummaryTableFilterChannelTab,

            resetDefaultPop,
            handleResetDefaultPop,

            handleFinalReset,

            schedulePop,
            handleSchedulePop,

            sharePop,
            handleSharePop,

            downloadSummaryReportPop,
            handleDownloadSummaryReportPop,

            blankOvarlay,

            runPop,
            handleRunPop,

            runValue,
            handleRunValue,

            timePop,
            handleTimePop,

            timeValue,
            handleTimeValue,

            handleBlankOvarlay,

            reportTypePop,
            handleReportTypePop,

            reportCheckSub,
            handleReportCheckSub,

            handleReportTypePopBlank
            
            

            
        }}>
            {props.children}
        </ContextReport.Provider>
    );
}
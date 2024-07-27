import { useCallback, useContext, useState } from "react"
import { ContextWorkflow } from '../../../../../../contexts/workflowContext'
import style from './style.module.scss'
import MaleIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/male.svg"
import FeMaleIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/female.svg"
import { CountryFlag, LanguageDependend } from "./Data"
import useOutside from "../../../../../../hooks/useOutside"
// import ReactFlagsSelect from "react-flags-select";
// import "./flag.scss";

const ThirdStep = () => {
    const contextWorkFlow = useContext(ContextWorkflow)
    const [language, setLanguage] = useState(true)
    const [chooseAccent, setChooseAccent] = useState(true)
    const [countryFlag, setCountryFlag] = useState(false)
    const [accent, setAccent] = useState(new Array())
    const [networkFlowName, setNetworkFlowName] = useState("");
    const [hasError, setErrorStatus] = useState(false);
    //   const [accents, setAccents] = useState([])
    //   const onSelect = (code) => setSelect(code);
    const handleAccent = () => {
        setLanguage(false)
    }
    const changeLanguage = (e: any) => {
        setLanguage(e.target.value)
        setChooseAccent(false)
        const FindAccent = LanguageDependend.filter((lang) => lang.language === e.target.value)
        setAccent(FindAccent[0].accent);
       

        

        
    }

    const handleLanguageCommon = ()=>{
        setCountryFlag(false)
    }

    // const handleCountryFlag = () => {
    //     setCountryFlag(!countryFlag)
    // }

    const [countryFlagValue, setCountryFlagValue] = useState({ id: "1", flagAvatar: "c1.png" })
    const handleCountryFlagValue = (flag: any) => {
        setCountryFlagValue(flag)
        setCountryFlag(false)
    }
    const proceedBtnHandler = useCallback(() => {
        if (networkFlowName == "") {
            setErrorStatus(true);
        }
        else {
            let workflowObj = {"flowName":networkFlowName,workflowType:contextWorkFlow.selectedNetworkFlowType,workflow:""};
            console.log("workflowobj",workflowObj);
            contextWorkFlow.handleRunningWorkflowInfo(JSON.stringify(workflowObj)); 
            contextWorkFlow.setSelectedNetworkFlowName(networkFlowName);
            contextWorkFlow.handleNewWorkflowPopBack(false);
            contextWorkFlow.handleFinalWorkflowfromNewPop(true);
            contextWorkFlow.handleWorkflowSettingsPop(false);
            contextWorkFlow.handleWorkflowSettings({} as Node);
            contextWorkFlow.handleWorkFlowModuleTabList([],"reset");
            contextWorkFlow.handleWorkflowModuleTab({name:0,nodeInfo:""});
            //contextWorkFlow.handleCurrentRunningWorkFlow("");
            contextWorkFlow.handleSelectedFlowRunningType("");
            contextWorkFlow.handlePassWorkflowPopData('/admin/dashboard/workflow-studio')

        }
    }, [contextWorkFlow, networkFlowName,contextWorkFlow.selectedFlowRunningType]);

    const [drop, setDrop, ref] = useOutside(false)
    return (
        <>
            {/* {
                countryFlag ? <div className={style.overlay} onClick={handleLanguageCommon}></div> : null
            } */}
            
            <h1>{contextWorkFlow.selectedNetworkFlowType == 'Modules' ? 'Module' : 'Workflow'} Properties</h1>
            <form className={style.work_flow_properties_wrapper}>
                <div className={style.portion}>
                    <label htmlFor="WorkflowName">{contextWorkFlow.selectedNetworkFlowType == 'Modules' ? 'Module' : 'Workflow'} Name <span className={style.red_color}>*</span></label>
                    <input type="text" name="" id="WorkflowName" placeholder={contextWorkFlow.selectedNetworkFlowType == 'Modules' ? 'Enter module name' : 'Enter workflow name'} className={style.form_control} onChange={(evt) => { setNetworkFlowName(evt.target.value); (evt.target.value == "") ? setErrorStatus(true) : setErrorStatus(false) }} />
                    {hasError == true && <span className={style.error_message} >Enter {contextWorkFlow.selectedNetworkFlowType == 'Modules' ? 'Module' : 'Workflow'} name</span>}
                </div>
                <div className={`${style.portion} ${style.textarea}`}>
                    <label htmlFor="Description">Description</label>
                    <textarea name="" id="Description" className={style.form_control} placeholder="Describe the dashboard purpose"></textarea>
                </div>
                <div className={`${style.portion} ${style.drop}`}>
                    <label>Language</label>
                    <div className={`${style.flag_wrap} d-flex`} ref={ref}>
                        {/* <ul className={style.countryDrop_wrap}>
                        {
                            CountryFlag.map((flag)=>{
                                return(
                                    <li key={flag.id}><img src={`/assets/dashboard/main_dashboard/admin/workflowPop/${flag.flagAvatar}`} alt="" /></li>
                                )
                            })
                        }
                    </ul> */}
                        {/* <div className={`${style.countryDrop_wrap} ${countryFlag ? style.active : null} d-flex align-items-center `} onClick={handleCountryFlag}>
                            <span ><img src={`/assets/dashboard/main_dashboard/admin/workflowPop/${countryFlagValue.flagAvatar}`} alt="" /></span>
                        </div>
                        {
                            countryFlag ?
                                <ul className={style.countryDrop_list}>
                                    {
                                        CountryFlag.map((flag) => {
                                            return (
                                                <li onClick={() => handleCountryFlagValue(flag)} key={flag.id}><img src={`/assets/dashboard/main_dashboard/admin/workflowPop/${flag.flagAvatar}`} alt="" /></li>
                                            )
                                        })
                                    }
                                </ul> : null
                        } */}
                        <div className={`${style.countryDrop_wrap} ${countryFlag ? style.active : null} d-flex align-items-center `} onClick={()=>setDrop(!drop)} >
                            <span ><img src={`/assets/dashboard/main_dashboard/admin/workflowPop/${countryFlagValue.flagAvatar}`} alt="" /></span>
                        </div>
                        {
                            drop ?
                                <ul className={style.countryDrop_list}>
                                    {
                                        CountryFlag.map((flag) => {
                                            return (
                                                <li onClick={() =>{ handleCountryFlagValue(flag), setDrop(false)}} key={flag.id}><img src={`/assets/dashboard/main_dashboard/admin/workflowPop/${flag.flagAvatar}`} alt="" /></li>
                                            )
                                        })
                                    }
                                </ul> : null
                        }
                        <select name="" className={style.form_control} onChange={changeLanguage} onClick={handleLanguageCommon}>
                            {language === true ? <option value="--Choose Language--" disabled selected>--Choose Language--</option> : null}
                            {
                                LanguageDependend.map((lang) => {
                                    return (
                                        <option value={lang.language} onClick={handleAccent}>{lang.language}</option>
                                    )
                                })
                            }

                        </select>
                    </div>

                    {/* <ReactFlagsSelect
                    selected={language}
                    onSelect={changeLanguage}
                    countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
                    showSelectedLabel={showSelectedLabel}
                    selectedSize={selectedSize}
                    showOptionLabel={showOptionLabel}
                    optionsSize={optionsSize}
                    placeholder={placeholder}
                    searchable={searchable}
                    searchPlaceholder={searchPlaceholder}
                    alignOptionsToRight={alignOptionsToRight}
                    fullWidth={fullWidth}
                    disabled={disabled} 
                /> */}
                </div>
                <div className={`${style.portion} ${style.drop}`}>
                    <label>Accent</label>
                    <select name="" className={style.form_control} onClick={handleLanguageCommon}>
                        {
                            chooseAccent ? <option value="--First Choose Language--" disabled selected>--First Choose Language---</option> :
                                <>
                                    {
                                        accent.map((item) => {
                                            return (
                                                <option value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </>
                        }



                    </select>
                </div>
                <div className={`${style.portion}`}>
                    <label>Voice</label>
                    <div className={`${style.check_wrapper}  d-flex align-items-center`}>

                        <div className={style.checkarea} onClick={handleLanguageCommon}>
                            <input type="radio" name="gender" id="male" />
                            <label htmlFor="male" className="d-flex align-items-center">
                                <span><img src={MaleIcon} alt="" /></span>
                                <span>Male Voice</span>
                            </label>
                        </div>
                        <div className={style.checkarea} onClick={handleLanguageCommon}>
                            <input type="radio" name="gender" id="female" />
                            <label htmlFor="female" className="d-flex align-items-center">
                                <span><img src={FeMaleIcon} alt="" /></span>
                                <span>Female Voice</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`${style.portion} d-flex align-items-center`}>
                    <div className={`${style.back_button} ${style.forward} align-items-center justify-content-center`}
                     onClick={() => {proceedBtnHandler()}}>Proceed</div>
                     
                    <div className={`${style.back_button} align-items-center justify-content-center`} onClick={() => contextWorkFlow.handleNewWorkflowPopThirdStepBack(false)}>Back</div>
                </div>
            </form>

        </>
    )
}

export default ThirdStep
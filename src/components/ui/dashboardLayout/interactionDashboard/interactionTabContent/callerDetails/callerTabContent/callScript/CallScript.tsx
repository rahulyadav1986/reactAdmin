import { useLocation } from 'react-router-dom'
import { CallScriptData } from './Data'
import style from './style.module.scss'
import { useCallback, useContext, useEffect, useState } from 'react'
import { ContextPlatformConfiguration } from '../../../../../../../../contexts/platformConfigurationContext'
import MasterScript from '../../../../../../adminDashboardLayout/platformConfiguration/platformConfigurationContent/callScript/manageMasterScript/MasterScript'
const CallScript = (props: any) => {
    const location = useLocation();
    const currentLocation = location.pathname.indexOf('/admin') >= 0

    const contextCallScript = useContext(ContextPlatformConfiguration);
    const [ScriptData, setScriptData] = useState((currentLocation == false) ? CallScriptData : contextCallScript.allMasterScripts);
    const [selectedSections, setSelectedSections] = useState(new Array());
    useEffect(() => {
        if (currentLocation == true) {
            setScriptData(contextCallScript.allMasterScripts);
            if(props.scriptTemplate != undefined && props.scriptTemplate.sectionIds != undefined && props.scriptTemplate.sectionIds.length > 0)
            {
                    let sections: any  = [];
                    props.scriptTemplate.sectionIds.map((el:any,index:any)=>{
                        let elm = contextCallScript.allMasterScripts.filter((item)=>item.id == el);
                        sections.push(elm[0]);
                        if(index == props.scriptTemplate.sectionIds.length - 1)
                        {
                            setSelectedSections(sections);
                        }
                    });
            }
        }
    }, [contextCallScript.allMasterScripts, currentLocation]);


    const onScriptCheckHandler = ((evt: any) => {
        if (evt.target.checked == true) {
            setSelectedSections([...selectedSections, JSON.parse(evt.target.value)]);
        }
        else {
            setSelectedSections((selectedSections:any) => {
                selectedSections = selectedSections.filter((el:any) => el.id != evt.target.id);
                //console.log("selected sections",selectedSections);
                return selectedSections;
            });
        }
    });

    const saveScriptHandler = useCallback(() => {
        if (props.scriptTemplate != undefined) {
           console.log("selected sections",selectedSections);
            if (selectedSections.length > 0) {
                let sections:any = [];
                let weightage = 0;
                selectedSections.map((el:any,index:any)=>{
                    sections.push(el.id);
                    let selectedSection:any = contextCallScript.allMasterScripts.filter((item)=>item.id == el.id);
                    if(selectedSection.length > 0)
                    {
                        weightage += selectedSection[0].weightage;
                    }
                    if(index == selectedSections.length - 1)
                    {
                        contextCallScript.manageScriptInfo({...props.scriptTemplate,...{weightage:weightage,sectionIds:sections}});
                        contextCallScript.handleMasterScript("");
                        contextCallScript.handleNewScriptPop(false);
                    }
                });
            }
            else {
                contextCallScript.manageScriptInfo({...props.scriptTemplate,...{weightage:0,sectionIds:[]}});
                contextCallScript.handleMasterScript("");
                contextCallScript.handleNewScriptPop(false);
            }
        }
    }, [selectedSections,contextCallScript]);
    return (
        <>
            {(contextCallScript.masterScript != "" && contextCallScript.masterScript != "0" && currentLocation == true) &&
                <div className={style.save_script}>
                    <h3>Select the sections that you want to add to this script and save it</h3>
                    <div className={style.button_container}>
                        <button className={`${style.button}  d-flex align-items-center justify-content-center`} >Cancel</button>
                        <button className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={saveScriptHandler}>Save Script</button>
                    </div>
                </div>}
            <div className={style.callScript_wrapper} >
                {
                    ScriptData.map((scrp, i) => {
                        return (
                            <>
                                {
                                    currentLocation ?
                                        <MasterScript script={scrp} onScriptcheck={onScriptCheckHandler} sections={props.scriptTemplate.sectionIds}/>
                                        :
                                        <div className={`${style.portion}`} key={i}>
                                            <h2>{scrp.headingLavel}</h2>
                                            <div className={style.details}>
                                                <div className={style.purpose}>
                                                    <h4>Purpose</h4>
                                                    <p>{scrp.purpose}</p>
                                                </div>
                                                <div className={style.script}>
                                                    <h4>Script</h4>
                                                    <p>{scrp.script}</p>
                                                </div>
                                            </div>
                                        </div>
                                }

                            </>

                        )
                    })
                }

            </div>
        </>
    )
}

export default CallScript
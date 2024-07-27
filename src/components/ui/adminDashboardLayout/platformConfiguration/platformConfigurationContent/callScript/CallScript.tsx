import style from './style.module.scss'

import CrossIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/cross.svg"
import {useCallback, useContext, useState} from 'react'
import { ContextPlatformConfiguration } from '../../../../../../contexts/platformConfigurationContext'
import CallScriptTemplates from './callScriptTemplates/CallScriptTemplates'
import ManageMasterScript from './manageMasterScript/ManageMasterScript'
const CallScript = () => {
  const contextAddCallScript = useContext(ContextPlatformConfiguration);
  const [scriptName,setScriptName] = useState("");
  const [scriptDescription,setScriptDescription] = useState("");
  const submitCallScript = useCallback(()=>{
    console.log("master scripts",contextAddCallScript.allScripts);
     contextAddCallScript.handleCreateCallScript(false);
     const toDay = Date.now();

     let item = {
        name: scriptName,
        noOfSections: 0,
        //createdOn: new Date().getDay()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()+" "+new Date().getHours()+":"+new Date().getMinutes(),
        createdOn: new Date(toDay).toLocaleDateString()+" "+new Date(toDay).toLocaleTimeString(),
        lasteUpdatedOn: "",
        description:scriptDescription,
        weightage:0,
        skills:[],
        sectionIds:[]
     };
    const itemId = contextAddCallScript.manageScriptInfo(item);
    contextAddCallScript.handleMasterScript(itemId);
     setScriptName("");
     setScriptDescription("");
    


     //contextAddCallScript.handleSubmitCallScript
  },[contextAddCallScript,scriptName,scriptDescription]);
  return (
    <div className={style.callScript_wrapper}>
        {
            contextAddCallScript.masterScript != "" ? <ManageMasterScript /> : <CallScriptTemplates />
        }
        {
            contextAddCallScript.createCallScript === true ? 
            <div className={`${style.new_script_pop_wrapper} d-flex align-items-center justify-content-center`}>
                <div className="overlay" onClick={()=>contextAddCallScript.handleCreateCallScript(false)}></div>
                <div className={style.main_wrapper}>
                    <div className={`${style.head_wrapper} d-flex align-items-center justify-content-between`}>
                        <h2>New Script</h2>
                        <span className={style.cross} onClick={()=>contextAddCallScript.handleCreateCallScript(false)}><img src={CrossIcon} alt="" /></span>
                    </div>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <div className={style.put_value_area}>
                            <div className={style.form_control_wrap}>
                                <label htmlFor="">Script name <span className={style.red}>*</span></label>
                                <input type="text" name="scriptName" id="scriptName" value={scriptName} className={style.form_control} placeholder='Enter your script name' onChange={(evt)=>setScriptName(evt.target.value)} />
                            </div>
                            <div className={`${style.form_control_wrap} ${style.textarea}`}>
                                <label htmlFor="">Description</label>
                                <textarea name="scriptDescription" id="scriptDescription" value={scriptDescription} className={style.form_control} placeholder='Describe the script purpose' onChange={(evt)=>setScriptDescription(evt.target.value)}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="button" className={`${style.button} d-flex align-items-center justify-content-center`} onClick={submitCallScript}>Proceed</button>
                        </div>
                        
                    </form>
                    
                </div>
            </div> : null
        }
        

    </div>
  )
}

export default CallScript
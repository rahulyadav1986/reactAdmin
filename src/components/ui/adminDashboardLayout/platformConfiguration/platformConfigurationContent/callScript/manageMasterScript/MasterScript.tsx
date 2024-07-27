

import { ContextPlatformConfiguration } from '../../../../../../../contexts/platformConfigurationContext'
import style from './style.module.scss'
import DragIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/drag_vertical.svg"
import QuantityAdd from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/quantity_add.svg"
import QuantityRemove from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/quantity_remove.svg"
import { useCallback, useContext, useEffect, useState } from 'react'



const MasterScript = ({ script,onScriptcheck,sections }: any) => {
    //console.log("script",script,sections,script.id,sections.includes(script.id));
    const contextAddCallScript = useContext(ContextPlatformConfiguration);
    const [inputScriptValue, setInputScriptValue] = useState({
        purpose: script.purpose,
        script: script.script,
        weightage:script.weightage
    })
    const [isChecked,setIsChecked] = useState(sections.includes(script.id));
    useEffect(()=>{
        if(sections.includes(script.id))
        {

            setIsChecked(true);
            
        }
    },[script]);
    const incrementCounter = () => {
        let weightage = inputScriptValue.weightage + (inputScriptValue.weightage < 5 ? 1 : 0);
        setInputScriptValue({...inputScriptValue, weightage: weightage});
        contextAddCallScript.manageMasterScripts({...script,weightage:weightage});
        
    };
    const onScriptCheckHandler = useCallback((evt:any)=>{
      //  alert(evt.target.checked);
        setIsChecked(!evt.target.checked);
        onScriptcheck(evt);
    },[onScriptcheck,isChecked]);
    const decrementCounter = () => {
          //setScriptData(ScriptData => ScriptData.map((scrp)=> qty === scrp.id ? {...scrp, counter: scrp.counter - (scrp.counter > 1 ? 1 : 0)} : scrp))
          let weightage = inputScriptValue.weightage - (inputScriptValue.weightage >= 1 ? 1 : 0);
          setInputScriptValue({...inputScriptValue, weightage: weightage});
          contextAddCallScript.manageMasterScripts({...script,weightage:weightage});
    
    };
    const handleOnchangeScriptvalue = (e: any) => {
        const { name, value } = e.target;
        setInputScriptValue((inputScriptValue) => ({ ...inputScriptValue, [name]: value }));
        contextAddCallScript.manageMasterScripts({...script,[name]: value});
    }
    
    return (<div className={style.call_script_portion}>
       <input className={`${(contextAddCallScript.masterScript != "" && contextAddCallScript.masterScript != "0")?style.hide_check:null}`} type="checkbox" name={script.id} id={script.id} onClick={onScriptCheckHandler} value={JSON.stringify(script)} defaultChecked={isChecked}/>
        <label htmlFor={script.id}>
            <div className={`${style.heading_wrapper} d-flex align-items-center justify-content-between`}>
                <div className='d-flex align-items-center'>
                {(contextAddCallScript.masterScript != "" && contextAddCallScript.masterScript != "0") &&  <span className={style.check}></span>}
                    <div>
                        <h6>Title</h6>
                        <h2>{script.title}</h2>
                    </div>
                </div>
                <span className={style.drag}><img src={DragIcon} alt="" /></span>
            </div>
            <div className={`${style.details} d-flex align-items-center justify-content-between`}>
                <div className={style.details_wrap}>
                    <div className={style.purpose}>
                        <h4>Purpose</h4>
                        <input type="text" name="purpose" value={inputScriptValue.purpose} onChange={handleOnchangeScriptvalue} placeholder={script.purpose}  />
                    </div>
                    <div className={style.script}>
                        <h4>Script</h4>
                        {/* <p>{script.script}</p> */}
                        <input type="text" name="script" value={inputScriptValue.script} onChange={handleOnchangeScriptvalue} placeholder={script.script} />
                    </div>
                </div>
                <div className={`${style.quantity_wrapper}`}>
                    <p>Weight</p>
                    <div className={`${style.quantity} d-flex`}>
                        <button onClick={() => decrementCounter()}> <img src={QuantityRemove} alt="" /></button>
                        <input type="text" name="" value={inputScriptValue.weightage} id="" />
                        <button onClick={() => incrementCounter()}><img src={QuantityAdd} alt="" /></button>
                    </div>
                </div>
            </div>
        </label>
    </div>)

};

export default MasterScript;
import {useCallback, useContext,useEffect,useState} from "react"
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext';
import style from './style.module.scss'
import CrossIcon  from "/assets/dashboard/main_dashboard/admin/workflowPop/cross.svg"
import TagsInput from "./TagInput";
import { useReactFlow } from "reactflow";
const CreateIntent = () => {
  const contextWorkflow = useContext(ContextWorkflow);
  const rInstance = useReactFlow();
  //const [intentForm,setIntentForm] = useState({name:"",utterances:[]});
  const [intentName,setIntentName] = useState("");
  const [utterances,setUtterances] = useState(new Array());
  useEffect(()=>{
    if(contextWorkflow.inputIntent != null && contextWorkflow.inputIntent.id != 0)
    {
      setIntentName(contextWorkflow.inputIntent.name);
      setUtterances(contextWorkflow.inputIntent.utterances);
    }
    else
    {
      setIntentName("");
      setUtterances([]);
    }

  },[contextWorkflow.inputIntent]);
  const onSubmitIntent = useCallback((evt:any)=>{
    console.log("id",contextWorkflow.showIntentValue.length+1);
    const openedNodeId = contextWorkflow.openedNodeIntent;
      contextWorkflow.handleOnsubmitIntent(evt,{id:(contextWorkflow.inputIntent.id == 0)?contextWorkflow.showIntentValue.length+1:contextWorkflow.inputIntent.id,name:intentName,utterances:utterances},(contextWorkflow.inputIntent.id == 0)?'New':'Update');
      
      if(openedNodeId != 0 && contextWorkflow.inputIntent.id != 0)
      {
        rInstance.setNodes((nodes)=>{
          nodes.map((node)=>{
           if(node.id.toString() == openedNodeId.toString())
           {
              node.data.mediaContent[2].map((el:any,index:any)=>{
                if(el.id == contextWorkflow.inputIntent.id)
                {
                  node.data.mediaContent[2][index] = {id:contextWorkflow.inputIntent.id,name:intentName,utterances:utterances}
                }
              });
           }
          });
          return nodes;
        });
      }
      if(contextWorkflow.inputIntent.id == 0)
      {
        setIntentName("");
        setUtterances(new Array());
      }
      else
      {
        contextWorkflow.handleCreateIntent(false);
        
      }
  },[contextWorkflow.showIntentValue,intentName,utterances,contextWorkflow.inputIntent]);
  return (
    <div className={`${style.create_intent_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay"  onClick={()=>contextWorkflow.handleCreateIntent(false)}></div>
        <form onSubmit={(e)=>e.preventDefault()}  className={style.main_wrap}>
            <img src={CrossIcon} className={style.cross} alt=""  onClick={()=>contextWorkflow.handleCreateIntent(false)} />
            <h2>Create Intent</h2>
            <div className={style.form_control_wrap}>
              <label htmlFor="IntentName">Intent Name <span className={style.red}>*</span></label>
              <input type="text" name="name" className={style.form_control} id="IntentName" placeholder="Enter intent name" value={intentName} onChange={(evt)=>setIntentName(evt.target.value)} />
            </div>
            <div className={style.form_control_wrap}>
              <label htmlFor="Utterances">Utterances</label>
              <TagsInput utterances={utterances} onChangeUtterance={(value:any)=>{setUtterances(value)}}/>
            </div>
            <div className={`${style.button_area_wrap} d-flex align-items-center justify-content-end`}>
              <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>contextWorkflow.handleCreateIntent(false)}>Cancle</div>
              <button type="button" className={`${style.button} ${style.save} d-flex align-items-center justify-content-center`} onClick={onSubmitIntent}>
                {
                  contextWorkflow.intentClick === true ? "Update" : "Save"
                } 
              </button>
            </div>
        </form>
    </div>
  )
}

export default CreateIntent
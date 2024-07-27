import { ContextWorkflow } from '../../../../../../../contexts/workflowContext';
import CreateIntent from './CreateIntent';
import style from './style.module.scss'
import AddIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/add.svg"
import {useCallback, useContext, useEffect, useState} from "react";
import { useReactFlow } from 'reactflow';
const AddIntent = () => {
  console.log("add intent page reload");
  const contextWorkflow = useContext(ContextWorkflow);
  const rInstance = useReactFlow();
  
  
  const [intents,setIntentList] = useState(new Array());
  const generateIntentList = useCallback(()=>{
    console.log("intents",intents);
    let intentIdList:any = new Array();
    if(contextWorkflow.selectedNodeForSetting.data.mediaContent[2].length > 0)
    {
      contextWorkflow.selectedNodeForSetting.data.mediaContent[2].map((el:any,index:any)=>{
       intentIdList.push(el.id);
        if(index == contextWorkflow.selectedNodeForSetting.data.mediaContent[2].length - 1)
        {
          setIntentList(intentIdList);
        }
      });
    }
    else
    {
    //  alert(1);
      setIntentList(new Array());
    }
  },[contextWorkflow.selectedNodeForSetting,contextWorkflow.showIntentValue,intents,setIntentList]);
  const onSelectIntent = useCallback((intent:any)=>{
    rInstance.setNodes((nodes)=>{
      nodes.map((node)=>{
        if(node.id == contextWorkflow.selectedNodeForSetting.id)
        {
          node.data.mediaContent[2] = [...node.data.mediaContent[2],intent];
          contextWorkflow.handleWorkflowSettings(node);
         generateIntentList();
        }
      });
      return nodes;
    })
  },[contextWorkflow.selectedNodeForSetting,rInstance,generateIntentList]);
  
  useEffect(()=>{
    generateIntentList();
    contextWorkflow.handleCloseAddIntentPop();
  },[contextWorkflow.selectedNodeForSetting]);
  return (
    <>
        {contextWorkflow.addIntentPop && <div className={style.list_intent_wrap}>
            <ul className={style.details}>
                { 
                  contextWorkflow.showIntentValue.map((item:any,i)=>{
                    return(
                      (intents.indexOf(item.id) < 0 || intents.length == 0)?<li key={i} onClick={()=>{contextWorkflow.handleCloseAddIntentPop();onSelectIntent(item)}}>{item.name}</li>:null
                    )
                  })
                }
                <li className="d-flex align-items-center" onClick={()=>contextWorkflow.handleCreateIntent(true)}>
                    <span><img src={AddIcon} alt="" /></span> 
                    <span>Create Intent</span>
                </li>
            </ul>
        </div>}
        { contextWorkflow.createIntent ? <CreateIntent /> :  null }
        
    </>
    
  )
}

export default AddIntent
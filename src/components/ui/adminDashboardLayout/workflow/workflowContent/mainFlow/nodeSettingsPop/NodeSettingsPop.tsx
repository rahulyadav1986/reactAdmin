import { useContext, useState, useCallback, useEffect } from 'react'
import style from './style.module.scss'
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/workflow/cross.svg";
import RestrictIcon from "/assets/dashboard/main_dashboard/admin/restrict.svg";
import CloseIcon from "/assets/dashboard/main_dashboard/admin/close.svg";
import MaleIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/male.svg"
import FeMaleIcon from "/assets/dashboard/main_dashboard/admin/workflowPop/female.svg"
import { getIncomers, useReactFlow } from 'reactflow';
import AiContent from './AiContent';
import UseAudio from './UseAudio';
import Intents from './Intents';
import ConditionContent from './ConditionContent';
import WebHooks from './WebHooks';
import { SkillsData } from '../../../../platformConfiguration/platformConfigurationContent/callScript/callScriptTemplates/Data';
import useToggle from '../../../../../../../hooks/useToggle';
import ArrowCompose from "/assets/dashboard/main_dashboard/admin/workflow/arrowCompose.svg";
import EditorContent from './EditorContent';
//import { NodeOptionData } from '../nodeOptionPopup/Data';
const NodeSettingsPop = ({ ...props }) => {
  const contextWorkflow = useContext(ContextWorkflow);
  const reactFlowInstance = useReactFlow();
  const [selectedNode, setSelectedNodeData] = useState(contextWorkflow.selectedNodeForSetting);
  const [nodeLabel, setNodeLabel] = useState(contextWorkflow.selectedNodeForSetting.data.label);
  const [nodeDesc, setNodeDesc] = useState(contextWorkflow.selectedNodeForSetting.data.description);
  const [nodeMediaTab, setMediaTab] = useState(contextWorkflow.selectedNodeForSetting.data.selectedMediaTab);
  const [childNodeCount, setChildNodeCount] = useState(contextWorkflow.selectedNodeForSetting.data.childNodeCount);
  const [elementType, setElementType] = useState(selectedNode.type);
  const [moduleList, setModuleList] = useState(new Array());
  const [selectedModuleName, setSelectedModuleName] = useState("");
  const [moduleDetails, setModuleDetails] = useState([]);
  const [mediaContent, setMediaContent] = useState(contextWorkflow.selectedNodeForSetting.data.mediaContent);
  const [webhookDetails, setWebhookDetails] = useState(contextWorkflow.selectedNodeForSetting.data.webhookDetails);
  const [selectedTransferTo, setTransferTo] = useState(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.selectedTab);
  const [transferTabInfo, setTransferTabInfo] = useState(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo);
  const [selectedSkill, setSelectedSkills] = useState(new Array());
  const [voiceNodeInfo, setVoiceNodeInfo] = useState(contextWorkflow.selectedNodeForSetting.data.voiceNodeInfo);
  const [audienceList, setAudienceList] = useState(contextWorkflow.selectedNodeForSetting.data.audienceList);
  const [messageContent, setMessageContent] = useState(contextWorkflow.selectedNodeForSetting.data.messageContent);
  const [isDeleteNode,setIsDeleteNodeAvailable] = useState(true);
  const accentArr:any = {
    'english':['British','American'],
    'german':['Bavarian','Swiss']
  };
  const [accentList,setAccentList] = useState([]);
  //const [nodeOptionList,setNodeOptionList] = useState([]);
  const onLabelChange = useCallback((evt: any) => {
    setNodeLabel(evt.target.value);
    //console.log(selectedNode.data.label, evt.target.value);
    props.onLabelChange(selectedNode, evt.target.value);
    // contextWorkflow.handleWorkflowSettings(selectedNode);
  }, [setNodeLabel, setSelectedNodeData, selectedNode]);
  const onDescChange = useCallback((evt: any) => {
    setNodeDesc(evt.target.value);
    // console.log("desc change",selectedNode.data.description, evt.target.value);
    props.onDescriptionChange(selectedNode, evt.target.value);
    // contextWorkflow.handleWorkflowSettings(selectedNode);
  }, [setNodeDesc, setSelectedNodeData, selectedNode]);

  const onWebhookDetailsChange = useCallback((webhookDetails: any) => {
    setWebhookDetails(webhookDetails);
    props.onWebhookDetailsChange(selectedNode, webhookDetails);
  }, [selectedNode, props.onWebhookDetailsChange, webhookDetails]);
  useEffect(() => {
    reactFlowInstance.setNodes((nodes) =>
      nodes.map((n) => {
        if (selectedNode.id === n.id) {
          return {
            ...n,
            data: {
              ...n.data,
              nodeLabel
            }
          };
        }

        return n;
      })
    );
  }, [nodeLabel]);

  const onChildNodeCountChange = useCallback((evt: any) => {
    setChildNodeCount(evt.target.value);
    setSelectedNodeData((el) => {
      el.data.childNodeCount = evt.target.value;
      return el;
    });
    props.onNodeCountChange(selectedNode, evt.target.value);
  }, [setChildNodeCount, selectedNode]);

  const [confirmDeletePop, setConfirmDeletePop] = useState(false)
  const handleConfirmDeletePop = (id: any) => {
    setConfirmDeletePop(id)
  }

  const deleteClickHandler = useCallback(() => {
    let runningWorkflowInfo = (contextWorkflow.runningWorkflowInfo != "")?JSON.parse(contextWorkflow.runningWorkflowInfo):"";
    if(runningWorkflowInfo.connectedWith != undefined && runningWorkflowInfo.connectedWith != "" && runningWorkflowInfo.connectedWith != null)
    {
      delete runningWorkflowInfo['connectedWith'];
    }
    contextWorkflow.handleRunningWorkflowInfo(JSON.stringify(runningWorkflowInfo));
    setConfirmDeletePop(false)
    props.onDeleteNode(selectedNode);
  }, [selectedNode]);

  const deleteConditionHandler = useCallback((nodeToDelete: Node) => {
    props.onDeleteNode(nodeToDelete);
  }, [props]);
  const onModuleSelect = useCallback((evt: any) => {
    //selectedNode.data.moduleName = evt.target.value;
    setSelectedModuleName(evt.target.value);
    setNodeLabel(evt.target.value);
    if (evt.target.value != "") {
      reactFlowInstance.setNodes((nodes) => {
        nodes.map((el) => {
          if (el.id == selectedNode.id) {
            if (el.data.moduleName != undefined && el.data.moduleName != null) {
              contextWorkflow.handleWorkFlowModuleTabList({ "name": el.data.moduleName, "nodeInfo": el }, "delete");
              el.data.moduleName = evt.target.value;
            }
            else {
              el.data.moduleName = evt.target.value;
            }
            el.data.moduleDetails = moduleDetails[evt.target.value]['workflow'];
            el.data.label = evt.target.value;
            selectedNode.data = el.data;
            console.log("module details", moduleDetails[evt.target.value], moduleDetails);
            //contextWorkflow.handleWorkflowSettings(el);
            return el;
          }
        });
        return nodes;
      });
      contextWorkflow.handleWorkFlowModuleTabList({ "name": evt.target.value, "nodeInfo": selectedNode });
    }
    else {
      reactFlowInstance.setNodes((nodes) => {
        nodes.map((el) => {
          if (el.id == selectedNode.id) {
            if (el.data.moduleName != undefined && el.data.moduleName != null) {
              contextWorkflow.handleWorkFlowModuleTabList({ "name": el.data.moduleName, "nodeInfo": el }, "delete");
            }
            el.data.moduleName = "";
            el.data.moduleDetails = null;
            selectedNode.data = el.data;
            // contextWorkflow.handleWorkflowSettings(el);
            return el;
          }

        });
        return nodes;
      });
    }


  }, [selectedNode, moduleDetails, moduleList]);

  // Transfer to tab select -------------------
  const onTransferToChange = useCallback((tabId: number) => {
    setTransferTo(tabId);
    let transferTabInfo = contextWorkflow.selectedNodeForSetting.data.transferTabInfo;
    transferTabInfo['selectedTab'] = tabId;
    props.onTransferInfoUpdate(contextWorkflow.selectedNodeForSetting, transferTabInfo);
  }, [props.onTransferInfoUpdate, selectedTransferTo, contextWorkflow.selectedNodeForSetting]);
  const onTransferTabDataChange = useCallback((event: any) => {
    const { name, value } = event.target;
    console.log("transfer tab change", name, value);
    let tabInfo = contextWorkflow.selectedNodeForSetting.data.transferTabInfo;
    tabInfo['tabInfo'][selectedTransferTo][name] = value;
    props.onTransferInfoUpdate(selectedNode, tabInfo);
  }, [selectedTransferTo, props.onTransferInfoUpdate, contextWorkflow.selectedNodeForSetting, selectedNode]);
  // load settings data as selected node -------------------
  useEffect(() => {
    let runningWorkflowInfo = (contextWorkflow.runningWorkflowInfo != "")?JSON.parse(contextWorkflow.runningWorkflowInfo):null;
    if(runningWorkflowInfo.connectedWith != undefined && runningWorkflowInfo.connectedWith != "" && runningWorkflowInfo.connectedWith != null)
    {
      const sourceNode: any  = reactFlowInstance.getNode(contextWorkflow.selectedNodeForSetting.id);
      let incomers = getIncomers(sourceNode,reactFlowInstance.getNodes(),reactFlowInstance.getEdges());
      console.log("incomers",incomers);
      if(incomers.length > 0)
      {
        if(sourceNode.type == runningWorkflowInfo.type && incomers[0].type == 'Trigger')
        {
          setIsDeleteNodeAvailable(false);
        }
        else
        {
          setIsDeleteNodeAvailable(true);
        }
      }
      else
      {
        setIsDeleteNodeAvailable(true);
      }
    }
    else
    {
      setIsDeleteNodeAvailable(true);
    }
    setSelectedNodeData(contextWorkflow.selectedNodeForSetting);
    setNodeLabel(contextWorkflow.selectedNodeForSetting.data.label);
    console.log("selected data node", contextWorkflow.selectedNodeForSetting.data);
    setNodeDesc(contextWorkflow.selectedNodeForSetting.data.description);
    setMediaTab(contextWorkflow.selectedNodeForSetting.data.selectedMediaTab);
    setMediaContent(contextWorkflow.selectedNodeForSetting.data.mediaContent);
    setChildNodeCount(contextWorkflow.selectedNodeForSetting.data.childNodeCount);
    setTransferTo(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.selectedTab);
    setTransferTabInfo(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo);
    setTransferIVRDropValue((contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[2].ivr != undefined) ? contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[2].ivr : "Choose IVR");
    setTransferChatDropValue((contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[1].chat != undefined) ? contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[1].chat : "Choose Chat")
    toggleTransferChatDrop(false);
    toggleTransferSkillDrop(false);
    toggleTransferIVRDrop(false);
    //alert(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[0].skill.length);
    if (contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[0].skill != undefined) {
      setSelectedSkills(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[0].skill);
    }
    else {
      setSelectedSkills(new Array());
    }
    if (contextWorkflow.selectedNodeForSetting.data.selectedElementType != undefined) {
      setElementType(contextWorkflow.selectedNodeForSetting.data.selectedElementType);
    }
    else {
      setElementType(contextWorkflow.selectedNodeForSetting.type);
    }
    let moduleListArr: any = localStorage.getItem("savedFlows");
    //console.log("local saved data", moduleListArr)
    if (moduleListArr != null) {
      let tempModuleList = JSON.parse(moduleListArr);
      console.log("local module list", tempModuleList);
      if (tempModuleList['Modules'] != undefined && Object.keys(tempModuleList['Modules']).length > 0) {
        setModuleList(Object.keys(tempModuleList['Modules']));
        setModuleDetails(tempModuleList['Modules']);
        // let optionsList = [NodeOptionData[1]['options'],...Object.values(tempModuleList['Modules'])];
        // console.log("node option data",optionsList);
        // alert(selectedNode.data.moduleName+" --- "+selectedNode.data.label);
        if (contextWorkflow.selectedNodeForSetting.data.moduleName != undefined && contextWorkflow.selectedNodeForSetting.data.moduleName != "") {
          setSelectedModuleName(contextWorkflow.selectedNodeForSetting.data.moduleName);

        }
        else {
          setSelectedModuleName("");
        }
      }
    }
    else {
      setModuleList([]);
      setModuleDetails([]);
    }
    setWebhookDetails(contextWorkflow.selectedNodeForSetting.data.webhookDetails);
    setAudienceList(contextWorkflow.selectedNodeForSetting.data.audienceList);
    setMessageContent(contextWorkflow.selectedNodeForSetting.data.messageContent);
    setVoiceNodeInfo(contextWorkflow.selectedNodeForSetting.data.voiceNodeInfo);
    console.log(voiceNodeInfo);
  }, [contextWorkflow.selectedNodeForSetting]);
  // const nodes = reactFlowInstance.getNodes();
  // console.log("all nodes",nodes);
  useEffect(() => {
    // alert(1);
    reactFlowInstance.setNodes((nodes) =>
      nodes.map((n) => {
        if (selectedNode.id === n.id) {
          n.data.selectedElementType = elementType;
          if (elementType == 'Module') {
            n.type = 'Module';
          }
          else {
            n.type = elementType;
          }
        }

        return n;
      })
    );
    selectedNode.type = (elementType == 'Module') ? 'Module' : elementType;
    props.onNodeTypeChange(selectedNode.id)
  }, [elementType]);

  const nodeConditionLabelChangeHandler = useCallback((index: any, value: any) => {
    selectedNode.data.conditions[index].label = value;
    contextWorkflow.handleWorkflowSettings(selectedNode);
    props.onConditionLabelChangeHandler(selectedNode, value, index);
  }, [reactFlowInstance, selectedNode]);

  const handleMediaContent = useCallback((value: any, index: any) => {
    console.log("media content update", value, index);
    // setMediaContent((mediaContent:any)=>{
    //   mediaContent[index] = value;
    //   return mediaContent;
    // });

    reactFlowInstance.setNodes((nodes) => {
      nodes.map((nds) => {
        if (nds.id === contextWorkflow.selectedNodeForSetting.id) {
          // alert(tabID+" "+mediaContentValue)
          nds.data.mediaContent[index] = value;
        }
      });
      return nodes;
    });
    selectedNode.data.mediaContent[index] = value;
    // contextWorkflow.handleWorkflowSettings(selectedNode);
    props.onMediaContentUpdate(value, index);
  }, [selectedNode, props.onMediaContentUpdate]);

  const intentDeleteHandler = useCallback((intentID: any) => {
    props.onIntentDelete(intentID);
  }, [props]);

  const [transferSkillDrop, toggleTransferSkillDrop] = useToggle(false)
  const [transferChatDrop, toggleTransferChatDrop] = useToggle(false)
  const [transferChatDropValue, setTransferChatDropValue] = useState((contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[1].chat != undefined) ? contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[1].chat : "Choose Chat");
  const handleTransferChatDropValue = (e: any) => {
    setTransferChatDropValue(e.target.textContent);
    let tabInfo = contextWorkflow.selectedNodeForSetting.data.transferTabInfo;
    tabInfo['tabInfo'][selectedTransferTo]['chat'] = e.target.textContent;
    props.onTransferInfoUpdate(selectedNode, tabInfo);
    toggleTransferChatDrop(false)
  }
  const [transferIVRDrop, toggleTransferIVRDrop] = useToggle(false)
  const [transferIVRDropValue, setTransferIVRDropValue] = useState((contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[2].ivr != undefined) ? contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[2].ivr : "Choose IVR");
  const handleTransferIVRDropValue = (e: any) => {
    setTransferIVRDropValue(e.target.textContent);
    let tabInfo = contextWorkflow.selectedNodeForSetting.data.transferTabInfo;
    tabInfo['tabInfo'][selectedTransferTo]['ivr'] = e.target.textContent;
    props.onTransferInfoUpdate(selectedNode, tabInfo);
    toggleTransferIVRDrop(false);
  }

  const onSelectSkill = useCallback((event: any) => {
    if (event.target.checked == true) {
      setSelectedSkills([...selectedSkill, event.target.value]);
    }
    else {
      setSelectedSkills((selectedSkill) => selectedSkill.filter((skill) => skill != event.target.value));
    }
  }, [selectedSkill]);

  const onSkillSelectApply = useCallback(() => {
    console.log("selected skill", selectedSkill);
    let tabInfo = contextWorkflow.selectedNodeForSetting.data.transferTabInfo;
    tabInfo['tabInfo'][selectedTransferTo]['skill'] = selectedSkill;
    props.onTransferInfoUpdate(selectedNode, tabInfo);
    toggleTransferSkillDrop(false);
  }, [selectedSkill, contextWorkflow.selectedNodeForSetting, props.onTransferInfoUpdate, selectedNode]);

  const onSkillCancelHandler = useCallback(() => {
    if (contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[0].skill != undefined) {
      setSelectedSkills(contextWorkflow.selectedNodeForSetting.data.transferTabInfo.tabInfo[0].skill);
    }
    else {
      setSelectedSkills([]);
    }
    toggleTransferSkillDrop(false);
  }, [contextWorkflow.selectedNodeForSetting]);

  const [smsChatPop, setSmsChatPop] = useState(false)
  const handleSmsChatPop = (id: any) => {
    setSmsChatPop(id)
  }
  const onsaveMessageHandler = useCallback((formData: any) => {
    if (formData == false) {
      handleSmsChatPop(false);
    }
    else {
      console.log("message content form data 1", formData);
      setMessageContent(formData);
      props.onMessageContentUpdate(selectedNode, formData);
      handleSmsChatPop(false);
    }

  }, [smsChatPop, messageContent, props]);
  const onAudienceListSelect = (value: any) => {
    setAudienceList(value);
    props.onAudienceListUpdate(selectedNode, value);

  };
  const onVoiceNodeInfoUpdate = (fieldName: string, value: any) => {
    console.log("node info update",fieldName,value);
    if(fieldName == 'language')
    {
      const newVoiceInfo = {...voiceNodeInfo};
      newVoiceInfo['language'] = value;
      newVoiceInfo['accent'] = '';
      setVoiceNodeInfo(newVoiceInfo);
      props.onVoiceNodeUpdate(selectedNode,newVoiceInfo);
      if(value == "")
      {
        setAccentList([]);
      }
      else
      {
        setAccentList(accentArr[value]);
      }
    }
    else
    {
      setVoiceNodeInfo({ ...voiceNodeInfo, [fieldName]: value });
      props.onVoiceNodeUpdate(selectedNode, { ...voiceNodeInfo, [fieldName]: value });
    }
  };
  return (
    <>
      {/* <div className="node_settings_overlay" ></div> */}
      <div className={style.node_settings_wrapper}>
        <div className={`${style.node_settings_header} d-flex align-items-center justify-content-between`}>
          <ul className={`${style.list_tab} d-flex`}>
            <li className={`${contextWorkflow.settingsNodeTab === 0 ? style.active : null}`} onClick={() => contextWorkflow.handleSettingsNodeTab(0)}>Properties</li>
            <li className={`${contextWorkflow.settingsNodeTab === 1 ? style.active : null}`} onClick={() => contextWorkflow.handleSettingsNodeTab(1)}>Web-hooks</li>
          </ul>
          <div className={`${style.delete_node} d-flex align-items-center`}>
            {isDeleteNode == true && <span onClick={() => handleConfirmDeletePop(true)}>Delete Node</span>}
            <span onClick={() => { contextWorkflow.handleWorkflowSettingsPop(false); contextWorkflow.handleWorkflowSettings({} as Node); }}><img src={CrossIcon} alt="" /></span>
          </div>
        </div>
        {
          contextWorkflow.settingsNodeTab === 0 ?
            <div className={style.node_details}>
              <h3>GENERAL</h3>
              <div className={style.form_control_wrap}>
                <label htmlFor="node_name">Node name <span>*</span> </label>
                <input type="text" name="" id="" placeholder='Node Name' className={style.form_control} value={nodeLabel} onChange={onLabelChange} />
              </div>
              <div className={`${style.form_control_wrap} ${style.textarea}`}>
                <label htmlFor="Description">Description</label>
                <textarea className={style.form_control} onChange={onDescChange} value={nodeDesc} />
              </div>
              {selectedNode.type != 'End' && selectedNode.type != 'Exit' && selectedNode.type != 'Condition' && selectedNode.type != 'Intent' && selectedNode.type != 'Transfer' && selectedNode.type != 'sms' && selectedNode.type != 'whatsapp' && <div className={style.configure_check}>
                <input type="checkbox" name="" id="audio" />
                <label htmlFor="audio" className='d-flex align-items-center'>
                  <span className={style.check_wrap}>
                    <span></span>
                  </span>
                  CONFIGURE IVR AUDIO
                </label>
              </div>}

              {
                selectedNode.type === 'sms' || selectedNode.type === 'whatsapp' ?
                  <h3>CONTENT</h3> : null
              }

              {selectedNode.type != 'Condition' && selectedNode.type != 'Exit' && selectedNode.type != 'End' && selectedNode.type != 'Transfer' && <div className={style.use_media_wrapper}>
                {selectedNode.type != 'Intent' && selectedNode.type != 'sms' && selectedNode.type != 'whatsapp' && <ul className={`${style.media_list} d-flex align-items-center`}>
                  <li className={`${nodeMediaTab === 0 ? style.active : null}`} onClick={() => { props.onMediaTabChange(0); setMediaTab(0); }}>
                    <label>
                      <span></span> Use AI Text
                    </label>
                  </li>
                  <li className={`${nodeMediaTab === 1 ? style.active : null}`} onClick={() => { props.onMediaTabChange(1); setMediaTab(1); }}>
                    <label >
                      <span></span> Use Recorded Audio
                    </label>
                  </li>
                  {/* <li className={`${nodeMediaTab === 2 ? style.active : null}`} onClick={() => { props.onMediaTabChange(2); setMediaTab(2); }}>
                    <label htmlFor="intents">
                      <span></span> Intents
                    </label>
                  </li> */}
                </ul>}

                {
                  selectedNode.type === 'sms' || selectedNode.type === 'whatsapp' ?
                    <div className={style.use_media_wrapper}>
                      <ul className={`${style.media_list} d-flex align-items-center`}>
                        <li className={`${nodeMediaTab === 0 ? style.active : null}`} onClick={() => { props.onMediaTabChange(0); setMediaTab(0); }}>
                          <label>
                            <span></span> Compose SMS/MMS Message
                          </label>
                        </li>
                      </ul>
                    </div>
                    : null
                }

                <div className={style.media_content_wrapper}>
                  {nodeMediaTab === 0 && selectedNode.type != 'Intent' && selectedNode.type != 'sms' && selectedNode.type != 'whatsapp' ? <AiContent value={mediaContent[0]} onAiTextChange={(value: any) => { handleMediaContent(value, 0); }} /> : null}
                  {nodeMediaTab === 1 && selectedNode.type != 'Intent' && selectedNode.type != 'sms' && selectedNode.type != 'whatsapp' ? <UseAudio content={mediaContent[1]} onAudioFileChange={(value: any) => { handleMediaContent(value, 1); }} /> : null}
                  {selectedNode.type == 'Intent' && <><h3>ATTACH INTENT</h3><Intents intents={mediaContent[2]} onIntentDelete={intentDeleteHandler} /></>}
                  {
                    selectedNode.type === 'sms' || selectedNode.type === 'whatsapp' ?
                      <div className={style.media_compose}>
                        {/* <ComposeMessage value={mediaContent[3]} onAiTextChange={(value: any) => { handleMediaContent(value, 3); }} /> */}
                        <div className={style.ai_wrapper}>
                          <textarea placeholder="" value={messageContent.text} onChange={(evt) => onsaveMessageHandler({ ...messageContent, ["text"]: evt.target.value })} maxLength={120} />
                          <span>{messageContent.text.length > 120 ? 0 : 120 - (messageContent.text.length)}/120</span>

                        </div>
                        <div className={`${style.compose} d-flex align-items-center`} onClick={() => handleSmsChatPop(true)}>
                          Compose in Editor
                          <span><img src={ArrowCompose} alt="" /></span>
                        </div>
                        {
                          smsChatPop === true ?
                            <div className={`${style.sms_chat_pop_wrapper} d-flex align-items-center justify-content-center`}>
                              <div className="overlay" onClick={() => handleSmsChatPop(false)}></div>
                              <div className={style.main_area}>
                                <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                                  <h3>Edit SMS</h3>
                                  <span className={style.Cross} onClick={() => handleSmsChatPop(false)}><img src="/assets/dashboard/main_dashboard/admin/reports/reportCross.svg" alt="" /></span>
                                </div>

                                <EditorContent messageContent={messageContent} onSaveMessageHandler={onsaveMessageHandler} />


                              </div>
                            </div> : null
                        }

                      </div>
                      : null
                  }
                </div>
                {/* {
                  selectedNode.type === 'sms' || selectedNode.type === 'whatsapp' ? <div className={style.media_content_wrapper}><ComposeMessage value={mediaContent[3]} onAiTextChange={(value: any) => { handleMediaContent(value, 3); }} /> </div> : null
                } */}
              </div>}


              {
                selectedNode.type == 'voice' &&
                <>
                <div className={style.form_control_wrap}>
                    <label htmlFor="node_count">Language </label>
                    <select id="" className={`${style.form_control} ${style.select}`} onChange={(evt) => onVoiceNodeInfoUpdate("language",evt.target.value)} value={voiceNodeInfo.language}>
                      <option value="">Select Language</option>
                      <option value="english">English</option>
                      <option value="german">German</option>
                    </select>
                  </div>
                  <div className={style.form_control_wrap}>
                    <label htmlFor="node_count">Accent </label>
                    <select id="" className={`${style.form_control} ${style.select}`} onChange={(evt) => onVoiceNodeInfoUpdate("accent",evt.target.value)} value={voiceNodeInfo.accent}>
                      <option value="">Select Accent</option>
                      {
                        accentList.map((el)=>{
                          return <option value={el} key={el}>{el}</option>
                        })
                      }
                    </select>
                  </div>
                  <div className={style.form_control_wrap}>
                    <label>Voice</label>
                    <div className={`${style.check_wrapper}  d-flex align-items-center`}>

                      <div className={style.checkarea}>
                        <input type="radio" name="gender" id="male" value="male" checked={(voiceNodeInfo.voice == "male"?true:false)} onChange={(evt)=>onVoiceNodeInfoUpdate("voice",evt.target.value)}/>
                        <label htmlFor="male" className="d-flex align-items-center">
                          <span><img src={MaleIcon} alt="" /></span>
                          <span>Male Voice</span>
                        </label>
                      </div>
                      <div className={style.checkarea}>
                        <input type="radio" name="gender" id="female"  value="female" checked={(voiceNodeInfo.voice == "female"?true:false)} onChange={(evt)=>onVoiceNodeInfoUpdate("voice",evt.target.value)} />
                        <label htmlFor="female" className="d-flex align-items-center">
                          <span><img src={FeMaleIcon} alt="" /></span>
                          <span>Female Voice</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={style.form_control_wrap}>
                    <label htmlFor="retries"># of Retries </label>
                    <input type="text" name="" id="retries" className={style.form_control} value={voiceNodeInfo.retries} onChange={(evt) => onVoiceNodeInfoUpdate("retries", evt.target.value)} />
                  </div>
                </>
              }




              {selectedNode.type != 'Module' && selectedNode.type != 'Condition' && selectedNode.type != 'Exit' && selectedNode.type != 'End' && selectedNode.type != 'Intent' && selectedNode.type != 'Transfer' &&
                <>
                  <h3>NODES</h3>
                  <div className={style.form_control_wrap}>
                    <label htmlFor="node_count">Number of Nodes </label>
                    <input type="text" name="" id="node_count" className={style.form_control} value={childNodeCount} onChange={onChildNodeCountChange} />
                  </div>
                </>
              }
              {
                (selectedNode.type == 'General' || selectedNode.type == 'Module') &&
                <div className={style.form_control_wrap}>
                  <label htmlFor="node_count">Node Type </label>
                  <ul className={`${style.media_list} d-flex align-items-center`}>
                    {/* <li className={`${contextWorkflow.workflowSettingTypeTab === 0 ? style.active : null}`} onClick={() => contextWorkflow.handleWorkflowSettingTypeTab(0)}> */}
                    <li className={`${elementType === selectedNode.data.elementType ? style.active : null}`} onClick={() => setElementType(selectedNode.data.elementType)}>
                      <label>
                        <span></span> Default
                      </label>
                    </li>
                    {/* <li className={`${contextWorkflow.workflowSettingTypeTab === 1 ? style.active : null}`} onClick={() => contextWorkflow.handleWorkflowSettingTypeTab(1)}> */}
                    <li className={`${elementType == 'Module' ? style.active : null}`} onClick={() => setElementType("Module")}>
                      <label>
                        <span></span> Module
                      </label>
                    </li>

                  </ul>
                  {
                    elementType == 'Module' ?
                      <select id="" className={`${style.form_control} ${style.select}`} onChange={onModuleSelect} value={selectedModuleName}>
                        <option value="">Select Module</option>
                        {
                          moduleList.map((el) => {
                            return <option value={el}>{el}</option>;
                          })
                        }
                      </select> : null
                  }
                </div>
              }
              {(selectedNode.type == 'sms' || selectedNode.type == 'whatsapp' || selectedNode.type == 'voice') &&
                <>
                  <h3>Recipients</h3>
                  <div className={style.form_control_wrap}>
                    <label htmlFor="node_count">Audience List </label>
                    <select id="" className={`${style.form_control} ${style.select}`} onChange={(evt) => onAudienceListSelect(evt.target.value)} value={audienceList}>
                      <option value="">Select subscriber list</option>
                      <option value="subscriber one">Subscriber one</option>
                      <option value="subscriber two">Subscriber two</option>
                    </select>
                  </div>
                </>
              }

              {selectedNode.type == 'Condition' && <ConditionContent onConditionLabelChange={nodeConditionLabelChangeHandler} onVariableAdd={(variableName: any) => props.onConditionVariableAdd(variableName, selectedNode)} onConditionAdd={(index: any, value: any) => props.onConditionInfoAdd(selectedNode, index, value)} onConditionInfoRemove={(index: any, elIndex: any) => props.onConditionInfoRemove(selectedNode, index, elIndex)} onConditionNodeDelete={deleteConditionHandler} moduleList={moduleDetails} />}
              {selectedNode.type == 'Transfer' &&
                <div className={style.form_control_wrap}>
                  <h3>TRANSFER TO</h3>
                  <ul className={`${style.media_list} d-flex align-items-center`}>
                    <li className={`${selectedTransferTo === 0 ? style.active : null}`} onClick={() => { onTransferToChange(0); }}>
                      <label>
                        <span></span> Agent
                      </label>
                    </li>
                    <li className={`${selectedTransferTo === 1 ? style.active : null}`} onClick={() => { onTransferToChange(1); }}>
                      <label >
                        <span></span> Chat
                      </label>
                    </li>
                    <li className={`${selectedTransferTo === 2 ? style.active : null}`} onClick={() => { onTransferToChange(2); }}>
                      <label >
                        <span></span> IVR
                      </label>
                    </li>
                    <li className={`${selectedTransferTo === 3 ? style.active : null}`} onClick={() => { onTransferToChange(3); }}>
                      <label >
                        <span></span> DID
                      </label>
                    </li>
                  </ul>
                </div>}
              {selectedNode.type == 'Transfer' && selectedTransferTo == 0 &&
                <div className={style.form_control_wrap}>
                  {/* <select id="transferSkill" name="skill" className={`${style.form_control} ${style.select}`} onChange={onTransferTabDataChange} value={(transferTabInfo[0].skill != undefined)?transferTabInfo[0].skill:""}>
                    <option value="">Select skills</option>
                    {
                      SkillsData.map((el) => {
                        return <option value={el.id}>{el.skill}</option>;
                      })
                    }
                  </select> */}

                  <div className={style.portion}>
                    <label htmlFor='transferSkill'>Skills</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleTransferSkillDrop}>
                      <span>{(selectedSkill.length > 0) ? selectedSkill.length + " selected" : "Choose Skills"}</span>
                      <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                    </div>
                  </div>
                  {
                    transferSkillDrop &&
                    <div className={style.skill_drop_area_wrapper}>
                      {/* <div className={style.top_area}>
                        <div className={`${style.search_box} d-flex align-items-center`}>
                          <img src="/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg" alt="" />
                          <input type="text" name="" id="" placeholder="Search skills" />
                        </div>
                        <div className={style.check_box_wrapper}> 
                            <input type="checkbox" name="xxxxx" id="selectAll" />
                            <label htmlFor="selectAll" ><span></span>Select All</label>
                        </div>
                      </div> */}
                      <div className={style.filter_area}>
                        {
                          SkillsData.map((el) => {
                            return (
                              <div className={style.check_box_wrapper}>
                                <input type="checkbox" id={el.id} value={el.id} checked={(selectedSkill.indexOf(el.id) >= 0 ? true : false)} onChange={onSelectSkill} />
                                <label htmlFor={el.id}><span></span>{el.skill}</label>
                              </div>
                            )
                          })
                        }

                      </div>
                      <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={onSkillCancelHandler}>
                          Cancel
                        </div>
                        <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={onSkillSelectApply}>
                          Apply
                        </div>
                      </div>
                    </div>
                  }


                </div>
              }
              {selectedNode.type == 'Transfer' && selectedTransferTo == 1 &&
                <div className={style.form_control_wrap}>

                  {/* <select id="transferToChat" name="chat" className={`${style.form_control} ${style.select}`} onChange={onTransferTabDataChange} value={(transferTabInfo[1].chat != undefined)?transferTabInfo[1].chat:""}>
                    <option value="">Select chat</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="webchat">WebChat</option>
                    <option value="fb">Facebook Messenger</option>
                  </select> */}
                  <div className={style.portion}>
                    <label htmlFor='transferToChat'>Chat type</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleTransferChatDrop}>
                      <span>{transferChatDropValue}</span>
                      <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                    </div>
                    {
                      transferChatDrop &&
                      <ul className={style.drop_area}>
                        <li onClick={handleTransferChatDropValue}>WhatsApp</li>
                        <li onClick={handleTransferChatDropValue}>WebChat</li>
                        <li onClick={handleTransferChatDropValue}>Facebook Messenger</li>
                      </ul>
                    }

                  </div>
                </div>
              }
              {selectedNode.type == 'Transfer' && (selectedTransferTo == 2 || selectedTransferTo == 3) &&
                <div className={style.form_control_wrap}>
                  <label htmlFor='incoming_did'>Incoming DID</label>
                  <input type="text" name="incoming" id="incoming_did" className={style.form_control} onChange={onTransferTabDataChange} value={(transferTabInfo[selectedTransferTo].incoming != undefined) ? transferTabInfo[selectedTransferTo].incoming : ""} />
                </div>
              }
              {selectedNode.type == 'Transfer' && selectedTransferTo == 2 &&
                <div className={style.form_control_wrap}>

                  {/* <select id="transferToIVR" name="ivr" className={`${style.form_control} ${style.select}`} onChange={onTransferTabDataChange} value={(transferTabInfo[selectedTransferTo].ivr != undefined)?transferTabInfo[selectedTransferTo].ivr:""}>
                    <option value="">Select IVR</option>
                    <option value="IVR1">IVR 1</option>
                    <option value="IVR2">IVR 2</option>
                  </select> */}
                  <div className={style.portion}>
                    <label htmlFor='transferToIVR'>Transfer to IVR</label>
                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={toggleTransferIVRDrop}>
                      <span>{transferIVRDropValue}</span>
                      <span><img src="/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg" alt="" /></span>
                    </div>
                    {
                      transferIVRDrop &&
                      <ul className={style.drop_area}>
                        <li onClick={handleTransferIVRDropValue}>IVR 1</li>
                        <li onClick={handleTransferIVRDropValue}>IVR 2</li>
                      </ul>
                    }

                  </div>
                </div>
              }
              {selectedNode.type == 'Transfer' && selectedTransferTo == 3 &&
                <div className={style.form_control_wrap}>
                  <label htmlFor="node_count">Outgoing DID</label>
                  <input type="text" name="outgoing" id="outgoing_did" className={style.form_control} onChange={onTransferTabDataChange} value={(transferTabInfo[selectedTransferTo].outgoing != undefined) ? transferTabInfo[selectedTransferTo].outgoing : ""} />
                </div>
              }




            </div> :
            contextWorkflow.settingsNodeTab === 1 ?
              <div className={style.node_details}>
                <WebHooks nodeInfo={selectedNode} onWebhookDetailsChange={onWebhookDetailsChange} onChange={onTransferTabDataChange} />
              </div>
              : null
        }


      </div>

      {
        confirmDeletePop ?
          <div className={style.delete_node_popup_wrapper}>
            <div className="overlay"></div>
            <div className={style.main_wrap}>
              <img src={CloseIcon} className={style.close} onClick={() => handleConfirmDeletePop(false)} alt="" />
              <span><img src={RestrictIcon} alt="" /></span>
              <h2>Delete Node</h2>
              <p>Are you sure you would like to delete the node ?</p>
              <div className={style.button_wrap}>
                <div className={`${style.button} ${style.yes}`} onClick={deleteClickHandler}>Yes Delete Node</div>
                <div className={`${style.button} ${style.cancle}`} onClick={() => handleConfirmDeletePop(false)}>Cancel</div>
              </div>
            </div>
          </div> : null
      }

    </>

  )
}

export default NodeSettingsPop
import style from './style.module.scss';
import CrossIcon from "/assets/dashboard/main_dashboard/admin/workflow/cross.svg"
import SearchIcon from "/assets/dashboard/main_dashboard/admin/workflow/search.svg"
import DivRight from "/assets/dashboard/main_dashboard/admin/workflow/div_right.svg"
import TrashIcon from "/assets/dashboard/main_dashboard/admin/workflow/ac_trash.svg"
import AddNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/addnode.svg"
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import { useContext, useState, useCallback, useEffect, useRef } from 'react';
import { NodeOptionData } from '../nodeOptionPopup/Data';
import { Position, getOutgoers, useReactFlow, Node, MarkerType, getConnectedEdges } from 'reactflow';
import useOutside from '../../../../../../../hooks/useOutside';
const ConditionSubBlock = ({ index, onConditionLabelChange, element, onVariableAdd, onConditionAdd, onConditionInfoRemove, onConditionDelete, moduleList }: any) => {
    const contextWorkflow = useContext(ContextWorkflow);
   // const [showAConditionAdd, setShowAConditionAdd] = useState(false);
    const [conditionType, setConditionType] = useState("");
    const [showConditionTypeDropDown, setConditionTypeDropDown] = useState(false);
    const [conditionInfo, setConditionInfo] = useState({ conditionType: "", conditionName: "", condition: "equals to", matchValue: "" });
    const [variableList] = useState(contextWorkflow.selectedNodeForSetting.data.conditionVariableList);
    const [variableSearchKey, setVariableSearchKey] = useState("");
    const [variableListShown, setVariableListShown] = useState(false);
    const [selectedCondition, setSelectedCondition] = useState('equals to');
    const [matchValue, setMatchValue] = useState("");
    const [selectedVariable, setSelectedVariable] = useState("");
    const [errorMessage, setErrorMessage] = useState({ "conditionName": "", "matchValue": "" });
    const [showConditionFormPopup, setShowConditionFormPopup] = useState(false);
    const [showActionDropdown, setShowActionDropdown] = useState(false);
    const rfInstance = useReactFlow();

    // on variable create option --------------------------
    const onCreateVariable = useCallback((variableName: any) => {
        onVariableAdd(variableName);
        onSelectVariable(variableName);
    }, [setVariableListShown, onVariableAdd]);

    // on condition popup done button click -------------------------
    const onNodeConditionSubmit = useCallback(() => {
        if (selectedVariable == "") {
            setErrorMessage({ ...errorMessage, conditionName: "Please select a " + conditionType });
        }
        else if (matchValue == "") {
            setErrorMessage({ ...errorMessage, matchValue: "Please select a value" });
        }
        else {
            setShowConditionFormPopup(false);
            setConditionInfo({ ...conditionInfo, conditionName: selectedVariable, matchValue: matchValue });
            onConditionAdd(index, { conditionType: conditionType, conditionName: selectedVariable, condition: selectedCondition, matchValue: matchValue });
            setConditionInfo({ ...conditionInfo, conditionType: "", conditionName: "", condition: "equals to", matchValue: "" });
            setConditionType("");
            setSelectedCondition("equals to");
            setSelectedVariable("");
            setVariableSearchKey("");
            setMatchValue("");
            setShowConditionFormPopup(false);
            setConditionTypeDropDown(false);
        }
    }, [conditionInfo, setErrorMessage, errorMessage, matchValue, selectedVariable, conditionType, selectedCondition, variableSearchKey, showConditionFormPopup, showConditionTypeDropDown]);

    // on variable select -----------------------------------
    const onSelectVariable = useCallback((el: any) => {
        setVariableSearchKey(el);
        setSelectedVariable(el);
        setVariableListShown(false);
    }, [setVariableListShown, setConditionInfo, setVariableSearchKey, conditionType, variableSearchKey, setSelectedVariable]);

    // on condition dropdown value change ---------------------
    const onConditionChange = useCallback((evt: any) => {
        setConditionInfo((conditionInfo) => {
            conditionInfo.condition = evt.target.value;
            return conditionInfo;
        });
        setSelectedCondition(evt.target.value);
    }, [setConditionInfo, setSelectedCondition]);

    // on Match Value field data change ---------------------------
    const onMatchValueChange = useCallback((evt: any) => {
        setErrorMessage((error: any) => {
            error.matchValue = "";
            return error;
        });
        setMatchValue(evt.target.value);
    }, [setConditionInfo, setMatchValue, setErrorMessage, errorMessage]);

    // on variable,value,expression dropdown change -------------------
    const onOptionSelect = useCallback((value: any) => {
        setConditionType(value);
        setConditionTypeDropDown(false);
        setTimeout(() => {
            setShowConditionFormPopup(true);

        }, 400);
    }, [setConditionType, setConditionTypeDropDown, setShowConditionFormPopup]);

    // reset condition -----------------
    const resetConditionHandler = useCallback(() => {
        setShowConditionFormPopup(false);
        setConditionInfo({ ...conditionInfo, conditionType: "", conditionName: "", condition: "equals to", matchValue: "" });
        setConditionType("");
        setSelectedCondition("equals to");
        setSelectedVariable("");
        setVariableSearchKey("");
        setMatchValue("");
        setShowConditionFormPopup(false);
        setConditionTypeDropDown(false);
        setErrorMessage({ ...errorMessage, conditionName: "", matchValue: "" });
    }, [conditionInfo, setErrorMessage, errorMessage, matchValue, selectedVariable, conditionType, selectedCondition, variableSearchKey, showConditionFormPopup, showConditionTypeDropDown]);


    const onNodeAddClick: any = useCallback((selectedItem: any, nodeProps?: any, moduleProps?: any) => {

        const sourceNode: Node = contextWorkflow.selectedNodeForSetting; // getting source node info ----------
        console.log("source node info", sourceNode);
        let outGoers = getOutgoers(sourceNode as Node, rfInstance.getNodes(), rfInstance.getEdges());
        // if (selectedItem == "Menu") {
        //     rfInstance.setNodes((nds) =>
        //         nds.map((node) => {
        //             if (node.id == sourceNode.id) {
        //                 node.sourcePosition = Position.Bottom;
        //             }
        //             return node;
        //         })
        //     );
        // }
        let allEdges: any = {};
        let edgeByHandle: any = {};
        let handleId = sourceNode.id + "_" + index;
        if (outGoers.length > 0) {
            console.log("outgoers", outGoers);
            outGoers.map((edge: any, index: any) => {
                const bEdgeArr = getConnectedEdges([sourceNode, edge], rfInstance.getEdges());
                const bEdge = bEdgeArr.find((el) => el.source == sourceNode.id && el.target == edge.id);
                if (bEdge) {
                    allEdges[bEdge.id] = bEdge;
                }
                if (index == outGoers.length - 1) {

                    Object.keys(allEdges).map((el: any, i: any) => {
                        if (edgeByHandle[allEdges[el].sourceHandle] == undefined) {
                            edgeByHandle[allEdges[el].sourceHandle] = [];
                        }
                        edgeByHandle[allEdges[el].sourceHandle].push(allEdges[el]);
                        if (i == Object.keys(allEdges).length - 1) {
                            console.log("edge by handle ", edgeByHandle, allEdges);
                            rfInstance.setEdges((edges) => {
                                edges.map((e) => {
                                    if (allEdges[e.id]) {
                                        const edgeIndex = edgeByHandle[allEdges[e.id].sourceHandle].findIndex((edgeEl: any) => edgeEl.id == e.id);
                                        if (edgeIndex >= 0) {
                                            console.log("sub block edge length", edgeByHandle[allEdges[e.id].sourceHandle].length, e.id, allEdges[e.id].sourceHandle);
                                            if (edgeByHandle[allEdges[e.id].sourceHandle].length > 1 || (edgeByHandle[allEdges[e.id].sourceHandle].length == 1 && allEdges[e.id].sourceHandle == handleId)) {
                                                e.type = 'module';
                                            }
                                            e.label = edgeIndex + 1;
                                        }
                                    }
                                });
                                return edges;
                            });
                        }
                    });
                }
            });
        }
        let position = { x: sourceNode?.position.x + 300, y: sourceNode.position.y * (index + 1) };
        if (selectedItem) {
            const newNode: Node = {
                id: "node_" + Math.random(),
                position: position,
                type: selectedItem,
                data: { label: selectedItem, onNodeAddClick: onNodeAddClick, childNodeCount: 0, subNode: false, elementType: selectedItem, info: {}, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {},transferTabInfo:{selectedTab: 0,tabInfo:{0:{},1:{},2:{},3:{}}},messageContent:{"text":"","image":null,"senderNo":""},audienceList:null,voiceNodeInfo:{"language":"","accent":"","retries":0,"voice":null}, conditionSouce: handleId, ...moduleProps },
                sourcePosition: (selectedItem != 'Exit') ? Position.Right : null,
                targetPosition: Position.Left,
                ...nodeProps
                // draggable: false

            };
            rfInstance.setNodes((nodes) => {
                nodes.map((nds) => {
                    if (nds.id == sourceNode.id) {
                        nds.data.childNodeCount = outGoers.length + 1;
                        return nds;
                    }
                });
                return nodes;
            });
            rfInstance.setNodes((el) => {
                return [...el, newNode]
            });
            const newEdge: any = {
                id: 'edge_' + sourceNode.id + "_" + newNode.id,
                source: sourceNode.id,
                target: newNode.id,
                type: (edgeByHandle[handleId] != undefined && edgeByHandle[handleId].length > 0) ? 'module' : 'basic',
                //type: 'basic',
                label: (edgeByHandle[handleId] != undefined) ? edgeByHandle[handleId].length + 1 : 1,
                markerEnd: { type: MarkerType.ArrowClosed, color: '#000000' },
                sourceHandle: handleId
            };
            rfInstance.setEdges((edge) => [...edge, newEdge]);
            if (selectedItem != 'Exit') {
                contextWorkflow.handleWorkflowSettings(newNode);
                contextWorkflow.handleWorkflowSettingsPop(true);
            }

            console.log("source Node", sourceNode, newNode);
            return newNode;
        }

    }, [rfInstance]);

    // on Intent Node add ------------
    const onNodeIntentAddClick: any = useCallback((data: any, selectedItem: any, nodeProps?: any) => {
        const sourceNode: any = rfInstance.getNode(data.id); // getting source node info ----------
        let outGoers = getOutgoers(sourceNode as Node, rfInstance.getNodes(), rfInstance.getEdges());
            if (outGoers.length > 0) {
                outGoers.map((edge: any, index: any) => {
                    const bEdgeArr = getConnectedEdges([sourceNode, edge], rfInstance.getEdges());
                    const bEdge = bEdgeArr.find((el) => el.source == sourceNode.id && el.target == edge.id);
                    console.log("between ", bEdge);
                    if (bEdge) {
                        rfInstance.setEdges((edges) => {
                            edges.map((e) => {
                                if (e.id === bEdge.id) {
                                    e.type = 'module'
                                    e.label = index + 1;
                                }
                            });
                            return edges;
                        });

                    }

                });
            }
            let position = { x: (sourceNode?.position.x) ? sourceNode?.position.x + 300 : data.xPos + 350, y: (sourceNode?.position.y) ? sourceNode?.position.y : data.yPos };
            if (selectedItem) {
                const newNode: Node = {
                    id: "node_" + Math.random(),
                    position: position,
                    type: selectedItem,
                    data: { label: selectedItem, onNodeAddClick: onNodeAddClick, childNodeCount: 0, subNode: false, elementType: selectedItem, info: {}, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {},transferTabInfo:{selectedTab: 0,tabInfo:{0:{},1:{},2:{},3:{}}},messageContent:{"text":"","image":null,"senderNo":""},audienceList:null,voiceNodeInfo:{"language":"","accent":"","retries":0,"voice":null} },
                    sourcePosition: (selectedItem != 'Exit') ? Position.Right : null,
                    targetPosition: Position.Left,
                    ...nodeProps
                    // draggable: false

                }
                rfInstance.setNodes((nodes) => {
                    nodes.map((nds) => {
                        if (nds.id == sourceNode.id) {
                            nds.data.childNodeCount = outGoers.length + 1;
                            return nds;
                        }
                    });
                    return nodes;
                });
                rfInstance.setNodes((el) => {
                    return [...el, newNode]
                });
                const newEdge: any = {
                    id: 'edge_' + data.id + "_" + newNode.id,
                    source: data.id,
                    target: newNode.id,
                    type: (outGoers.length > 0) ? 'module' : 'basic',
                    label: outGoers.length + 1,
                    markerEnd: { type: MarkerType.ArrowClosed, color: '#000000' },
                };
                rfInstance.setEdges((edge) => [...edge, newEdge]);
                if (selectedItem != 'Exit') {
                    contextWorkflow.handleWorkflowSettings(newNode);
                    contextWorkflow.handleWorkflowSettingsPop(true);
                    contextWorkflow.handleSettingsNodeTab(0);
                }

                console.log("source Node", sourceNode, newNode, data);
                return newNode;
            }
    }, [rfInstance]);
    // on select node type from action drop down -----------
    const onSelectAction = useCallback((type: any) => {
        if (type == "Intent" || type == "Transfer") {
            const newNode = onNodeAddClick("General");
            console.log("selected node action", newNode);
            if (element.actions != undefined) {
                element.actions.push(newNode);
            }
            if (newNode) {
                setTimeout(()=>{
                    onNodeIntentAddClick(newNode,type);
                },400);
            }
        }
        else {

            const newNode = onNodeAddClick(type);
            console.log("selected node action", newNode);
            if (element.actions != undefined) {
                element.actions.push(newNode);
            }
        }

    }, [onNodeAddClick,onNodeIntentAddClick]);


    // on select module from action drop down ------------------------
    const onSelectModule = useCallback((moduleName: any) => {
        const moduleProps: any = {};
        moduleProps['moduleName'] = moduleName;
        moduleProps['moduleDetails'] = moduleList[moduleName].workflow;
        moduleProps['label'] = moduleName;
        moduleProps['toOpenModuleClick'] = "";
        const newNode = onNodeAddClick('Module', {}, moduleProps);
        // contextWorkflow.handleWorkflowSettings(newNode);
        contextWorkflow.handleWorkFlowModuleTabList({ "name": moduleName, "nodeInfo": newNode });
        element.actions.push(newNode);

    }, [moduleList, contextWorkflow.handleWorkFlowModuleTabList, element, onNodeAddClick, contextWorkflow.handleWorkflowSettings]);

    // dropdown close on outside click --------------------------
    const actionDropRef: any = useRef(null);
    const listRef: any = useRef(null);
    const popupRef: any = useRef(null);
    const handleOutsideClick = (e: Event) => {
        // console.log("outside click",e.target,optionRef.current);
        if (listRef.current && !listRef.current.contains(e.target)) {
            if (variableSearchKey != "" && variableSearchKey != selectedVariable) {
                setVariableSearchKey(selectedVariable);
            }
            setVariableListShown(false);
        }
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            //setVariableListShown(false);
            //  alert((listRef.current && !listRef.current.contains(e.target)) )
            // setShowConditionFormPopup(false);
        }
        if (actionDropRef.current && !actionDropRef.current.contains(e.target)) {
            setShowActionDropdown(false);
            //setVariableListShown(false);
            //  alert((listRef.current && !listRef.current.contains(e.target)) )
            // setShowConditionFormPopup(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    });

    const [dropAddCondition, setDropAddCondition, refDropAddCondition ]  = useOutside(false)


    return (<div className={style.condition_level_wrapper}>
        <ul className={style.details}>
            <li>
                <span className={style.trash_icon}><img src={TrashIcon} alt="" onClick={() => onConditionDelete(index)} /></span>
                <div className={style.form_wrapper}>
                    <label htmlFor="new_user">Condition label {index + 1} <span className='red'>*</span></label>
                    <input type="text" className={style.form_control} placeholder='Enter condition label' onChange={(evt) => onConditionLabelChange(index, evt)} value={element.label} />
                </div>
                {
                    element.conditionInfo.length > 0 &&
                    element.conditionInfo.map((item: any, elIndex: any) => {
                        return (<div className={`${style.condition_area} d-flex align-items-center`}><span className={style.con_name}>{elIndex == 0 ? 'IF' : 'AND'}</span>
                            <div className={`${style.display_variable_area} d-flex align-items-center justify-content-between`}>
                                <span><strong>{item.conditionName}</strong>  {item.condition == "equals to" ? 'is' : item.condition} <strong>“{item.matchValue}”</strong></span>
                                <span onClick={() => onConditionInfoRemove(index, elIndex)}><img src={CrossIcon} alt="" /></span>
                            </div></div>)
                    })

                }
                <div className={`${style.condition_area} d-flex align-items-center`}>

                    <div ref={refDropAddCondition} className='d-flex align-items-center justify-content-between' style={{'width':'100%'}}>
                        {
                            conditionType != "" ?
                                <><span className={style.con_name}>{element.conditionInfo.length == 0 ? 'IF' : 'AND'}</span><div className={`${style.display_variable_area} d-flex align-items-center justify-content-between`}>
                                    {conditionType != '' && <><div onClick={() => setShowConditionFormPopup(true)} style={{ width: '100%' }}><span><strong>{conditionType}</strong>  {selectedCondition == "equals to" ? 'is' : selectedCondition} <strong>{conditionInfo.conditionName}</strong></span></div>
                                        <span onClick={resetConditionHandler}><img src={CrossIcon} alt="" /></span></>}
                                </div></>
                                :
                                <>{element.conditionInfo.length == 0 && <span className={style.con_name}>IF</span>}<h3 onClick={() => { setDropAddCondition(!dropAddCondition); setConditionTypeDropDown(true); }}>Add a condition</h3></>
                            //     }
                            // </>

                        }
                        {/* condition type dropdown */}
                        {
                            dropAddCondition === true ?
                                <ul className={style.add_condition_area}>
                                    <li onClick={() => { onOptionSelect("Variable"); setDropAddCondition(false) }}>Variable</li>
                                    <li onClick={() => { onOptionSelect("Value"); setDropAddCondition(false) }}>Value (plain text)</li>
                                    <li onClick={() => { onOptionSelect("Expression"); setDropAddCondition(false) }}>Expression</li>
                                </ul> : null
                        }
                    </div>
                    {/* condition popup block */}
                    {
                        showConditionFormPopup == true ?
                            <div className={style.add_condition_variable_area_wrapper} ref={popupRef}>
                                <div className={style.form_wrapper} ref={listRef}>
                                    {/* {
                                        contextWorkflow.variableConditionAfterClick === true ? <div className={style.overflow} onClick={() => contextWorkflow.handleVariableConditionAfterClick(false)}></div> : null
                                    } */}
                                    {/* <div className={style.overflow} onClick={() => contextWorkflow.handleVariableConditionAfterClick(false)}></div> */}
                                    <label htmlFor="Variable">{conditionType}</label>
                                    <div style={{ 'position': 'relative' }}>
                                        <div style={{ 'position': 'relative' }}>
                                            <input type="text" name="" id="Variable" className={style.form_control} placeholder='Select or create' value={variableSearchKey} onChange={(evt) => { setVariableSearchKey(evt.target.value); }} onFocus={() => setVariableListShown(true)} />
                                            
                                            <span className={style.search_icon}><img src={SearchIcon} alt="" /></span>
                                        </div>
                                        {errorMessage.conditionName != "" && <span className={style.error_message}>{errorMessage.conditionName}</span>}
                                        {
                                            variableListShown == true ?
                                                <ul className={style.variable_condition_wrapper}>
                                                    {
                                                        variableList.map((el: any) => {
                                                            if (el.indexOf(variableSearchKey) >= 0 || variableSearchKey == '') {
                                                                return (
                                                                    <li key={el} onClick={() => onSelectVariable(el)}>{el}</li>
                                                                )
                                                            }
                                                        })
                                                    }
                                                    {conditionType == 'Variable' && variableSearchKey != '' && <li onClick={() => { onCreateVariable(variableSearchKey); }}><span>Create</span> <strong>"{variableSearchKey}"</strong></li>}
                                                </ul> : null
                                        }

                                    </div>
                                </div>
                                <div className={style.form_wrapper}>
                                    <label htmlFor="Value">Is</label>
                                    <select name="" className={`${style.form_control} ${style.select}`} onChange={onConditionChange}>
                                        <option value="equals to">equals to</option>
                                        <option value="greater than">greater than</option>
                                        <option value="greater than equals ">greater than equals to</option>
                                        <option value="less than">less than</option>
                                        <option value="less than equals to">less than equals to</option>
                                    </select>
                                </div>
                                <div className={style.form_wrapper}>
                                    <label htmlFor="Value">Value</label>
                                    <input type="text" value={matchValue} className={style.form_control} placeholder='Enter value' onChange={onMatchValueChange} />
                                    {errorMessage.matchValue != "" && <span className={style.error_message}>{errorMessage.matchValue}</span>}
                                </div>
                                <div className={`${style.button_wrapper} d-flex justify-content-end`} onClick={onNodeConditionSubmit}>
                                    <button className={style.button}>Done</button>
                                </div>

                            </div> : null
                    }



                </div>
                {/* Action Block */}
                <div className={`${style.action_area_wrapper} `} ref={actionDropRef}>
                    <div className={`${style.show_action_details} d-flex align-items-center justify-content-between`} onClick={() => setShowActionDropdown(!showActionDropdown)}>
                        <h4>Actions</h4>
                        <span><img src={AddNodeIcon} alt="" /></span>
                    </div>
                    {
                        element.actions.map((action: any) => {
                            return (<div className={`${style.condition_action_node_listing_wraper} d-flex align-items-center`}>
                                <span><img src={DivRight} alt="" /></span>
                                <span>Goto ‘{action.data.label}’ Node</span>
                            </div>)
                        })

                    }


                    {
                        showActionDropdown === true ?
                            <div className={style.action_condition_menu_wrapper} >
                                {/* <div className={style.portion}>
                                    <h6>Available nodes on the canvas</h6>
                                    <ul className={style.list}>
                                        <li onClick={() => contextWorkflow.handleActionConditionSet(true)}>Greeting</li>
                                    </ul>
                                </div> */}
                                {
                                    NodeOptionData.map((item: any) => {
                                        return (
                                            item.name == 'General' ? <div key={item.id} className={style.portion}>
                                                <h6>{item.name}</h6>
                                                <ul className={style.list}>
                                                    {
                                                        item.options.map((item: any) => {
                                                            return (
                                                                <li key={item.id} onClick={() => onSelectAction(item.type)}>
                                                                    {item.label}
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div> : null
                                        )
                                    })
                                }
                                {Object.keys(moduleList).length > 0 &&
                                    <div className={style.portion}>
                                        <h6>Modules</h6>
                                        <ul className={style.list}>
                                            {
                                                Object.keys(moduleList).map((item: any) => {
                                                    return (
                                                        <li key={moduleList[item].id} onClick={() => onSelectModule(item)}>{item}</li>
                                                    );
                                                })}
                                        </ul>

                                    </div>}
                                {/* <div className={style.portion}>
                                    <h6>Default Nodes</h6>
                                    <ul className={style.list}>
                                        <li >General Node</li>
                                        <li>Menu Node</li>
                                        <li>End Node</li>
                                        <li>Exit Node</li>
                                    </ul>
                                </div>
                                <div className={style.portion}>
                                    <h6>Others</h6>
                                    <ul className={style.list}>
                                        <li>Call API</li>
                                    </ul>
                                </div> */}
                            </div> : null
                    }

                </div>
            </li>
        </ul>
    </div>)
};

export default ConditionSubBlock;
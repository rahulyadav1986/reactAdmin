import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import style from '../style.module.scss'
import MessageIcon from "/assets/dashboard/main_dashboard/admin/workflow/message.svg"
import SettingsIcon from "/assets/dashboard/main_dashboard/admin/workflow/settings.svg"
import AddNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/addnode.svg"
import VerticalDotsIcon from "/assets/dashboard/main_dashboard/admin/workflow/verticalDots.svg"
import { Handle, MarkerType, Position, Node, getOutgoers, getConnectedEdges } from 'reactflow'
import NodeOptionPopup from '../../nodeOptionPopup/NodeOptionPopup'
import { ContextWorkflow } from '../../../../../../../../contexts/workflowContext'
import { useReactFlow } from 'reactflow';

const ConditionNode = ({ ...data }) => {
  //const [nodeOptionPop, setNodeOptionPop] = useState(false)
  const [pointerPosition, setPointerPosition] = useState({ x: 100, y: 100 });
  const [visibleNodeOptionPopup, setVisibleNodeOptionPopup] = useState("");
  // const [variableList,setVariableList] = useState([]);

  //const [conditions,setConditions] = useState(data.data.conditions);
  const rfInstance = useReactFlow();
  const onNodeAddClick: any = useCallback((data: any, selectedItem: any, nodeProps?: any, edgeProps?: any) => {
    const sourceNode: any = rfInstance.getNode(data.id); // getting source node info ----------
    let outGoers = getOutgoers(sourceNode as Node, rfInstance.getNodes(), rfInstance.getEdges());
    let allEdges: any = {};
    let edgeByHandle: any = {};
    if ((selectedItem == "Intent" || selectedItem == "Transfer") && sourceNode.type != 'General') {
      const nNode = onNodeAddClick(data, "General",nodeProps,edgeProps);
      if (nNode) {
        console.log("new node", nNode);
        setTimeout(() => {
          onNodeAddClick(nNode, selectedItem);
        }, 400);
      }
    }
    else {

      if (outGoers.length > 0) {
        console.log("outgoers", outGoers);
        if (sourceNode.type == 'Condition') {
          outGoers.map((edge: any, index: any) => {
            console.log("between edge", getConnectedEdges([sourceNode, edge], rfInstance.getEdges()));
            const bEdgeArr = getConnectedEdges([sourceNode, edge], rfInstance.getEdges());
            const bEdge = bEdgeArr.find((el) => el.source == sourceNode.id && el.target == edge.id);
            console.log("between ", bEdge);
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
                          console.log("sub block edge length", edgeByHandle[allEdges[e.id].sourceHandle].length, edgeIndex);
                          if (edgeByHandle[allEdges[e.id].sourceHandle].length > 1 || (edgeByHandle[allEdges[e.id].sourceHandle].length == 1 && allEdges[e.id].sourceHandle == edgeProps.sourceHandle)) {
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
        else {
          outGoers.map((edge: any, index: any) => {
            console.log("between edge", getConnectedEdges([sourceNode, edge], rfInstance.getEdges()));
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

      }
      let position = { x: (sourceNode?.position.x) ? sourceNode?.position.x + 300 : data.xPos + 350, y: (sourceNode?.position.y) ? sourceNode?.position.y : data.yPos };
      //alert(edgeByHandle[edgeProps.sourceHandle].length + 1);
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

        };
        let indexArr = visibleNodeOptionPopup.split("_");
        let conditionIndex = indexArr[indexArr.length - 1];
        rfInstance.setNodes((nodes) => {
          nodes.map((nds) => {
            if (nds.id == data.id) {
              nds.data.childNodeCount = outGoers.length + 1;
              if(sourceNode.type == 'Condition')
              {
                nds.data.conditions[conditionIndex].actions.push(newNode);
              }
            }
          });
          return [...nodes, newNode];
        });
        const newEdge: any = {
          id: 'edge_' + data.id + "_" + newNode.id,
          source: data.id,
          target: newNode.id,
          type: (sourceNode.type == 'Condition')?((edgeByHandle[edgeProps.sourceHandle] != undefined && edgeByHandle[edgeProps.sourceHandle].length > 0) ? 'module' : 'basic'):((outGoers.length > 0)?'module' : 'basic'),
          //type: 'basic',
          label: (sourceNode.type == 'Condition')?((edgeByHandle[edgeProps.sourceHandle] != undefined) ? edgeByHandle[edgeProps.sourceHandle].length + 1 : 1):outGoers.length + 1,
          markerEnd: { type: MarkerType.ArrowClosed, color: '#000000' },
          ...edgeProps
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
    }
  }, [rfInstance, visibleNodeOptionPopup]);
  // node add click --------------
  const nodeAddClick = (selectedItem: any) => {
    console.log("selected item", selectedItem, visibleNodeOptionPopup);
    data.data['pointer_position'] = pointerPosition;
    // if (data.data != undefined && data.data.onNodeAddClick != undefined) {
    //   data.data.onNodeAddClick(data, selectedItem);
    // }
    // else {
    // alert(visibleNodeOptionPopup);
    //  if(edgeProps != null && edgeProps.sourceHandle != undefined)
    //   {
    //     let arr = edgeProps.sourceHandle.split("_");
    //     let conditionIndex = 
    //   }
    onNodeAddClick(data, selectedItem, {}, { sourceHandle: visibleNodeOptionPopup });

    //}
    //setNodeOptionPop((el) => !el);
    setVisibleNodeOptionPopup("");
  };

  const onPointerClickHandler = (event: any, conditionIndex: any) => {
    setPointerPosition({ x: event.clientX, y: event.clientY })
    //setNodeOptionPop(!nodeOptionPop)
    if (visibleNodeOptionPopup == data.id + "_" + conditionIndex) {
      setVisibleNodeOptionPopup("");
    }
    else {
      setVisibleNodeOptionPopup(data.id + "_" + conditionIndex);
    }
  }


  const settingsClickHandler = () => {
    // data.data.onNodeSettingsClick(data);
    //setNodeOptionPop(false)
    setVisibleNodeOptionPopup("");
    data.data.toOpenSettings = true;
    rfInstance.setNodes((nodes) => {
      nodes.map((nds) => {
        if (nds.id == data.id) {
          nds.data.toOpenSettings = true;
          contextWorkflow.handleWorkflowSettings(nds);
        }
      });
      return nodes;
    });
    rfInstance.fitView({ includeHiddenNodes: false, padding: 15 });
  }
  //on handle click --------------------
  const optionRef: any = useRef(null);
  const handleOutsideClick = (e: Event) => {
    // console.log("outside click",e.target,optionRef.current);
    if (optionRef.current && !optionRef.current.contains(e.target)) {
      setVisibleNodeOptionPopup("")
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
  const contextWorkflow = useContext(ContextWorkflow);

  return (
    <div className={`${style.node_area} ${style.condition} ${(contextWorkflow.selectedNodeForSetting.id == data.id) ? style.recent_node : null}`}>
      <span className={style.message}><img src={MessageIcon} alt="" /></span>
      <div className={`${style.button} d-flex align-items-center`}>
        <span className={style.icon_bg}>IF</span>
        <span>{data.data.label}</span>
      </div>
      <ul className={style.node_type_condition_wrapper} ref={optionRef}>
        {
          data.data.conditions.map((el: any, cIndex: any) => {
            return (
              <li className={style.new_con}>
                <span className={style.label}>{el.label}</span>
                <Handle type="source" position={Position.Right} isConnectable={true} style={{ background: 'rgba(178, 193, 231, 1)', cursor: 'pointer' }} id={data.id + "_" + cIndex}>
                  <span className={style.add_node} onClick={(evt) => onPointerClickHandler(evt, cIndex)}><img src={AddNodeIcon} alt="" /></span>
                  {visibleNodeOptionPopup == data.id + "_" + cIndex ? <NodeOptionPopup onMenuSelect={nodeAddClick} clickedHandle={data.id + "_" + cIndex} /> : null}
                </Handle>
              </li>
            )
          })
        }

        {/* <li>
            <span className={style.label}>Existing User</span>
            <Handle type="source" position={Position.Right} isConnectable={true}>
                <span className={style.add_node} onClick={onPointerClickHandler2}><img src={AddNodeIcon} alt="" /></span>
                {nodeOptionPop ? <NodeOptionPopup onMenuSelect={nodeAddClick} /> :  null}
            </Handle>
          </li> */}
      </ul>
      {contextWorkflow.selectedFlowRunningType == '' && <span className={`${style.settings_area} d-flex align-items-center justify-content-between`}>
        <span onClick={settingsClickHandler}><img src={SettingsIcon} alt="" /></span>
        <span><img src={VerticalDotsIcon} alt="" /></span>
      </span>}
      {/* <Handle type="source" position={Position.Bottom} isConnectable={true}>
            <span className={style.add_node} onClick={onPointerClickHandler}><img src={AddNodeIcon} alt="" /></span>
             {nodeOptionPop ? <NodeOptionPopup onMenuSelect={nodeAddClick} /> :  null}
        </Handle> */}
      <Handle type="target" position={Position.Left} isConnectable={true} style={{ background: 'rgba(178, 193, 231, 1)', borderRadius: '5px' }}></Handle>
    </div>
  )
}

export default ConditionNode
import { useState, useCallback, useContext, useRef, useEffect } from 'react'
import style from '../style.module.scss'
import StartNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/start.svg"
import AddNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/addnode.svg"
import { Handle, Position, useReactFlow, Node, MarkerType, getConnectedEdges, getOutgoers } from 'reactflow'
import NodeOptionPopup from '../../nodeOptionPopup/NodeOptionPopup'
import { ContextWorkflow } from '../../../../../../../../contexts/workflowContext';

const StartNode = ({ ...data }) => {
  const contextWorkflow = useContext(ContextWorkflow);
  const rInstance = useReactFlow();

  const [nodeOptionPop, setNodeOptionPop] = useState(false)
  const [pointerPosition, setPointerPosition] = useState({ x: 100, y: 100 })
  const onNodeAddClick: any = useCallback((data: any, selectedItem: any, nodeProps?: any) => {
    const sourceNode: any = rInstance.getNode(data.id); // getting source node info ----------
    let outGoers = getOutgoers(sourceNode as Node, rInstance.getNodes(), rInstance.getEdges());
    if ((selectedItem == "Intent" || selectedItem == "Transfer") && sourceNode.type != 'General') {
      const nNode = onNodeAddClick(data, "General");
      if(nNode)
      {
        console.log("new node",nNode);
        setTimeout(()=>{
          onNodeAddClick(nNode,selectedItem);
        },400);
      }
    }
    else {
      if (outGoers.length > 0) {
        outGoers.map((edge: any, index: any) => {
          const bEdgeArr = getConnectedEdges([sourceNode, edge], rInstance.getEdges());
          const bEdge = bEdgeArr.find((el) => el.source == sourceNode.id && el.target == edge.id);
          if (bEdge) {
            rInstance.setEdges((edges) => {
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
      let position = (selectedItem == 'Menu') ? { x: (sourceNode?.position.x) ? sourceNode?.position.x : data.xPos, y: (sourceNode?.position.y) ? sourceNode?.position.y + 300 : data.yPos + 350 } : { x: (sourceNode?.position.x) ? sourceNode?.position.x + 300 : data.xPos + 350, y: (sourceNode?.position.y) ? sourceNode?.position.y : data.yPos };
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
        rInstance.setNodes((nodes) => {
          nodes.map((nds) => {
            if (nds.id == sourceNode.id) {
              nds.data.childNodeCount = outGoers.length + 1;
              return nds;
            }
          });
          return nodes;
        });
        rInstance.setNodes((el) => {
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
        rInstance.setEdges((edge) => [...edge, newEdge]);
        if (selectedItem != 'Exit') {
          contextWorkflow.handleWorkflowSettings(newNode);
          contextWorkflow.handleWorkflowSettingsPop(true);
          contextWorkflow.handleSettingsNodeTab(0);
        }

        console.log("source Node", sourceNode, newNode, data);
        return newNode;
      }
    }


  }, [rInstance]);
  // node add click --------------
  const nodeAddClick = (selectedItem: any) => {
    console.log("selected item", selectedItem);
    data.data['pointer_position'] = pointerPosition;
    // if (data.data != undefined && data.data.onNodeAddClick != undefined) {
    //   data.data.onNodeAddClick(data, selectedItem);
    // }
    // else {
    onNodeAddClick(data, selectedItem);
    //}
    setNodeOptionPop((el) => !el);
  };
  // on handle click
  const optionRef: any = useRef(null);
  const handleOutsideClick = (e: Event) => {
    // console.log("outside click",e.target,optionRef.current);
    if (optionRef.current && !optionRef.current.contains(e.target)) {
      setNodeOptionPop(false)
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
  const onPointerClickHandler = (event: any) => {
    setPointerPosition({ x: event.clientX, y: event.clientY })
    setNodeOptionPop(!nodeOptionPop)
  }
  return (
    <div className={`${style.node_area} ${style.start} ${(contextWorkflow.selectedNodeForSetting.id == data.id) ? style.recent_node : null}`}>
      <div className={`${style.button} d-flex align-items-center`}>
        <img src={StartNodeIcon} alt="" />
        <span>START</span>
      </div>
      {contextWorkflow.selectedFlowRunningType == '' && <span>Where your bot begins</span>}
      <Handle type="source" position={Position.Right} isConnectable={true} style={{ background: 'rgba(178, 193, 231, 1)', cursor: 'pointer' }} ref={optionRef}>
        {contextWorkflow.selectedFlowRunningType == '' && <span className={style.add_node} onClick={onPointerClickHandler}><img src={AddNodeIcon} alt="" /></span>}
        {nodeOptionPop ? <NodeOptionPopup onMenuSelect={nodeAddClick} /> : null}
      </Handle>

    </div>
  )
}

export default StartNode
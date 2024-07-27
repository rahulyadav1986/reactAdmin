import { useMemo, useCallback, useContext, useEffect, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, MarkerType, useReactFlow, getOutgoers, Node, Position, getConnectedEdges, getIncomers, useNodesInitialized, getNodesBounds, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import StartNode from './nodes/startNode/StartNode';
import GeneralNode from './nodes/generalNode/GeneralNode';
import MenuNode from './nodes/menuNode/MenuNode';
import NodeEdge from './nodeEdge/NodeEdge';
import EntryNode from './nodes/entryNode/EntryNode';
import EndNode from './nodes/endNode/EndNode';
import ExitNode from './nodes/exitNode/ExitNode';
import TransferNode from './nodes/transferNode/TransferNode';
import CardNode from './nodes/cardNode/CardNode';
import SmsNode from './nodes/smsNode/SmsNode';
import IndentificationNode from './nodes/identificationNode/IndentificationNode';
import { ContextWorkflow } from '../../../../../../contexts/workflowContext';
import NodeSettingsPop from './nodeSettingsPop/NodeSettingsPop';
import ModuleEdge from './nodeEdge/ModuleEdge';
import ModuleNode from './nodes/moduleNode/ModuleNode';
import ConditionNode from './nodes/conditionNode/ConditionNode';
import ELK from 'elkjs/lib/elk.bundled.js';
import style from './style.module.scss';
import IntentNode from './nodes/intentNode/IntentNode';
import TriggerNode from './nodes/triggerNode/TriggerNode';
import VoiceNode from './nodes/voiceNode/VoiceNode';
import ChatNode from './nodes/chatNode/ChatNode';

const MainWorkFlow = (_props: any) => {
    const contextWorkflow = useContext(ContextWorkflow);
    const elk = new ELK();
    const nodesInitialized = useNodesInitialized({ includeHiddenNodes: false });
    const reactFlow = useReactFlow(); // using react flow instance
    const [currentFlow] = useState(_props.flowData);

    // Elk has a *huge* amount of options to configure. To see everything you can
    // tweak check out:
    //
    // - https://www.eclipse.org/elk/reference/algorithms.html
    // - https://www.eclipse.org/elk/reference/options.html
    const elkOptions = {
        'elk.algorithm': 'mrtree',
        'elk.mrtree.spacing.nodeNodeBetweenLayers': 100,
        'elk.spacing.nodeNode': 80,
        'elk.direction': "RIGHT",
        'elk.animate': false,
        //  'elk.aspectRatio':16.9,
        "elk.spacing.edgeNode": 120,
        "elk.layered.wrapping.additionalEdgeSpacing": 100
    };
    useEffect(() => {
        console.log("mode", reactFlow.getNodes(), reactFlow.getEdges(), nodesInitialized);
        if (nodesInitialized) {
            console.log("mode", reactFlow.getNodes(), reactFlow.getEdges(), nodesInitialized);
            setLayout(reactFlow.getNodes(), reactFlow.getEdges());
        }
    }, [nodesInitialized]);
    // node type list ----------------------
    const nodeTypes = useMemo(() => (
        {
            startNode: StartNode,
            General: GeneralNode,
            Menu: MenuNode,
            Entry: EntryNode,
            End: EndNode,
            Exit: ExitNode,
            Condition: ConditionNode,
            Intent: IntentNode,
            Transfer: TransferNode,
            Card: CardNode,
            sms: SmsNode,
            Identification: IndentificationNode,
            Module: ModuleNode,
            Trigger: TriggerNode,
            voice: VoiceNode,
            whatsapp: ChatNode
        }
    ), []);
    // edge Type List -----------------
    const edgeTypes = useMemo(() => ({ basic: NodeEdge, module: ModuleEdge }), []);

    // node module click -------------
    const onNodeModuleClick = useCallback((selectedNodeID: any) => {
        const nodeInfo = reactFlow.getNode(selectedNodeID) as Node;
        if (nodeInfo.type == 'Module' && nodeInfo.data.moduleName != undefined && nodeInfo.data.moduleName != "" && nodeInfo.data.moduleDetails != undefined && nodeInfo.data.moduleDetails != null) {
            console.log("module node info", nodeInfo.data.ModuleDetails);
            if (contextWorkflow.workflowModuleTab.name == 0) {
                // const selectedWorkFlow = JSON.stringify(reactFlow.toObject());
                // console.log("selected workflow", reactFlow.toObject());
                currentFlow['workflow'] = reactFlow.toObject();
                contextWorkflow.handleCurrentRunningWorkFlow(JSON.stringify(currentFlow));
            }
            // contextWorkflow.handleWorkFlowModuleTabList(nodeInfo.data.moduleName);
            contextWorkflow.handleWorkflowSettingsPop(false);
            onRestore(nodeInfo);
            contextWorkflow.handleWorkflowModuleTab({ name: nodeInfo.data.moduleName, "nodeInfo": nodeInfo });
        }
    }, [reactFlow, contextWorkflow, contextWorkflow.currentRunningWorkFlow]);


    // node settings click -------
    const onNodeSettingsClick: any = useCallback((selectedNode: any) => {
        contextWorkflow.handleWorkflowSettings(selectedNode);
        contextWorkflow.handleWorkflowSettingsPop(true);
        contextWorkflow.handleSettingsNodeTab(0);
        //alert(4);
    }, [contextWorkflow.workflowSettingsPop, contextWorkflow.selectedNodeForSetting, contextWorkflow.settingsNodeTab]);

    // node add from menu selection -------------------------
    const onNodeAddClick: any = useCallback((data: any, selectedItem: any, nodeProps?: any) => {
        const sourceNode = reactFlow.getNode(data.id) as Node; // getting source node info ----------
        let outGoers = getOutgoers(sourceNode as Node, reactFlow.getNodes(), reactFlow.getEdges());
        if ((selectedItem == "Intent" || selectedItem == "Transfer") && sourceNode.type != 'General') {
            const nNode = onNodeAddClick(data, "General");
            if (nNode) {
                console.log("new node", nNode);
                setTimeout(() => {
                    onNodeAddClick(nNode, selectedItem);
                }, 400);
            }
        }
        else {
            if (outGoers.length > 0) {
                outGoers.map((edge: any, index: any) => {
                    console.log("between edge", getConnectedEdges([sourceNode, edge], reactFlow.getEdges()));
                    const bEdgeArr = getConnectedEdges([sourceNode, edge], reactFlow.getEdges());
                    const bEdge = bEdgeArr.find((el) => el.source == sourceNode.id && el.target == edge.id);
                    console.log("between ", bEdge);
                    if (bEdge) {
                        setEdges((edges) => {
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
            //let position = (selectedItem == 'Menu') ? { x: (sourceNode?.position.x) ? sourceNode?.position.x : data.xPos, y: (sourceNode?.position.y) ? sourceNode?.position.y + 300 : data.yPos + 350 } : { x: (sourceNode?.position.x) ? sourceNode?.position.x + 300 : data.xPos + 350, y: (sourceNode?.position.y) ? sourceNode?.position.y : data.yPos };
            let position = { x: (sourceNode?.position.x) ? sourceNode?.position.x + 300 : data.xPos + 350, y: (sourceNode?.position.y) ? sourceNode?.position.y : data.yPos };
            const nodeData: any = { label: selectedItem, onNodeAddClick: onNodeAddClick, onNodeSettingsClick: onNodeSettingsClick, childNodeCount: 0, subNode: false, elementType: selectedItem, info: {}, onModuleClick: onNodeModuleClick, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {}, transferTabInfo: { selectedTab: 0, tabInfo: { 0: {}, 1: {}, 2: {}, 3: {} } }, messageContent: { "text": "", "image": null, "senderNo": "" }, audienceList: null, voiceNodeInfo: { "language": "", "accent": "", "retries": 0 } };

            if (selectedItem) {
                console.log("node Types", nodeTypes);
                const newNode: Node = {
                    id: "node_" + Math.random(),
                    // position: position,
                    position: position,
                    type: selectedItem,
                    data: nodeData,
                    sourcePosition: (selectedItem != 'Exit') ? Position.Right : null,
                    //targetPosition: (selectedItem == "Menu") ? Position.Top : Position.Left,
                    targetPosition: Position.Left,
                    ...nodeProps
                    // draggable: false

                }
                setNodes((el) => [...el, newNode]);
                const newEdge: any = {
                    id: 'edge_' + data.id + "_" + newNode.id,
                    source: data.id,
                    target: newNode.id,
                    type: (outGoers.length > 0) ? 'module' : 'basic',
                    label: outGoers.length + 1,
                    markerEnd: { type: MarkerType.ArrowClosed, color: '#000000' },
                };
                setEdges((edge) => [...edge, newEdge]);
                if (selectedItem != 'Exit') {
                    contextWorkflow.handleWorkflowSettings(newNode);
                    contextWorkflow.handleWorkflowSettingsPop(true);
                    contextWorkflow.handleSettingsNodeTab(0);
                }
                console.log("source Node", sourceNode, newNode, data);
                setNodes((nodes) => {
                    nodes.map((nds) => {
                        if (nds.id == sourceNode.id) {
                            nds.data.childNodeCount = outGoers.length + 1;
                            return nds;
                        }
                    });
                    return nodes;
                });

                //setLayout();
                return newNode;

            }
        }
    }, [nodeTypes, getConnectedEdges, reactFlow, getOutgoers]);

    // sub node add ------------------------------------

    const addSubNode = useCallback((sourceNode: Node, nodeOptions: any, edgeOptions: any) => {

        const newNode: any = {
            id: "subNode_" + Math.random(),
            ...nodeOptions
        }
        setNodes((el) => [...el, newNode]);
        const newEdge: any = {
            id: "subEdge_" + Math.random(),
            source: sourceNode.id,
            target: newNode.id,
            ...edgeOptions
        };
        setEdges((el) => [...el, newEdge]);
        setTimeout(() => {
            setLayout(reactFlow.getNodes(), reactFlow.getEdges());
        }, 200);
    }, [reactFlow]);
    // sub node position and data manipulation --------------------
    const subNodePositionCalculation = useCallback((sourceNode: any, changedValue: any) => {
        const nodeInfo = reactFlow.getNode(sourceNode.id) as Node;
        const outgoingEl = getOutgoers(nodeInfo as Node, reactFlow.getNodes(), reactFlow.getEdges());
        if (changedValue > outgoingEl.length) {
            let nodeToCreate = (outgoingEl.length > 0) ? changedValue - outgoingEl.length : changedValue;
            if (outgoingEl.length == 1) {
                let getEdges = getConnectedEdges([nodeInfo, outgoingEl[0]], reactFlow.getEdges());
                const selectedEdge = getEdges.find((el) => el.source == sourceNode.id && el.target == outgoingEl[0].id);
                if (selectedEdge) {
                    setEdges((edges) => {
                        edges.map((edge) => {
                            if (edge.id == selectedEdge.id) {

                                edge.type = 'module';
                                edge.label = 1;
                            }
                        });
                        return edges;
                    });
                }
            }
            console.log("multiple node", outgoingEl.length + " " + nodeToCreate);
            for (let i = 0; i < nodeToCreate; i++) {
                const nodeOptions: any = {};
                nodeOptions['position'] = { x: nodeInfo?.position.x + 300, y: (nodeInfo?.position.y) + 200 * (outgoingEl.length + i) };
                nodeOptions['type'] = 'General';
                nodeOptions['sourcePosition'] = Position.Right;
                nodeOptions['targetPosition'] = Position.Left;
                nodeOptions['data'] = { label: 'General', onNodeAddClick: onNodeAddClick, onNodeSettingsClick: onNodeSettingsClick, "subNode": true, childNodeCount: 0, elementType: "General", info: {}, onModuleClick: onNodeModuleClick, toOpenSettings: false, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {}, transferTabInfo: { selectedTab: 0, tabInfo: { 0: {}, 1: {}, 2: {}, 3: {} } }, messageContent: { "text": "", "image": null, "senderNo": "" }, audienceList: null, voiceNodeInfo: { "language": "", "accent": "", "retries": 0 } };

                const edgeOptions: any = {};
                if (outgoingEl.length == 0 && nodeToCreate == 1) {
                    edgeOptions['type'] = 'basic';
                }
                else {
                    edgeOptions['type'] = 'module';
                    edgeOptions['label'] = outgoingEl.length + (i + 1);
                }
                setTimeout(() => {
                    addSubNode(nodeInfo, nodeOptions, edgeOptions);
                }, 100);

            }
        }
        else {
            const connectedEdges = getConnectedEdges(outgoingEl, reactFlow.getEdges());
            console.log("connected edges", connectedEdges);
            if (changedValue == 0) {
                reactFlow.deleteElements({ nodes: outgoingEl, edges: connectedEdges });
            }
            else {
                let nodesToDelete: any = outgoingEl.length - changedValue;
                let deletingNodes = outgoingEl.slice(-nodesToDelete);
                deletingNodes.map((el) => {
                    deleteClickHandler(el);
                });

                // let connectedEdges = getConnectedEdges(deletingNodes, reactFlow.getEdges());
                // console.log("deleting", deletingNodes, connectedEdges);
                // reactFlow.deleteElements({ nodes: deletingNodes, edges: connectedEdges });

                // if (changedValue == 1) {
                //     const out = getOutgoers(nodeInfo, reactFlow.getNodes(), reactFlow.getEdges());
                //     console.log("out", out);
                //     reactFlow.setEdges((edges) => {
                //         edges.map((el) => {

                //             el.type = 'basic'
                //         });
                //         return edges;
                //     });
                //     console.log("out edges", reactFlow.getEdges());
                // }
            }
            // setTimeout(() => {
            //     setLayout(reactFlow.getNodes(), reactFlow.getEdges());
            // }, 200);
        }
    }, [reactFlow.deleteElements, getOutgoers, getConnectedEdges]);
    // sub node count change event ---------------------------------
    const triggerMultipleNodeAdd = useCallback(async (selectedNode: any, changedValue: any) => {
        contextWorkflow.handleWorkflowSettings(selectedNode);
        console.log("count change", selectedNode, changedValue, selectedNode.data.childNodeCount);

        const nodeInfo = reactFlow.getNode(selectedNode.id) as Node;
        const outgoingEl = getOutgoers(nodeInfo as Node, reactFlow.getNodes(), reactFlow.getEdges());
        if (changedValue != "") {
            console.log("out goers", outgoingEl, changedValue, nodeInfo.type);
            if (nodeInfo.type == "General") {
                if (outgoingEl.length == 0 && changedValue > 0) {
                    const res = await onNodeAddClick(selectedNode, "Menu", { sourcePosition: Position.Right, targetPosition: Position.Left, data: { label: "Menu", onNodeAddClick: onNodeAddClick, onNodeSettingsClick: onNodeSettingsClick, childNodeCount: changedValue, subNode: false, elementType: "Menu", info: {}, onModuleClick: onNodeModuleClick, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {}, transferTabInfo: { selectedTab: 0, tabInfo: { 0: {}, 1: {}, 2: {}, 3: {} } }, messageContent: { "text": "", "image": null, "senderNo": "" }, audienceList: null, voiceNodeInfo: { "language": "", "accent": "", "retries": 0 } } });
                    if (res) {
                        subNodePositionCalculation(res, changedValue);
                    }
                }
                else {
                    if (outgoingEl.length > 0) {
                        let menuNodeArr: any = outgoingEl.filter((el) => el.type == "Menu");
                        if (menuNodeArr[0] != undefined) {
                            setNodes((nodes) => {
                                nodes.map((n) => {
                                    if (n.id == menuNodeArr[0].id) {
                                        n.data.childNodeCount = changedValue;
                                    }
                                })
                                return nodes;
                            })
                            subNodePositionCalculation(menuNodeArr[0], changedValue);
                        }
                    }
                }
            }
            else {
                subNodePositionCalculation(selectedNode, changedValue);
            }
        }
    }, [contextWorkflow.handleWorkflowSettings]);



    // node delete handler ------------------
    const deleteClickHandler = useCallback((selectedNode: Node) => {
        console.log("selected node to delete", selectedNode, contextWorkflow.selectedNodeForSetting);
        if (selectedNode.data.moduleName != undefined) {
            let selectedTab: any = contextWorkflow.workFlowModuleTabList.filter((el) => el.nodeInfo.id == selectedNode.id);
            if (selectedTab.length > 0) {
                contextWorkflow.handleWorkFlowModuleTabList(selectedTab[0], "delete");
            }
        }
        const incomers = getIncomers(selectedNode, reactFlow.getNodes(), reactFlow.getEdges());
        const outgoers = getOutgoers(selectedNode, reactFlow.getNodes(), reactFlow.getEdges());
        // const connectedEdges = getConnectedEdges()
        console.log("incomers and outgoers ", incomers, outgoers);
        // reactFlow.deleteElements({ nodes: [...outgoers, selectedNode], edges: getConnectedEdges([selectedNode], reactFlow.getEdges()) });
        reactFlow.deleteElements({ nodes: [selectedNode], edges: getConnectedEdges([selectedNode], reactFlow.getEdges()) });

        setTimeout(() => {
            setLayout(reactFlow.getNodes(), reactFlow.getEdges());
        }, 200);
        if (selectedNode.id == contextWorkflow.selectedNodeForSetting.id) {
            contextWorkflow.handleWorkflowSettingsPop(false);
        }
        if (incomers[0] != undefined) {
            let allEdges: any = {};
            if (incomers[0].type == 'Condition') {
                let allConnectedEdges = getConnectedEdges([incomers[0], selectedNode], reactFlow.getEdges());
                const connectedEdges = allConnectedEdges.filter((value) => value.source == incomers[0].id && value.target != selectedNode.id);
                const deletedEdge = allConnectedEdges.filter((value) => value.source == incomers[0].id && value.target == selectedNode.id);
                console.log("connected edges condition", connectedEdges);
                if (connectedEdges.length > 0) {
                    connectedEdges.map((el: any, elIndex) => {
                        if (allEdges[el.sourceHandle] == undefined) {
                            allEdges[el.sourceHandle] = [];
                        }
                        allEdges[el.sourceHandle].push(el);
                        if (elIndex == connectedEdges.length - 1) {
                            console.log("all edges", allEdges);
                            setEdges((edges) => {
                                edges.map((e: any) => {
                                    if (allEdges[e.sourceHandle]) {
                                        const edgeIndex = allEdges[e.sourceHandle].findIndex((edgeEl: any) => edgeEl.id == e.id);
                                        console.log("condition node index", allEdges[e.sourceHandle], edgeIndex);
                                        if (edgeIndex >= 0) {
                                            console.log(allEdges[e.sourceHandle].length);
                                            if (allEdges[e.sourceHandle].length > 1) {
                                                e.type = 'module';
                                                e.label = edgeIndex + 1;
                                            }
                                            else {
                                                e.type = 'basic';
                                            }
                                            //   console.log("sub block edge length",edgeByHandle[allEdges[e.id].sourceHandle].length,edgeIndex);
                                            //   if(edgeByHandle[allEdges[e.id].sourceHandle].length > 1  || (edgeByHandle[allEdges[e.id].sourceHandle].length == 1 && allEdges[e.id].sourceHandle == edgeProps.sourceHandle))
                                            //   {
                                            //     e.type = 'module';
                                            //   }
                                            //   e.label = edgeIndex + 1;
                                        }
                                    }
                                });
                                return edges;
                            });
                        }
                    });
                    let sourceHandle: any = deletedEdge[0].sourceHandle;
                    let sourceConditionDataArr = sourceHandle.split("_");
                    const sourceConditionIndex: any = sourceConditionDataArr[sourceConditionDataArr.length - 1];
                    let conditionData = incomers[0].data.conditions.filter((el: any, index: any) => {
                        if (index == sourceConditionIndex) {
                            return el;
                        }
                    });
                    if (conditionData.length > 0) {
                        setNodes((nodes) => {
                            nodes.map((node) => {
                                if (node.id == incomers[0].id) {
                                    node.data.conditions.map((item: any, index: any) => {
                                        if (index == sourceConditionIndex) {
                                            item.actions.map((action: any, actionIndex: any) => {
                                                if (action.id == selectedNode.id) {
                                                    node.data.conditions[sourceConditionIndex].actions.splice(actionIndex, 1);
                                                }
                                            });
                                        }
                                    });
                                }
                            })
                            return nodes;
                        })
                        // conditionData[0].actions.map((action:any,elIndex:any)=>{
                        //     if(action.id == selectedNode.id)
                        //     {
                        //         let splicedArray = conditionData[0].actions.splice(elIndex,1);
                        //         console.log("spliced ar",splicedArray,conditionData[0].actions);
                        //     }
                        // });
                    }
                }
            }
            // else {
            const sourceOutGoerArr = getOutgoers(incomers[0], reactFlow.getNodes(), reactFlow.getEdges());
            const sourceOutgoers = sourceOutGoerArr.filter((outNode) => outNode.id !== selectedNode.id);
            console.log("outgoers", sourceOutgoers);
            setNodes((nodes) => {
                nodes.map((el) => {
                    if (el.id == incomers[0].id) {
                        el.data.childNodeCount = sourceOutgoers.length;
                    }
                })
                return nodes;
            })
            if (incomers[0].type != 'Condition') {
                sourceOutgoers.map((el, index) => {
                    let connectedEdges = getConnectedEdges([incomers[0], el], reactFlow.getEdges());
                    const selectedEdge = connectedEdges.find((elm) => elm.source == incomers[0].id && elm.target == el.id);
                    console.log("edges s", connectedEdges, selectedEdge);
                    if (selectedEdge) {
                        setEdges((edges) => {
                            edges.map((ed) => {
                                if (ed.id == selectedEdge.id) {
                                    if (sourceOutgoers.length == 1) {
                                        ed.type = 'basic'
                                    }
                                    if (sourceOutgoers.length > 1 && selectedNode.data.conditionSouce == undefined) {
                                        ed.type = 'module';
                                        ed.label = index + 1;
                                    }
                                }
                            });
                            return edges;
                        });
                    }
                });
            }
            //}
        }
        if (outgoers.length > 0) {
            outgoers.map((el) => {
                deleteClickHandler(el);
            });
        }
        //setNo
    }, [contextWorkflow.selectedNodeForSetting, contextWorkflow.workFlowModuleTabList, reactFlow, getOutgoers, getConnectedEdges]);


    // start node initialization ------------------
    let initialNodes: Node[] = [];
    let initialEdges: Edge[] = [];
    if (currentFlow.workflow == undefined || currentFlow.workflow == "") {
        initialNodes =
            [{
                id: "node_1",
                type: (currentFlow.workflowType == 'Modules') ? 'Entry' : ((currentFlow.workflowType == 'Campaigns') ? 'Trigger' : 'startNode'),
                position: { x: 100, y: 150 },
                data: { label: "", onNodeAddClick: onNodeAddClick, onNodeSettingsClick: onNodeSettingsClick, childNodeCount: 0, subNode: false, elementType: (currentFlow.workflowType == 'Modules') ? 'Entry' : ((currentFlow.workflowType == 'Campaigns') ? 'Trigger' : 'startNode'), info: {}, onModuleClick: onNodeModuleClick, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {}, transferTabInfo: { selectedTab: 0, tabInfo: { 0: {}, 1: {}, 2: {}, 3: {} }, messageContent: { "text": "", "image": null, "senderNo": "" }, audienceList: null, voiceNodeInfo: { "language": "", "accent": "", "retries": 0 } } },
                sourcePosition: Position.Right
                // draggable: false
            }];

        if (currentFlow.workflowType == "Campaigns" && currentFlow.type != undefined && currentFlow.type != "") {
            let typeNode: Node = {
                id: "node_2",
                type:  currentFlow.type,
                position: { x: 400, y: 150 },
                data: { label: (currentFlow.type == "sms") ? "SMS Message" : currentFlow.type.toUpperCase(), onNodeAddClick: onNodeAddClick, onNodeSettingsClick: onNodeSettingsClick, childNodeCount: 0, subNode: false, elementType: (currentFlow.workflowType == 'Modules') ? 'Entry' : ((currentFlow.workflowType == 'Campaigns') ? 'Trigger' : 'startNode'), info: {}, onModuleClick: onNodeModuleClick, toOpenSettings: true, toAddItem: "", selectedModuleNodeToDisplay: "", toOpenModuleClick: "", description: "", conditions: [], conditionVariableList: [], selectedMediaTab: 0, mediaContent: { 0: "", 1: { fileList: new Array(), selectedFile: "" }, 2: [] }, webhookDetails: {}, transferTabInfo: { selectedTab: 0, tabInfo: { 0: {}, 1: {}, 2: {}, 3: {} } }, messageContent: { "text": "", "image": null, "senderNo": "" }, audienceList: null, voiceNodeInfo: { "language": "", "accent": "", "retries": 0 } },
                sourcePosition: Position.Right
                // draggable: false
            }
            initialNodes.push(typeNode);
            initialEdges.push({
                id: 'edge_' + initialNodes[0].id + "_" + typeNode.id,
                source: initialNodes[0].id,
                target: typeNode.id,
                type: 'basic',
                //label: outGoers.length + 1,
                markerEnd: { type: MarkerType.ArrowClosed, color: '#000000' },
            });
        }
    }
    else {
        initialNodes = currentFlow.workflow.nodes;
        initialEdges = currentFlow.workflow.edges;
    }

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // label change from node settings popup ------------------------
    const nodeLabelChangeHandler = useCallback((selectedNode: any, changedLabel: any) => {
        //console.log("label changed",selectedNode.data.label);
        // setNodes((nds) =>
        //     nds.map((node) => {
        //         if (node.id === selectedNode.id) {
        //             // when you update a simple type you can just update the value
        //             node.data.label = changedLabel;
        //         }

        //         return node;
        //     })
        // );

        const updatedNodeData: Node = reactFlow.getNode(selectedNode.id) as Node;

        updatedNodeData.data.label = changedLabel;
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings]);

    const nodeTypeChangeHandler = useCallback((nodeID: any) => {
        const nodeInfo = reactFlow.getNode(nodeID) as Node;
        if (nodeInfo) {
            if (nodeInfo.type == 'Module') {
                const outgoingNodes = getOutgoers(nodeInfo, reactFlow.getNodes(), reactFlow.getEdges());
                if (outgoingNodes.length == 0) {
                    setTimeout(() => {
                        onNodeAddClick(nodeInfo, 'Exit');
                    }, 400);
                }
            }
            else {
                const outgoingNodes = getOutgoers(nodeInfo, reactFlow.getNodes(), reactFlow.getEdges());
                if (outgoingNodes.length > 0) {
                    const exitNode: any = outgoingNodes.find((el) => el.type == 'Exit');

                    if (exitNode) {
                        const exitNodeInfo = reactFlow.getNode(exitNode.id) as Node;
                        const exitNodeConnectedEdges = getConnectedEdges([exitNodeInfo], reactFlow.getEdges());
                        console.log("exit node arr", exitNode);
                        if (exitNodeConnectedEdges.length > 0) {
                            reactFlow.deleteElements({ nodes: [exitNodeInfo], edges: exitNodeConnectedEdges });
                            setTimeout(() => {
                                setLayout(reactFlow.getNodes(), reactFlow.getEdges());
                            }, 100);
                        }

                    }
                }

            }
        }
    }, [reactFlow]);
    const onRestore = useCallback((nodeInfo: any) => {
        const restoreFlow = async () => {
            console.log("restore flow", nodeInfo.data.moduleDetails);
            if (nodeInfo != undefined && nodeInfo.data != undefined && nodeInfo.data.moduleDetails != undefined && nodeInfo.data.moduleDetails != null) {
                const flow = nodeInfo.data.moduleDetails;

                if (flow) {
                    console.log("flow", flow);
                    const { x = 100, y = 150, zoom = 1 } = flow.viewport;
                    setNodes(flow.nodes || []);
                    setEdges(flow.edges || []);
                    reactFlow.setViewport({ x, y, zoom });
                }
            }
        };

        restoreFlow();
    }, [setNodes, reactFlow.setViewport]);

    // module tab switching -------------------
    useEffect(() => {
        console.log("selected tab", contextWorkflow.workflowModuleTab, contextWorkflow.currentRunningWorkFlow);
        contextWorkflow.handleWorkflowSettingsPop(false);
        if (contextWorkflow.workflowModuleTab.name == 0 && contextWorkflow.currentRunningWorkFlow != "") {
            const flow = JSON.parse(contextWorkflow.currentRunningWorkFlow);
            console.log("tabflow", flow);
            if (flow.workflow) {
                console.log("flow", flow);
                const { x = 100, y = 150, zoom = 1 } = flow.workflow.viewport;
                setNodes(flow.workflow.nodes || []);
                setEdges(flow.workflow.edges || []);
                reactFlow.setViewport({ x, y, zoom });
            }
        }
        else if (contextWorkflow.workflowModuleTab.name != 0 && contextWorkflow.workflowModuleTab.nodeInfo != undefined && contextWorkflow.workflowModuleTab.nodeInfo != "") {
            onRestore(contextWorkflow.workflowModuleTab.nodeInfo);
        }

    }, [contextWorkflow.workflowModuleTab]);
    // description change from node settings -------------
    const descriptionChangeHandler = useCallback((selectedNode: any, changedDesc: any) => {
        console.log("label changed", selectedNode.data.description);
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.description = changedDesc;
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings]);
    useEffect(() => {
        if (contextWorkflow.selectedNodeForSetting != null && contextWorkflow.selectedNodeForSetting.data != undefined) {
            if (contextWorkflow.selectedNodeForSetting.data.toOpenSettings == true) {
                reactFlow.setNodes((nodes) => {
                    nodes.map((nds) => {
                        if (nds.id == contextWorkflow.selectedNodeForSetting.id) {
                            nds.data.toOpenSettings = false;
                            //alert(6);
                            contextWorkflow.handleWorkflowSettings(nds);
                            contextWorkflow.handleWorkflowSettingsPop(true);
                            contextWorkflow.handleSettingsNodeTab(0);
                        }
                    });
                    return nodes;
                });


            }
            if (contextWorkflow.selectedNodeForSetting.data.toOpenModuleClick != "") {
                //z  alert(contextWorkflow.selectedNodeForSetting.data.toOpenModuleClick);
                reactFlow.setNodes((nodes) => {
                    nodes.map((nds) => {
                        if (nds.id == contextWorkflow.selectedNodeForSetting.id) {
                            nds.data.toOpenModuleClick = "";
                            //  alert(7);
                            console.log(nds);
                            contextWorkflow.handleWorkflowSettings(nds);
                        }
                    });
                    return nodes;
                });
                onNodeModuleClick(contextWorkflow.selectedNodeForSetting.id);
            }
            // const updatedNodeData = reactFlow.getNode(contextWorkflow.selectedNodeForSetting.id);
            // contextWorkflow.handleWorkflowSettings(updatedNodeData);

        }

    }, [contextWorkflow.selectedNodeForSetting]);

    // condition label change from node settings popup ------------------------
    const nodeConditionLabelChangeHandler = useCallback((selectedNode: any, changedLabel: any, conditionIndex: any) => {
        //console.log("label changed",selectedNode.data.label);
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.conditions[conditionIndex].label = changedLabel;
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(contextWorkflow.selectedNodeForSetting.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings]);

    // condition block variable name add ----------
    const nodeBlockVariableAddHandler = useCallback((variableName: any, selectedNode: any) => {
        setNodes((nodes) => {
            nodes.map((nd) => {
                if (nd.id === selectedNode.id) {
                    selectedNode.data.conditionVariableList.push(variableName);
                    nd.data = selectedNode.data;
                    //contextWorkflow.handleWorkflowSettings(nd);
                }
            });
            return nodes;
        });
        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings]);
    const conditionInfoAddHandler = useCallback((selectedNode: any, index: any, conditionInfo: any) => {
        console.log("condition info add", index, conditionInfo);
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.conditions[index].conditionInfo.push(conditionInfo);
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings, setNodes]);

    const onConditionInfoRemove = useCallback((selectedNode: any, index: any, elIndex: any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.conditions[index].conditionInfo.splice(elIndex, 1);
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings, setNodes]);
    // on media tab change --------------
    const onMediaTabChange = useCallback((selectedValue: any) => {
        setNodes((nodes) => {
            nodes.map((nds) => {
                if (nds.id === contextWorkflow.selectedNodeForSetting.id) {
                    nds.data.selectedMediaTab = selectedValue;
                }
            });
            return nodes;
        });
        const updatedNodeData = reactFlow.getNode(contextWorkflow.selectedNodeForSetting.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.selectedNodeForSetting]);

    const onMediaContentUpdate = useCallback((mediaContentValue: any, tabID: any) => {
        console.log("media content", mediaContentValue, tabID);
        //if(tabID == 0)
        // {
        // setNodes((nodes) => {
        //     nodes.map((nds) => {
        //         if (nds.id === contextWorkflow.selectedNodeForSetting.id) {
        //             // alert(tabID+" "+mediaContentValue)
        //             nds.data.mediaContent[tabID] = mediaContentValue;
        //         }
        //     });
        //     return nodes;
        // });
        //  }
        const updatedNodeData = reactFlow.getNode(contextWorkflow.selectedNodeForSetting.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);

    }, [contextWorkflow.selectedNodeForSetting]);

    const onIntentDelete = useCallback((intentID: any) => {
        reactFlow.setNodes((nodes) => {
            nodes.map((node) => {
                if (node.id == contextWorkflow.selectedNodeForSetting.id) {
                    if (node.data.mediaContent[2].length > 0) {
                        node.data.mediaContent[2] = node.data.mediaContent[2].filter((el: any) => el.id != intentID);
                        contextWorkflow.handleWorkflowSettings(node);
                    }
                }
            });
            return nodes;
        });
    }, [contextWorkflow.selectedNodeForSetting, reactFlow]);
    // webhook change from node settings -------------
    const webhookDetailsChangeHandler = useCallback((selectedNode: any, webhookDetails: any) => {
        console.log("label changed", selectedNode.data.description);
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.webhookDetails = webhookDetails;
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings, setNodes]);

    const transferInfoUpdateHandler = useCallback((selectedNode: any, updateInfo: any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.transferTabInfo = updateInfo;
                }

                return node;
            })
        );

        const updatedNodeData = reactFlow.getNode(selectedNode.id);
        contextWorkflow.handleWorkflowSettings(updatedNodeData);
    }, [contextWorkflow.handleWorkflowSettings, setNodes]);
    // layout method ----------------------
    const nodesForFlow = useCallback((graph: any, nodes: any) => {
        return [
            ...graph.children.map((node: any) => {
                return {
                    ...nodes.find((n: any) => n.id === node.id),
                    position: { x: node.x, y: node.y }
                };
            })
        ];
    }, []);
    const setLayout = useCallback((nodes: any, edges: any) => {
        console.log("layout store", edges);
        const graph: any = {
            id: "flowRoot",
            layoutOptions: elkOptions,
            children: reactFlow.getNodes(),
            edges: reactFlow.getEdges()
        };
        elk.layout(graph).then((layoutedGraph: any) => {
            console.log("layout", layoutedGraph);
            setNodes(nodesForFlow(layoutedGraph, nodes));
            setEdges(layoutedGraph.edges);
            const nodeBounds = getNodesBounds(layoutedGraph.children);
            //const nodeRect = getRectOfNodes(layoutedGraph);
            //const viewportForBounds = getViewportForBounds(nodeBounds,)
            console.log("node bounds", nodeBounds, reactFlow.getViewport());
            reactFlow.fitView({ includeHiddenNodes: false, padding: 15 });
            // reactFlow.fitBounds({height:486});
        }).catch((e) => {
            console.log("layout", e);
        });
    }, [reactFlow, elk, elkOptions]);

    const onMessageContentUpdate = (selectedNode:any,updateInfo:any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.messageContent = updateInfo;
                }

                return node;
            })
        )
    };
    const onAudienceListUpdate = (selectedNode:any,updateInfo:any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.audienceList = updateInfo;
                }

                return node;
            })
        )
    };
    const onVoiceNodeUpdate = (selectedNode:any,updateInfo:any) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // when you update a simple type you can just update the value
                    node.data.voiceNodeInfo = updateInfo;
                }

                return node;
            })
        )
    };
    return (
        <>
            {/* <ReactFlow nodeTypes={nodeTypes} edgeTypes={edgeTypes} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} nodesConnectable={contextWorkflow.selectedFlowRunningType == "" ? true : false} nodesDraggable={contextWorkflow.selectedFlowRunningType == "" ? true : false} minZoom={0.6} maxZoom={1.5} panOnDrag={false}> */}

            <div className={`${style.react_flow_container} ${contextWorkflow.workflowSettingsPop ? style.settings_open : null}`} >
                <ReactFlow nodeTypes={nodeTypes} edgeTypes={edgeTypes} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} nodesConnectable={contextWorkflow.selectedFlowRunningType == "" ? true : false} nodesDraggable={false} minZoom={0.8} maxZoom={1} defaultViewport={{ x: 100, y: 150, zoom: 0.8 }}>
                    <Background />
                    {contextWorkflow.selectedFlowRunningType == "" && <Controls />}
                </ReactFlow>
            </div>

            {contextWorkflow.workflowSettingsPop ? <NodeSettingsPop onNodeCountChange={triggerMultipleNodeAdd} onLabelChange={nodeLabelChangeHandler} onDeleteNode={deleteClickHandler} onNodeTypeChange={nodeTypeChangeHandler} onDescriptionChange={descriptionChangeHandler} onConditionLabelChangeHandler={nodeConditionLabelChangeHandler} onConditionVariableAdd={nodeBlockVariableAddHandler} onConditionInfoAdd={conditionInfoAddHandler} onConditionInfoRemove={onConditionInfoRemove} onMediaTabChange={onMediaTabChange} onMediaContentUpdate={onMediaContentUpdate} onWebhookDetailsChange={webhookDetailsChangeHandler} onIntentDelete={onIntentDelete} onTransferInfoUpdate={transferInfoUpdateHandler} onMessageContentUpdate={onMessageContentUpdate} onAudienceListUpdate={onAudienceListUpdate} onVoiceNodeUpdate={onVoiceNodeUpdate}/> : null}
        </>
    )
}

export default MainWorkFlow;
import { useCallback, useContext, useEffect, useState } from 'react'
import style from './style.module.scss'
import AddNodeIcon from "/assets/dashboard/main_dashboard/admin/workflow/addnode.svg"
// import CrossIcon from "/assets/dashboard/main_dashboard/admin/workflow/cross.svg"
// import SearchIcon from "/assets/dashboard/main_dashboard/admin/workflow/search.svg"
// import DivRight from "/assets/dashboard/main_dashboard/admin/workflow/div_right.svg"
// import TrashIcon from "/assets/dashboard/main_dashboard/admin/workflow/ac_trash.svg"
import { ContextWorkflow } from '../../../../../../../contexts/workflowContext'
import { useReactFlow } from 'reactflow'
import ConditionSubBlock from './ConditionSubBlock'
const ConditionContent = ({ onConditionLabelChange, onVariableAdd, onConditionAdd, onConditionInfoRemove, onConditionNodeDelete, moduleList }: any) => {
    const contextWorkflow = useContext(ContextWorkflow);
    const [selectedNode,setSelectedNode] = useState(contextWorkflow.selectedNodeForSetting);
    console.log("selected Node in condition content",selectedNode.id);
    const rfInstance = useReactFlow();
    const addNewConditionBlock = useCallback(() => {
        selectedNode.data.conditions.push({ label: "", conditionInfo: [], actions: [] });
        rfInstance.setNodes((nodes) => {
            nodes.map((nds) => {
                if (nds.id == selectedNode.id) {
                    nds.data = selectedNode.data;
                }
            });
            return nodes;
        });
        contextWorkflow.handleWorkflowSettings(selectedNode);
    }, [selectedNode, contextWorkflow.selectedNodeForSetting]);

    // condition label change handler -----------------
    const conditionLabelHandler = useCallback((index: any, evt: any) => {
        console.log("selected node", evt.target.value);
        // selectedNode.data.conditions[index].label = evt.target.value;
        // contextWorkflow.handleWorkflowSettings(selectedNode);
        // console.log("selected Node", selectedNode);
        // rfInstance.setNodes((nodes) => {
        //     nodes.map((nds) => {
        //         if (nds.id == selectedNode.id) {
        //             nds.data = selectedNode.data;
        //         }
        //     });
        //     return nodes;
        // });
        onConditionLabelChange(index, evt.target.value);
    }, [onConditionLabelChange]);

    const onConditionDeleteHandler = useCallback((conditionIndex: any) => {
        if (selectedNode.data.conditions != undefined && selectedNode.data.conditions[conditionIndex].actions != undefined && selectedNode.data.conditions[conditionIndex].actions.length > 0) {
            const actionsLength = selectedNode.data.conditions[conditionIndex].actions.length;
            selectedNode.data.conditions[conditionIndex].actions.map(async (el: any, index: any) => {
                console.log(" outgoers ", el);
                await onConditionNodeDelete(el);
                if (index == actionsLength - 1) {
                    rfInstance.setNodes((nodes) => {
                        nodes.map((nds) => {
                            if (nds.id === selectedNode.id) {
                                nds.data.conditions.splice(conditionIndex, 1);
                                console.log("condition array", nds.data.conditions);
                                selectedNode.data = nds.data;
                                contextWorkflow.handleWorkflowSettings(nds);
                            }
                        });
                        return nodes;
                    });
                }
            });
        }
        else {
            rfInstance.setNodes((nodes) => {
                nodes.map((nds) => {
                    if (nds.id === selectedNode.id) {
                        nds.data.conditions.splice(conditionIndex, 1);
                        console.log("condition array", nds.data.conditions);
                        selectedNode.data = nds.data;
                        contextWorkflow.handleWorkflowSettings(nds);
                    }
                });
                return nodes;
            });
        }

    }, [rfInstance.setNodes, contextWorkflow.selectedNodeForSetting, selectedNode, onConditionNodeDelete]);

   useEffect(()=>{
    setSelectedNode(contextWorkflow.selectedNodeForSetting);
   },[contextWorkflow.selectedNodeForSetting])
    return (
        <div className={style.condition_wrapper}>
            <div className={`${style.head_condition} d-flex align-items-center justify-content-between`}>
                <h3>CONDITIONS</h3>
                <span className={`${style.new} d-flex align-items-center`} onClick={addNewConditionBlock}>
                    <span><img src={AddNodeIcon} alt="" /></span>
                    <span>New Condition</span>
                </span>
            </div>

            {
                selectedNode.data.conditions.map((el: any, index: any) => {
                    return (
                        <ConditionSubBlock index={index} element={el} onConditionLabelChange={conditionLabelHandler} onVariableAdd={(variableName: any) => onVariableAdd(variableName)} onConditionAdd={onConditionAdd} onConditionInfoRemove={onConditionInfoRemove} onConditionDelete={onConditionDeleteHandler} moduleList={moduleList} />
                    );
                })

            }

        </div>
    )
}

export default ConditionContent
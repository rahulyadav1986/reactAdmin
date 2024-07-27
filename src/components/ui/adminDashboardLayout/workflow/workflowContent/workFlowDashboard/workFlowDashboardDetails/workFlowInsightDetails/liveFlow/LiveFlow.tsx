
import MainFlow from "../../../../mainFlow/MainFlow";
import { ReactFlowProvider } from "reactflow";


const LiveFlow = () => {
  let savedFlow = localStorage.getItem("savedFlows");
  const workflow = (savedFlow != null)?JSON.parse(savedFlow):"";
  console.log("all saved flows",workflow);
  return (
    <>
      {(workflow != "" && workflow.Workflow != undefined && Object.keys(workflow.Workflow).length > 0) && <ReactFlowProvider><MainFlow savedFlow={Object.values(workflow.Workflow)[0]} flowData={Object.values(workflow.Workflow)[0]}/></ReactFlowProvider>}
    </>
  )
}

export default LiveFlow
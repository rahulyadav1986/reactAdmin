import { useContext } from "react"
import { ContextReport } from "../../../../../../../../contexts/reportContext"
import DataView from "./DataView"
import GraphicalView from "./GraphicalView"


const InteractionSummaryContent = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
      <>
        {
          contextFilterReport.summaryTab === 0 ? <DataView /> :
          contextFilterReport.summaryTab === 1 ? <GraphicalView /> : null
        }
        
      </>
  )
}

export default InteractionSummaryContent
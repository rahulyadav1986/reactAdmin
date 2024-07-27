import InteractionListStatus from "./InteractionListStatus"
import InteractionMainStatus from "./InteractionMainStatus"
import InteractionCharts from "./interactionCharts/InteractionCharts"


const DashboardInteraction = () => {
  return (
     <>
        <InteractionMainStatus />
        <InteractionListStatus />
        <InteractionCharts />
     </>
  )
}

export default DashboardInteraction
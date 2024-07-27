import { useLocation } from 'react-router-dom'
import ReportCharts from './ReportCharts'
import WorkFlowCharts from './ChartWorkFlow'

const WorkFlowChartStatus = () => {
  const location = useLocation()
  const ActualLocation = location.pathname.indexOf('/workflow-studio')>=0
  return (
    <>
      { ActualLocation ? <WorkFlowCharts />  : <ReportCharts /> }
    </>
    
  )
}

export default WorkFlowChartStatus
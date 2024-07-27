import { useLocation } from 'react-router-dom'
import InsightPlatfornStatus from './InsightPlatfornStatus'
import InsightWorkFlowStatus from './InsightWorkFlowStatus'
const InsightHeaderStatus = () => {
  const location = useLocation()
  const platFormConfiguration = location.pathname.indexOf('/platform-configuration')>=0
  return (
        <>
          { platFormConfiguration ? <InsightPlatfornStatus /> : <InsightWorkFlowStatus /> }
        </>
  )
}

export default InsightHeaderStatus
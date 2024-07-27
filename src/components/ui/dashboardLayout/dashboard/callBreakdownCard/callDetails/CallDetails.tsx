import { useLocation } from 'react-router-dom';

import style from './style.module.scss'

import AgentCallData from './AgentCallData';
import SupervisorCallData from './SupervisorCallData';
import GraphData from './GraphData';


const CallDetails = () => {
  const location = useLocation()
  const currentLocation = location.pathname.indexOf('/agent')>=0
  return (
    <>
        <div className={style.call_details_tree}>
            <ul>
                {
                    currentLocation ? <AgentCallData /> : <SupervisorCallData />
                    
                }
            </ul>
        </div>
        <GraphData />
    </>
  )
}

export default CallDetails
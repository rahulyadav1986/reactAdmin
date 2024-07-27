import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import TransferCallIcon from "/assets/interactionCenter/transferCall.svg"
import CancleIcon from "/assets/dashboard/cancle.svg"
import UserSearchDrop from '../useSearchDrop/UserSearchDrop'
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'
import { useContext } from 'react'
const AgentTransferPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={`${style.agent_transfer_popup_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>mediaHandleContext.handleAgentTransferPopup(false)}></div>
        <div className={style.main_wrapper}>
            <div className={style.overlay_main} onClick={()=>mediaHandleContext.handleUserDrop(false)}></div>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <h4>Agent Transfer</h4>
                <span><img src={CrossIcon} alt="" onClick={()=>mediaHandleContext.handleAgentTransferPopup(false)} /></span>
            </div>
            <UserSearchDrop />
            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`}>
                    <span><img src={TransferCallIcon} alt="" /></span>
                    <span>Transfer</span>
                </div>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>mediaHandleContext.handleAgentTransferPopup(false)}>
                    <span><img src={CancleIcon} alt="" /></span>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentTransferPopup
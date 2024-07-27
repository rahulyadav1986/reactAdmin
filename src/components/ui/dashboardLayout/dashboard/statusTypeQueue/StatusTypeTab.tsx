import {useContext} from 'react'
import { ContextStatusType } from '../../../../../contexts/statuTypeContext'
import style from './style.module.scss'

const StatusTypeTab = () => {
  const statusTypeContext = useContext(ContextStatusType)
  return (
    <ul className={`${style.status_type_tab_wrapper}  d-flex`}>
        <li className={statusTypeContext.queueStatusType === 0 ? style.active : ''} onClick={()=>statusTypeContext.handleQueueStatusType(0)}>Voice Call Queue</li>
        <li className={statusTypeContext.queueStatusType === 1 ? style.active : ''} onClick={()=>statusTypeContext.handleQueueStatusType(1)}>Message Queue</li>
        <li className={statusTypeContext.queueStatusType === 2 ? style.active : ''} onClick={()=>statusTypeContext.handleQueueStatusType(2)}>Video Call Queue</li>
    </ul>
  )
}

export default StatusTypeTab
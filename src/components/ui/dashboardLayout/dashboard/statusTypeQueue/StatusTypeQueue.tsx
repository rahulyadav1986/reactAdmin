
import StatusTypeTab from './StatusTypeTab'
import StstusTypeContent from './StstusTypeContent'
import style from './style.module.scss'

const StatusTypeQueue = () => {
  return (
    <div className={`${style.status_type_wrapper} status_type_wrapper`}>
        <StatusTypeTab />
        <StstusTypeContent />
        
    </div>
  )
}

export default StatusTypeQueue
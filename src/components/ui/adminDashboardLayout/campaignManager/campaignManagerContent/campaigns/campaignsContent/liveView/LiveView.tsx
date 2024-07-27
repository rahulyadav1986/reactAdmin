import LiveViewContent from './LiveViewContent'
import LiveViewTab from './LiveViewTab'
import style from './style.module.scss'

const LiveView = () => {
  return (
    <div className={`${style.live_view_wrapper} d-flex`}>
        <LiveViewTab />
        <LiveViewContent />
    </div>
  )
}

export default LiveView
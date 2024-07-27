

import style from './style.module.scss'
import VideoCallQueueContent from './VideoCallQueueContent'


const StstusTypeContent = () => {
  return (
      <div className={style.status_type_content_wrapper}>
        {/* {
            statusTypeContext.queueStatusType === 0 ? <VideoCallQueueContent /> : 
            statusTypeContext.queueStatusType === 1 ? <VideoCallQueueContent /> : 
            statusTypeContext.queueStatusType === 2 ? <VideoCallQueueContent /> : null
        } */}
        <VideoCallQueueContent />
      </div>
    
  )
}

export default StstusTypeContent
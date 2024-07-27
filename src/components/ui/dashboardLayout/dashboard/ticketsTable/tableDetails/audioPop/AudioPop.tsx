import {useCallback, useContext, useState} from 'react'
import style from './style.module.scss'

import DownloadIcon from '/assets/dashboard/main_dashboard/tablePops/download.svg'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import AudioPlayer from './audioPlayer/AudioPlayer'
import { useLocation } from 'react-router-dom'
import QualityFormButton from '../qualityFormButton/QualityFormButton'
import SupervisorAudioPlayer from './audioPlayer/SupervisorAudioPlayer'

const AudioPop = () => {
  const tablePopupContext = useContext(ContextTablePopup)
   
  const location = useLocation()
  const supervisorLocation = location.pathname.indexOf('/supervisor')>=0 || location.pathname.indexOf('/admin')>=0
  const [percentage,setPercentage] = useState(0);
  const onPercentageUpdate = useCallback((percentage:any)=>{
    setPercentage(percentage);
  },[percentage]);
  
  return (
    <>
      <div className={`${supervisorLocation ? `${style.header_widget_area} ${style.border}` : style.header_widget_area} d-flex align-items-center justify-content-between`}>
          <h4>{supervisorLocation ? <>Audio Call - <span>Silent Monitor  (listen)</span></> : 'Voice Call Recording'}</h4>          
          <ul className={`${style.action_icons} d-flex align-items-center`}>
              { supervisorLocation ?  <QualityFormButton /> : null }
              {supervisorLocation ? null : <li><img src={DownloadIcon} alt="" /></li> }
              <li onClick={()=>tablePopupContext.handlVoiceCallRecordingPop(false)}><img src={CrossIcon} alt="" /></li>
          </ul>
      </div>
      { supervisorLocation ? <SupervisorAudioPlayer onTimeChange={onPercentageUpdate} /> : <AudioPlayer /> }
      
    </>
  )
}

export default AudioPop
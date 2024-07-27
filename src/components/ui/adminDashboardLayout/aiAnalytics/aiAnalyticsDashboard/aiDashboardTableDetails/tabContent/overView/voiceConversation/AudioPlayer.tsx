
import { useContext, useEffect, useRef, useState } from 'react'
import { VoiceConversationData } from './Data'
import style from "./style.module.scss"
import PauseIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pause-icon.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/play-icon.svg"
import VolIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/volumeUp.svg"
import { ContextAiAnalytics } from '../../../../../../../../../contexts/aiAnalyticsContext'
const AudioPlayer = ({timeState,onTimeChange}:any) => {
  const contextAiAnalytics = useContext(ContextAiAnalytics)
  const [percentage, setPercentage] = useState(0)
  const [position, setPosition] = useState(0)
  const [marginThumb, setMarginThumb] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  // const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const rangeRef:any = useRef()
  const thumbRef:any = useRef()
  const audioRef:any = useRef()
  const MAX = 100;
 
  const handleOnChange =(e:any)=>{
  setPercentage(e.target.value)
   // console.log("audio Value" + e.target.value)
   contextAiAnalytics.handlePlayPauseButtton(false)
   audioRef.current.pause()
   
  }
  
  useEffect(()=>{
    //alert(typeof percentage)
    console.log(1);
    const rangeWidth = rangeRef.current?.getBoundingClientRect().width
    const thumbWidth = thumbRef.current?.getBoundingClientRect().width
     const centerThumb:number = (thumbWidth / 100) * percentage * -1
    const centerProgressBar:number = thumbWidth + (rangeWidth/100) * percentage - (thumbWidth/100 * percentage)
    setPosition(percentage)
     setMarginThumb(centerThumb)
    setProgressBarWidth(centerProgressBar);
    onTimeChange(percentage);
    console.log(3)
  },[percentage])

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!contextAiAnalytics.isPlaying) {
      contextAiAnalytics.handlePlayPauseButtton(true)
      audio.play()
    }

    if (contextAiAnalytics.isPlaying) {
      contextAiAnalytics.handlePlayPauseButtton(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e:any) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(3)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }


  const secondsToHms = (seconds:any)=> {
    if (!seconds) return `00:00:00`

    let duration:any = seconds
    let hours:any = duration / 3600
    duration = duration % 3600

    let min:any = Math.floor(duration/60).toString().slice(-2)
    duration = duration % 60

    let sec:any = parseInt(duration)

    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}: ${min}: ${sec}`
    } else if (min == 0) {
      return `00:${sec}`
    } else {
      return `${min}:${sec}`
    }
  } 


  function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  }

  

  return (
    <>
      {
        VoiceConversationData.map((file)=>{
          return(
            <>
               <span className={style.graph_wrap}>
                  <span style={{'width':`${position}%`}}></span>
                </span>  
              <div className={`${style.audio_main_player_wrapper} d-flex align-items-center justify-content-between`}>
                 <span onClick={play} className={style.playpauseIcon}><img src={`${contextAiAnalytics.isPlaying ? PauseIcon : PlayIcon}`} alt="" /></span>
                 <span className={style.time}>{secondsToHms(currentTime)} / {secondsToHms(duration)}</span>
                 <div className={style.sliderContainer}>
                    <div className={style.progress_bar} style={{'width': `${progressBarWidth}px`}}></div>
                    <div className={style.thumb} ref={thumbRef} style={{'left': `${position}%`, 'marginLeft': `${marginThumb}px`}}></div>
                    <input type="range" step={0.001} ref={rangeRef} name="percentage" value={percentage} className={style.range} id="" onChange={handleOnChange} />
                 </div>
                 <div className={style.audio_bar}>
                  <div className={style.volumn_bar}>
                    <input type="range" className={style.vol_range}  min={0} max={MAX} onChange={(e) => handleVolume(e)} />
                  </div>
                  <span><img src={VolIcon} alt="" /></span>
                 </div>
              </div>
              <audio
               ref={audioRef} 
               src={`${file.filename}#t=${timeState}`} 
               controls={false} 
               autoPlay 
               onTimeUpdate={getCurrDuration}
               onLoadedData={(e:any) => {
                 setDuration(e.currentTarget.duration.toFixed(2))
               }}
               ></audio>
            </>
          )
        })
      }
    </>
    
  )
}

export default AudioPlayer
import style from './style.module.scss'
import ForwordSeekIcon from '/assets/dashboard/main_dashboard/tablePops/forward.svg'
import BackwardSeekIcon from '/assets/dashboard/main_dashboard/tablePops/backward.svg'
import PauseIcon from "/assets/dashboard/main_dashboard/tablePops/pause.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/tablePops/play.svg"
import { useEffect, useRef, useState } from 'react'
const SupervisorAudioPlayer = ({onTimeChange}:any) => {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [position, setPosition] = useState(0)
  const [marginThumb, setMarginThumb] = useState(0)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const rangeRef:any = useRef()
  const thumbRef:any = useRef()
  const audioRef:any = useRef()

  const handleOnChange =(e:any)=>{
    setPercentage(e.target.value)
  }
  
  useEffect(()=>{
    const rangeWidth = rangeRef.current?.getBoundingClientRect().width
    const thumbWidth = thumbRef.current?.getBoundingClientRect().width
    const centerThumb= (thumbWidth / 100) * percentage * -1
    const centerProgressBar = thumbWidth + (rangeWidth/100) * percentage - (thumbWidth/100 * percentage)
    setPosition(percentage)
    setMarginThumb(centerThumb)
    setProgressBarWidth(centerProgressBar);
    onTimeChange(percentage);

    
    
  },[percentage])

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    } else if (isPlaying) {
      setIsPlaying(false)
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

  const [step, setStep] = useState(0)
  const forwardStep =()=>{
    setStep(prev=>prev + 10)
  }
  const backwardStep =()=>{
    setStep(prev=>prev - 10)
  }

  

  return (
    
    <div className={style.audio_player_supervisor}>
        <div className={`${style.top_graph_area} d-flex align-items-center`}>
            <div className={`${style.graph_area} d-flex align-items-center`}>
                <span className={style.time}>{secondsToHms(currentTime)}</span>
                <span className={style.graph_wrap}>
                  <span style={{'width':`${position}%`}}></span>
                </span>
                <span className={style.time}>{secondsToHms(duration)}</span>
            </div>
            <div className={`${style.step} d-flex align-items-center`}>
                <img src={BackwardSeekIcon} onClick={backwardStep} alt="" />
                <img src={ForwordSeekIcon} onClick={forwardStep} alt="" />
            </div>
        </div>
        <div className={style.main_audio_bar_area}>
          <span onClick={play} className={style.playpauseIcon}><img src={`${isPlaying ? PauseIcon : PlayIcon}`} alt="" /></span>
          <div className={style.sliderContainer}>
            <div className={style.progress_bar} style={{'width': `${progressBarWidth}px`}}></div>
            <div className={style.thumb} ref={thumbRef} style={{'left': `${position}%`, 'marginLeft': `${marginThumb}px`}}></div>
            <input type="range" step={0.001} ref={rangeRef} name="" className={style.range} id="" onChange={handleOnChange} />
          </div>
          <span className={style.time}>{secondsToHms(duration)}</span>
          
          <audio
               ref={audioRef} 
               src={`https://zuqodemo.world/recordings/0b1dfb63-b34e-42d6-bd18-242e4d965c5c.mp3#t=${step}`} 
               controls={false} 
               autoPlay 
               onTimeUpdate={getCurrDuration}
               onLoadedData={(e:any) => {
                 setDuration(e.currentTarget.duration.toFixed(2))
               }}
               ></audio>
        </div>
    </div>
  )
}

export default SupervisorAudioPlayer
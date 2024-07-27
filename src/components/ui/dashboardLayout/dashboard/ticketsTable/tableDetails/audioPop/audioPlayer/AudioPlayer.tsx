import {useEffect, useRef, useState} from 'react'
import ForwordSeekIcon from '/assets/dashboard/main_dashboard/tablePops/forward.svg'
import BackwardSeekIcon from '/assets/dashboard/main_dashboard/tablePops/backward.svg'
import PauseIcon from '/assets/dashboard/main_dashboard/tablePops/pause.svg'
import PlayIcon from '/assets/dashboard/main_dashboard/tablePops/play.svg'
import Audio from '/assets/dashboard/main_dashboard/tablePops/audio/sample.mp3'
import style from './style.module.scss'

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const handlePlayPause = ()=>{
        setIsPlaying(!isPlaying)
    }
    const audioElm = useRef<HTMLAudioElement | null>(null)
    useEffect(()=>{
        if(isPlaying){
        audioElm.current?.play()
        }else{
        audioElm.current?.pause()
        }
    },[isPlaying])
  return (
    <>
        <div className={`${style.audio_player} d-flex align-items-center justify-content-between`}>
            <div className={`${style.progress_bar} d-flex align-items-center`}>
                <span className={style.time}>00:44</span>
                <div className={style.audio_wrap}>
                    <audio src={Audio} controls={true} ref={audioElm}></audio>
                </div>
                <span className={style.time}>1:00:00</span>
            </div>
            <div className={`${style.control} d-flex align-items-center`}>
            <img src={BackwardSeekIcon} alt="" />
            <div className={style.play_pause_wrap} onClick={handlePlayPause}>
                {isPlaying ? <img src={PauseIcon} alt="" className={style.play} /> : <img src={PlayIcon} alt="" className={style.pause} />}
            </div>
            <img src={ForwordSeekIcon} alt="" />
            </div>
        </div>
    </>
    
  )
}

export default AudioPlayer




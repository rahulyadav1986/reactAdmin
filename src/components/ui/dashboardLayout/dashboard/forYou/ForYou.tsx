import style from './style.module.scss'
import CallButtonIcon from '../../../../../../public/assets/dashboard/main_dashboard/call_button.svg'
import StartIcon from '../../../../../../public/assets/dashboard/main_dashboard/star.svg'
import VideoAvatar from '../../../../../../public/assets/dashboard/main_dashboard/video_avatar.jpg'
import PlayButtonIcon from '../../../../../../public/assets/dashboard/main_dashboard/play_button.svg'
import RightArrowIcon from '../../../../../../public/assets/dashboard/main_dashboard/right_arrow.svg'
const ForYou = () => {
  return (
    <div className={style.card}>
        <div className={`${style.head_area_wrapper} d-flex align-items-center justify-content-between`}>
          <h4>For You</h4>
        </div>
        <div className={style.missed_call_alert_wrapper}>
            <div className={`${style.label_area} d-flex flex-column`}>
                <span><span className={style.badge_area}>Missed Call Alert</span></span> 
                <span className={style.name}>Priyanka Chari<br /><span className={style.time}>2 mins ago</span></span>
            </div>
            <div className={style.call_button}>
                <img src={CallButtonIcon} alt="" />
            </div>
        </div>
        <div className={`${style.threshold_wrapper} d-flex align-items-center justify-content-between`}>
            <div className={style.label_area_wrapper}>
                <div className={`${style.head_wrap} d-flex align-items-center`}>
                    <img src={StartIcon} alt="" />
                    Threshold Alert
                </div>
                <p>Your AHT is at higher side. Let's work together to enhance efficiency</p>
                <button className={`${style.action_recomendation} d-flex align-items-center`}>
                    View Recommended Actions
                    <img src={RightArrowIcon} alt="" />
                </button>
            </div>
            <div className={style.video_avatar_wrap}>
                <img src={VideoAvatar} className={style.avatar} alt="" />
                <button className={style.button}>
                    <img src={PlayButtonIcon} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ForYou
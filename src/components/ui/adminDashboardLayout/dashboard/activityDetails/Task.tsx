import style from './style.module.scss'
import GridIcon from '/assets/dashboard/main_dashboard/admin/verticalGrid.svg'
import MaximizeIcon from '/assets/dashboard/main_dashboard/admin/maximize.svg'
import TaskVideo from "/assets/dashboard/main_dashboard/admin/video/taskVideo.mp4"
const Task = () => {
  return (
    <div className={style.card}>
       <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
          <div className={`${style.heading} d-flex align-items-center`}>
            <span><img src={GridIcon} alt="" /></span> 
            <span>Your Tasks</span>
          </div>
          <span className={style.maximize}><img src={MaximizeIcon} alt="" /></span>
       </div>
       <div className={`${style.content_area} d-flex flex-column align-items-center`}>
          <div><video className={style.video} src={TaskVideo} autoPlay muted loop data-object-fit="cover"></video></div>
          <h3>Catch a Breath: No Tasks in Sight!</h3>
          <p>Stay on Top of Your Tasks: Instantly Access Priority Assignments and Important Notifications – Never Miss a Beat!</p>
       </div>
    </div>
  )
}

export default Task
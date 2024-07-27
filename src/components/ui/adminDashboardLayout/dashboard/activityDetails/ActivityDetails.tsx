import QuickLinks from './QuickLinks'
import RecentActivity from './RecentActivity'
import style from './style.module.scss'
import Task from './Task'

const ActivityDetails = () => {
  return (
    <div className={style.activity_details_wrap}>
        <Task />
        <RecentActivity />
        <QuickLinks />
    </div>
  )
}

export default ActivityDetails
import style from './style.module.scss'
import GridIcon from '/assets/dashboard/main_dashboard/admin/verticalGrid.svg'
import MaximizeIcon from '/assets/dashboard/main_dashboard/admin/maximize.svg'
import ActivitySkeleton from './ActivitySkeleton'

const RecentActivity = () => {
  return (
    <div className={style.card}>
       <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
          <div className={`${style.heading} d-flex align-items-center`}>
            <span><img src={GridIcon} alt="" /></span> 
            <span>Recent Activity</span>
          </div>
          <span><img src={MaximizeIcon} alt="" /></span>
       </div>
       <ActivitySkeleton />
    </div>
  )
}

export default RecentActivity
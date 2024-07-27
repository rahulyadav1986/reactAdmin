import style from './style.module.scss'
import GridIcon from '/assets/dashboard/main_dashboard/admin/verticalGrid.svg'
import InboxIcon from '/assets/dashboard/main_dashboard/admin//links/inbox.svg'
import UserIcon from '/assets/dashboard/main_dashboard/admin//links/user.svg'
import StudioIcon from '/assets/dashboard/main_dashboard/admin//links/studio.svg'
import Arrow1Icon from '/assets/dashboard/main_dashboard/admin//links/ar1.svg'
import Arrow2Icon from '/assets/dashboard/main_dashboard/admin//links/ar2.svg'
import Arrow3Icon from '/assets/dashboard/main_dashboard/admin//links/ar3.svg'
const QuickLinks = () => {
  return (
    <div className={style.card}>
       <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
          <div className={`${style.heading} d-flex align-items-center`}>
            <span><img src={GridIcon} alt="" /></span> 
            <span>Quick Links</span>
          </div>
       </div>
       <ul className={style.links_wrap}>
          <li className='d-flex'>
            <span className={style.icon_box}><img src={InboxIcon} alt="" /></span>
            <span className={`${style.content_box} d-flex align-items-center justify-content-between`}>
                inbox
                <img src={Arrow1Icon} alt="" />
            </span>
          </li>
          <li className='d-flex'>
            <span className={style.icon_box}><img src={UserIcon} alt="" /></span>
            <span className={`${style.content_box} d-flex align-items-center justify-content-between`}>
                Manage Users
                <img src={Arrow2Icon} alt="" />
            </span>
          </li>
          <li className='d-flex'>
            <span className={style.icon_box}><img src={StudioIcon} alt="" /></span>
            <span className={`${style.content_box} d-flex align-items-center justify-content-between`}>
                Workflow Studio
                <img src={Arrow3Icon} alt="" />
            </span>
          </li>
          <li className='d-flex'>
            <span className={style.icon_box}><img src={StudioIcon} alt="" /></span>
            <span className={`${style.content_box} d-flex align-items-center justify-content-between`}>
                View All
            </span>
          </li>
       </ul>
    </div>
  )
}

export default QuickLinks
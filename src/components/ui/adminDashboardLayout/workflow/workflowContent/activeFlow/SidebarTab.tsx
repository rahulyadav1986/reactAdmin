import style from './style.module.scss'
import CheckIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabSidebar/check.svg"
import UserIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabSidebar/user.svg"
import ClockIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabSidebar/clock.svg"
import TickIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabSidebar/tick.svg"

const SidebarTab = () => {
  return (
    <ul className={style.sidebar}>
        <li className={style.active}>
            <span><img src={CheckIcon} alt="" /></span>
            <span>Active Workflows</span>
        </li>
        <li>
            <span><img src={UserIcon} alt="" /></span>
            <span>Assigned to Me</span>
        </li>
        <li>
            <span><img src={ClockIcon} alt="" /></span>
            <span>Overdue</span>
        </li>
        <li>
            <span><img src={TickIcon} alt="" /></span>
            <span>Recently Completed</span>
        </li>
    </ul>
  )
}

export default SidebarTab
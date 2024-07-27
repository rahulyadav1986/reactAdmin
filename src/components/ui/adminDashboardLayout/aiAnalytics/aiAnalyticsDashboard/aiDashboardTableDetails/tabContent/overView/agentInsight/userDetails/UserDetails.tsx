import style from './style.module.scss'
import AvatarIcon  from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/pro1.png"
const UserDetails = () => {
  return (
    <div className={`${style.profile_area_wrap} d-flex align-items-center`}>
        <span><img src={AvatarIcon} alt="" /></span>
        <span className='d-flex flex-column'>
            <span className={style.name}>Kiranmai Kulakarni</span>
            <span className={`${style.other_details} d-flex align-items-center`}>
                <span>kiranmai@airtel.in</span>
                <span>Total Calls Attended: <strong>405</strong></span>
            </span>
        </span>
    </div>
  )
}

export default UserDetails
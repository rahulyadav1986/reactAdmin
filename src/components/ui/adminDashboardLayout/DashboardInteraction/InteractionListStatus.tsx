import style from './style.module.scss'
import UpArrowIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/arrow_upward.svg"
const InteractionListStatus = () => {
  return (
    <ul className={`${style.list_status_wrapper} d-flex`}>
        <li style={{'background': 'linear-gradient(180deg, #F8F1E7 0%, rgba(239, 222, 197, 0.75) 100%)'}}>
            <h3>Average Handle Time</h3>
            <span className={style.time}>4m:32s</span>
        </li>
        <li style={{'background': 'linear-gradient(180deg, #EEF8E7 0%, #E0EFD4 100%)'}}>
            <h3>Average Wait Time</h3>
            <span className={style.time}>1m:20s</span>
        </li>
        <li style={{'background': 'linear-gradient(180deg, #EEE7F8 0%, #DAD0E7 100%)'}}>
            <h3>Abandonment Rate</h3>
            <span className={style.time}>16%</span>
        </li>
        <li style={{'background': 'linear-gradient(180deg, #F8F5E7 0%, #EDE8D0 100%)'}}>
            <h3>AVG Transfer Rate</h3>
            <span className={style.time}>LOW, 8%</span>
        </li>
        <li style={{'background': 'linear-gradient(180deg, #E7F8EC 0%, #D2ECD9 100%)'}}>
            <h3>Average Speed of Answer</h3>
            <div className={`${style.time_wrap} d-flex align-items-center`}>
                <span className={style.time}>
                    0m:22s
                </span>
                <div className={`${style.bottom_status} d-flex align-items-center`}>
                    <span><img src={UpArrowIcon} alt="" /></span>
                    <span> <strong>3.2%</strong>vs last 7 days</span>
                </div>
            </div>
            
        </li>
        <li style={{'background': 'linear-gradient(180deg, #F8E7EF 0%, #F0DAE5 100%)'}}>
            <h3>Agent utilization rate</h3>
            <div className={`${style.rate} d-flex align-items-center justify-content-between`}>
                <span className={style.time}>Avg: 55.8%</span>
                <span>Min: 21%</span>
                <span>Max: 79.2%</span>
            </div>
            
        </li>
    </ul>
  )
}

export default InteractionListStatus
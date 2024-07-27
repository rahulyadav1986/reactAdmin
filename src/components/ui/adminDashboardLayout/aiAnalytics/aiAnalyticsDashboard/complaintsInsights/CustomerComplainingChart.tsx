import style from './style.module.scss'

const CustomerComplainingChart = () => {
  return (
    <div className={style.complaining_insight_flow_area_wrapper}>
        <ul className={style.con_details}>
            <li>
                <span className={style.label}>Billing error</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'90%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Damaged product</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'80%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Website navigation</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'70%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Long wait times</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'60%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Unprofessional service</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'50%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Missing refund</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'40%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Account error</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'30%'}}></span>
                </span>
            </li>
        </ul>
        <ul className={`${style.percentage_area} d-flex align-items-center justify-content-between`}>
            <li></li>
            <li>
                <ul className={`${style.details} d-flex align-items-center justify-content-between`}>
                    <li>0%</li>
                    <li>5%</li>
                    <li>10%</li>
                    <li>15%</li>
                    <li>20%</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default CustomerComplainingChart
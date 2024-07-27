import style from './style.module.scss'

const QuiresCustomerCalling = () => {
  return (
    <div className={`${style.complaining_insight_flow_area_wrapper} ${style.customer}`}>
        <ul className={style.con_details}>
            <li>
                <span className={style.label}>Change of billing address</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'90%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Upgrade my service plan</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'80%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Cancel subscription</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'70%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Product inquiry</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'60%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Request for a callback</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'50%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Technical support</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'40%'}}></span>
                </span>
            </li>
            <li>
                <span className={style.label}>Status of order delivery</span>
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

export default QuiresCustomerCalling
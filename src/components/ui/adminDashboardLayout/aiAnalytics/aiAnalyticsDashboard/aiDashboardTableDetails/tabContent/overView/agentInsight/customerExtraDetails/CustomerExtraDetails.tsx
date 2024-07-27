import style from './style.module.scss'
import StatusCircle from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/customer_review2.png"
const CustomerExtraDetails = () => {
  return (
    <div className={style.status_type_wrapper}>
       <div className={style.details}>
            <div className={style.customer_mention_area}>
                <h2>AGENT MENTIONS</h2>
                <img src={StatusCircle} alt="" />
            </div>
            <div className={style.summary_area}>
                <div className={`${style.heading_wrap}`}>
                    <h2>COMPLIANCE OVERVIEW</h2>
                </div>
                <ul className={style.over_view_graph_wrapper}>
                  <li>
                    <h4>Greeting and Introduction</h4>
                    <ul className={style.tracker_details}>
                      <li className={style.passed}></li>
                      <li className={style.passed}></li>
                      <li className={style.failed}></li>
                    </ul>
                  </li>
                  <li>
                    <h4>Active Listening</h4>
                    <ul className={style.tracker_details}>
                      <li className={style.passed}></li>
                      <li className={style.passed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                    </ul>
                  </li>
                  <li>
                    <h4>Clear Communication</h4>
                    <ul className={style.tracker_details}>
                      <li className={style.passed}></li>
                      <li className={style.failed}></li>
                    </ul>
                  </li>
                  <li>
                    <h4>Problem Solving</h4>
                    <ul className={style.tracker_details}>
                      <li className={style.passed}></li>
                      <li className={style.passed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                      <li className={style.failed}></li>
                    </ul>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CustomerExtraDetails
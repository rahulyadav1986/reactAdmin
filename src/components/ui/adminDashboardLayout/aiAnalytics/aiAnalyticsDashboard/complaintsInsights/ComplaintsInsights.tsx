
import CustomerComplainingChart from './CustomerComplainingChart'
import QuiresCustomerCalling from './QuiresCustomerCalling'
import RequestCustomerHelpCharts from './RequestCustomerHelpCharts'
import style from './style.module.scss'
import ActionIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const ComplaintsInsights = () => {
  return (
    <div className={`${style.complaints_wrapper}`}>
        <h2>COMPLAINTS INSIGHTS</h2>
        <div className={`${style.card_wrapper} ${style.top} d-flex justify-content-between`}>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>What are our customer complaining about?</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                    <CustomerComplainingChart />
                </div>
            </div>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>What requests do customers need help with?</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                   <RequestCustomerHelpCharts />
                </div>
            </div>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>What queries are customers calling about?</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                    <QuiresCustomerCalling />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComplaintsInsights
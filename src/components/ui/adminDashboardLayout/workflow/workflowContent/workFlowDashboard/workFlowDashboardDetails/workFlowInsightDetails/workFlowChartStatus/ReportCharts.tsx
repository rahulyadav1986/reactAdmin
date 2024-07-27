import ErrorRateGraph from './ErrorRateGraph'
import SuccessInteractionGraph from './SuccessInteractionGraph'
import SuccessRateGraph from './SuccessRateGraph'
import TimeInteractionMonitoringChart from './TimeInteractionMonitoringChart'
import style from './style.module.scss'
import ActionIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"

const ReportCharts = () => {
  return (
    <div className={`${style.workflow_chart_data_grid_wrapper} workflow_chart_data_grid_wrapper`}>
        <div className={`${style.top_cards_area} ${style.report}`}>
            <div className={style.portion}>
                <div className={style.card}>
                    <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                        <h2>Real-Time Interaction Monitoring</h2>
                        <span><img src={ActionIcon} alt="" /></span>
                    </div>
                    <div className={style.graph_area_wrapper}>
                    <TimeInteractionMonitoringChart />
                    </div>
                </div>
            </div>
            
            <div className={style.portion}>
                <div className={style.card}>
                    <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                        <h2>Success Rate</h2>
                        <span><img src={ActionIcon} alt="" /></span>
                    </div>
                    <div className={style.graph_area_wrapper}>
                    <SuccessRateGraph />
                    </div>
                </div>
            </div>

            <div className={style.portion}>
                <div className={style.card}>
                    <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                        <h2>Successful Interactions</h2>
                        <span><img src={ActionIcon} alt="" /></span>
                    </div>
                    <div className={style.graph_area_wrapper}>
                    <SuccessInteractionGraph />
                    </div>
                </div>
            </div>

            <div className={style.portion}>
                <div className={style.card}>
                    <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                        <h2>Error Rate</h2>
                        <span><img src={ActionIcon} alt="" /></span>
                    </div>
                    <div className={style.graph_area_wrapper}>
                    <ErrorRateGraph />
                    </div>
                </div>
            </div>
            
        </div>

      
    </div>
  )
}

export default ReportCharts
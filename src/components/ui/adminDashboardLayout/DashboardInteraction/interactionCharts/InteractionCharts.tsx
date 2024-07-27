
import ChartAhtTrend from './ChartAhtTrend'
import ChartAvarageSpeedAnsware from './ChartAvarageSpeedAnsware'
import ChartCallVolumn from './ChartCallVolumn'
import ChartLeaderboard from './ChartLeaderboard'
import ChartPerCallCost from './ChartPerCallCost'
import ChartPickHourTraffic from './ChartPickHourTraffic'
import style from './style.module.scss'
const InteractionCharts = () => {
  return (
    <div className={style.charts_area_wrapper}>
        <div className={style.card}>
            <ChartCallVolumn />
        </div>
        <div className={style.card}>
           <ChartPickHourTraffic />
        </div>
        <div className={style.card}>
            <ChartPerCallCost />
        </div>
        <div className={style.card}>
            <ChartAhtTrend />
        </div>
        <div className={style.card}>
            <ChartAvarageSpeedAnsware />
        </div>
        <div className={style.card}>
            <ChartLeaderboard />
        </div>
    </div>
  )
}

export default InteractionCharts
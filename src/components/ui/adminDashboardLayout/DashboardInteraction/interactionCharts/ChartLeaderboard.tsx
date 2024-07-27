import LeaderBoard from './leaderBoard/LeaderBoard'
import style from './style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const ChartLeaderboard = () => {
  return (
    <>
        <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
            <h3>Leaderboard</h3>
            <span><img src={VerticalDots} alt="" /></span>
        </div>
        <div className={`${style.graph_area_wrapper} ${style.big}`}>
            <LeaderBoard />
        </div>
    </>
  )
}

export default ChartLeaderboard
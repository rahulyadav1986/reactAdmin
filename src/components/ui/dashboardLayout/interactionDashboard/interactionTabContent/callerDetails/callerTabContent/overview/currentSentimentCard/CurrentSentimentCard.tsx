import style from './style.module.scss'
import StatusIcon from "/assets/interactionCenter/profileCard/statusIcon.svg"
import TrendGraph from "/assets/interactionCenter/profileCard/trendGraph.png"
const CurrentSentimentCard = () => {
  return (
    <div className={style.current_sentiment_card_wrapper}>
        <h2>CURRENT SENTIMENT</h2>
        <div className={style.status_range_wrapper}>
           <div className={`${style.top_range} d-flex justify-content-between`}>
              <span>-100</span>
              <img className={style.statusIcon} src={StatusIcon} alt="" />
              <span>100</span>
           </div>
           <div className={style.range}></div>
           <div className={`${style.status_value} d-flex justify-content-between`}>
              <span>Negative</span>
              <span><strong>Neutral</strong></span>
              <span>Positive</span>
           </div>          
        </div>
        <h6>Sentiment Trend (Last 10 interactions)</h6>
        <span className={style.sentiment_graph}><img src={TrendGraph} alt="" /></span>
    </div>
  )
}

export default CurrentSentimentCard
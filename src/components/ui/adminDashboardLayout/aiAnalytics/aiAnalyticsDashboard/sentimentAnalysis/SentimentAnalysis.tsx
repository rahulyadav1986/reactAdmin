import CustomerSentimentBreakdown from './CustomerSentimentBreakdown'
import CustomerWordsCloud from './CustomerWordsCloud'
import CustomerWordsFrequencyChart from './CustomerWordsFrequencyChart'
import style from './style.module.scss'
import ActionIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
const SentimentAnalysis = () => {
  return (
    <div className={`${style.sentiment_analysis_wrapper} sentiment_analysis_wrapper`}>
        <h2>Sentiment Analysis</h2>
        <div className={`${style.card_wrapper} ${style.top} d-flex justify-content-between`}>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>Customer Words Usage Frequency</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                    <CustomerWordsFrequencyChart />
                </div>
            </div>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>Customer Sentiment Breakdown</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                    <CustomerSentimentBreakdown />
                </div>
            </div>
            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h3>Customer Words Cloud</h3>
                    <span><img src={ActionIcon} alt="" /></span>
                </div>
                <div className={style.graph_area_wrapper}>
                    <CustomerWordsCloud />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SentimentAnalysis
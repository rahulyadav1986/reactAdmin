import style from './style.module.scss'
import SmilyIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/positiveSmily.svg"
const CustomerSentiment = () => {
  return (
    <div className={style.customer_sentiment_wrapper}>
         <h2>CUSTOMER sentiment</h2>
         <div className={`${style.smily_area} d-flex align-items-center`}>
            <span><img src={SmilyIcon} alt="" /></span>
            <span className={`${style.text} d-flex flex-column`}>
                <span className={`${style.status} ${style.positive}`}>Positive</span>
                <span className={style.no}>89</span>
            </span>
         </div>
         <p><span>4%</span>  above threshold, Previous: <span><strong>Neutral (60)</strong></span> </p>
    </div>
  )
}

export default CustomerSentiment
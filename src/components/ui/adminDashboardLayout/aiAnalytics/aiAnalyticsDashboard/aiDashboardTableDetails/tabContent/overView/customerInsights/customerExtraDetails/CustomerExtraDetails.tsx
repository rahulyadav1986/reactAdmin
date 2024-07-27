import style from './style.module.scss'
import StatusCircle from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/customer_review.png"
const CustomerExtraDetails = () => {
  return (
    <div className={style.customer_extra_details_wrapper}>
        <div className={style.details}>
            <div className={style.customer_mention_area}>
                <h2>CUSTOMER MENTIONS</h2>
                <img src={StatusCircle} alt="" />
            </div>
            <div className={style.summary_area}>
                <div className={`${style.heading_wrap} d-flex align-items-center justify-content-between`}>
                    <h2>CALL SUMMARY</h2>
                    <h3>CONFIDENCE SCORE: <span>98.6%</span></h3>
                </div>
                <p>During the call, the customer expressed their happiness and satisfaction with the product, highlighting its features that exceeded their expectations. I addressed their inquiries and resolved a minor issue to their satisfaction. The customer appreciated the prompt assistance and expressed a positive sentiment throughout the call.</p>
            </div>
        </div>
        <div className={style.customer_table_details_wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>INSIGHT TYPE</th>
                        <th>POSSIBLE OUTCOME</th>
                        <th>DETAILS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Interest to Buy</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer expressed interest in upgrading to a premium subscription during the call</td>
                    </tr>
                    <tr>
                        <td>Product Inquiry</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer inquired about the features and pricing of our new product line</td>
                    </tr>
                    <tr>
                        <td>Interest to Buy</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer expressed interest in upgrading to a premium subscription during the call</td>
                    </tr>
                    <tr>
                        <td>Product Inquiry</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer inquired about the features and pricing of our new product line</td>
                    </tr>
                    <tr>
                        <td>Interest to Buy</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer expressed interest in upgrading to a premium subscription during the call</td>
                    </tr>
                    <tr>
                        <td>Product Inquiry</td>
                        <td>
                            <span className={style.status}>YES</span>
                        </td>
                        <td>Customer inquired about the features and pricing of our new product line</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CustomerExtraDetails
import style from './style.module.scss'
import VerticalDots from "/assets/dashboard/main_dashboard/admin/campaignManager/liveCampaigns/dotsVertical.svg"
const ContactFunnelChart = () => {
  return (
    <>
        <div className={`${style.acco_head} d-flex align-items-center justify-content-between`}>
            <h2>Contacts Funnel</h2>
            <span><img src={VerticalDots} alt="" /></span>
        </div>
        <div className={style.graph_area}>
          <ul className={style.custom_graph_list}>
            <li>
               <div className={style.label}>
                  <span>Initial Contact</span>
                  <span className={style.no}>1000</span>
               </div>
               <div className={style.bar}><span style={{'height': '100%'}}></span></div>
            </li>
            <li>
               <div className={style.label}>
                  <span>Interested</span>
                  <span className={style.no}>800</span>
                  <span><strong>80%</strong></span>
               </div>
               <div className={style.bar}><span style={{'height': '80%'}}></span></div>
            </li>
            <li>
               <div className={style.label}>
                  <span>Application Submitted</span>
                  <span className={style.no}>500</span>
                  <span><strong>50%</strong></span>
               </div>
               <div className={style.bar}><span style={{'height': '50%'}}></span></div>
            </li>
            <li>
               <div className={style.label}>
                  <span>Approval</span>
                  <span className={style.no}>250</span>
                  <span><strong>25%</strong></span>
               </div>
               <div className={style.bar}><span style={{'height': '25%'}}></span></div>
            </li>
            <li>
               <div className={style.label}>
                  <span>Converted</span>
                  <span className={style.no}>100</span>
                  <span><strong>10%</strong></span>
               </div>
               <div className={style.bar}><span style={{'height': '10%'}}></span></div>
            </li>
          </ul>
        </div>
    </>
  )
}

export default ContactFunnelChart
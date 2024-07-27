import style from './style.module.scss'
import IncomingIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/incoming.svg"
import OutgoingIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/outgoing.svg"
import UpArrowIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/arrow_upward.svg"
// import DownArrowIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/arrow_upward.svg"
import PhoneIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/phone.svg"
import WebChatIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/webChat.svg"
import MobileChatIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/mobileChat.svg"
import WhatsAppIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/whatsapp.svg"
import VideoChatIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/videoChat.svg"
import SocialMessagingIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/socialMessaging.svg"
import PossitiveIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/main/possitive.svg"
import ReactEcharts from "echarts-for-react"; 
const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: false,
  color: ['#00539f', '#bb1865'],
  series: [
    {
      name: 'INTERACTIONS HANDLED',
      type: 'pie',
      radius: [30,45],
      avoidLabelOverlap: false,
      label: false,
      height: "121",
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Inbound' },
        { value: 735, name: 'Outbound' },
      ]
    }
  ]
};
const InteractionMainStatus = () => {
  return (
    <>
        <h1>Interaction Dashboard</h1>
        <div className={`${style.status_card_area_wrapper}`}>
            <div className={`${style.card} d-flex align-items-center justify-content-between`}>
              <div className={style.handled_details}>
                <div className={`${style.no_handled} d-flex align-items-center`}>
                  <span><strong>899</strong>  of 1033</span> <strong className={style.per}>87%</strong> 
                </div>
                <h4>INTERACTIONS HANDLED</h4>
                <div className={`${style.status_area}`}>
                <div className={`${style.loader_area} d-flex`}>
                  <span className={style.automation} style={{'width': '70%'}}></span>
                  <span className={style.human} style={{'width': '30%'}}></span>
                </div>
                <div className={`${style.label_area} d-flex align-items-center justify-content-between`}>
                    <h5>Automation<br />72%</h5>
                    <h5>Human<br />27%</h5>
                </div>
                </div>
              </div>
              <div className={`${style.bound_details} d-flex align-items-center`}>
                  
                  <div className={`${style.inbound_area}`}>
                    <div className={`${style.top} d-flex align-items-center`}>
                      <div className={style.icon}>
                          <img src={IncomingIcon} alt="" />
                      </div>
                      <div className={style.text_details}>
                        <h4>Inbound</h4>
                        <div className={style.stats}>
                          <span className={style.blue}>359</span>
                          <span className={style.percentage}>60.4%</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${style.bottom_status} d-flex align-items-center`}>
                        <span><img src={UpArrowIcon} alt="" /></span>
                        <span> <strong>3.2%</strong>vs last 7 days</span>
                    </div>
                  </div>

                  <div className={style.circle_graph_status}>
                    <ReactEcharts option={option} />
                  </div>

                  <div className={`${style.outbound_area}`}>
                    <div className={`${style.top} d-flex align-items-center`}>
                      <div className={style.text_details}>
                        <h4>Outbound</h4>
                        <div className={style.stats}>
                          <span className={style.blue}>550</span>
                          <span className={style.percentage}>40.4%</span>
                        </div>
                      </div>
                      <div className={style.icon}>
                          <img src={OutgoingIcon} alt="" />
                      </div>
                    </div>
                    <div className={`${style.bottom_status} d-flex align-items-center`}>
                        <span><img src={UpArrowIcon} alt="" /></span>
                        <span> <strong>3.2%</strong>vs last 7 days</span>
                    </div>
                  </div>
                  
              </div>
              <ul className={style.right_status}>
                <li className='d-flex align-items-center'>
                   <label>Voice</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={PhoneIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '79%'}}></span>
                    <span className={style.no}>179</span>
                   </div>
                </li>
                <li className='d-flex align-items-center'>
                   <label>Web Chat</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={WebChatIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '40%'}}></span>
                    <span className={style.no}>45</span>
                   </div>
                </li>
                <li className='d-flex align-items-center'>
                   <label>Mobile Chat</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={MobileChatIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '80%'}}></span>
                    <span className={style.no}>180</span>
                   </div>
                </li>
                <li className='d-flex align-items-center'>
                   <label>WhatsApp</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={WhatsAppIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '46%'}}></span>
                    <span className={style.no}>146</span>
                   </div>
                </li>
                <li className='d-flex align-items-center'>
                   <label>Video Chat</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={VideoChatIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '79%'}}></span>
                    <span className={style.no}>179</span>
                   </div>
                </li>
                <li className='d-flex align-items-center'>
                   <label>Social Messaging</label>
                   <div className={`${style.bar_area} d-flex align-items-center`}>
                    <span className={style.smallIcon}><img src={SocialMessagingIcon} alt="" /></span>
                    <span className={style.bar} style={{'width' : '70%'}}></span>
                    <span className={style.no}>170</span>
                   </div>
                </li>
              </ul>
            </div>
            <div className={`${style.card} d-flex align-items-center`}>
              <div className={`${style.details} d-flex justify-content-between`}>
                <div className={style.per}>
                  <h6>NPS</h6>
                  <h3>9 <span>/10</span></h3>
                  <img src={PossitiveIcon} alt="" />
                </div>
                <div className={style.per}>
                  <h6>CSAT</h6>
                  <h3>95% <span>Satisfied</span></h3>
                  <div className={`${style.bottom_status} d-flex align-items-center`}>
                      <span><img src={UpArrowIcon} alt="" /></span>
                      <span> <strong>3.2%</strong>vs last 7 days</span>
                  </div>
                </div>
                <div className={style.per}>
                  <h6>FCR</h6>
                  <h3>95%</h3>
                </div>
              </div>
              
            </div>
        </div>
    </>
  )
}

export default InteractionMainStatus
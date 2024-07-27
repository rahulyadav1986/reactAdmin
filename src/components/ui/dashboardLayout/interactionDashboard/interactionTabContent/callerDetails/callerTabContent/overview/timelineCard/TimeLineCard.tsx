
import style from './style.module.scss'
import CallIcon from '/assets/dashboard/main_dashboard/table_call.svg'
import EmailIcon from '/assets/dashboard/main_dashboard/email.svg'
import VideoIcon from '/assets/dashboard/main_dashboard/video.svg'
import CaptureVideoImage from "/assets/interactionCenter/v1.png"
import CaptureVideoImage2 from "/assets/interactionCenter/v2.png"
import AudioPlayer from '../../../../../../dashboard/ticketsTable/tableDetails/audioPop/audioPlayer/AudioPlayer'
const TimeLineCard = () => {
  return (
    <div className={style.time_line_card_wrapper}>
      <h2>Timeline</h2>
      <ul className={style.time_line_list_wrap}>
        <li className='d-flex'>
          <div className={style.icon}><img src={CallIcon} alt="" /></div>
          <div className={`${style.text_details}`}>
            <div>
              <div className={style.title}>Audio Call</div>
              <div className={`${style.sub_title}`}>
                <span>from Kavitha Mavin</span>
                <span className={style.time}>18 hrs ago</span>
              </div>
            </div>
            <AudioPlayer />
            <p>That's wonderful to hear, John! We're <span>thrilled</span> that you're enjoying our product. Is there anything specific that you love about it?</p>
          </div>
        </li>
        <li className='d-flex'>
          <div className={style.icon}><img src={EmailIcon} alt="" /></div>
          <div className={`${style.text_details}`}>
            <div>
              <div className={style.title}>Email</div>
              <div className={`${style.sub_title}`}>
                <span>from Kavitha Mavin</span>
                <span className={style.time}>15 Jun 2023, 09:09:00am</span>
              </div>
            </div>
            <p className={style.email}>Dear Customer Support Team,
            I am writing to express my deep dissatisfaction and frustration regarding the recent delivery of the product I purchased from your company. I placed the order three weeks ago, and despite the promised delivery time of 5-7 business days, I have yet to receive the package.
            </p>
            <div className={style.view_email_button}>View Email Details</div>
          </div>
        </li>
        <li className='d-flex'>
          <div className={style.icon}><img src={VideoIcon} alt="" /></div>
          <div className={`${style.text_details}`}>
            <div>
              <div className={style.title}>Video Call</div>
              <div className={`${style.sub_title}`}>
                <span>from Kavitha Mavin</span>
                <span className={style.time}>11 Apr 2023, 09:09:00am</span>
              </div>
            </div>
            <div className={style.video_capture_pallet}>
              <img src={CaptureVideoImage} alt="" />
              <img src={CaptureVideoImage2} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TimeLineCard
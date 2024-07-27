import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import SearchIcon from '/assets/interactionCenter/profileCard/search.svg'
import SentIcon from "/assets/interactionCenter/profileCard/sent.svg"
import CancleIcon from "/assets/dashboard/cancle.svg"
import { useContext, useState } from 'react'
import { ContextSocialPopup } from '../../../../../../contexts/socialPopupContext'
const WhatsAppMessage = () => {
  const socialPopupContext = useContext(ContextSocialPopup)
  const [includeCheked, setIncludeChecked] = useState(true)
  return (
    <div className={`${style.whats_app_message_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(false)}></div>
        <div className={style.main_wrapper}>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <h4>Send WhatsApp Message</h4>
                <span><img src={CrossIcon} onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(false)} alt="" /></span>
            </div>
            <div className={`${style.content_area_wrapper} d-flex justify-content-between`}>
              <div className={style.left_section}>
                 <div className={style.search_wrapper}>
                   <div className={style.main_search_wrapper}>
                      <input type="text" name="" placeholder='Search' className={style.form_control} id="" />
                      <img src={SearchIcon} alt="" className={style.icon} />
                   </div>
                 </div>
                 <ul className={style.menu_list}>
                    <li className={style.active}>Greeting Message</li>
                    <li>Diwali</li>
                    <li>EMI Reminder</li>
                    <li>Template Lorem</li>
                    <li>Pre closure confriamtion</li>
                    <li>Overdue reminder</li>
                 </ul>
              </div>
              <div className={style.right_section}>
                <div className={style.portion}>
                  <textarea name="" id="" value="Thank you for calling [business name]. Don’t forget to check out www.companyname.com for a list of our latest specials and events" ></textarea>
                </div>
                <div className={style.portion}>
                    <div className={style.check}>
                      <input type="checkbox" name="" checked={includeCheked} id="type" onChange={()=>setIncludeChecked(!includeCheked)} />
                      <label htmlFor="type" className='d-flex align-items-center'>
                        <span className={style.over}>
                          <span className={style.inner}></span>
                        </span>
                        Include Link in the message
                      </label>
                    </div>
                    <select name="" id="" className={style.browse_drop_down_wrapper}>
                      <option value="Co-browse">Co-browse</option>
                      <option value="Share Screen">Share Screen</option>
                    </select>
                </div>
                <div className={`${style.portion} ${style.phone}`}>
                    <label htmlFor="phone">Customer WhatsApp Number <span>*</span> </label>
                    <input type="text" name="" id="phone" placeholder='Enter phone number' className={style.form_control} />
                </div>
              </div>
            </div>
            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
              <div className={`${style.button} ${style.bg} d-flex align-items-center justify-content-center`}>
                  <span><img src={SentIcon} alt="" /></span>
                  <span>Send</span>
              </div>
              <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>socialPopupContext.handleWhatsAppMessagePopup(false)}>
                  <span><img src={CancleIcon} alt="" /></span>
                  <span>Cancel</span>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default WhatsAppMessage
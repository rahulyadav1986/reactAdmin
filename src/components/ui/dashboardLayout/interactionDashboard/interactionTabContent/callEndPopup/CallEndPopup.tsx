import {useContext} from "react"
import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import DispositionValueCrossIcon from '/assets/interactionCenter/chatManagement/cross.svg'
import { ContextMediaManagement } from "../../../../../../contexts/mediaManagementContext"
import DispositionPopup from "./dispositionPopup/DispositionPopup"
import SecondDispositionPopup from "./secondDispositionPopup/SecondDispositionPopup"
import DatePopup from "./datePopup/DatePopup"
const CallEndPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={`${style.callEndPopup_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>mediaHandleContext.handleEndPopup(false)}></div>
        <div className={style.call_end_main_wrapper}>
            <div className={`${style.header_wrapper} d-flex align-items-center justify-content-between`}>
                <h4>Post Wrap up call Time: 0: <strong>13</strong>/1:00</h4>
                <ul className={`${style.action_icons} d-flex align-items-center`}>
                    <li onClick={()=>mediaHandleContext.handleEndPopup(false)}><img src={CrossIcon} alt="" /></li>
                </ul>
            </div> 
            <ul className={`${style.customer_info} d-flex align-items-center`}>
              <li>Customer: <span>Kavitha Mavin</span> </li>
              <li>Mobile: <span>98473 84893</span> </li>
              <li>Email: <span>priya_k@gmail.com</span> </li>
            </ul> 
            <div className={style.disposition_wrapper}>
              <label htmlFor="">Disposition</label>
              {/* <input type="text" name="" className={style.form_control} placeholder="Select disposition" id="" /> */}
              <div className={style.form_control} contentEditable ={true} >
                <div className={`${style.placeholder_area} d-flex`}>
                  {
                    mediaHandleContext.disPostionPlaceholder &&
                    <span className={style.placeholder} onClick={mediaHandleContext.handleDispositionPop}>
                      {mediaHandleContext.disPositionValue.label}
                    </span>
                  }

                  {
                    mediaHandleContext.showDisPostionPlaceholder &&
                    <span className={style.show_placeholder} onClick={mediaHandleContext.handleDispositionPop}>
                      {mediaHandleContext.disPositionValue.label} <span><img src={DispositionValueCrossIcon} alt=""  onClick={mediaHandleContext.handleDispotionRemove}/></span> 
                    </span>
                  }

                  {
                    mediaHandleContext.secondDisPostionPlaceholder &&
                    <span className={style.placeholder} >
                      {mediaHandleContext.secondDisPositionValue.label}
                    </span>
                  }
                  {
                    mediaHandleContext.showSecondDisPostionPlaceholder &&
                    <span className={style.show_placeholder}>
                      {mediaHandleContext.secondDisPositionValue.label} <span><img src={DispositionValueCrossIcon} alt=""  onClick={mediaHandleContext.handleScondDispotionRemove}/></span> 
                    </span>
                  }

                  {
                    mediaHandleContext.datePlaceholder &&
                    <span className={style.placeholder} onClick={()=>mediaHandleContext.handleDatePop(true)}>
                      {mediaHandleContext.dateValue.label}
                    </span>
                  }
                  </div>
                {
                  mediaHandleContext.dispositionPop && <DispositionPopup />
                }
                {
                  mediaHandleContext.secondDispositionPop &&
                  <SecondDispositionPopup />
                }
                {
                  mediaHandleContext.datePopup &&
                  <DatePopup />
                }
                
                
              </div>
              
            </div>
            <div className={style.notes_area}>
              <h2>Notes</h2>
              <p>02 Sep 2023, 09:09am<br />
              <span>Spoke to customer last week, promised to pay by 10/20/23.</span>  <br /><br />
              <span><strong>Customer Comment </strong> : Requested a payment extension due to unforeseen circumstances</span></p>
            </div>
            <div className="d-flex justify-content-end">
              <div className={`${style.button} d-flex align-items-center justify-content-center`}>Complete Wrap Up</div>
            </div>
        </div>
    </div>
  )
}

export default CallEndPopup
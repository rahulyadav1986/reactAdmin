import {useContext} from "react"
import style from './style.module.scss'
import CrossIcon from "/assets/ticketmanagement/cross.svg"
import CheckIcon from "/assets/interactionCenter/check.svg"
import MinusIcon from "/assets/interactionCenter/minus.svg"

import ButtonCheckIcon from '/assets/dashboard/check.svg'
import ButtonCancleIcon from '/assets/dashboard/cancle.svg'
import { ContextTable } from '../../../../../../../contexts/tableContext'
const VerifyPopup = () => {
  const interactionTabContext = useContext(ContextTable)
  return (
    <div className={`${style.verify_popup_wrap} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>interactionTabContext.handleVerifyPop(false)}></div>
        <div className={style.main_wrapper}>
            <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                <h2>Verify Member Information</h2>
                <span><img src={CrossIcon} alt="" onClick={()=>interactionTabContext.handleVerifyPop(false)} /></span>
            </div>
            <ul className={style.content_list_wrapper}>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.dobToggle === 1 ? `${style.green}` : interactionTabContext.dobToggle === 2 ? `${style.red}` : null}`}>Date of Birth</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>12 Mar 1984</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleDobToggle(1)} className={`${interactionTabContext.dobToggle === 1 ? style.active : null}`}>
                        <img src={CheckIcon} alt="" />
                      </button>
                     <button onClick={()=>interactionTabContext.handleDobToggle(2)} className={`${interactionTabContext.dobToggle === 2 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.registerPhoneToggle === 1 ? `${style.green}` : interactionTabContext.registerPhoneToggle === 2 ? `${style.red}` : null}`}>Registered Phone Number</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>98473 84939</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleRegisterPhoneToggle(1)} className={`${interactionTabContext.registerPhoneToggle === 1 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleRegisterPhoneToggle(2)} className={`${interactionTabContext.registerPhoneToggle === 2 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.registerAddressToggle === 1 ? `${style.green}` : interactionTabContext.registerAddressToggle === 2 ? `${style.red}` : null}`}>Registered Address</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>34,Aditya Nagar, 
                    Priya Enclave,
                    Bachupalle,
                    Hyderabad 50090</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleRegisterAddressToggle(1)} className={`${interactionTabContext.registerAddressToggle === 1 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleRegisterAddressToggle(2)} className={`${interactionTabContext.registerAddressToggle === 2 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.registerAccountToggle === 1 ? `${style.green}` : interactionTabContext.registerAccountToggle === 2 ? `${style.red}` : null}`}>Account Number</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>73872920380</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleRegisterAccountToggle(1)} className={`${interactionTabContext.registerAccountToggle === 1 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleRegisterAccountToggle(2)} className={`${interactionTabContext.registerAccountToggle === 2 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
            </ul>
            {/* <ul className={style.content_list_wrapper}>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.verifyButton === 1 ? `${style.green}` : interactionTabContext.verifyButton === 2 ? `${style.red}` : null}`}>Date of Birth</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>12 Mar 1984</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(1)} className={`${interactionTabContext.verifyButton === 1 ? style.active : null}`}>
                        <img src={CheckIcon} alt="" />
                      </button>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(2)} className={`${interactionTabContext.verifyButton === 2 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.verifyButton === 3 ? `${style.green}` : interactionTabContext.verifyButton === 4 ? `${style.red}` : null}`}>Registered Phone Number</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>98473 84939</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(3)} className={`${interactionTabContext.verifyButton === 3 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(4)} className={`${interactionTabContext.verifyButton === 4 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.verifyButton === 5 ? `${style.green}` : interactionTabContext.verifyButton === 6 ? `${style.red}` : null}`}>Registered Address</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>34,Aditya Nagar, 
                    Priya Enclave,
                    Bachupalle,
                    Hyderabad 50090</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(5)} className={`${interactionTabContext.verifyButton === 5 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(6)} className={`${interactionTabContext.verifyButton === 6 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
              <li className='d-flex justify-content-between'>
                 <span className={`${style.label} ${interactionTabContext.verifyButton === 7 ? `${style.green}` : interactionTabContext.verifyButton === 8 ? `${style.red}` : null}`}>Account Number</span>
                 <div className={`${style.right_side_wrap} d-flex align-items-center justify-content-between`}>
                   <span>73872920380</span>
                   <div className={`${style.action_icons} d-flex align-items-center justify-content-center`}>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(7)} className={`${interactionTabContext.verifyButton === 7 ? style.active : null}`}><img src={CheckIcon} alt="" /></button>
                     <button onClick={()=>interactionTabContext.handleVerifyButton(8)} className={`${interactionTabContext.verifyButton === 8 ? style.active : null}`}><img src={MinusIcon} alt="" /></button>
                   </div>
                 </div>
              </li>
            </ul> */}
            <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`}>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} >
                    <span><img src={ButtonCheckIcon} alt="" /></span>
                    <span>Save</span>
                </div>
                <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>interactionTabContext.handleVerifyPop(false)} >
                    <span><img src={ButtonCancleIcon} alt="" /></span>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyPopup
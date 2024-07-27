import {useContext} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import DownArrow from '/assets/dashboard/small-down.svg'
import CheckIcon from '/assets/dashboard/check.svg'
import CancleIcon from '/assets/dashboard/cancle.svg'
import { ContextInComingCallCard } from '../../../../contexts/incomingCallCardContext'
import { ReasonData } from './Data'

const DeclineIncomingCall = () => {
  const declineIncomingCallContext = useContext(ContextInComingCallCard)
  
  return (
    <>
        {
            declineIncomingCallContext.declineIncomingCall &&
            <div className={`${style.decline_incoming_call_pop} d-flex align-items-center justify-content-center`}>
                <div className={style.decline_wrapper}>
                    <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
                        <h4>Decline Incoming Call</h4>
                        <ul className={`${style.action_icons} d-flex align-items-center`}>
                            <li onClick={()=>declineIncomingCallContext.handleDeclineCall(false)}><img src={CrossIcon} alt="" /></li>
                        </ul>
                    </div>
                    <div className={style.form_area_wrapper}>
                        <div className={`${style.drop_down_wrap} `}>
                            <div className='d-flex align-items-center justify-content-between' onClick={declineIncomingCallContext.handleSelectReason}>
                                <span className={style.label}>{declineIncomingCallContext.selectReasonValue.label}</span>
                                <span className={style.icon}><img src={DownArrow} alt="" /></span>
                            </div>                            
                            {
                                declineIncomingCallContext.selectReason &&
                                <ul className={style.select_reason_drop_down_wrapper}>
                                    {
                                        ReasonData.map((item,i)=>{
                                            return(
                                                <li key={i} onClick={()=>declineIncomingCallContext.handleSelectReasonValue(item)}>{item.label}</li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                            {
                             declineIncomingCallContext.selectError &&   
                             <div className={style.error}>Please Select Reason</div>
                            }
                            
                            
                        </div>
                        <div className={style.text_area}>
                            <textarea name="" id="" placeholder='Enter notes'></textarea>
                        </div>
                    </div>
                    <div className={`${style.button_wrap} d-flex align-items-center justify-content-end`}>
                        
                        {
                            declineIncomingCallContext.validateButton &&
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={declineIncomingCallContext.handleSelectReasonValidate}>
                                <span><img src={CheckIcon} alt="" /></span>
                                <span>Save</span>
                            </div>
                        }
                        {
                            declineIncomingCallContext.saveButton &&
                            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={declineIncomingCallContext.handleDeclineCallSave}>
                                <span><img src={CheckIcon} alt="" /></span>
                                <span>Save</span>
                            </div>
                        }
                        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>declineIncomingCallContext.handleDeclineCall(false)}>
                            <span><img src={CancleIcon} alt="" /></span>
                            <span>Cancel</span>
                        </div>
                    </div>
                </div> 
            </div>
        }
    </>
    
    
  )
}

export default DeclineIncomingCall
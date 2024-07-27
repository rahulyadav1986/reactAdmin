import {useContext} from "react"
import CallerTab from './callerTab/CallerTab'
import CallerTabContent from './callerTabContent/CallerTabContent'
import style from './style.module.scss'
import VerifyPopup from './verifyPopup/VerifyPopup'
import VerifyIcon from "/assets/interactionCenter/verify.svg"
import { ContextTable } from "../../../../../../contexts/tableContext"
import { createPortal } from "react-dom"

const CallerDetails = () => {
  const interactionTabContext = useContext(ContextTable)
  return (
    <div className={style.callDetails_wrapper}>
        <div className={style.head_area}>
            <h2>CALLER DETAILS</h2>
            <CallerTab />
            <button className={style.verify_customer} onClick={()=>interactionTabContext.handleVerifyPop(true)}>
              <span><img src={VerifyIcon} alt="" /></span>
              <span>Verify Customer</span>
            </button>
            {
              interactionTabContext.verifyPop &&  createPortal(<VerifyPopup />, document.body) 
            }
        </div>        
        <CallerTabContent />
    </div>
  )
}

export default CallerDetails
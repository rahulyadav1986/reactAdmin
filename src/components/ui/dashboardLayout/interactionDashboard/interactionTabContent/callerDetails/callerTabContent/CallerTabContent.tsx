import {useContext} from "react"
import style from './style.module.scss'
import OverView from "./overview/OverView"
import CallScript from "./callScript/CallScript"
import { ContextTable } from "../../../../../../../contexts/tableContext"

const CallerTabContent = () => {
  const callerTabContext = useContext(ContextTable)
  return (
    <div className={style.callerTabContentWrapper}>
        {
            callerTabContext.callerdetailsTab === 1 ? 
            <OverView /> : 
            callerTabContext.callerdetailsTab === 2 ? 
            <CallScript /> :
            callerTabContext.callerdetailsTab === 3 ? 
            <div className={style.tickets_wrapper}>
                <p>Tickets</p>
            </div>:
            callerTabContext.callerdetailsTab === 4 ? 
            <div className={style.calls_wrapper}>
                <p>Knowledge Base</p>
            </div> :
            callerTabContext.callerdetailsTab === 5 ? 
            <div className={style.email_wrapper}>
                <p>Canned Message</p>
            </div> :
            callerTabContext.callerdetailsTab === 6 ? 
            <div className={style.messages_wrapper}>
                <p>Messages</p>
            </div> :
            null
        }
    </div>
  )
}

export default CallerTabContent
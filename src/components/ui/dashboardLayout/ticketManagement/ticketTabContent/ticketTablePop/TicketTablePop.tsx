import { useContext } from 'react'
import { ContextTicketManagement } from '../../../../../../contexts/ticketManagementContext'
import style from './style.module.scss'
import CrossIcon from "/assets/ticketmanagement/cross.svg"
type TicketTableProps = {
    item: any
}
const TicketTablePop = (props: TicketTableProps) => {
  const ticketTypeContext = useContext(ContextTicketManagement)
  return (
    <div className={style.ticket_table_pop_wrap}>
        <div className="overlay" onClick={()=>ticketTypeContext.handleTicketTablePop(false)}></div>
        <div className={style.ticket_details_main_wrap}>
            <div className={`${style.head} d-flex align-items-center justify-content-between`}>
                <h4>Task Details</h4>
                <span onClick={()=>ticketTypeContext.handleTicketTablePop(false)}><img src={CrossIcon} alt="" /></span>
            </div>
            <ul className={style.list_portion}>
                <li>
                    <label htmlFor="">Task</label>
                    <p>{props.item.reason}</p>
                </li>
                <li>
                    <label htmlFor="">Task Details</label>
                    <p>{props.item.taskDetails}</p>
                </li>
                <li>
                    <p>
                        Customer name: <span>{props.item.customer.name}</span> <br />
                        {
                            props.item.customer.type === "email" ? <>Customer email: <span>{props.item.customer.contactInfo}</span> </> :
                            props.item.customer.type === "call" ? <>Customer phone: <span> {props.item.customer.contactInfo}</span></> :
                            null
                        }<br />
                        Proposed time: <span>{props.item.proposedTime}</span> <br />
                        
                    </p>
                </li>
                <li>
                    <label htmlFor="">Task Opened</label>
                    <p>{props.item.createdOn}</p>
                </li>
                <li>
                    <label htmlFor="">TAT</label>
                    <p>{props.item.lastUpdate}</p>
                </li>
                <li>
                    <label htmlFor="">Status</label>
                    <p>{props.item.status}</p>
                </li>
                <li>
                    <label htmlFor="">Priority</label>
                    <p className={`${style.priority} ${props.item.priority === 'High' ? style.high : props.item.priority === 'Midium' ? style.midium : style.low}`}>{props.item.priority}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TicketTablePop
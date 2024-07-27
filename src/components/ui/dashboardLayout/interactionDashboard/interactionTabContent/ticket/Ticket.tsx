import style from './style.module.scss'
import PlusIcon from "/assets/interactionCenter/plus.svg"
import PositiveSmilyIcon from '/assets/interactionCenter/possitive_smily.svg'
import LeftArrowIcon from '/assets/interactionCenter/leftArrow.svg'
import { TicketTable } from './Data'
import { Link, useLocation } from 'react-router-dom'
const Ticket = () => {
  const location = useLocation()
  const currentLocation = location.pathname.indexOf('/agent')>=0 ? '/agent/dashboard/ticket-management' : '/supervisor/dashboard/ticket-management'
  return (
    <>
        <Link className={style.more} to={currentLocation}><img src={LeftArrowIcon} alt="" /></Link>
        <div className={style.ticket_details_wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>TICKET NUMBER</th>
                        <th>IVR END POINT</th>
                        <th>CALL GOAL</th>
                        <th>LAST INTERACTION</th>
                        <th>CURRENT SENTIMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TicketTable.slice(0,1).map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>
                                        <span className={`${style.value} d-flex align-items-center`}>
                                            <span className={style.label}>#{item.ticketNo}</span> 
                                            {
                                                TicketTable.length > 1 && <img src={PlusIcon} className={style.plus} alt="" />
                                            }
                                        </span>
                                    </td>
                                    <td><span className={style.label}>{item.ivrEndPoint}</span></td>
                                    <td><span className={style.label}>{item.callGoal}</span></td>
                                    <td>
                                        <span className={`${style.status} d-flex align-items-center`}>
                                            <img src={PositiveSmilyIcon} alt="" />
                                            <span className={style.label}>{item.lastInteraction}</span>
                                        </span>
                                    </td>
                                    <td><span className={style.label}>{item.sentiment}</span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    
  )
}

export default Ticket
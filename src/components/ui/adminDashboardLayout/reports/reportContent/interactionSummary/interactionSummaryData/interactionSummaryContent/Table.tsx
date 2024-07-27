import style from './style.module.scss'
import SortIcon from "/assets/dashboard/main_dashboard/admin/reports/sort.svg"
import ChannePlayIcon from "/assets/dashboard/main_dashboard/admin/reports/play_circle.svg"
import { SummaryTableBodyData, SummaryTableColumnData } from './Data'
import { useContext } from 'react'
import { ContextTablePopup } from '../../../../../../../../contexts/tablePopupContext'
const Table = () => {
  const contextSupervisorPopup = useContext(ContextTablePopup)
  return (
    <table className={`${style.ticketTable}`}>
        <thead>
            <tr>
                <th>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="thead_check" id="thead_check" />
                        <label htmlFor=""><span></span></label>
                    </div>
                </th>
                {
                    SummaryTableColumnData.map((item)=>{
                        return(
                            <>
                                <th key={item.id}><span className='d-flex align-items-center'>{item.label} <img src={SortIcon} alt="" /></span> </th>
                            </>
                        )
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                SummaryTableBodyData.map((item)=>{
                    return(
                    <tr key={item.id}>
                        <td>
                            <div className={style.checkbox}>
                                <input type="checkbox" name="thead_check" id={item.id} />
                                <label htmlFor={item.id}><span></span></label>
                            </div>
                        </td>
                        <td>{item.dateTime}</td>
                        <td>
                        <span className='d-flex align-items-center'>
                            {item.channel}
                            <img src={ChannePlayIcon} alt="" onClick={()=>contextSupervisorPopup.handlVoiceCallRecordingPop(true)} />
                        </span>   
                        </td>
                        <td>{item.interactionTYpe}</td>
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={`/assets/dashboard/main_dashboard/admin/reports/${item.customer.avatar}`} alt="" /></span> 
                                <span className={style.name}>{item.customer.name}</span>
                            </div>
                        </td>
                        <td>{item.phoneNo}</td>
                        <td>{item.email}</td>
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                            <span><img src={`/assets/dashboard/main_dashboard/admin/reports/${item.agent.avatar}`} alt="" /></span> 
                                <span className={style.name}>{item.agent.name}</span>
                            </div>
                        </td>
                        <td>{item.agent.id}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Table
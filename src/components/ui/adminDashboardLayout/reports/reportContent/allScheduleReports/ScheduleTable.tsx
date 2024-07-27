import { ScheduleTableColumnData, ScheduleTableData } from './Data'
import style from './style.module.scss'
import SortIcon from "/assets/dashboard/main_dashboard/admin/reports/sort.svg"
import Cross from '/assets/dashboard/main_dashboard/admin/reports/checkCross.svg'
import Check from '/assets/dashboard/main_dashboard/admin/reports/check.svg'
const ScheduleTable = () => {
  return (
    <table className={`${style.report_ticketTable} ticketTable`}>
        <thead>
            <tr>
                <th>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="thead_check" id="thead_check" />
                        <label htmlFor=""><span></span></label>
                    </div>
                </th>
                {
                    ScheduleTableColumnData.map((item)=>{
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
                ScheduleTableData.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>
                                <div className={style.checkbox}>
                                    <input type="checkbox" name="thead_check" id={item.id} />
                                    <label htmlFor={item.id}><span></span></label>
                                </div>
                            </td>
                            <td>{item.label}</td>
                            <td>{item.nextIssueDta}</td>
                            <td>
                                <div className={style.status_details}>
                                    <div className={style.status_check_box}>
                                        <input type="checkbox" name="" id={item.statusCheckID} />
                                        <label htmlFor={item.statusCheckID} className='d-flex align-items-center justify-content-between'>
                                            <span className={style.check_text}>
                                                <span className={style.hide}>Inactive</span>
                                                <span className={style.show}>Active</span>
                                            </span>
                                            <span className={`${style.check_toggle} d-flex align-items-center`}>
                                                <span className={style.hide}><img src={Cross} alt="" /></span>
                                                <span className={style.show}><img src={Check} alt="" /></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td>{item.frequency}</td>
                        </tr>
                    )
            })
            }
        </tbody>
    </table>
  )
}

export default ScheduleTable
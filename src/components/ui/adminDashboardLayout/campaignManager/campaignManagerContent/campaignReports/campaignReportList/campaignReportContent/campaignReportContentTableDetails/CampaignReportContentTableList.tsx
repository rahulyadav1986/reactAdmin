
import style from './style.module.scss'
import EditIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/edit.svg'
import DeleteIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/list/delete.svg'
import VerticalDots from '/assets/dashboard/main_dashboard/admin/campaignManager/list/vertical.svg'
import { CampaignReportTableList } from './Data'
import { useContext } from 'react'
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext'
const CampaignReportContentTableList = () => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  return (
    <div className={style.table_responsive_wrap}>
        <table className={`${style.ticketTable}`}>
            <thead>
                <tr>
                    <th>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="thead_check" id="thead_check" />
                            <label htmlFor=""><span></span></label>
                        </div>
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Contacted</th>
                    <th>Contacted date & Time</th>
                    <th>USER DISPOSITION</th>
                    <th>SYSTEM DISPOSITION</th>
                    <th>Notes</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    CampaignReportTableList.map((item)=>{
                        return(
                            <tr>
                                <td>
                                    <div className={style.checkbox}>
                                        <input type="checkbox" name="thead_check" id={item.id} />
                                        <label htmlFor={item.id}><span></span></label>
                                    </div>
                                </td>
                                <td onClick={()=>contextCampaignManager.handleCampaignReportPop(item.id)}>{item.firstName}</td>
                                <td onClick={()=>contextCampaignManager.handleCampaignReportPop(item.id)}>{item.lastName}</td>
                                <td onClick={()=>contextCampaignManager.handleCampaignReportPop(item.id)}>{item.mobile}</td>
                                <td onClick={()=>contextCampaignManager.handleCampaignReportPop(item.id)}>{item.email}</td>
                                <td> <span className={`${style.connected_status} ${item.contacted.status === 'No' ? style.no : null} `}>{item.contacted.status}</span> </td>
                                <td>{item.contacted.date}, {item.contacted.time}</td>
                                <td>{item.disposition.user === "" ? '-' : item.disposition.user}</td>
                                <td>{item.disposition.system === "" ? '-' : item.disposition.system}</td>
                                <td>{item.notes === "" ? '-' : item.notes}</td>
                                <td>
                                    <ul className={`${style.action_icons} d-flex align-items-center`}>
                                        <li><img src={EditIcon} alt="" /></li>
                                        <li><img src={DeleteIcon} alt="" /></li>
                                        <li><img src={VerticalDots} alt="" /></li>
                                    </ul>
                                </td>                                
                            </tr>
                        )
                    })
                }                
            </tbody>
        </table>
    </div>
  )
}

export default CampaignReportContentTableList



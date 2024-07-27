import style from './style.module.scss'
import SortIcon from "/assets/dashboard/main_dashboard/admin/sidebar/workflowTabContent/sort.svg"
import CallIcon from "/assets/dashboard/main_dashboard/admin/insights/call.svg"
import BotIcon from "/assets/dashboard/main_dashboard/admin/insights/bot2.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/insights/edit.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/admin/insights/play.svg"
import DotsIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import LockedIcon from "/assets/dashboard/main_dashboard/admin/insights/locked.svg"
import { WorkTableData } from './Data'
import { Link } from 'react-router-dom'
const Table = () => {
  return (
    <>
        <table>
            <thead>
                <tr>
                <th>Name & Description</th>
                <th>Assigned to</th>
                <th><span className={`${style.sort} d-flex align-items-center`}>Status <span><img src={SortIcon} alt="" /></span></span></th>
                <th>Version</th>
                <th>Created on</th>
                <th>Menus</th>
                <th>Exits</th>
                <th>Entries</th>
                <th>Modules</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    WorkTableData.map((item)=>{
                        return(
                            <tr key={item.id} className={`${item.status === 'LIVE' ? style.live : null}`}>
                                <td>
                                    <Link to={`/admin/dashboard/workflow-studio/${item.id}/workflow-insight-details`}>
                                        <div className={`${style.details} d-flex align-items-center`}>
                                            <div className={style.icon}><img src={`${item.status === 'LIVE' ? BotIcon : CallIcon}` } alt="" /></div>
                                            <div className='d-flex flex-column'>
                                                <h4>{item.message}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </td>
                                <td>
                                    <div className={`${style.image_list} d-flex align-items-center`}>
                                        {
                                        item.asignPerson.map((img)=>{
                                            return(
                                            <img src={`/assets/dashboard/main_dashboard/admin/${img}`} alt="" />
                                            )
                                        })
                                        }
                                        
                                    </div>
                                </td>
                                <td>
                                    <span className={`${style.status} ${item.status === 'LIVE' ? style.live : item.status === 'DRAFT' ? style.draft : item.status === 'REVIEW' ? style.review : null}`}>
                                        {item.status} 
                                        {
                                        item.status === 'LIVE' ? <span><img src={LockedIcon} alt="" /></span>  : null
                                        }
                                        
                                    </span>
                                </td>
                                <td>
                                    <span className={style.version}>{item.version}</span>
                                </td>
                                <td>
                                    <span className={style.created_on}>
                                        <strong>{item.createdOn}</strong><br />
                                        <span>Since 2 days</span>
                                    </span>
                                </td>
                                <td><span className={style.no}>{item.menus}</span></td>
                                <td><span className={style.no}>{item.exits}</span></td>
                                <td><span className={style.no}>{item.entries}</span></td>
                                <td><span className={style.no}>{item.modules}</span></td>
                                <td>
                                    <ul className={style.actions}>
                                        <li>
                                            <button disabled={item.status === 'LIVE' ? true : false}>
                                                <span><img src={EditIcon} alt="" /></span> 
                                                <span>Edit</span>
                                            </button>
                                        </li>
                                        <li>
                                            {
                                                item.status === 'LIVE' ? 
                                                <button>
                                                <span><img src={PlayIcon} alt="" /></span> 
                                                <span>Monitor</span>
                                                </button> :
                                                <button>
                                                <span><img src={PlayIcon} alt="" /></span> 
                                                <span>test</span>
                                                </button>
                                            }
                                            
                                        </li>
                                        <li>
                                            <button>
                                                <span><img src={DotsIcon} alt="" /></span> 
                                                <span>More</span>
                                            </button>
                                            
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
    
  )
}

export default Table
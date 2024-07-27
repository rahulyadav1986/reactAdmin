import style from './style.module.scss'
import { ActiveFlowDataFromConfiguration } from './Data'
import CallIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callIcon.svg"
import ChatIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/chat.svg"
import QuestionIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/question.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/edit.svg"
import PlayIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/playIcon.svg"

import LockedIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/locked.svg"
import Action from './Action'
import { WorkflowContext } from '../../../../../../contexts/workflowContext'

const ActiveFlowContentFromConfigurationTable = () => {
  
  return (
    <tbody>
        {
            ActiveFlowDataFromConfiguration.map((item)=>{
                return(
                    <tr key={item.id} className={`${item.status === 'LIVE' ? style.live : null}`}>
                        <td>
                            <div className={`${style.details} d-flex align-items-center`}>
                                <div className={style.icon} style={{'backgroundColor': `${item.type === 1 ? '#D7ECE7' : item.type === 2 ? '#E7ECD7' : item.type === 3 ? '#D7D9EC' : null}`}}>
                                    <img src={`${item.type === 1 ? CallIcon : item.type === 2 ? ChatIcon : item.type === 3 ? QuestionIcon : null}` } alt="" />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h4 className='d-flex align-items-center'>
                                        {item.userDetails.messageTitle} 
                                        {item.type === 1 ? <span><img src={LockedIcon} alt="" /></span> : null}
                                    </h4>
                                    <p>{item.userDetails.text}</p>
                                </div>
                            </div>
                        </td>
                        <td><span className={style.type}>{item.typeTitle}</span> {}</td>
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
                            <span className={`${style.status} ${item.type === 1 ? style.draft : item.type === 2 ? style.live : item.type === 3 ? style.review : null}`}>{item.status}</span>
                        </td>
                        <td>
                            <span className={style.version}>{item.version}</span>
                        </td>
                        <td>
                            <span className={style.created_on}>
                                <strong>{item.createdOn}</strong>
                            </span>
                        </td>
                        <td><span className={style.open_since}>{item.openSince}</span> </td>
                        <td>
                            <ul className={style.actions}>
                                <li>
                                    <button disabled={item.type === 2 ? true : false}>
                                        <span><img src={EditIcon} alt="" /></span> 
                                        <span>Edit</span>
                                    </button>
                                </li>
                                <li>
                                    {
                                        item.type === 2 ? 
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
                                    <WorkflowContext>
                                        <Action />
                                    </WorkflowContext>
                                    
                                </li>
                            </ul>
                        </td>
                    </tr>
                )
            })
        }
    </tbody> 
  )
}

export default ActiveFlowContentFromConfigurationTable
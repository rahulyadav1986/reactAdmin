import {useContext} from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/dashboard/main_dashboard/tablePops/cross.svg'
import { ContextTablePopup } from '../../../../../../../contexts/tablePopupContext'
import Avatar from "/assets/dashboard/main_dashboard/tablePops/ava1.png"
import { ViolationdataList } from './Data'
const SupervisorWHFPop = () => {
  const tablePopupContext = useContext(ContextTablePopup)
  return (
    <>
        <div className={`${style.header_widget_area} d-flex align-items-center justify-content-between`}>
            <h4>Work from home</h4>
            <ul className={`${style.action_icons} d-flex align-items-center`}>
                <li onClick={()=>tablePopupContext.handleWhfPop(false)}><img src={CrossIcon} alt="" /></li>                
            </ul>
        </div>
        <div className={style.details_wrapper}>
            <div>
                <h3>AGENT</h3>
                <div className={`${style.profile_area} d-flex align-items-center`}>
                    <span><img src={Avatar} alt="" /></span>
                    <span className='d-flex flex-column'>
                        <span className={style.name}>Dayananda V</span>
                        <span className={style.contact}>Kelemen@airtel.in</span>
                    </span>
                </div>
            </div>
            <div>
                <h3>GEO LOCATION</h3>
                <p>City: <strong>Hyderabad</strong> , State: <strong>Telangana</strong> , <br /> 
                Latitude: <strong>78.486671</strong>, Long: <strong>17.385044</strong> <br />
                IP Address: <strong>198.0.10.160</strong></p>
            </div>
            
        </div>
        <div className={style.violation_area_wrapper}>
            <h3>VIOLATION DETAILS</h3>
            <table>
                <thead>
                    <tr>
                        <th>DATE & TIME</th>
                        <th>VIOLATION TYPE</th>
                        <th>VIOLATION SNAPSHOT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ViolationdataList.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.date} {item.time}</td>
                                    <td>{item.type}</td>
                                    <td onClick={()=>tablePopupContext.handleViolationPop(i)}><img src={item.snapshotImage} alt="" /></td>
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

export default SupervisorWHFPop
import { useContext, useState } from 'react'
import style from './style.module.scss'
import { ContextCampaignManager } from '../../../../../../../../../contexts/campaignManagerContext'
import CrossIcon from "/assets/dashboard/main_dashboard/admin/campaignManager/reports/cross.svg"
const TableDetailsPop = ({item}:any) => {
  const contextCampaignManager = useContext(ContextCampaignManager)
  const [textarea, setTextarea] = useState(item.notes)
  return (
    <div className={style.table_details_pop}>
        <div className="overlay" onClick={()=>contextCampaignManager.handleCampaignReportPop(false)}></div>
        <div className={style.main_area}>
          <div className={`${style.head} d-flex align-items-center justify-content-between`}>
             <h2>{item.firstName} <span>{item.lastName}</span></h2> 
             <span className={style.cross} onClick={()=>contextCampaignManager.handleCampaignReportPop(false)}><img src={CrossIcon} alt="" /></span>
          </div>
          <ul className={style.list_area}>
            <li className='d-flex align-items-center justify-content-between'>
              <span>No of times this contact dailed</span>
              <span>{item.contactDailed}</span>
            </li>
            <li className='d-flex align-items-center justify-content-between'>
              <span>Connected Date & Time</span>
              <span>{item.contacted.date}, {item.contacted.time}</span>
            </li>
            <li className='d-flex align-items-center justify-content-between'>
              <span>Call Duration</span>
              <span>{item.callDuration}</span>
            </li>
            <li className='d-flex align-items-center justify-content-between'>
              <span>Agent name</span>
              <span className={`${style.avatar_wrap} d-flex align-items-center`}>
                  <span><img src={`/assets/dashboard/main_dashboard/admin/campaignManager/reports/${item.agent.avatar}`} alt="" /></span>
                  <span>{item.agent.name}</span>
              </span>
            </li>
            <li className='d-flex align-items-center justify-content-between'>
              <span>Agent ID</span>
              <span>{item.agent.aid}</span>
            </li>
            <li className='d-flex align-items-center justify-content-between'>
              <span>Disposition</span>
              <span className={style.disposition}>{ item.disposition.user === "" ? '-' : item.disposition.user}</span>
            </li>
            <li className='d-flex flex-column'>
              <span>Notes</span>
              <textarea name="" className={style.textarea} placeholder={item.notes === "" ? 'NA' : ""} value={textarea} onChange={(e:any)=>setTextarea(e.target.value)}></textarea>
            </li>
          </ul>
          
        </div>
        
    </div>
  )
}

export default TableDetailsPop
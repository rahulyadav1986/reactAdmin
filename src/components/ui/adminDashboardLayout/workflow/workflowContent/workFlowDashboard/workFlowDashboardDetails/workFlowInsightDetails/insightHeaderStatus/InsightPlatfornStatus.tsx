import { PlatformHeaderStatusData } from './Data'
import style from './style.module.scss'

const InsightPlatfornStatus = () => {
  return (
        <ul className={`${style.platform_insight_status_wrap} d-flex align-items-center`}>
            {
                PlatformHeaderStatusData.map((item)=>{
                    return(
                        <li key={item.id}>
                            <h4>{item.title}</h4>
                            <div className={`${style.details} d-flex align-items-center`}>
                                {item.details.ivr === "" ? null : <span>IVR: <strong>{item.details.ivr}</strong></span>}
                                {item.details.bots === "" ? null : <span>Message Bots: <strong>{item.details.bots}</strong></span> } 
                                {item.details.rate === "" ? null : <span><strong>{item.details.rate}</strong></span>}
                                {item.details.unresponsive === true ? <span><strong>None</strong></span> : null}
                            </div>
                        </li>
                    )
                })
            }
            
            
        </ul>
  )
}

export default InsightPlatfornStatus
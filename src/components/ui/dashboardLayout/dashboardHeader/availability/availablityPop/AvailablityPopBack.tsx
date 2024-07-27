import { useContext } from 'react'
import { AvailabilityData, CampaignStatusData } from './Data'
import CampaignIcon from "/assets/dashboard/status/camera.svg"
import style from './style.module.scss'
import { ContextHeader } from '../../../../../../contexts/headerContext'

export const AvailablityPop = () => {
  const AvailabilityToggleContext = useContext(ContextHeader)
  return (
    <div className={style.availablity_pop_wrapper}>
        <ul>
            <li className={style.status_level}>Change your status</li>
            {
                AvailabilityData.map((item,i)=>{
                    return(
                        <li key={i} onClick={()=>AvailabilityToggleContext.handleStatusItem(item)}>
                            <span><img src={item.icon} alt="" /></span>
                            {item.label}
                        </li>
                    )
                })
            }
            <li onClick={AvailabilityToggleContext.handleOnCampaignClick}>
                <span><img src={CampaignIcon} alt="" /></span>
                Campaign
            </li>
        </ul>
    </div>
  )
}



export const CampaignStatusPop = ()=>{
    const AvailabilityToggleContext = useContext(ContextHeader)
    return(
        <div className={style.availablity_pop_wrapper}>
            <ul>
                <li className={style.status_level}>Choose the campaign</li>
                {
                    CampaignStatusData.map((item,i)=>{
                        return(
                            <li key={i} onClick={AvailabilityToggleContext.handleCampaignToggle}>
                                {item.label}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
import { useContext } from 'react'

import style from './style.module.scss'
import { ContextMediaManagement } from '../../../../../../../contexts/mediaManagementContext'
import { SecondDispositionPopupList } from '../dispositionPopup/Data'

const SecondDispositionPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
        <ul className={`${style.disposition_pop_wrapper} ${style.level_one}`}>
            {
                SecondDispositionPopupList.map((item,i)=>{
                    return(
                        <li onClick={()=>mediaHandleContext.handleSecondDisPositionValue(item)} key={i}>{item.label}</li>
                    )
                })
            }
        </ul>
  )
}

export default SecondDispositionPopup
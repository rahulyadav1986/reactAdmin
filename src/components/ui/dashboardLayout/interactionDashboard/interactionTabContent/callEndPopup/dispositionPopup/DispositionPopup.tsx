import { useContext } from 'react'
import { DispositionPopupList } from './Data'
import style from './style.module.scss'
import { ContextMediaManagement } from '../../../../../../../contexts/mediaManagementContext'

const DispositionPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
        <ul className={`${style.disposition_pop_wrapper} ${style.level_one}`}>
            {
                DispositionPopupList.map((item,i)=>{
                    return(
                        <li onClick={()=>mediaHandleContext.handleDisPositionValue(item)} key={i}>{item.label}</li>
                    )
                })
            }
        </ul>
  )
}

export default DispositionPopup
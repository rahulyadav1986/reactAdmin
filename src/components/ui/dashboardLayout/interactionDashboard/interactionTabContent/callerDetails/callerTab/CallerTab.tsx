import {useContext} from 'react'
import style from './style.module.scss'
import { CallerTabList } from './Data'
import { ContextTable } from '../../../../../../../contexts/tableContext'

const CallerTab = () => {
  const callerTabContext = useContext(ContextTable)
  return (
    <ul className={`${style.callerTab_wrapper} d-flex`}>
        {
            CallerTabList.map((item,i)=>{
                return(
                    <li key={i} className={`${callerTabContext.callerdetailsTab === item.id ? style.active : null}`} onClick={()=>callerTabContext.handleCalletTab(item.id)}>{item.name}</li>
                )
            })
        }
    </ul>
  )
}

export default CallerTab
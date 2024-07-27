

import style from './style.module.scss'
import { useContext } from 'react'
import TabButtonGroup from './tabButtonGroup/TabButtonGroup'
import { ContextTable } from '../../../../../contexts/tableContext'
import { TablePopupContext } from '../../../../../contexts/tablePopupContext'
import TableDetails from './tableDetails/TableDetails'
import { AgentTableMainTabData, SupervisorTableMainTabData } from './Data'
import { useLocation } from 'react-router-dom'
const TicketsTable = () => {
  const tableCalllogTabContext = useContext(ContextTable)
  const location = useLocation()
  const currentLocation = location.pathname.indexOf('/agent')>=0
  return (
    <>
        <ul className={`${style.primary_tab_wrapper} d-flex align-items-center`}>
          {
            currentLocation ?
             AgentTableMainTabData.map((item,i)=>{
              return(
                <li key={i} className={`${tableCalllogTabContext.callLogTab === i ? style.active : null}`} onClick={()=>tableCalllogTabContext.handleCallLogTab(i)}>{item.label}</li>
              )
            }) :
            SupervisorTableMainTabData.map((item,i)=>{
              return(
                <li key={i} className={`${tableCalllogTabContext.callLogTab === i ? style.active : null}`} onClick={()=>tableCalllogTabContext.handleCallLogTab(i)}>{item.label}</li>
              )
            })
          }
        </ul>
        <div className="table_card_area">
            <TabButtonGroup />
            <div className={`${style.filter_table_wrap}`}>
                <TablePopupContext>
                    <TableDetails />
                </TablePopupContext>
            </div>
        </div>
    </>
  )
}

export default TicketsTable
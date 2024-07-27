import {useContext} from 'react'
import style from './style.module.scss'
import CardTabButton from '../../../../shared/cardTabButton/CardTabButton'
import { TabButtonData } from './Data'
import CallDetails from './callDetails/CallDetails'
import { useLocation } from 'react-router-dom'
import { ContextTable } from '../../../../../contexts/tableContext'
import FilterIcon from "/assets/dashboard/main_dashboard/filter_line.svg"

const CallBreakDownCard = () => {
  const location = useLocation()
  const currentLocation = location.pathname.indexOf('/agent')>=0
  const contextTable = useContext(ContextTable)
  const tableFilterToggleContext = useContext(ContextTable)
  return (
    <div className={style.card}>
        <div className={`${style.head_area_wrapper} d-flex align-items-center justify-content-between`}>
          {
            currentLocation ? <h4>Your Call breakdown</h4> :
            <ul className={`${style.breakdown_tab_area} d-flex align-items-center`}>
              <li className={`${contextTable.callCardBreakdownTab === 0 ? style.active : null}`} onClick={()=>contextTable.handleCallCardBreakdownTab(0)}>Team Call Breakdown</li>
              <li className={`${contextTable.callCardBreakdownTab === 1 ? style.active : null}`} onClick={()=>contextTable.handleCallCardBreakdownTab(1)}>Chat Breakdown</li>
            </ul>
          }
          <div className={`${style.filter_wrapper} d-flex align-items-center` }>
              {
                currentLocation ? null : 
                <div className={`${!tableFilterToggleContext.tableFilterToggle ? style.filter_button : `${style.filter_button} ${style.active}`} d-flex align-items-center`} onClick={tableFilterToggleContext.handleTableFilterToggle}>
                    <span>Teams: <strong>All</strong></span> 
                    <img src={FilterIcon} className="_filter_line_icon_1pt9d_21" alt="" />
                </div>
              }
              
              <ul className={`tab_button_group_wrapper d-flex align-items-center`}>
                  {
                      TabButtonData.map((item,i)=>{
                          return(
                              <CardTabButton index={i} item={item} />
                          )
                      })
                  }
                  
              </ul>
          </div>
          
        </div>
        <div className={style.call_and_graph_wrapper}>
          <CallDetails />
        </div>
    </div>
  )
}

export default CallBreakDownCard
import CardTabButton from "../../../../../shared/cardTabButton/CardTabButton"
import FilterButton from "../../../../../shared/filterButton/FilterButton"
import { useContext } from 'react'
import style from "./style.module.scss"
import { ContextTable } from "../../../../../../contexts/tableContext"
import { AdminTicketsTabButtonData, AgentsTicketsTabButtonData, SupervisorTicketsTabButtonData } from "../tableDetails/tables/Data"
import SearchIcon from "/assets/dashboard/main_dashboard/search.svg"
import { useLocation } from "react-router-dom"
import { AdminTableTypeDataTab, AgentTableTypeDataTab, SupervisorTableTypeDataTab } from "./Data"
const TabButtonGroup = () => {
  const tableTypeTabContext = useContext(ContextTable)
  const location = useLocation()
  const currentLocationAgent = location.pathname.indexOf('/agent')>=0
  const currentLocationSupervisor = location.pathname.indexOf('/supervisor')>=0
  const currentLocationAdmin = location.pathname.indexOf('/admin')>=0
  return (
    <div className={`${style.head_filter_area} d-flex align-items-center justify-content-between`}>
        <ul className={`${style.tab_area_wrap} d-flex align-items-center`}>
            {
              currentLocationAgent ?
              AgentTableTypeDataTab.map((item,i)=>{
                return(
                    <li className={`${tableTypeTabContext.tableTypeTab === i ? style.active : null}`} onClick={()=>tableTypeTabContext.handleTableTypeTab(i)}>{item.label}</li>
                )
              }) :
              currentLocationSupervisor ?
              SupervisorTableTypeDataTab.map((item,i)=>{
                return(
                    <li className={`${tableTypeTabContext.tableTypeTab === i ? style.active : null}`} onClick={()=>tableTypeTabContext.handleTableTypeTab(i)}>{item.label}</li>
                )
              }) :
              currentLocationAdmin ? 
              AdminTableTypeDataTab.map((item,i)=>{
                return(
                    <li className={`${tableTypeTabContext.tableTypeTab === i ? style.active : null}`} onClick={()=>tableTypeTabContext.handleTableTypeTab(i)}>{item.label}</li>
                )
              }) : null
            }
        </ul>
        <div className={`${style.right_area_details_wrap} d-flex align-items-center`}>
            {
              currentLocationAgent ? null : currentLocationSupervisor ? <div className={style.filter_search_button_area}><img src={SearchIcon} alt="" /></div> : currentLocationAdmin ? null : null
            }
            <ul className={`tab_button_group_wrapper d-flex align-items-center`}>
                {
                  currentLocationAgent ?
                  AgentsTicketsTabButtonData.map((item,i)=>{
                      return(
                          <CardTabButton item={item} index={i} />
                      )
                  }) :
                  currentLocationSupervisor ?
                  SupervisorTicketsTabButtonData.map((item,i)=>{
                    return(
                        <CardTabButton item={item} index={i} />
                    )
                  }) :
                  currentLocationAdmin ? 
                  AdminTicketsTabButtonData.map((item,i)=>{
                    return(
                        <CardTabButton item={item} index={i} />
                    )
                  }) : null
                }
            </ul>
            <FilterButton />
        </div>
    </div>
  )
}

export default TabButtonGroup
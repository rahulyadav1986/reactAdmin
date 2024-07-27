import {useContext} from 'react'
import style  from './style.module.scss'
import FilterLine from '/assets/dashboard/main_dashboard/filter_line.svg'
import { ContextTable } from '../../../contexts/tableContext'
const FilterButton = () => {
  const tableFilterToggleContext = useContext(ContextTable)
  return (
    <div className={`${!tableFilterToggleContext.tableFilterToggle ? style.filter_button : `${style.filter_button} ${style.active}`} d-flex align-items-center`} onClick={tableFilterToggleContext.handleTableFilterToggle}>
        <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
        More filters
    </div>
  )
}

export default FilterButton
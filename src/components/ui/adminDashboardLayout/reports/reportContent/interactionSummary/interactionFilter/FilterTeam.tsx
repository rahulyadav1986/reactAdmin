import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/down.svg"

import { ContextReport } from '../../../../../../../contexts/reportContext'
import { useContext } from 'react'
import FilterTeamPop from './FilterTeamPop'
const FilterTeam = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <>
      <div className={style.filter_portion}>
        <label htmlFor="">Team</label>
        <div className={`${style.drop_down_area} d-flex align-items-center justify-content-between`} onClick={contextFilterReport.handleFilterTeamPop}>
            <span>Select People</span> 
            <span className='d-flex align-items-center'>
                <span className={style.no}>03</span>
                <img src={DownArrow} alt="" />
            </span>
        </div>
        { contextFilterReport.filterTeamPop ? <FilterTeamPop /> : null  }
      </div>
    </>
   
  )
}

export default FilterTeam
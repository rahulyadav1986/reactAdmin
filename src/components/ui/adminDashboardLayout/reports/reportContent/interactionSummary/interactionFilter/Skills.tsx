import style from './style.module.scss'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/down.svg"

import { ContextReport } from '../../../../../../../contexts/reportContext'
import { useContext } from 'react'
import SkillsPop from './SkillsPop'
const Skills = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.filter_portion}>
        <label htmlFor="">Skills</label>
        <div className={`${style.drop_down_area} d-flex align-items-center justify-content-between`} onClick={contextFilterReport.handleFilterSkillPop}>
            <span>Select Skills</span> 
            <span className='d-flex align-items-center'>
                <span className={style.no}>99</span>
                <img src={DownArrow} alt="" />
            </span>
        </div>
        { contextFilterReport.filterSkillPop ? <SkillsPop /> :  null }
        
    </div>
  )
}

export default Skills
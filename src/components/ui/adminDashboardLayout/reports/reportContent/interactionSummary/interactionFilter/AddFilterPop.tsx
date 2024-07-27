import { useContext } from 'react'
import { FilterData } from './Data'
import style from './style.module.scss'
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg"
import { ContextReport } from '../../../../../../../contexts/reportContext'
const AddFilterPop = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.skill_drop_area_wrapper}>
        <div className={style.top_area}>
            <div className={`${style.search_box} d-flex align-items-center`}>
                <img src={SearchIcon} alt="" />
                <input type="text" name="" id="" placeholder='Search skills' />
            </div>
            <div className={style.check_box_wrapper}>
                <input type="checkbox" name="" id="selectAll" />
                <label htmlFor="selectAll">
                    <span></span>
                    Select All Filters
                </label>
            </div>
        </div>
        <div className={style.filter_check}>
            {
                FilterData.map((item)=>{
                    return(
                        <div className={style.check_box_wrapper} key={item.id}>
                            <input type="checkbox" id={item.id} value={item.skill}/>
                            <label htmlFor={item.id}>
                                <span></span>
                                {item.skill}
                            </label>
                        </div>
                    )
                })
            }
        </div>
        <div className={`${style.button_area} d-flex align-items-center justify-content-end`}>
            <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleAddNewFilterPop}>Cancel</div>
            <div className={`${style.button} ${style.blue} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleApplyFinalFilter}>Apply</div>
        </div>
    </div>
  )
}

export default AddFilterPop
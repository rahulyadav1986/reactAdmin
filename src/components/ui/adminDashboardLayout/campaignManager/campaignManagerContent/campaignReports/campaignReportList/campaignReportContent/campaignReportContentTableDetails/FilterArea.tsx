
import style from './style.module.scss'
import FilterLine from '/assets/dashboard/main_dashboard/filter_line.svg'
import SearchIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/reports/search.svg'
import WhiteRefreshIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/reports/whiteRefresh.svg'
import RedRefreshIcon from '/assets/dashboard/main_dashboard/admin/campaignManager/reports/redRefresh.svg'
const FilterArea = () => {
  
  return (
    <div className={`${style.head_filter_area} d-flex align-items-center justify-content-between`}>
        
        <div className={style.search_wrapper}>
            <img src={SearchIcon}  className={style.search} alt="" />
            <input type="text" className={style.form_control} placeholder='Search users' name="" id="" />
        </div>
        <div className={`${style.right_area_details_wrap} d-flex align-items-center`}>
            <span><img src={RedRefreshIcon} alt="" /></span>
            <div className={`${style.filter_button}  d-flex align-items-center`}>
                Contacted: <strong>Any</strong> 
                <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
            </div>
            <div className={`${style.filter_button}  d-flex align-items-center`}>
                User Disposition: <strong>All</strong> 
                <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
            </div>
            <div className={`${style.filter_button}  d-flex align-items-center`}>
                System Disposition: <strong>All</strong> 
                <img src={FilterLine} className={`${style.filter_line_icon}`} alt="" />
            </div>
            <div className={style.new_list_button}>
                <span><img src={WhiteRefreshIcon} alt="" /></span>
                <span>Re-churn All 100</span>
            </div>
        </div>
    </div>
  )
}

export default FilterArea
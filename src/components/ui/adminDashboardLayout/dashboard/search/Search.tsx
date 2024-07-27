import style from './style.module.scss'
import StarIcon from '/assets/dashboard/star.svg'
import SentButtonIcon from '/assets/dashboard/sent.svg'
import CurveArrowIcon from '/assets/dashboard/main_dashboard/admin/curveArrow.svg'
const Search = () => {
  return (
        <div className={`${style.search_area_main_wrapper} d-flex justify-content-center`}>
            <div className={`${style.arrow_indicator} d-flex flex-column`}>
            <span><img src={CurveArrowIcon} alt="" /></span> 
            <span>Click to see your modules</span>
            </div>
            <div className={`${style.search_area_wrapper}`}>
                <img src={StarIcon} alt="" className={style.star} />
                <input type="text" name="" id="" className={style.form_control} />
                <button><img src={SentButtonIcon} alt="" /></button>
            </div>
        </div>
  )
}

export default Search
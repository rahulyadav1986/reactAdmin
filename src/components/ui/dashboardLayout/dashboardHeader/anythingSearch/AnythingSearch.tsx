import style from './style.module.scss'
import StarIcon from '../../../../../../public/assets/dashboard/star.svg'
import SentButtonIcon from '../../../../../../public/assets/dashboard/sent.svg'

const AnythingSearch = () => {
  return (
    <div className={`${style.search_area_wrapper}`}>
        <img src={StarIcon} alt="" className={style.star} />
        <input type="text" name="" id="" placeholder='Ask anything' className={style.form_control} />
        <button><img src={SentButtonIcon} alt="" /></button>
    </div>
  )
}


export default AnythingSearch
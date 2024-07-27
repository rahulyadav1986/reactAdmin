import style from './style.module.scss'
import YesBankLogo from '../../../../../../public/assets/dashboard/yes_bank_logo.svg'
import ZuqoLogo from '../../../../../../public/assets/dashboard/zuqo_logo.svg'
const Logos = () => {
  return (
    <div className={`${style.logos_area_wrapper} d-flex`}>
        <span>
          <img src={YesBankLogo} alt="" />
        </span>
        <div className={style.main_logo}>
            Powered by
            <img src={ZuqoLogo} alt="" />
        </div>
    </div>
  )
}

export default Logos
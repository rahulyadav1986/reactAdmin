import style from './style.module.scss'
import DesignAboutIcon from "/assets/interactionCenter/about_design.svg"
import UpArrowIcon from "/assets/interactionCenter/up_arrow.svg"
const AskSearch = () => {
  return (
    <div className={style.ask_zuqo_caller_wrapper}>
        <div className={style.about_caller_form_control}>
            <img src={DesignAboutIcon} alt="" />
            <input type="text" placeholder="Ask Zuqo about caller ⌘P" className={style.form_control} />
            <button><img src={UpArrowIcon} alt="" /></button>
        </div>
    </div>
  )
}

export default AskSearch
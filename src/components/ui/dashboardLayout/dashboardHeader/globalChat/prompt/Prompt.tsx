import style from './style.module.scss'
import SendIcon from "/assets/chat/send.svg"
import MicroPhoneIcon from "/assets/chat/microphone.svg"
const Prompt = () => {
  return (
    <div className={style.prompt_area_wrap}>
        <div className={style.main_area}>
            <input type="text" name="" id="" className={style.form_control} placeholder='Write your message' />
            <div className={`${style.action_icons} d-flex align-items-center `}>
                <span><img src={MicroPhoneIcon} alt="" /></span>
                <span><img src={SendIcon} alt="" /></span>
            </div>
        </div>
    </div>
  )
}

export default Prompt
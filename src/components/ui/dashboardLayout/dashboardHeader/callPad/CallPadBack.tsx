import style from './style.module.scss'
import PlusIcon from "/assets/dashboard/pad_add.svg"
import CallIcon from "/assets/dashboard/padCall.svg"
import RightArrowIcon from "/assets/dashboard/pad_right_arrow.svg"

const CallPad = () => {
  return (
    <div className={style.call_pad_wrapper}>
        <div className={style.form_control_area_wrapper}>
            <div className={style.portion}>
                <select name="" id="" className={style.form_control}>
                    <option value="Call Type (International)">Call Type (International)</option>
                    <option value="Call Type (Domestic)">Call Type (International)</option>
                </select>
            </div>
            <div className={style.portion}>
                <select name="" id="" className={style.form_control}>
                    <option value="Select caller id">Select caller id</option>
                </select>
            </div>
            <div className={style.portion}>
                <input type="text" name="" id="" className={style.form_control} placeholder='Enter phone number' />
            </div>
        </div>
        <div className={style.dialer_area_wrapper}>
            <span className={style.dial_wrap}>
                <span className={style.no}>1</span>
                <span className={style.letter}></span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>2</span>
                <span className={style.letter}>ABC</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>3</span>
                <span className={style.letter}>DEF</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>4</span>
                <span className={style.letter}>GHI</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>5</span>
                <span className={style.letter}>JKL</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>6</span>
                <span className={style.letter}>MNO</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>7</span>
                <span className={style.letter}>PQR</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>8</span>
                <span className={style.letter}>STUV</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>9</span>
                <span className={style.letter}>WXYZ</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>*</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>0</span>
            </span>
            <span className={style.dial_wrap}>
                <span className={style.no}>#</span>
            </span>
        </div>
        <div className={`${style.action_area_wrapper}`}>
            <span className={style.dial_wrap}>
                <img src={PlusIcon} alt="" />
            </span>
            <span className={style.dial_wrap}>
                <span className={style.call_wrap}><img src={CallIcon} alt="" /></span>
            </span>
            <span className={style.dial_wrap}>
                <img src={RightArrowIcon} alt="" />
            </span>
        </div>
    </div>
  )
}

export default CallPad
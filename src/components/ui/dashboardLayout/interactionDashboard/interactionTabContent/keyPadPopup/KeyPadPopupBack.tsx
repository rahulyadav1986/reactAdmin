import { useContext } from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'
import CallIcon from "/assets/dashboard/padCall.svg"
import RightArrowIcon from "/assets/dashboard/pad_right_arrow.svg"
import PlusIcon from "/assets/dashboard/pad_add.svg"
const KeyPadPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={`${style.keypad_popup_wrapper} d-flex align-items-center justify-content-center`}>
        <div className="overlay" onClick={()=>mediaHandleContext.handleKeyPadPop(false)}></div>
        <div className={style.main_wrapper}>
            <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
                <h4>DTMF Pad</h4>
                <span><img src={CrossIcon} alt="" onClick={()=>mediaHandleContext.handleKeyPadPop(false)}  /></span>
            </div>
            <div className={style.form_control_area_wrapper}>
                <div className={style.portion}>
                    <input type="text" className={style.form_control} name="" id="" />
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
    </div>
  )
}

export default KeyPadPopup
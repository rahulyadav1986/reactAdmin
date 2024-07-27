import { useContext,useState } from 'react'
import style from './style.module.scss'
import CrossIcon from '/assets/interactionCenter/cross.svg'
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'
import CallIcon from "/assets/dashboard/padCall.svg"
import RightArrowIcon from "/assets/dashboard/pad_right_arrow.svg"
import PlusIcon from "/assets/dashboard/pad_add.svg"
const KeyPadPopup = () => {
  const mediaHandleContext = useContext(ContextMediaManagement);
  const [dialledNumber,setDialledNumber] = useState("");

    function pressDialPad(num:any)
    {
        console.log("pressed num",num);
        if(num == "Backspace")
        {
            setDialledNumber((item)=>{
                item = item.substring(0,item.length-1);
                return item;
            });
        }
        else
        {
            setDialledNumber((item)=>{
                item += num.toString();
                return item;
            });
        }
    }
   function handleKeyPress(event:any)
    {
        let regex:any = /[0-9]/;
        let charCode = (event.which) ? event.which : event.keyCode;
        console.log("char code",charCode,regex.test(event.key));
        if((regex.test(event.key) == false) && (event.key != "+" && event.key != "*" && event.key != "Backspace" && event.key != 'backspace' && event.key != "#"))
        {
            event.preventDefault();
        }
    }

    function numberDialHandler(event:any)
    {
        setDialledNumber(event.target.value);
    }
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
                    <input type="text" className={style.form_control} name="" id="" onKeyDown={handleKeyPress} value={dialledNumber} onChange={numberDialHandler}/>
                </div>
            </div>
            <div className={style.dialer_area_wrapper}>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(1)}>
                    <span className={style.no}>1</span>
                    <span className={style.letter}></span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(2)}>
                    <span className={style.no}>2</span>
                    <span className={style.letter}>ABC</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(3)}>
                    <span className={style.no}>3</span>
                    <span className={style.letter}>DEF</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(4)}>
                    <span className={style.no}>4</span>
                    <span className={style.letter}>GHI</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(5)}>
                    <span className={style.no}>5</span>
                    <span className={style.letter}>JKL</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(6)}>
                    <span className={style.no}>6</span>
                    <span className={style.letter}>MNO</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(7)}>
                    <span className={style.no}>7</span>
                    <span className={style.letter}>PQR</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(8)}>
                    <span className={style.no}>8</span>
                    <span className={style.letter}>STUV</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(9)}>
                    <span className={style.no}>9</span>
                    <span className={style.letter}>WXYZ</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad("*")}>
                    <span className={style.no}>*</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad(0)}>
                    <span className={style.no}>0</span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad("#")}>
                    <span className={style.no}>#</span>
                </span>
            </div>
            <div className={`${style.action_area_wrapper}`}>
                <span className={style.dial_wrap} onClick={()=>pressDialPad("+")}>
                    <img src={PlusIcon} alt="" />
                </span>
                <span className={style.dial_wrap}>
                    <span className={style.call_wrap}><img src={CallIcon} alt="" /></span>
                </span>
                <span className={style.dial_wrap} onClick={()=>pressDialPad("Backspace")}>
                    <img src={RightArrowIcon} alt="" />
                </span>
            </div>
        </div>
    </div>
  )
}

export default KeyPadPopup
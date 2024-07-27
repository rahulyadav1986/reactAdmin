import style from './style.module.scss'
import PlusIcon from "/assets/dashboard/pad_add.svg"
import CallIcon from "/assets/dashboard/padCall.svg"
import RightArrowIcon from "/assets/dashboard/pad_right_arrow.svg"
import { useState } from 'react'

const CallPad = () => {
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
                <input type="tel" name="" id="" className={style.form_control} placeholder='Enter phone number' onKeyDown={handleKeyPress} value={dialledNumber} onChange={numberDialHandler}/>
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
        <div className={`${style.action_area_wrapper}`} >
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
  )
}

export default CallPad
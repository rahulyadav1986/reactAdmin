
import style from './style.module.scss'
import { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ContextMediaManagement } from '../../../../../../../contexts/mediaManagementContext';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const DatePopup = () => {
  const [value, onChange] = useState<Value>(new Date());
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={style.date_popup_wrapper}>
        <Calendar onChange={onChange} value={value} />
        <div className={`${style.time_area} d-flex align-items-center justify-content-center`}>
          <div className={style.portion}>
            <select name="" id="">
            {[...Array(13)].map((_e, i) => {
              return <option key={i} value={`${i}`}>{i}</option>
            })}
            </select>
            <span>:</span>
            <select name="" id="">
              {[...Array(61)].map((_e, i) => {
                return <option key={i} value={`${i}`}>{i}</option>
              })}              
            </select>
            <span>:</span>
            <select name="" id="">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className={`${style.bottom_area} d-flex justify-content-end align-items-center`}>
          <span className={style.date}>09/10/2022</span>
          <div className={`${style.button_group} d-flex align-items-center`}>
              <button onClick={()=>mediaHandleContext.handleDatePop(false)}>Cancel</button>
              <button onClick={()=>mediaHandleContext.handleEndPopup(false)}>Apply</button>
          </div>
        </div>
    </div>
  )
}

export default DatePopup
import { useContext, useState } from 'react';
import style from './style.module.scss';
import { ContextReport } from '../../../../../../../contexts/reportContext';
import Calendar from 'react-calendar';
import FilterDateRangeTime from './FilterDateRangeTime';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const FilterDateRangePopup = () => {
  const contextFilterReport = useContext(ContextReport);
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className={style.date_range_popup_wrapper}>
      <div className={`${style.date_area} d-flex `}>
        <ul className={style.date_range_filter}>
          <li>
            <span>Today</span>
          </li>
          <li>
            <span>Yesterday</span>{' '}
          </li>
          <li>
            <span>Last 30 Days</span>
          </li>
          <li>
            <span>This Month</span>
          </li>
          <li>
            <span>Last Month</span>
          </li>
          <li>
            <input
              type="text"
              name=""
              id=""
              className={style.input}
              placeholder="Custom Range"
            />
          </li>
        </ul>
        <div className={`${style.calendar_area_wrapper}`}>
          <div className={`${style.calendar}`}>
            <Calendar onChange={onChange} value={value} />
            <FilterDateRangeTime />
          </div>
          <div className={`${style.calendar}`}>
            <Calendar onChange={onChange} value={value} />
            <FilterDateRangeTime />
          </div>
        </div>
      </div>
      <div className={`${style.action_button_area} d-flex align-items-center justify-content-end`} >
        <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleFilterDatePop} >
          Cancel
        </div>
        <div className={`${style.button} ${style.apply} d-flex align-items-center justify-content-center`} onClick={contextFilterReport.handleFilterDateApply}>
          Apply
        </div>
      </div>
    </div>
  );
};

export default FilterDateRangePopup;

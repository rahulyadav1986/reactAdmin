// import { useContext } from 'react';
import { SummaryChannelFilterData } from './Data';
import style from './style.module.scss'
import SeacrIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/callScript/search.svg";
import RefreshIcon from "/assets/dashboard/main_dashboard/admin/reports/refresh.svg";
// import { ContextReport } from '../../../../../../../../contexts/reportContext';
import useOutside from '../../../../../../../../hooks/useOutside';

const Filter = () => {
  // const contextFilterReport = useContext(ContextReport)
  const [drop, setDrop, ref] = useOutside(false)
  return (
    <div className={`${style.filter_wrapper} d-flex align-items-center justify-content-between`}>
        <div className={`${style.search_box_area} d-flex align-items-center`}>
            <img src={SeacrIcon} alt="" />
            <input type="text" name="" id="" placeholder="Search skills" />
        </div>
        <div className={`${style.filter_buttons_area} d-flex align-items-center`} >
            <span style={{'marginRight':'15px', 'cursor':'pointer'}}><img src={RefreshIcon} alt="" /></span>
            <div className={`${style.filter_button} `} ref={ref}>
              <div className='d-flex align-items-center' onClick={()=>setDrop(!drop)} >
                <span>Channel: <strong>Any 2</strong> </span>
                <span><img src="/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg" alt="" /></span>
              </div>
              {
                drop ? 
                <div className={style.filter_pop_wrapper}>
                  <div className={`${style.search_box} d-flex align-items-center`}>
                    <img src={SeacrIcon} alt="" />
                    <input type="text" name="" id="" placeholder='Search skills' />
                  </div>
                  <div className={style.filter_check}>
                    {
                        SummaryChannelFilterData.map((item)=>{
                            return(
                                <div className={style.check_box_wrapper} key={item.id}>
                                    <input type="checkbox" id={item.id} value={item.label}/>
                                    <label htmlFor={item.id}>
                                        <span></span>
                                        {item.label}
                                    </label>
                                </div>
                            )
                        })
                    }
                  </div>
                </div> : null
              }
              
            </div>
            <div className={`${style.filter_button} d-flex align-items-center`}>
              <span>Interaction Type: <strong>Any</strong> </span>
              <span><img src="/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg" alt="" /></span>
            </div>
            <div className={`${style.filter_button} d-flex align-items-center`}>
              <span>Disposition: <strong>All</strong> </span>
              <span><img src="/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg" alt="" /></span>
            </div>
            <div className={`${style.filter_button} d-flex align-items-center`}>
              <span>More Filters</span>
              <span><img src="/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg" alt="" /></span>
            </div>
        </div>
    </div>
  )
}

export default Filter
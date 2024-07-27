
import { AiOverviewStatus } from './Data'
import style from './style.module.scss'
import SmilyIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/positiveSmily.svg"
import { SetStateAction, useState } from "react";
import ReactStars from 'react-rating-star-with-type'
const OverViewStatus = () => {
  const [_star, setStar] = useState(5);

  const onChange=(nextValue: SetStateAction<number>)=>{
      setStar(nextValue)
  }
  return (
    <div className={`${style.overview_status_wrapper} d-flex align-items-center justify-content-between`}>
        <ul className={`${style.left} d-flex `}>
          {
            AiOverviewStatus.map((item)=>{
              return(
                <li key={item.id} className={`${item.label === 'Call INTENT' ? style.intent : null}`}>
                  <span className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/${item.icon}`} alt="" /></span>
                  <span className={`${style.label_area} d-flex flex-column`}>
                      <span className={style.heading}>{item.label}</span>
                      <span className={style.time}>{item.value}</span>
                  </span>
                </li>
              )
            })
          }
        </ul>
        <ul className={`${style.right} d-flex`}>
            <li className='d-flex flex-column justify-content-between'>
               <div className={`${style.sentiment_status} d-flex`}>
                <span><img src={SmilyIcon} alt="" /></span>
                <span className={`${style.text} d-flex flex-column`}>
                    <span>98.6</span>
                    <span className={style.status}>Positive</span>
                </span>
               </div>
               <p>Overall sentiment</p>
            </li>
            <li className={`${style.rating} d-flex flex-column  justify-content-between`}>
              <ReactStars 
                onChange={onChange} 
                value={3.2}
                halfIcon={true}  
                isEdit={true}  
                />
                <p>Overall CALL Rating</p>
            </li>
        </ul>
    </div>
  )
}

export default OverViewStatus
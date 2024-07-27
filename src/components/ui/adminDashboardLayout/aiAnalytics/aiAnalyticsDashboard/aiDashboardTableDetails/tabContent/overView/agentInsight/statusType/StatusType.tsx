import { SetStateAction, useState } from 'react';
import style from './style.module.scss'
import SmilyIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/tableDetails/positiveSmily.svg"
import ReactStars from 'react-rating-star-with-type'
const StatusType = () => {
    const [_star, setStar] = useState(5);

    const onChange=(nextValue: SetStateAction<number>)=>{
        setStar(nextValue)
    }
  return (
    <div className={style.agent_status_card_wrapper}>
        <div className={`${style.card} d-flex flex-column align-items-center justify-content-between`}>
            <h4>AGENT sentiment</h4>
            <div className={`${style.smily_area} d-flex align-items-center`}>
                <span><img src={SmilyIcon} alt="" /></span>
                <span className={`${style.text} d-flex flex-column`}>
                    <span className={`${style.status} ${style.positive}`}>Positive</span>
                    <span className={style.no}>89</span>
                </span>
            </div>
            <p><span>2%</span> above threshold</p>
        </div>
        <div className={`${style.card} d-flex flex-column align-items-center justify-content-between`}>
            <h4>Agent Compliance</h4>
            <h5>90%</h5>
            <p><span>8%</span> above threshold</p>
        </div>
        <div className={`${style.card} ${style.rating} d-flex flex-column align-items-center justify-content-between`}>
            <h4>Agent KNOWLEDGE</h4>
            <ReactStars
                onChange={onChange} 
                value={3.2}
                halfIcon={true}  
                isEdit={true}  
            />
            <p>5 of 5</p>
        </div>
    </div>
  )
}

export default StatusType
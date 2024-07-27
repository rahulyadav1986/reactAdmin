import  {useContext,useState} from "react"
import { ContextHeader } from '../../../../contexts/headerContext'
import style from './style.module.scss'
import GoodMorningAvatar from "/assets/dashboard/goodmorning.png"
import { AvailabilityData } from "../dashboardHeader/availability/availablityPop/Data"
const GoodMorningPop = ({handleLoader}: any) => {
  const headerContext = useContext(ContextHeader);
  const [isAvailable,setIsAvailable] = useState(false);
  const availableItem = AvailabilityData.find((el)=>el.label == 'Available');
  const handleStatus = (event:any)=>{
    setIsAvailable(event.target.checked);
    if(event.target.checked == true && availableItem != undefined)
    {
        headerContext.handleStatusItem(availableItem);
    }
    else
    {
        headerContext.handleStatusItem({icon:"",label:"Please Select",id:""});
    }
  }
  const handleSubmit = ()=>{
    handleLoader();
    if(isAvailable)
    {
        headerContext.handleTimer('start');
    }
  };
  return (
    <div className={style.goodMorningPopWrapper}>
        <div className={style.main_pop}>
            <img src={GoodMorningAvatar} alt="" />
            <div className={`${style.content_area} d-flex flex-column justify-content-between`}>
                <div>
                    <h2>Good morning! Soham</h2>
                    <p>🌞 Rise and shine. Let's dive in and make every interaction amazing! today"</p>
                </div>
                <div className={`${style.bottom} d-flex flex-column align-items-center`}>
                    <h4>Breath In .... Breath Out</h4>
                    <div className={style.checkbox}>
                        <input type="checkbox" name="thead_check" id="thead_check" onChange={handleStatus}/>
                        <label htmlFor="thead_check" className=' d-flex align-items-center'><span></span>I am ready to take calls</label>
                    </div>
                    <div className={style.action_button} onClick={handleSubmit}>Start My Day</div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default GoodMorningPop
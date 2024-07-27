import style from './style.module.scss'
import ThumsUpIcon from "/assets/interactionCenter/thumb_up.svg"
import ThumsDownIcon from "/assets/interactionCenter/thumb_down.svg"
import { AiRecomendationList } from './Data'
const AiRecomendation = () => {
  return (
    <div className={style.aiRecomendation_wrapper}>
      <h3>Zuqo ai recommendations</h3>
      {/* <h6>Zuqo will help you take  the next best action while interacting with customer</h6> */}
      <h2>As customer mentioned <strong>“I want to close an account”</strong> </h2>
      <h4>You may recommended the below action</h4>
      <ul className={style.comment_list}>
        {
          AiRecomendationList.map((item,i)=>{
            return(
              <li key={i}>
                <span>{item.msg}</span> 
                <span className={`${style.thumb_icon} d-flex flex-column justify-content-between`}>
                  <span><img src={ThumsUpIcon} alt="" /></span> 
                  <span><img src={ThumsDownIcon} alt="" /></span> 
                </span>
              </li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default AiRecomendation
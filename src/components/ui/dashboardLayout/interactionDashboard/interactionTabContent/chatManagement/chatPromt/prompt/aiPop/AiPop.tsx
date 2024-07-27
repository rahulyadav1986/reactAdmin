
import style from './style.module.scss'
import ImproveWritingIcon from "/assets/interactionCenter/chatManagement/ai1.svg"
import GrammerIcon from "/assets/interactionCenter/chatManagement/ai2.svg"
import ShorterIcon from "/assets/interactionCenter/chatManagement/ai3.svg"
import ProfessionalIcon from "/assets/interactionCenter/chatManagement/ai4.svg"
import CasualIcon from "/assets/interactionCenter/chatManagement/ai5.svg"

const AiPop = ({setDropAskAI}:any) => {
  
    
  return (
    <div className={style.aiPop_wrapper}>
        <h5>Zuqo AI helps you improve the language</h5>
        <ul className={style.list}>
            <li className='d-flex align-items-center' onClick={()=>setDropAskAI(false)}>
                <span><img src={ImproveWritingIcon} alt="" /></span>
                Improve writing
            </li>
            <li className='d-flex align-items-center' onClick={()=>setDropAskAI(false)}>
                <span><img src={GrammerIcon} alt="" /></span>
                Fix spelling & grammar
            </li>
            <li className='d-flex align-items-center' onClick={()=>setDropAskAI(false)}>
                <span><img src={ShorterIcon} alt="" /></span>
                Make shorter
            </li>
            <li className='d-flex align-items-center' onClick={()=>setDropAskAI(false)}>
                <span><img src={ProfessionalIcon} alt="" /></span>
                Professional tone
            </li>
            <li className='d-flex align-items-center' onClick={()=>setDropAskAI(false)}>
                <span><img src={CasualIcon} alt="" /></span>
                Casual tone
            </li>
        </ul>
    </div>
  )
}

export default AiPop
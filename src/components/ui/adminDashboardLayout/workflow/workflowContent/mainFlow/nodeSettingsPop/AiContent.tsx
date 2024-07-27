import { useEffect, useState } from 'react'
import style from './style.module.scss'

const AiContent = ({value,onAiTextChange}:any) => {
  const [aiText,setAItext] = useState(value);

  useEffect(()=>{
    console.log("media ai content",value);
    setAItext(value);
  },[value]);

  const aiTextChangeHandler = (evt:any)=>{
    setAItext(evt.target.value);
    onAiTextChange(evt.target.value);
  };
  return (
    <div className={style.ai_wrapper}>
        <textarea  placeholder="Hello and thank you for calling [Your Company Name]. This is [Your Name], and I'm here to assist you today. May I have your name and how may I help you" value={aiText} onChange={aiTextChangeHandler}/>
    </div>
  )
}

export default AiContent
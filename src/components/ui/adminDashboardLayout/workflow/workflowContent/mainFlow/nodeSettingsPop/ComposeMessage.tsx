import { useEffect, useState } from 'react'
import style from './style.module.scss'

const ComposeMessage = ({value,onComposeTextChange}:any) => {
  const [aiText,setAItext] = useState(value);

  useEffect(()=>{
    console.log("media ai content",value);
    setAItext(value);
  },[value]);

  const ComposeTextChangeHandler = (evt:any)=>{
    setAItext(evt.target.value);
    onComposeTextChange(evt.target.value);
  };
  return (
    <div className={style.ai_wrapper}>
        <textarea  placeholder="Hello and thank you for calling [Your Company Name]. This is [Your Name], and I'm here to assist you today. May I have your name and how may I help you" value={aiText} onChange={ComposeTextChangeHandler}/>
        <span>34/120</span>
        
    </div>
  )
}

export default ComposeMessage
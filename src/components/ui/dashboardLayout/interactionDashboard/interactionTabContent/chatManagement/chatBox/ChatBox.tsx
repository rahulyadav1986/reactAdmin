
import style from './style.module.scss'
import ChatAvatar1 from '/assets/dashboard/main_dashboard/tablePops/chatAvatar1.png'
import ChatAvatar2 from '/assets/dashboard/main_dashboard/tablePops/chatAvatar2.png'

const ChatBox = () => {
  
  return (
        <div className={style.chat_pallet_wrapper}>
            <span className={style.message_type}>Inbound</span>
            <ul className={style.chat_pop_wrapper}>
                <li className={`${style.incoming} d-flex`}>
                    <div className={style.image_avatar}><img src={ChatAvatar1} alt="" /></div>
                    <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-start`}>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>Hi there! I have a question about my recent credit card statement. Can you help me understand some of the charges?</span>
                            09:09:00am
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>I noticed there's a charge labeled ?</span>
                            09:09:00am
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>Also, I see a foreign transaction fee on my statement. Can you tell me more about that?</span>
                            09:09:00am
                        </div>
                    </div>
                </li>
                <li className={`${style.outgoing} d-flex justify-content-end`}>
                    <div className={style.image_avatar}><img src={ChatAvatar2} alt="" /></div>
                    <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-end`}>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>Hello! Of course, I'd be happy to help you with your credit card statement.</span>
                            
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>The "Annual Fee" is a standard fee that's charged once a year for the benefits and 
                            features that come with your credit card. It helps cover things like rewards 
                            programs and travel insurance.</span>
                            
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>The "Foreign Transaction Fee" is incurred when you make purchases using your 
                            credit card in a currency other than your home country's or when the transaction 
                            occurs outside of your home country.</span>
                            
                        </div>
                    </div>
                </li>
                <li className={`${style.incoming} d-flex`}>
                    <div className={style.image_avatar}><img src={ChatAvatar1} alt="" /></div>
                    <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-start`}>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>Hi there! I have a question about my recent credit card statement. Can you help me understand some of the charges?</span>
                            09:09:00am
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>I noticed there's a charge labeled ?</span>
                            09:09:00am
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-start`}>
                            <span>Also, I see a foreign transaction fee on my statement. Can you tell me more about that?</span>
                            09:09:00am
                        </div>
                    </div>
                </li>
                <li className={`${style.outgoing} d-flex justify-content-end`}>
                    <div className={style.image_avatar}><img src={ChatAvatar2} alt="" /></div>
                    <div className={`${style.chat_prompt_area_wrapper} d-flex flex-column align-items-end`}>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>Hello! Of course, I'd be happy to help you with your credit card statement.</span>
                            
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>The "Annual Fee" is a standard fee that's charged once a year for the benefits and 
                            features that come with your credit card. It helps cover things like rewards 
                            programs and travel insurance.</span>
                            
                        </div>
                        <div className={`${style.prompt_line} d-flex justify-content-end`}>
                            09:09:00am
                            <span>The "Foreign Transaction Fee" is incurred when you make purchases using your 
                            credit card in a currency other than your home country's or when the transaction 
                            occurs outside of your home country.</span>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  )
}

export default ChatBox
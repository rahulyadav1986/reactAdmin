import style from './style.module.scss'
const DistributionConversationIntentOutcomesChart =()=> {
  return (
    <div className={style.conversion_flow_area_wrapper}>
        <ul className={style.con_details}>
            <li>
                <span className={style.label}>Successful Resolution</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'60%','background': ' linear-gradient(180deg, #7AD3FF 0%, #4FBAF0 100%)'}}>1</span>
                </span>
            </li>
            <li>
                <span className={style.label}>Unsatisfactory Resolution</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'80%','background': ' linear-gradient(180deg, #FF9364 0%, #F25F33 100%)'}}>2</span>
                </span>
            </li>
            <li>
                <span className={style.label}>Abandoned Conversation</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'35%','background': ' linear-gradient(180deg, #B09FFF 0%, #8D79F6  100%)'}}>3</span>
                </span>
            </li>
            <li>
                <span className={style.label}>Escalation</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'45%','background': ' linear-gradient(180deg, #FE6C6C 0%, #FE464B 100%)'}}>4</span>
                </span>
            </li>
            <li>
                <span className={style.label}>Abandoned Conversation</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'25%','background': ' linear-gradient(180deg, #99FFA3 0%, #68EE76 100%)'}}>5</span>
                </span>
            </li>
            <li>
                <span className={style.label}>Sales Conversion</span>
                <span className={style.loader_wrap} >
                    <span style={{'width':'65%','background': ' linear-gradient(180deg, #FFD572 0%, #FEBD38 100%)'}}>6</span>
                </span>
            </li>
        </ul>
    </div>
  )
}

export default DistributionConversationIntentOutcomesChart
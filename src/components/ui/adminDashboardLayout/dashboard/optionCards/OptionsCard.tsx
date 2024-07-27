// import Card from './Card'
// import { OptionCardsData } from './Data'
import { useContext } from 'react'
import { ContextAdminDashboard } from '../../../../../contexts/adminDashboardContext'
import style from './style.module.scss'

const OptionsCard = () => {
  const contextDashboard = useContext(ContextAdminDashboard)
  return (
    <div className={`${style.option_card_wrapper}`}>
      
      <div className={style.card} onClick={()=>contextDashboard.handleBuildBotOpenPop(true)}>
          <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/bot.svg`} alt="" /></div>
          <h2>Build a Bot</h2>
          <p>My goal is to create and deploy a beautiful bot without any coding skills.</p>
      </div>
      <div className={style.card}>
          <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/campaign.svg`} alt="" /></div>
          <h2>Create a Campaign</h2>
          <p>I want to launch conversational campaigns that engage my audience.</p>
      </div>
      <div className={style.card}>
          <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/survey.svg`} alt="" /></div>
          <h2>Build Survey</h2>
          <p>I want to build a survey and share it with customers to get feedback.</p>
      </div>
      <div className={style.card}>
          <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/studio.svg`} alt="" /></div>
          <h2>Analytics<span>Studio</span></h2>
          <p>Create custom reports, configure and share it with team.</p>
      </div>
      <div className={style.card}>
          <div className={style.icon}><img src={`/assets/dashboard/main_dashboard/admin/optionCards/platform.svg`} alt="" /></div>
          <h2>Setup Platform</h2>
          <p>I want to configure the platform based on the my need.</p>
      </div>
    </div>
  )
}

export default OptionsCard
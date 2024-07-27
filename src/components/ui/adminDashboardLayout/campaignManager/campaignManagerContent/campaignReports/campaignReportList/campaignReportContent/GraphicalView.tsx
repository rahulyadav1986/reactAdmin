import AgentEngagementChart from './graphicalViewChats/AgentEngagementChart'
import CodesBreakDownChart from './graphicalViewChats/CodesBreakDownChart'
import ContactDailedFrequencyChart from './graphicalViewChats/ContactDailedFrequencyChart'
import ContactFunnelChart from './graphicalViewChats/ContactFunnelChart'
import ContactedChart from './graphicalViewChats/ContactedChart'
import ContactsEngagedChart from './graphicalViewChats/ContactsEngagedChart'
import style from './style.module.scss'

const GraphicalView = () => {
  return (
    <div className={style.graphical_view_wrapper}>
        <div className={style.top_card_area}>
            <div className={style.card}>
                <ContactFunnelChart />
            </div>
            <div className={style.card}>
                <ContactsEngagedChart />
            </div>
        </div>
        <div className={style.bottom_card_area}>
            <div className={style.card}>
                <CodesBreakDownChart />
            </div>
            <div className={style.card}>
                <ContactedChart />
            </div>
            <div className={style.card}>
                <AgentEngagementChart />
            </div>
            <div className={style.card}>
                <ContactDailedFrequencyChart />
            </div>
        </div>
    </div>
  )
}

export default GraphicalView
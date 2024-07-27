import style from '../style.module.scss'
import ChannelEffectiveness from './channelEffectiveness/ChannelEffectiveness'
import ConductedNonConductedChart from './conductedNonConductedChart/ConductedNonConductedChart'
import ContactedAtemptBreakdown from './contactedAtemptBreakdown/ContactedAtemptBreakdown'
import NonConductedReasonChart from './nonConductedReasonChart/NonConductedReasonChart'
import ReachablityAnalyticsDetails from './reachablityAnalyticsDetails/ReachablityAnalyticsDetails'

const ReachablityStatistics = () => {
  return (
    <>
      <ReachablityAnalyticsDetails />
      <div className={style.card}>
        <ConductedNonConductedChart />
      </div>
      <div className={style.card}>
        <ContactedAtemptBreakdown />
      </div>
      <div className={style.card}>
        <NonConductedReasonChart />
      </div>
      <div className={style.card}>
        <ChannelEffectiveness />
      </div> 
    </>
  )
}

export default ReachablityStatistics
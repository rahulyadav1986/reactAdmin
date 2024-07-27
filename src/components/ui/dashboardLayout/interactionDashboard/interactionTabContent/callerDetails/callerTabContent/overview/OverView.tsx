import { useContext } from 'react'

import AccountInfoCard from './accountInfoCard/AccountInfoCard'
import CommonReasonCard from './commonReasonCard/CommonReasonCard'
import CurrentSentimentCard from './currentSentimentCard/CurrentSentimentCard'
import OpenTicketsCard from './openTicketsCard/OpenTicketsCard'
import ProfileCard from './profileCard/ProfileCard'
import style from './style.module.scss'
import TimeLineCard from './timelineCard/TimeLineCard'
import { ContextTable } from '../../../../../../../../contexts/tableContext'
import { SocialPopupContext } from '../../../../../../../../contexts/socialPopupContext'

const OverView = () => {
  const interactionTabContext = useContext(ContextTable)
  return (
    <div className={`${interactionTabContext.interactionTabValue === 2 || interactionTabContext.interactionTabValue === 3 ? `${style.common_width} ${ style.overview_wrapper}` : style.overview_wrapper}`}>
        {
          interactionTabContext.interactionTabValue === 2 || interactionTabContext.interactionTabValue === 3 ?
          <>
            <div className={style.grid}>
                <SocialPopupContext>
                  <ProfileCard />
                </SocialPopupContext>
            </div>
            <div className={style.grid}>
                <OpenTicketsCard />
                <CommonReasonCard />
            </div>
            <div className={style.grid}>
                <AccountInfoCard />
                <CurrentSentimentCard />
            </div>
            <div className={style.grid}>
                <TimeLineCard />
            </div>
          </> :
          <>
            <div className={style.grid}>
                <SocialPopupContext>
                  <ProfileCard />
                </SocialPopupContext>
                <OpenTicketsCard />
            </div>
            <div className={style.grid}>
                <AccountInfoCard />
                <CurrentSentimentCard />
                <CommonReasonCard />
            </div>
            <div className={style.grid}>
                <TimeLineCard />
            </div>
          </>
        }
        

    </div>
  )
}

export default OverView
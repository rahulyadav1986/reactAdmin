
import CallBreakDownCard from '../../../components/ui/dashboardLayout/dashboard/callBreakdownCard/CallBreakDownCard'
import LeaderBoard from '../../../components/ui/dashboardLayout/dashboard/leaderBoard/LeaderBoard'
import StatusTypeQueue from '../../../components/ui/dashboardLayout/dashboard/statusTypeQueue/StatusTypeQueue'
import TicketsTable from '../../../components/ui/dashboardLayout/dashboard/ticketsTable/TicketsTable'
import { TopCardData } from '../../../components/ui/dashboardLayout/dashboard/topCards/Data'
import TopCards from '../../../components/ui/dashboardLayout/dashboard/topCards/TopCards'
import DatbaseConfirmationPopup from '../../../components/ui/dashboardLayout/datbaseConfirmationPopup/DatbaseConfirmationPopup'
import DeclineIncomingCall from '../../../components/ui/dashboardLayout/declineIncomingCall/DeclineIncomingCall'
import IncomingCallCard from '../../../components/ui/dashboardLayout/incomingCallCard/IncomingCallCard'
import { DataBaseConnectionContext } from '../../../contexts/dataBaseConnectionContext'
import { IncomingCallContext } from '../../../contexts/incomingCallCardContext'
import { StatusTypeContext } from '../../../contexts/statuTypeContext'
import style from './style.module.scss'
const Dashboard = () => {
  
  return (
    <>
      <div className={style.dashboard_wrapper}>
          <div className={style.team_overview_wrapper}>
            <h2>Your Team Overview</h2>
            <div className={style.card_wrapper}>
              <div className={`${style.top_card_wrapper} top_card_wrapper`}>
                {
                  TopCardData.map((item,i)=>{
                  return (
                    <>
                      <TopCards index={i} item={item} />
                    </>
                  )
                })
              }
              </div>
              <div className={`${style.message_queue_wrapper}`}>
                <StatusTypeContext>
                  <StatusTypeQueue />
                </StatusTypeContext>
              </div>
            </div>
          </div>
          <div className={style.section_area_wrapper}>
              <div className={style.section}>
                <CallBreakDownCard />
              </div>
              <div className={style.section}>
                <LeaderBoard />
              </div>
          </div>
          <div className={style.table_section_area_wrapper}>
            
                <TicketsTable />
            
          </div>
          <IncomingCallContext>
            <IncomingCallCard />
            <DeclineIncomingCall />
          </IncomingCallContext>
          
      </div>
      <DataBaseConnectionContext>
        <DatbaseConfirmationPopup />
      </DataBaseConnectionContext>
      
    </>
   
  )
}

export default Dashboard
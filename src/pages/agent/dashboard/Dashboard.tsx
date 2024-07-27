
import CallBreakDownCard from '../../../components/ui/dashboardLayout/dashboard/callBreakdownCard/CallBreakDownCard'
import ForYou from '../../../components/ui/dashboardLayout/dashboard/forYou/ForYou'
import TicketsTable from '../../../components/ui/dashboardLayout/dashboard/ticketsTable/TicketsTable'
import { TopCardData } from '../../../components/ui/dashboardLayout/dashboard/topCards/Data'
import TopCards from '../../../components/ui/dashboardLayout/dashboard/topCards/TopCards'
import DatbaseConfirmationPopup from '../../../components/ui/dashboardLayout/datbaseConfirmationPopup/DatbaseConfirmationPopup'
import DeclineIncomingCall from '../../../components/ui/dashboardLayout/declineIncomingCall/DeclineIncomingCall'
import IncomingCallCard from '../../../components/ui/dashboardLayout/incomingCallCard/IncomingCallCard'
import { DataBaseConnectionContext } from '../../../contexts/dataBaseConnectionContext'
import { IncomingCallContext } from '../../../contexts/incomingCallCardContext'
import { TableContext } from '../../../contexts/tableContext'
import style from './style.module.scss'
import {createPortal} from "react-dom" 

const Dashboard = () => {
  
  return (
    <>
      <div className={style.dashboard_wrapper}>
          
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
          <div className={style.section_area_wrapper}>
              <div className={style.section}>
              <TableContext>
                  <CallBreakDownCard />
              </TableContext>
              </div>
              <div className={style.section}>
                <ForYou />
              </div>
          </div>
          <div className={style.table_section_area_wrapper}>
            <TableContext>
                <TicketsTable />
            </TableContext>
          </div>
          {
            createPortal(
              <IncomingCallContext>
                <IncomingCallCard />
                <DeclineIncomingCall />
              </IncomingCallContext>,
              document.body
            )
          }
          
      </div>
      <DataBaseConnectionContext>
        <DatbaseConfirmationPopup />
      </DataBaseConnectionContext>
      
    </>
   
  )
}

export default Dashboard
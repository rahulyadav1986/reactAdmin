
import { useContext } from "react"
import TabButtonGroup from "../../dashboard/ticketsTable/tabButtonGroup/TabButtonGroup"
import TablePagination from "../../dashboard/ticketsTable/tablePagination/TablePagination"
import style from "./style.module.scss"
import { ContextTable } from "../../../../../contexts/tableContext"
import { TablePopupContext } from "../../../../../contexts/tablePopupContext"
import TabCallCard from "./tabCallCard/TabCallCard"

import AiRecomendation from "./aiRecomendation/AiRecomendation"
import Notes from "./notes/Notes"
import Ticket from "./ticket/Ticket"
import CallerDetails from "./callerDetails/CallerDetails"
import { CallerDetailsContext } from "../../../../../contexts/callerDetailsTabContext"
import AskSearch from "./callerDetails/AskSearch/AskSearch"
import ChatManagement from "./chatManagement/ChatManagement"
import { MediaManagementContext } from "../../../../../contexts/mediaManagementContext"
import VideoCallManagement from "./videoCallManagement/VideoCallManagement"
import TableDetails from "../../dashboard/ticketsTable/tableDetails/TableDetails"


const InteractionTabContent = () => {
  const interactionTabContext = useContext(ContextTable)
  return (
    <>
        {
            interactionTabContext.interactionTabValue === 0 ? 
            <div className={style.tab_wrapper}>
                <TabButtonGroup />
                <div className={`${style.filter_table_wrap}`}>
                    <TablePopupContext>
                        <TableDetails />
                    </TablePopupContext>
                    <TablePagination />
                </div>
            </div> 
            :
            interactionTabContext.interactionTabValue === 1 ? 
            <div className={style.tab_wrapper}>
                
                <div className={`${style.management_wrapper} d-flex`}>
                    <div className={style.left_wrapper}>
                        <MediaManagementContext>
                            <TabCallCard />
                            <AiRecomendation />
                            <Notes />
                        </MediaManagementContext>
                        
                    </div>
                    <div className={style.right_wrapper}>
                        <div className={style.ticket_main_wrap}>
                            <Ticket />
                        </div>
                        <CallerDetails />
                        <AskSearch />
                    </div>
                </div>
                
            </div> 
            :
            interactionTabContext.interactionTabValue === 2 ?
            <div className={style.tab_wrapper}>
                <div className={`${style.management_wrapper} d-flex`}>
                    <div className={`${style.left_wrapper} ${style.common_width}`}>
                        <MediaManagementContext>
                            <ChatManagement />
                        </MediaManagementContext>
                    </div>
                    <div className={`${style.right_wrapper} ${style.common_width}`}>
                        <div className={style.ticket_main_wrap}>
                            <Ticket />
                        </div>
                        <CallerDetailsContext>
                            <CallerDetails />
                        </CallerDetailsContext>
                        <AskSearch />
                    </div>
                </div>
            </div> 
            :
            <div className={style.tab_wrapper}>
                <div className={`${style.management_wrapper} d-flex`}>
                    <div className={`${style.left_wrapper} ${style.common_width}`}>
                        <MediaManagementContext>
                            <VideoCallManagement />
                        </MediaManagementContext>
                    </div>
                    <div className={`${style.right_wrapper} ${style.common_width}`}>
                        <div className={style.ticket_main_wrap}>
                            <Ticket />
                        </div>
                        
                        <CallerDetailsContext>
                            <CallerDetails />
                        </CallerDetailsContext>
                        <AskSearch />
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default InteractionTabContent
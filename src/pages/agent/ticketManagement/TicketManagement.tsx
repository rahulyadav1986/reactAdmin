import style from'./style.module.scss'
import TicketTab from "../../../components/ui/dashboardLayout/ticketManagement/ticketTab/TicketTab"
import TicketTabContent from '../../../components/ui/dashboardLayout/ticketManagement/ticketTabContent/TicketTabContent'
import { TicketManagementContext } from '../../../contexts/ticketManagementContext'
import DefaultPopup from '../../../components/shared/defaultPopup/DefaultPopup'
import { DefaultPopupContext } from '../../../contexts/defaultPopupContext'
import {createPortal} from "react-dom"
import { SocialPopupContext } from '../../../contexts/socialPopupContext'
const TicketManagement = () => {
  
  return (
    <div className={`${style.ticket_management_wrapper} d-flex`}>
        <TicketManagementContext>
          <TicketTab />
          <SocialPopupContext>
            <TicketTabContent />
          </SocialPopupContext>
        </TicketManagementContext>
        {
          createPortal(
            <DefaultPopupContext>
              <DefaultPopup
                title="You have call back coming up in 5 mins"
                subTitle="Call back request ticket is open and coming up in 5 mins."
                buttonNameOne="Open Ticket"
                buttonNameTwo="Remind me later"
              />
            </DefaultPopupContext>,
            document.body
          )
        }

        
        
    </div>
  )
}

export default TicketManagement
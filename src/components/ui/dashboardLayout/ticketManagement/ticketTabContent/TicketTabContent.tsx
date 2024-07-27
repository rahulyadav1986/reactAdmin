import {useContext} from "react"
import style from './style.module.scss'
import { ContextTicketManagement } from "../../../../../contexts/ticketManagementContext"
import SearchIcon from "/assets/ticketmanagement/search.svg"
import Table from "../../dashboard/ticketsTable/tableDetails/tables/Table"
import TicketTablePop from "./ticketTablePop/TicketTablePop"
import {  TicketTableData } from "../../dashboard/ticketsTable/tableDetails/tables/Data"
import { createPortal } from "react-dom"
import WhatsAppMessage from "../../interactionDashboard/interactionTabContent/whatsAppMessagePopup/WhatsAppMessage"
import { ContextSocialPopup } from "../../../../../contexts/socialPopupContext"

const TicketTabContent = () => {
  const ticketTypeContext = useContext(ContextTicketManagement)
  const socialPopupContext = useContext(ContextSocialPopup)
  return (
    <div className={style.right_side_panel}>
        <div className={`${style.head_area} d-flex align-items-center justify-content-between`}>
            <h2>{ticketTypeContext.ticketType}</h2>
            <div className={style.search_area}>
                <img src={SearchIcon} alt="" />
                <input type="text" className={style.form_control} placeholder="Search" name="" id="" />
            </div>
        </div>
        
        <Table />
        
        {
            TicketTableData.map((item,i)=>{
                return(
                    <>
                        {
                            ticketTypeContext.ticketTablePopUp === item.id ? createPortal(<TicketTablePop key={i} item={item} />, document.body)  : null
                        }
                    </>
                )
            })
        }

        {
            socialPopupContext.whatsAppMessahePop ? createPortal(<WhatsAppMessage />, document.body) : null
        }
        
    </div>
  )
}

export default TicketTabContent
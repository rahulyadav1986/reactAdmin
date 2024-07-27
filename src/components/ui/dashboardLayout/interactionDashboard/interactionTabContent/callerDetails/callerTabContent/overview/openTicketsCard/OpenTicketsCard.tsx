import style from './style.module.scss'

const OpenTicketsCard = () => {
  return (
    <div className={style.open_ticket_card_wrapper}>
        <h2>OPEN TICKETS</h2>
        <ul className={`${style.list}`}>
            <li>Ticket #: <span>894839</span> </li>
            <li>Created: <strong>3 days ago</strong> </li>
            <li>Ticket Details: <br />
            <strong>Customer has requested to reduce the interest rate</strong>  
            </li>
        </ul>
        <div className={style.view_ticket_button}>View Ticket Details</div>
    </div>
  )
}

export default OpenTicketsCard
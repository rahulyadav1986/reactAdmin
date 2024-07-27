import { TicketTableColumn } from './Data'
import style from './style.module.scss'

const TicketTableHead = () => {
  return (
    <thead>
        <tr>
            <td>
                <div className={style.checkbox}>
                    <input type="checkbox" name="thead_check" id="thead_check" />
                    <label htmlFor=""><span></span></label>
                </div>
            </td>
            {
                TicketTableColumn.map((item,i)=>{
                    return(
                        <>
                            <td key={i}>{item.label}</td>
                        </>
                    )
                })
            }
        </tr>
    </thead>
  )
}

export default TicketTableHead
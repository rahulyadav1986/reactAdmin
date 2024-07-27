
import { CommonTableHead } from './TableHeads'
import CommonTableBody from './TableBodies'
import style from "./style.module.scss"
const Table = () => {
  return (
    <>
      <div className={style.table_responsive_wrap}>
        <table className={`${style.ticketTable} ticketTable`}>
            <CommonTableHead />
            <CommonTableBody />
        </table>
      </div>
    </>
    
      
  )
}

export default Table


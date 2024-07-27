
import TableAllPopups from '../../../../../../dashboardLayout/dashboard/ticketsTable/tableDetails/TableAllPopups'
import TablePagination from '../../../../../../dashboardLayout/dashboard/ticketsTable/tablePagination/TablePagination'
import Filter from './Filter'
import Table from './Table'
import style from './style.module.scss'

const SummaryTable = () => {
  return (
    <div className={style.summary_table_wrapper}>
        <Filter />
        <div className={style.responsive_table}>
          <Table />
        </div>        
        <TablePagination />
        <TableAllPopups />
    </div>
  )
}

export default SummaryTable
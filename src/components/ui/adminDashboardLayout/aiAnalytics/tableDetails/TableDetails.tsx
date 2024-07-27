import style from './style.module.scss'
import { TableContext } from '../../../../../contexts/tableContext'
import TabButtonGroup from '../../../dashboardLayout/dashboard/ticketsTable/tabButtonGroup/TabButtonGroup'

import TablePagination from '../../../dashboardLayout/dashboard/ticketsTable/tablePagination/TablePagination'
import Table from '../../../dashboardLayout/dashboard/ticketsTable/tableDetails/tables/Table'


const TableDetails = () => {
  return (
    <TableContext>
      <h1>Interactions</h1>
      <div className={style.table_section_area_wrapper}>
        <div className="table_card_area">
            <TabButtonGroup />
            <div className={`${style.filter_table_wrap}`}>
                <Table />
                <TablePagination />
            </div>
        </div>
      </div>
    </TableContext>
  )
}

export default TableDetails
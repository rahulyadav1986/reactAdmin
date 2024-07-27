import style from './style.module.scss'
import TablePagination from '../../../../../../../dashboardLayout/dashboard/ticketsTable/tablePagination/TablePagination'
import FilterArea from './FilterArea'
import CampaignReportContentTableList from './CampaignReportContentTableList'

const CampaignReportContentTableDetails = () => {
  return (
    <div className={style.table_card_area}>
      <div className={style.campaign_report_area_wrapper}>
          <FilterArea />
          <CampaignReportContentTableList />
          <TablePagination />
      </div>
    </div>
    
  )
}

export default CampaignReportContentTableDetails
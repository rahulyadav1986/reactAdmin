import { ReportContext } from '../../../../contexts/reportContext'
import CustomerReports from './CustomerReports'
import ReportContent from './reportContent/ReportContent'
import ReportSidebar from './reportSidebar/ReportSidebar'
import style from './style.module.scss'

const ReportDashboard = () => {
  return (
    <>    
      <div className={`${style.report_dashboard_area_wrapper} d-flex`}>
        <ReportContext>
          <ReportSidebar />
          <ReportContent />
          <CustomerReports />
        </ReportContext>
      </div>
    </>
  )
}

export default ReportDashboard
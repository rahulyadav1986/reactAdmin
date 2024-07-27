import { HeaderContext } from '../../../contexts/headerContext'
import { SuperAdminDashboardContext } from '../../../contexts/superAdminContext'
import ScrollToTop from '../../../router/ScrollToTop'
import MainWrapper from './MainWrapper'

const SuperAdminDashboardLayout = () => {
    
  return (
    <>
      <ScrollToTop />
      <HeaderContext>
        <SuperAdminDashboardContext>
          <MainWrapper />
        </SuperAdminDashboardContext>
      </HeaderContext>
    </>
  )
}

export default SuperAdminDashboardLayout
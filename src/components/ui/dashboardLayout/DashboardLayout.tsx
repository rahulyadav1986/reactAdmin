import style from './style.module.scss'
import DashboardHeader from "./dashboardHeader/DashboardHeader"
import DashboardSideBar from './dashboardSidebar/DashboardSideBar'

import DashboardSkeleton from './dashboardSkeleton/DashboardSkeleton'
import GoodMorningPop from './goodMorningPop/GoodMorningPop'
import { useState } from 'react'
import { HeaderContext } from '../../../contexts/headerContext'
import {createPortal} from "react-dom"
import { TableContext } from '../../../contexts/tableContext'
import ScrollToTop from '../../../router/ScrollToTop'
import MainWrapper from './MainWrapper'
// import { GlobalChatContext } from '../../../contexts/globalChatContext'
const DashboardLayout = () => {
  
  const [goodMorning, setGoodMorning] = useState(true)
  const [dashboard , setDashboard] = useState(false)
  const handleLoader = ()=>{
    setGoodMorning(false)
    setDashboard(true)
  }
  return (
    <> 
        <ScrollToTop />  
        <TableContext>
          <HeaderContext>
            <div className={style.dashboard_wrapper}>                
                  <DashboardHeader />
                  {
                    goodMorning &&
                    createPortal(
                      <>
                        <DashboardSkeleton />
                        <GoodMorningPop handleLoader={handleLoader} />
                      </>,
                      document.body
                    )
                  }
                
                <div className={`${style.side_bar_panel_wrapper} d-flex justify-content-center`}>
                    <DashboardSideBar key="dashboard Sidebar" />
                </div>
                <MainWrapper dashboard={dashboard} />
            </div>
          </HeaderContext>
        </TableContext>   

        
    </>
  )
}

export default DashboardLayout
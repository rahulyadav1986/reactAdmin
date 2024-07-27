import { useState } from 'react'
import useOutside from '../../../../../hooks/useOutside'
import OnBoardingTrendChart from './OnBoardingTrendChart'
import style from './style.module.scss'
import VerticalDotsIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import DownArrowIcon from "/assets/dashboard/main_dashboard/superAdmin/downArrow.svg"
import ActiveUserByCompanyChart from './ActiveUserByCompanyChart'
import RecentActivity from './RecentActivity'
const ChartCards = () => {
  const [onboardingTrendDrop, setOnboardingTrendDrop, refOnboardingTrendDrop] = useOutside(false)
  const [onboardingTrendvalue, setOnboardingTrendValue] = useState<any>("This Month")
  const handleOnBoardingTrendValue = (e:any)=>{
    setOnboardingTrendValue(e.target.textContent)
    setOnboardingTrendDrop(false)
  }

  const [activeUserDrop, setActiveUserDrop, refActiveUserDrop] = useOutside(false)
  const [activeUservalue, setActiveUserValue] = useState<any>("This Month")
  const handleActiveUserValue = (e:any)=>{
    setActiveUserValue(e.target.textContent)
    setActiveUserDrop(false)
  }
  return (
    <div className={style.chart_cards_wrapper}>
        <div className={style.card}>
            <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                <h2>Onboarding Trend</h2>
                <div className={`${style.right} d-flex align-items-center`}>
                    <div className={style.drop_down_button} ref={refOnboardingTrendDrop}>
                        <div className={`${style.drop_area} d-flex align-items-center justify-content-between`} onClick={()=>setOnboardingTrendDrop(!onboardingTrendDrop)}>
                            <span>{onboardingTrendvalue}</span>
                            <span><img src={DownArrowIcon} alt="" /></span>
                        </div>
                        {
                            onboardingTrendDrop && 
                            <ul className={style.drop_wrapper}>
                                <li onClick={handleOnBoardingTrendValue}>This Month</li>
                                <li onClick={handleOnBoardingTrendValue}>This Year</li>
                            </ul>
                        }
                        
                    </div>
                    <span><img src={VerticalDotsIcon} alt="" /></span>
                </div>
                
            </div> 
            <OnBoardingTrendChart onboardingTrendvalue={onboardingTrendvalue} />
        </div>
        <div className={style.card}>
            <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                <h2>Active Users by company</h2>
                <div className={`${style.right} d-flex align-items-center`}>
                    <div className={style.drop_down_button} ref={refActiveUserDrop}>
                        <div className={`${style.drop_area} d-flex align-items-center justify-content-between`} onClick={()=>setActiveUserDrop(!onboardingTrendDrop)}>
                            <span>{activeUservalue}</span>
                            <span><img src={DownArrowIcon} alt="" /></span>
                        </div>
                        {
                            activeUserDrop && 
                            <ul className={style.drop_wrapper}>
                                <li onClick={handleActiveUserValue}>This Month</li>
                                <li onClick={handleActiveUserValue}>This Year</li>
                            </ul>
                        }
                        
                    </div>
                    <span><img src={VerticalDotsIcon} alt="" /></span>
                </div>
                
            </div> 
            <ActiveUserByCompanyChart activeUservalue={activeUservalue} />
        </div>
        <div className={style.card}>
            <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                <h2>Recent Activity</h2>
                <span><img src={VerticalDotsIcon} alt="" /></span>
            </div>
            <RecentActivity />
        </div>
    </div>
  )
}

export default ChartCards
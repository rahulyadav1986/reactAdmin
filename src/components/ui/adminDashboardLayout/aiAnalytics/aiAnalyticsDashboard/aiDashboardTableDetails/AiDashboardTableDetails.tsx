

import { AiAnalyticsContext } from '../../../../../../contexts/aiAnalyticsContext'
import style from './style.module.scss'
import TabButton from './tabButton/TabButton'
import TabContent from './tabContent/TabContent'
import FilterIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import NotesIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/notes.svg"
import ShareIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/share.svg"
const AiDashboardTableDetails = () => {
  return (
    <AiAnalyticsContext>
        <div className={`${style.ai_analytics_dashboard_table_details_wrapper} `}>
            <div className={`${style.header_wrapper} d-flex align-items-center justify-content-between`}>
                <div className={style.left}>
                    <ul className={style.bedcrumb}>
                        <li className={style.main}>Interactions</li>
                        <li>Preetam Kumar</li>
                    </ul>
                </div>
                <div className={style.filter_area}>
                    <div className={`${style.filter_button_area} d-flex align-items-center`}>
                        <div className={`${style.filter_button} ${style.notes} d-flex align-items-center`}>
                            <span><img src={NotesIcon} alt="" /></span>
                            <span>Notes</span> 
                        </div>
                        <div className={`${style.filter_button} d-flex align-items-center`}>
                            <span>Follow Up Action</span> 
                            <span><img src={FilterIcon} alt="" /></span>
                        </div>
                        <span><img src={ShareIcon} alt="" /></span>
                    </div>
                        
                </div>
            </div>
            <TabButton />
            <TabContent />
        </div>
    </AiAnalyticsContext>
  )
}

export default AiDashboardTableDetails
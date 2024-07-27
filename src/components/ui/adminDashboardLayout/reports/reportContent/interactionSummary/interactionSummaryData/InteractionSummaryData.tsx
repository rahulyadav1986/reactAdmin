import { useContext } from 'react'
import { ContextReport } from '../../../../../../../contexts/reportContext'
import style from './style.module.scss'
import BlankData from "/assets/dashboard/main_dashboard/admin/reports/blank_data.svg"
import CurveArrow from "/assets/dashboard/main_dashboard/admin/reports/curveArrow.svg"
import InteractionSummaryTab from './interactionSummaryTab/InteractionSummaryTab'
import InteractionSummaryContent from './interactionSummaryContent/InteractionSummaryContent'
const InteractionSummaryData = () => {
  const contextFilterReport = useContext(ContextReport)
  return (
    <div className={style.summaryData_wrapper}>
        
        {
            contextFilterReport.summaryDataView ? 
            <div className={style.deta_area}>
              <InteractionSummaryTab />
              <InteractionSummaryContent />
            </div> :
            <div className={`${style.no_data_area} d-flex align-items-center flex-column justify-content-center`}>
                <div className={`${style.arrow_indicator} d-flex align-items-center`}>
                   <span><img src={CurveArrow} alt="" /></span>
                   <span>Select the filters to see the report </span>
                </div>
                <video src="https://s3-figma-videos-production-sig.figma.com/video/1198114522928752061/TEAM/7a1c/5758/-66ac-42bc-b709-0148af73e800?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0c42O9cCA9OpG75qw5EDWpfmt0DqGDbixg37WzyR5vSn~M67xcNWW~wlgKk98xmbEpRSfW91Mzc-xqSV1RaKLoF71L3SLyW1oNLxVXZI8u3lMEkerxZDPjyAOX50cmWnfGhpeCyIXldp8EA6BbQOMS8iILb~9XnQCqGPP3a9yR~wzODyk2gXhVgwhz0SgB2sfU6JCEIaLhu5KZIpUdsNtVp33x1KxgkYpDjUswqDwc0O9brtbjA96EbEjWKqUCWfwjjB5zqGj9yG77x5CH0p5UVC6IxbdD-f1UJEZM-q6gFLE3UtYScRpwKAQjWc39OTgobCbbqUbJslzEt9HFoow__" autoPlay={true} loop={true} data-object-fit="cover"></video>
                <img src={BlankData} alt="" />
            </div>
        }
        
        
    </div>
  )
}

export default InteractionSummaryData
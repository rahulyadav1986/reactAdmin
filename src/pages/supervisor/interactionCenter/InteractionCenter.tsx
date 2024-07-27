import style from "./style.module.scss"
import InteractionTab from "../../../components/ui/dashboardLayout/interactionDashboard/inreractionTab/InteractionTab"


import InteractionTabContent from "../../../components/ui/dashboardLayout/interactionDashboard/interactionTabContent/InteractionTabContent"


const InteractionCenter = () => {
  return (
      
        <div className={style.interection_center_wrapper}>
            <InteractionTab />
            <InteractionTabContent />
        </div>
      
  )
}

export default InteractionCenter
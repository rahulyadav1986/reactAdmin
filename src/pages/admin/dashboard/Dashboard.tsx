

import ActivityDetails from "../../../components/ui/adminDashboardLayout/dashboard/activityDetails/ActivityDetails"
import Advertisement from "../../../components/ui/adminDashboardLayout/dashboard/advertisement/Advertisement"
import OptionsCard from "../../../components/ui/adminDashboardLayout/dashboard/optionCards/OptionsCard"
import Search from "../../../components/ui/adminDashboardLayout/dashboard/search/Search"
import UserDetails from "../../../components/ui/adminDashboardLayout/dashboard/userDetails/UserDetails"
import WorkflowStepPop from "../../../components/ui/adminDashboardLayout/dashboard/workflowStepPop/WorkflowStepPop"
import { AdminDashboardContext } from "../../../contexts/adminDashboardContext"


import style from "./style.module.scss" 

const Dashboard = () => {
  return (
    <div className={style.dahboard_wrapper}>
      <AdminDashboardContext>
        <Search />
        <Advertisement />
        <UserDetails />
        <div className={style.dashboard_main_wrap}>
          <OptionsCard />
          <ActivityDetails />
        </div>
        <WorkflowStepPop />
      </AdminDashboardContext>
    </div>
  )
}

export default Dashboard
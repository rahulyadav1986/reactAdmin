import {useContext} from "react"
import ActionIcons from './actionIcons/ActionIcons'
// import AnythingSearch from './anythingSearch/AnythingSearch'
import Availability from './availability/Availability'
import Logos from './logos/Logos'
import Profile from './profile/Profile'
import HamburgerIcon from "/assets/dashboard/side_panel/hamburger.svg"
import CloseIcon from "/assets/dashboard/side_panel/close.svg"
// import SearchIcon from "/assets/dashboard/side_panel/search.svg"
import StatusCallIcon from "/assets/dashboard/statusCall.svg"
import StatusDBIcon from "/assets/dashboard/statusDB.svg"
import ConnectedIcon from "/assets/dashboard/connected.svg"
import DisConnectedIcon from "/assets/dashboard/disconnected.svg"
import style from './style.module.scss'
import { ContextHeader } from "../../../../contexts/headerContext"

const DashboardHeader = () => {
  // const searchToggleContent = useContext(ContextHeader)
  const hamburgerToggleContent = useContext(ContextHeader)
  const defaultHeaderContext = useContext(ContextHeader)
  return ( 
        <div className={`${style.header_wrapper} d-flex align-items-center justify-content-between`}>
          {
            defaultHeaderContext.statusDrop || defaultHeaderContext.callToggle || defaultHeaderContext.profileDrop || defaultHeaderContext.selectCampaignDrop ? <div className={style.overlay} onClick={defaultHeaderContext.handleDefaultOverlay}></div> : null
          }
          
          <div className={`${style.left_side_wrapper} d-flex align-items-center`} onClick={defaultHeaderContext.handleDefaultOverlay}>
            <Logos />
            {/* <div className={!searchToggleContent.searchToggle ? style.search_mobile_wrapper : `${style.search_mobile_wrapper} ${style.active}`}>
              <AnythingSearch />
            </div> */}
          </div>
          <div className={`${style.right_side_wrapper} d-flex align-items-center`} >
            <div className={`${ !hamburgerToggleContent.hamToggle ? style.mobile_wrap_action_avail : `${style.mobile_wrap_action_avail} ${style.active}`} d-flex align-items-center`}>
              <ul className={`${style.server_status_wrapper} d-flex align-items-center`} onClick={defaultHeaderContext.handleDefaultOverlay}>
                  <li className={style.connected}><img src={StatusCallIcon} alt="" /> Telephony <div className={style.status}><span><img src={ConnectedIcon} alt="" /></span></div> </li>
                  <li className={style.disConnected}><img src={StatusDBIcon} alt="" /> DB <div className={style.status}><span><img src={DisConnectedIcon} alt="" /></span></div></li>
                  <li className={style.connected}><img src={StatusDBIcon} alt="" /> App <div className={style.status}><span><img src={ConnectedIcon} alt="" /></span> </div> </li>
              </ul>
              <Availability />
            </div>
            {/* <div className={`${ !hamburgerToggleContent.hamToggle ? style.mobile_wrap_action_avail : `${style.mobile_wrap_action_avail} ${style.active}`} d-flex align-items-center`}>
              <Availability />
              <ActionIcons />
            </div> */}
           
            <ActionIcons />
            <Profile />
            {/* <div className={style.search_icon_wrapper} onClick={searchToggleContent.handleSearchToggle}>
              <img src={SearchIcon} alt="" />
            </div> */}
            <div className={style.hamburger_icon_wrapper} onClick={hamburgerToggleContent.handleHamburgerToggle}>
              {
                !hamburgerToggleContent.hamToggle ? <img src={HamburgerIcon} alt="" /> : <img src={CloseIcon} alt="" />
              }
            </div>
          </div>
      </div>
  )
}

export default DashboardHeader
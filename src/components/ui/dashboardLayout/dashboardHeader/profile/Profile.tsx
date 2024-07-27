import {useContext} from "react"
import style from './style.module.scss'
import AgentProfileAvatar from '../../../../../../public/assets/dashboard/head_avatar.png'
import SupervisorProfileAvatar from '../../../../../../public/assets/dashboard/sup_head_avatar.png'
import AdminProfileAvatar from '/assets/dashboard/main_dashboard/admin/adminAvatar.png'
import SuperAdminProfileAvatar from '/assets/dashboard/main_dashboard/admin/superAdminAvatar.png'
import DownArrowIcon from '../../../../../../public/assets/dashboard/down.svg'
import ProfilePop from './profilePop/ProfilePop'
import { ContextHeader } from "../../../../../contexts/headerContext"
import { useLocation } from "react-router-dom"
import useOutside from "../../../../../hooks/useOutside"




const Profile = () => {
  const location = useLocation()
  const currentAgentLocation = location.pathname.indexOf('/agent')>=0
  const currentSupervisorLocation = location.pathname.indexOf('/supervisor')>=0
  const currentAdminLocation = location.pathname.indexOf('/admin')>=0
  const currentSuperAdminLocation = location.pathname.indexOf('/super-admin')>=0
  const currentResellerAdminLocation = location.pathname.indexOf('/reseller-admin')>=0
  const profileToggleContext = useContext(ContextHeader)
  const [dropProfile, setDropProfile, refDropProfile] = useOutside(false)
  return (
    <div className={`${style.profile_area_wrapper } ${currentAgentLocation || currentSupervisorLocation ? null : style.profile_admin} d-flex align-items-center justify-content-end`} ref={refDropProfile}>
        <div className={style.label_area} onClick={currentAdminLocation || currentSuperAdminLocation || currentResellerAdminLocation ? ()=>setDropProfile(!dropProfile) : profileToggleContext.handleProfilePopToggle}  >
          <span className={style.highlight}>
            {
              currentAgentLocation ? 'Soham' : 
              currentSupervisorLocation ? 'Kalyani' : 
              currentAdminLocation ? 'John Doe' : 
              currentSuperAdminLocation ? 'Priya Kavitha Nr' : 
              currentResellerAdminLocation ? 'Super Dad' : null 
            }
          </span> <br />
          {
            currentAgentLocation ? 'Call Centre Agent' : 
            currentSupervisorLocation ? 'Supervisor' : 
            currentAdminLocation ? 'Administrator' : 
            currentSuperAdminLocation ? 'Super Admin' : 
            currentResellerAdminLocation ? 'Reseller Admin' : null
          }
        </div>
        {/* <div className={style.label_area} onClick={()=>setDropProfile(!dropProfile)}>
          <span className={style.highlight}>{currentAgentLocation ? 'Soham' : currentSupervisorLocation ? 'Kalyani' : 'John Doe'}</span> <br />
          {currentAgentLocation ? 'Call Centre Agent' : currentSupervisorLocation ? 'Supervisor' : 'Administrator'}
        </div> */}
        
        {
          currentAdminLocation || currentSuperAdminLocation || currentResellerAdminLocation ? 
          <>
            <div onClick={()=>setDropProfile(!dropProfile)}><img src={`${currentAgentLocation ? AgentProfileAvatar : currentSupervisorLocation ? SupervisorProfileAvatar : currentAdminLocation ? AdminProfileAvatar : currentSuperAdminLocation || currentResellerAdminLocation ? SuperAdminProfileAvatar : null}`} alt=""  className={style.avatar} /></div>
            <div onClick={()=>setDropProfile(!dropProfile)} className={`${style.down_arrow_icon} ${dropProfile ? style.active : ""}`}><img src={DownArrowIcon} alt="" /></div>
          </> : 
          <>
            <div onClick={profileToggleContext.handleProfilePopToggle}><img src={currentAgentLocation ? AgentProfileAvatar : currentSupervisorLocation ? SupervisorProfileAvatar : AdminProfileAvatar} alt=""  className={style.avatar} /></div>
            <div onClick={profileToggleContext.handleProfilePopToggle} className={`${style.down_arrow_icon} ${profileToggleContext.profileDrop ? style.active : ""}`}><img src={DownArrowIcon} alt="" /></div>
          </>
        }
        {/* <div onClick={()=>setDropProfile(!dropProfile)}><img src={currentAgentLocation ? AgentProfileAvatar : currentSupervisorLocation ? SupervisorProfileAvatar : AdminProfileAvatar} alt=""  className={style.avatar} /></div>
        <div onClick={()=>setDropProfile(!dropProfile)} className={`${style.down_arrow_icon} ${dropProfile ? style.active : ""}`}><img src={DownArrowIcon} alt="" /></div> */}
        {/* <div onClick={toggleProfilePop}><img src={currentAgentLocation ? AgentProfileAvatar : currentSupervisorLocation ? SupervisorProfileAvatar : AdminProfileAvatar} alt=""  className={style.avatar} /></div>
        <div onClick={toggleProfilePop} className={`${style.down_arrow_icon} ${profilePop ? style.active : ""}`}><img src={DownArrowIcon} alt="" /></div> */}
        {
          currentAdminLocation || currentSuperAdminLocation || currentResellerAdminLocation ? 
          <>
            {dropProfile && <ProfilePop setDropProfile={setDropProfile} />}
          </> : 
          <>
            {
              profileToggleContext.profileDrop && <ProfilePop toggleProfilePop={profileToggleContext.handleProfilePopToggle} />
            }
          </>
        }
        
        {/* {
          dropProfile && <ProfilePop setDropProfile={setDropProfile} />
        } */}
        {/* {
          profilePop && <ProfilePop toggleProfilePop={toggleProfilePop} />
        } */}
        
    </div>
  )
}

export default Profile
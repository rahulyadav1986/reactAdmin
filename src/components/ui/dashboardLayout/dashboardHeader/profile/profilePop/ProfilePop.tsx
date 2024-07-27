
import { NavLink, useLocation } from 'react-router-dom'
import style from './style.module.scss'
import Logout from '/assets/dashboard/profile-pop/log-out.svg'
import { ProfilePopData, SuperAdminProfilePopData } from './Data'

const ProfilePop = ({setDropProfile}:any) => {
    const location = useLocation()    
    const AgentLocation = location.pathname.indexOf('/agent')>=0
    const SupervisorLocation = location.pathname.indexOf('/supervisor')>=0
    const AdminLocation = location.pathname.indexOf('/admin')>=0
    const SuperAdminLocation = location.pathname.indexOf('/super-admin')>=0
    const ResellerAdminLocation = location.pathname.indexOf('/reseller-admin')>=0
  return (
    <div className={style.profile_pop_wrapper} >
         <div className={style.highlight_wrapper}>
            {
                AgentLocation ? <><span className={style.highlight}>Soham 2</span> <br />Call Centre Agent</> :
                SupervisorLocation ? <><span className={style.highlight}>Kalyani</span> <br />Supervisor</> :
                AdminLocation ? <><span className={style.highlight}>John Doe</span> <br />Administrator</> :
                SuperAdminLocation ? <><span className={style.highlight}>Priya Kavitha Nr</span> <br />Super Admin</> : 
                ResellerAdminLocation ? <><span className={style.highlight}>Super Dad</span> <br />Reseller Admin</> : null
            }            
        </div>
        
        {
            SuperAdminLocation || ResellerAdminLocation ? 
            <div className={style.section}>
                <ul>    
                {
                    SuperAdminProfilePopData.map((item,i)=>{
                        return(
                            <li key={i} onClick={()=>setDropProfile(false)}>
                                <NavLink to={item.link}>
                                    <span><img src={item.icon} alt="" /></span>
                                    {item.label}
                                </NavLink>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            :
            ProfilePopData.map((item,i)=>{
                return(
                    <div className={style.section}>
                        <ul key={i}>                           
                            {
                                item.section.map((subItem,i)=>{
                                    return(
                                        <li key={i} onClick={()=>setDropProfile(false)}>
                                            <NavLink to={subItem.link}>
                                                <span><img src={subItem.icon} alt="" /></span>
                                                {subItem.label}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
            
        
        <div className={style.section}>
            <ul>
                <li>
                    <NavLink to={`${AgentLocation ? '/agent/signin' : SupervisorLocation ? '/supervisor/signin' : AdminLocation ? '/admin/signin' : SuperAdminLocation ? '/super-admin/signin' : ResellerAdminLocation ? '/reseller-admin/signin' :  null }`}>
                        <span><img src={Logout} alt="" /></span>
                        Log out
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProfilePop
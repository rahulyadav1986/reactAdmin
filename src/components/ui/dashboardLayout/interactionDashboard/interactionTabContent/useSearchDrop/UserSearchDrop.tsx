import { useContext } from 'react'
import UserList from './UserList'
import style from './style.module.scss'
import SearchIcon from "/assets/interactionCenter/search.svg"
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'

const UserSearchDrop = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <div className={style.user_search_area_wrapper}>
        <h3>Agent or Supervisor</h3>
        <div className={style.search_area} >
            <input type="text" className={style.form_control} placeholder='Select or type agent or supervisor name' name="" id="" onClick={()=>mediaHandleContext.handleUserDrop(true)} />
            <span><img src={SearchIcon} className={style.search_icon} alt="" /></span>
            {
                mediaHandleContext.userDrop === true ?  <UserList /> : null
            }
        </div>
    </div>
  )
}

export default UserSearchDrop
import style from './style.module.scss'
import { UserDataList } from './Data'
import { useContext } from 'react'
import { ContextMediaManagement } from '../../../../../../contexts/mediaManagementContext'
const UserList = () => {
  const mediaHandleContext = useContext(ContextMediaManagement)
  return (
    <ul className={style.search_list_wrap}>
        {
            UserDataList.map((item,i)=>{
                return(
                    <li key={i} className={`d-flex align-items-center justify-content-between`} onClick={()=>mediaHandleContext.handleUserDrop(false)}>
                        <div className={`${style.name_area} d-flex align-items-center`}>
                            <img src={item.avatar} alt="" />
                            <span>{item.name}</span>
                        </div>
                        <span className={`${style.role}`}>{item.role}</span>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default UserList
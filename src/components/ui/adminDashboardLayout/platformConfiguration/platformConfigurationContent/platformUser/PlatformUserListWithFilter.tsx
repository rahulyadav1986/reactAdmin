import { useContext } from 'react'
import style from './style.module.scss'
import { ContextPlatformConfiguration } from '../../../../../../contexts/platformConfigurationContext'
import SearchIcon from "/assets/dashboard/main_dashboard/admin/platformConfiguration/user/search.svg"
import FilterIcon from "/assets/dashboard/main_dashboard/admin/interactionCenter/filterIcon.svg"
import EditIcon from "/assets/dashboard/main_dashboard/admin/\platformConfiguration/user/pencil.svg"
import MoreIcon from "/assets/dashboard/main_dashboard/admin/\platformConfiguration/user/more.svg"
import { TableColumn, TableData } from './Data'
import TablePagination from '../../../../dashboardLayout/dashboard/ticketsTable/tablePagination/TablePagination'

const PlatformUserListWithFilter = () => {
  const platFormConfig = useContext(ContextPlatformConfiguration)
  return (
    <div className={style.table_wrapper_area}>
        <div className={`${style.filter_area_wrapper} d-flex align-items-center justify-content-between`}>
            <div className={`${style.left} d-flex align-items-center`}>
            <ul className={`${style.filter_tab} d-flex`}>
                <li className={`${platFormConfig.platFormUserTab === 0 ? style.active : null}`} onClick={()=>platFormConfig.handlePlatFormUserTab(0)}>All</li>
                <li className={`${platFormConfig.platFormUserTab === 1 ? style.active : null}`} onClick={()=>platFormConfig.handlePlatFormUserTab(1)}>Active Users</li>
                <li className={`${platFormConfig.platFormUserTab === 2 ? style.active : null}`} onClick={()=>platFormConfig.handlePlatFormUserTab(2)}>Deactivated</li>
            </ul>
            <div className={style.search_area}>
                <img src={SearchIcon} alt="" />
                <input type="text" name="" id="" placeholder='Search users' />
            </div>
            </div>
            <div className={`${style.right} d-flex align-items-center`}>
            <div className={`${style.filter_button} d-flex align-items-center`}>
                <span><img src={FilterIcon} alt="" /></span>
                <span>Filters</span>
            </div>
            <div className={`${style.import_button} d-flex align-items-center justify-content-center`}>Import</div>
            <div className={`${style.add_button} d-flex align-items-center justify-content-center`} onClick={()=>platFormConfig.handleRecentAddUserList(true)}>Add User</div>
            </div>
        </div>
        <div className={style.responsive_container}>
            <table className={`${style.ticketTable2}`}>
            <thead>
                <tr>
                    <th>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="thead_check" id="thead_check" />
                            <label htmlFor=""><span></span></label>
                        </div>
                    </th>
                    {
                    TableColumn.map((item)=>{
                        return(
                        <th>{item.label}</th>
                        )
                    })
                    }
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    TableData.map((item)=>{
                    return(
                        <tr>
                        <td>
                            <div className={style.checkbox}>
                                <input type="checkbox" name="thead_check" id={item.id} />
                                <label htmlFor={item.id}><span></span></label>
                            </div>
                        </td>
                        
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`} >
                                <span><img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/user/${item.user.avatar}`} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.user.name}</span>
                                    <span className={style.phone}>{item.user.contactValue}</span>
                                </span>
                            </div>
                        </td>
                        <td>{item.role}</td>
                        <td>{item.email}</td>
                        <td>
                            <div className={`${style.profile_wrap} d-flex align-items-center`}>
                                <span><img src={`/assets/dashboard/main_dashboard/admin/platformConfiguration/user/${item.reportingManager.avatar}`} alt="" /></span> 
                                <span className='d-flex flex-column'>
                                    <span className={style.name}>{item.reportingManager.name}</span>
                                    <span className={style.phone}>{item.reportingManager.contactValue}</span>
                                </span>
                            </div>
                        </td>
                        <td>{item.lastLogin}</td>
                        <td>{item.user.type}</td>
                        <td>{item.preveleges}</td>
                        <td>
                            <ul className={`${style.action_icons} d-flex align-itesm-center`}>
                            <li><img src={EditIcon} alt="" /></li>
                            <li><img src={MoreIcon} alt="" /></li>
                            </ul>
                        </td>
                        </tr>
                    )
                    })
                }
                
            </tbody>
            </table>
        </div>
        <TablePagination />
    </div>
  )
}

export default PlatformUserListWithFilter
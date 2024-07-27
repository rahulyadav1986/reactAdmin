import style from "./style.module.scss"
import FilterIcon from "/assets/dashboard/main_dashboard/superAdmin/filter.svg"
import SortIcon from "/assets/dashboard/main_dashboard/superAdmin/sort.svg"
import LockIcon from "/assets/dashboard/main_dashboard/superAdmin/lock.svg"
import EditIcon from "/assets/dashboard/main_dashboard/superAdmin/edit.svg"
import DeleteIcon from "/assets/dashboard/main_dashboard/superAdmin/delete.svg"
import RecentActivity from "../superDashboard/chartCards/RecentActivity"
import VerticalDotsIcon from "/assets/dashboard/main_dashboard/admin/insights/vertical.svg"
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png";

const OpenLockIcon = "/assets/dashboard/main_dashboard/superAdmin/lock-open.svg";

import { useContext, useEffect, useState } from "react"
import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext"
const RightDetails = ({ item, type }: any) => {
    const { handleAddMainUser, selectUsersByCompanyId, deleteUserById, handleEditUserDetails, suspendUser, addUserfromList, companyListLS,toggleSuspendCompany,editUserFromList,deleteCompanyLS } = useContext(ContextSuperAdminDashboard)
    var companyUsers: any[] = [];
    if (type == 'company') {
        companyUsers = selectUsersByCompanyId(item.id)
    }

    const [resellerCompanyList, setResellerCompanyList] = useState(companyListLS.filter((el) => el.underReseller == item.id));
    useEffect(() => {
        setResellerCompanyList(companyListLS.filter((el) => el.underReseller == item.id));
    }, [companyListLS]);

    return (
        <div className={style.right_details}>
            <div className={style.user_list}>
                <div className={`${style.header} d-flex align-items-center justify-content-between`}>
                    <h2>{type === 'reseller' ? 'Companies' : "Users"}</h2>
                    <div
                        className={`${style.button} d-flex align-items-center justify-content-center`}
                        onClick={type === 'reseller' ? () => { addUserfromList('company', item.id) } : () => handleAddMainUser('company')}
                    >Add {(type == 'company') ? 'User' : 'Company'}</div>
                </div>
                <div className={`${style.table_details_area}`}>
                    <div className={style.table_responsive}>
                        <table>
                            {
                                type === 'reseller' ?
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className={style.checkbox}>
                                                    <input type="checkbox" name="thead_check" id="thead_check" />
                                                    <label htmlFor=""><span></span></label>
                                                </div>
                                            </th>
                                            <th></th>
                                            <th>COMPANY NAME</th>
                                            <th>COMPANY LIMIT</th>
                                            <th>USED CUSTOMERS LIMIT</th>
                                            <th>ADDRESS</th>
                                            <th>EMAIL</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    :
                                    <thead>
                                        <tr>
                                            <th style={{ 'width': '300px' }}>
                                                <span className="d-flex align-items-center">USER NAME <span className={style.filter}><img src={FilterIcon} alt="" /></span> </span>
                                            </th>
                                            <th>
                                                <span className="d-flex align-items-center">TYPE <span className={style.filter}><img src={FilterIcon} alt="" /></span>  <span className={style.sort}><img src={SortIcon} alt="" /></span></span>
                                            </th>
                                            <th style={{ 'width': '230px' }}>
                                                <span className="d-flex align-items-center">FULL NAME <span className={style.filter}><img src={FilterIcon} alt="" /></span>  <span className={style.sort}><img src={SortIcon} alt="" /></span></span>
                                            </th>
                                            <th colSpan={2}>
                                                <span className="d-flex align-items-center">EMAIL <span className={style.filter}><img src={FilterIcon} alt="" /></span>  <span className={style.sort}><img src={SortIcon} alt="" /></span></span>
                                            </th>
                                        </tr>
                                    </thead>
                            }
                            {
                                type === 'reseller' ?
                                    <tbody>
                                        {
                                            resellerCompanyList != undefined && resellerCompanyList.length > 0 ?
                                                resellerCompanyList.map((user: any, i: any) => {
                                                    return (
                                                        <tr key={i} className={`${user.isSuspended ? style.strike : ''}`}>
                                                            <td>
                                                                <div className={style.checkbox}>
                                                                    <input type="checkbox" name="thead_check" id={user.id} />
                                                                    <label htmlFor={user.id}><span></span></label>
                                                                </div>
                                                            </td>
                                                            <td><img className={style.profile} src={`/assets/dashboard/main_dashboard/superAdmin/${user.url}`} alt="" /><img
                                                                className={style.profile}
                                                                src={
                                                                    user.imageBase64 != ""
                                                                        ? user.imageBase64
                                                                        : UserFormAvatar
                                                                }
                                                                alt=""
                                                            /></td>
                                                            <td>
                                                                {user.companyName}
                                                            </td>
                                                            <td>{user.maxUserLimit}</td>
                                                            <td>0</td>
                                                            <td>{user.address}</td>
                                                            <td>{user.contactPersonEmail}</td>
                                                            <td>
                                                                <div
                                                                    className={`${style.action_icon} d-flex align-items-center`}
                                                                >
                                                                    <span onClick={() => toggleSuspendCompany(user.id)}>
                                                                        {
                                                                            user.isSuspended ? <img src={OpenLockIcon} alt="" /> : <img src={LockIcon} alt="" />
                                                                        }

                                                                    </span>
                                                                    {
                                                                        user.isSuspended ? null :
                                                                            <span onClick={() => editUserFromList("company", user)}>
                                                                                <img src={EditIcon} alt="" />
                                                                            </span>
                                                                    }

                                                                    <span onClick={() => deleteCompanyLS([user.id])}>
                                                                        <img src={DeleteIcon} alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }) :
                                                <tr>
                                                    <td colSpan={7}>No Companies Found</td>
                                                </tr>
                                        }
                                    </tbody>
                                    :
                                    <tbody>
                                        {
                                            companyUsers.length > 0 ?
                                                companyUsers.map((user, i) => {
                                                    return (
                                                        <tr key={i} className={`${user.isSuspended ? style.strike : ''}`}>
                                                            <td><span className={style.company}>{user.username}</span></td>
                                                            <td><span className={style.tag}>{user.userType}</span></td>
                                                            <td>{user.firstName} {user.lastName}</td>
                                                            <td>{user.email}</td>
                                                            <td>
                                                                <div className={`${style.action_icon} d-flex align-items-center`}>
                                                                    <span>
                                                                        <img src={user.isSuspended ? OpenLockIcon : LockIcon} alt="" onClick={() => suspendUser(user.id)} />
                                                                    </span>
                                                                    {
                                                                        !user.isSuspended ?
                                                                            <span>
                                                                                <img src={EditIcon} alt="" onClick={() => handleEditUserDetails(user)} />
                                                                            </span> : null
                                                                    }

                                                                    <span><img src={DeleteIcon} alt="" onClick={() => deleteUserById(user.id)} /></span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }) :
                                                <tr>
                                                    <td colSpan={7}>No Users Found</td>
                                                </tr>
                                        }

                                    </tbody>

                            }

                        </table>
                    </div>
                </div>

            </div>

            <div className={style.card}>
                <div className={`${style.status_header} d-flex align-items-center justify-content-between`}>
                    <h2>Recent Activity</h2>
                    <span><img src={VerticalDotsIcon} alt="" /></span>
                </div>
                <RecentActivity />
            </div>

        </div>
    )
}

export default RightDetails
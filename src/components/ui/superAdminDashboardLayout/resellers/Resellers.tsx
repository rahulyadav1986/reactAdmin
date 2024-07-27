import { useContext } from "react";
import style from "../listDetails.module.scss";

import AddIcon from "/assets/dashboard/main_dashboard/superAdmin/add.svg";
import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext";
import ResellerDetails from "./ResellerDetails";
//import { MainUserList } from "../Data";
import LockIcon from "/assets/dashboard/main_dashboard/superAdmin/lock.svg";
import EditIcon from "/assets/dashboard/main_dashboard/superAdmin/edit.svg";
import DeleteIcon from "/assets/dashboard/main_dashboard/superAdmin/delete.svg";
import AddResource from "../addUser/AddResource";
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png";

const OpenLockIcon = "/assets/dashboard/main_dashboard/superAdmin/lock-open.svg";

const Resellers = () => {
  // const contextSuperAdmin = useContext(ContextSuperAdminDashboard);
  const {
    resellerList,
    addUserfromList,
    resellerListLS,
    handleResellerDetails,
    deleteResellerLS,
    editUserFromList,
    addResourceType,
    resellerDetails,
    toggleSuspendReseller
  } = useContext(ContextSuperAdminDashboard);
 
  // delete reseller --------------------
  const deleteReseller = (resellerID:string)=>{
     if(confirm("If you delete reseller, all companies under it will be deleted. Are you sure want to delete?") == true)
     {
      deleteResellerLS(resellerID);
     }
  }

  return (
    <>
      {(addResourceType === "resellers" || addResourceType == 'companies')? (
        <AddResource />
      ) : (
        <>
          {resellerList ? (
            <div className={style.list_wrapper}>
              <div
                className={`${style.head} d-flex align-items-center justify-content-between`}
              >
                <h1>Resellers</h1>
                {/* <div
                  className={`${style.button} d-flex align-items-center justify-content-center`}
                  onClick={() => addUserfromList("reseller")}
                >
                  <span>
                    <img src={AddIcon} alt="" />
                  </span>
                  <span>Create Resellers</span>
                </div> */}
                <div
                  className={`${style.button} d-flex align-items-center justify-content-center`}
                  onClick={() => addUserfromList("reseller")}
                >
                  <span>
                    <img src={AddIcon} alt="" />
                  </span>
                  <span>Create Resellers</span>
                </div>
              </div>

              <div className={style.table_responsive_wrap}>
                <table className={`${style.ticketTable} ticketTable`}>
                  <thead>
                    <tr>
                      <th>
                        <div className={style.checkbox}>
                          <input
                            type="checkbox"
                            name="thead_check"
                            id="thead_check"
                          />
                          <label htmlFor="">
                            <span></span>
                          </label>
                        </div>
                      </th>
                      <th></th>
                      <th>RESELLER NAME</th>
                      <th>COMPANY LIMIT</th>
                      <th>USED CUSTOMERS LIMIT</th>
                      <th>ADDRESS</th>
                      <th>EMAIL</th>
                      <th style={{ width: "180px" }}>PHONE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    resellerListLS.length > 0 ?
                      resellerListLS.map((item, i) => {
                        return (
                          <tr key={i} className={item.isSuspended ? style.strike : ''}>
                            <td>
                              <div className={style.checkbox}>
                                <input
                                  type="checkbox"
                                  name="thead_check"
                                  id={item.id}
                                />
                                <label htmlFor={item.id}>
                                  <span></span>
                                </label>
                              </div>
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                            <img
                                className={style.profile}
                                src={
                                  item.imageBase64 != ""
                                    ? item.imageBase64
                                    : UserFormAvatar
                                }
                                alt=""
                              />
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              <strong>{item.companyName}</strong>
                              <br />
                              {item.address}
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              {/* {item.companyLimit} */}500
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              {/* {item.userCustomerLimit} */}500
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              {item.address}
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              {item.contactPersonEmail ?? "N/A"}
                            </td>
                            <td onClick={() => handleResellerDetails(item.id)}>
                              {item.contactPersonPhoneNumber ?? "N/A"}
                            </td>
                            <td>
                              <div
                                className={`${style.action_icon} d-flex align-items-center`}
                              >
                                <span onClick={() => toggleSuspendReseller(item.id)}>
                                  <img src={item.isSuspended ? OpenLockIcon : LockIcon} alt="" />
                                </span>
                                {
                                 !item.isSuspended ? <span  onClick={() => editUserFromList("reseller", item) } >
                                  <img src={EditIcon} alt="" />
                                </span> : null
                                }
                                
                                <span>
                                  <img
                                    src={DeleteIcon}
                                    onClick={() => deleteReseller(item.id)}
                                    alt=""
                                  />
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      }) : <td colSpan={9}>No Resellers Found</td>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {resellerList
            ? null
            : resellerListLS.map((item, i) => {
                return (
                  <>
                    {resellerDetails === item.id ? (
                      <ResellerDetails
                        item={item}
                        editUserFromList={editUserFromList}
                      key={i}/>
                    ) : null}
                  </>
                );
              })}
        </>
      )}
    </>
  );
};

export default Resellers;

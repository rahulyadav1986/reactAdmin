import { useContext } from "react";
import style from "../listDetails.module.scss";
import AddIcon from "/assets/dashboard/main_dashboard/superAdmin/add.svg";
import { ContextSuperAdminDashboard } from "../../../../contexts/superAdminContext";
import CompaniesDetails from "./CompaniesDetails";
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png";
import LockIcon from "/assets/dashboard/main_dashboard/superAdmin/lock.svg";
const OpenLockIcon = "/assets/dashboard/main_dashboard/superAdmin/lock-open.svg";
import EditIcon from "/assets/dashboard/main_dashboard/superAdmin/edit.svg";
import DeleteIcon from "/assets/dashboard/main_dashboard/superAdmin/delete.svg";
import AddResource from "../addUser/AddResource";

const Companies = () => {
  const {
    companyList,
    editUserFromList,
    companyListLS,
    handleCompanyDetails,
    companyDetails,
    deleteCompanyLS,
    toggleSuspendCompany,
    // handleCreateVendor,
    addResourceType,
    getCompanyByIndex,
    addUserfromList
  } = useContext(ContextSuperAdminDashboard);
  const openCompanyDetails = !companyList && companyDetails !== null ? getCompanyByIndex(companyDetails) : null
  // useEffect(() => {
  //   if(addResourceType !== 'companies'){
  //     addUserfromList(null)

  //   }
  // }, []);
  const deleteCompany = (companyID:string)=>{
    if(confirm("Are you sure want to delete company?") == true)
    {
      deleteCompanyLS([companyID]);
    }
  }
  return (
    <>
      {addResourceType === "companies" ? (
        <AddResource />
      ) : (
        <>
          {companyList ? (
            <div className={style.list_wrapper}>
              <div
                className={`${style.head} d-flex align-items-center justify-content-between`}
              >
                <h1>Companies</h1>
                {/* <div className={`${style.button} d-flex align-items-center justify-content-center`} onClick={()=>addUserfromList('company')}>
                                <span><img src={AddIcon} alt="" /></span><span>Create Company</span>
                            </div> */}
                <div
                  className={`${style.button} d-flex align-items-center justify-content-center`}
                  onClick={() => addUserfromList("company")}
                >
                  <span>
                    <img src={AddIcon} alt="" />
                  </span>
                  <span>Create Company</span>
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
                      <th>COMPANY NAME</th>
                      <th>COMPANY LIMIT</th>
                      <th>USED CUSTOMERS LIMIT</th>
                      <th>ADDRESS</th>
                      <th>EMAIL</th>
                      <th style={{ width: "180px" }}>PHONE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyListLS.length > 0 ? (
                      companyListLS.map((item, i) => {
                        return (
                          <tr
                            key={i}
                            className={item.isSuspended ? style.strike : ""}
                          >
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
                            <td onClick={() => handleCompanyDetails(i)}>
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
                            <td onClick={() => handleCompanyDetails(i)}>
                              <strong>{item.companyName}</strong>
                              <br />
                              {item.address}{" "}
                            </td>
                            <td onClick={() => handleCompanyDetails(i)}>
                              {item.maxUserLimit}
                            </td>
                            <td onClick={() => handleCompanyDetails(i)}>{0}</td>
                            <td onClick={() => handleCompanyDetails(i)}>
                              {item.address}
                            </td>
                            <td onClick={() => handleCompanyDetails(i)}>
                              {item.contactPersonEmail}
                            </td>
                            <td onClick={() => handleCompanyDetails(i)}>
                              {item.contactPersonPhoneNumber}
                            </td>
                            <td>
                              <div
                                className={`${style.action_icon} d-flex align-items-center`}
                              >
                                <span onClick={() => toggleSuspendCompany(item.id)}>
                                  {
                                    item.isSuspended ? <img src={OpenLockIcon} alt="" /> : <img src={LockIcon} alt="" />
                                  }
                                  
                                </span>
                                {
                                  item.isSuspended ? null : 
                                  <span onClick={() => editUserFromList("company", item)  }>
                                    <img src={EditIcon} alt="" />
                                  </span>
                                }
                                
                                <span onClick={() => deleteCompany(item.id)}>
                                  <img src={DeleteIcon} alt="" />
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={9}>No Companies Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* {companyList
            ? null
            : companyListLS.map((item, i) => {
                return (
                  <>
                    {companyDetails === i ? (
                      <CompaniesDetails item={item} />
                    ) : null}
                  </>
                );
              })} */}
              {openCompanyDetails ?  <CompaniesDetails item={openCompanyDetails} />: null}
        </>
      )}
    </>
  );
};

export default Companies;

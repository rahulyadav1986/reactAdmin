import { createContext, ReactNode, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'node-uuid';
import { useLocation, useNavigate } from "react-router-dom";


type CompanyType = {
  id: string;
  companyName: string;
  description: string;
  contactPerson: string;
  contactPersonPhoneNumber: string;
  address: string;
  contactPersonEmail: string;
  username: string;
  resellerId?: string,
  maxUserLimit: number,
  renewalPeroid: string,
  isArchived: boolean
  createdDateTime?: Date
  imageBase64: string,
  // isActive: number,
  underReseller?: string | null,
  firstUserId?: string,
  isSuspended?: boolean

};

type ResellerType = {
  id: string;
  companyName: string;
  description: string;
  contactPerson: string;
  contactPersonPhoneNumber: string;
  address: string;
  contactPersonEmail: string;
  isArchived?: boolean
  createdDateTime?: Date
  username: string;
  imageBase64: string;
  // isActive: number,
  isSuspended?: boolean
};

type userType = {
  id: string;
  userType: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  workNumber?: string;
  mobileNumber?: string;
  username: string;
  password?: string;
  accessPermission?: string[];
  // isActive:boolean,
  companyID?: string,
  isSuspended?: boolean

}

type ContextType = {
  sidebarTab: number;
  handleSideBarTab: (id: any) => void;
  addResourceType: null | any;
  handleAddResourcePage: (id: any) => void;
  addUserfromList: (id: any, resellerDetail?: string) => void;
  editUserFromList: (id: any, resource: any) => void;
  editingResource: null | any;
  companyList: boolean;
  companyDetails: null | any;
  handleCompanyDetails: (id: any) => void;
  resellerList: boolean;
  resellerDetails: null | any;
  handleResellerDetails: (id: any) => void;
  addMainUser: null | any;
  handleAddMainUser: (id: any) => void;
  companyListLS: CompanyType[];
  addCompanyLS: (company: CompanyType) => void;
  // updateCompanyLS: (id: string, info: CompanyType) => void;
  resellerListLS: ResellerType[];
  // updateResellerLS: (id: string, info: Partial<ResellerType>) => void;
  // deleteCompanyLS: (id: string) => void;

  updateCompanyLS: (company: CompanyType) => void;
  // resellerListLS: ResellerType[];
  addResellerLS: (resellerInfo: ResellerType) => void;
  updateResellerLS: (reseller: ResellerType) => void;
  deleteCompanyLS: (id: string[]) => void;
  deleteResellerLS: (id: string) => void;
  addUserUnderCompany: (userInfo: userType) => void;
  userList: userType[];
  handleCreateVendor: (id: any) => void;
  handleSideRoute: (id: any) => void;
  getCompanyByIndex: (index: number) => CompanyType | null;
  selectUsersByCompanyId: (companyId: string) => userType[],
  deleteUserById: (id: string) => void,
  handleEditUserDetails: (details: userType) => void
  editingUserDetail: userType | null,
  updateUserDetail: (id: string, info: userType) => void,
  suspendUser: (id: string) => void,
  toggleSuspendReseller: (id: string) => void,
  toggleSuspendCompany: (id: string) => void,
  companyUnderReseller: string,

};

const defaultContextValue: ContextType = {
  sidebarTab: 0,
  handleSideBarTab: (_id) => { },
  addResourceType: null,
  handleAddResourcePage: (_id) => { },
  addUserfromList: (_id, _resellerDetail?) => { },
  editUserFromList: (_id, _resource) => { },
  editingResource: null,
  companyList: false,
  companyDetails: null,
  handleCompanyDetails: (_id) => { },
  resellerList: false,
  resellerDetails: null,
  handleResellerDetails: (_id) => { },
  addMainUser: null,
  handleAddMainUser: (_id) => { },
  companyListLS: [],
  addCompanyLS: ({ }: CompanyType) => { },
  // updateCompanyLS: (_id,  _info: Partial<CompanyType>) => {},
  resellerListLS: [],
  addResellerLS: (_resellerInfo) => { },
  // updateResellerLS: (_id: string, _info: Partial<ResellerType>) => {},
  deleteCompanyLS: (_id: string[]) => { },
  deleteResellerLS: (_id: string) => { },
  updateCompanyLS: (_company) => { },
  updateResellerLS: (_reseller) => { },
  addUserUnderCompany: (_userInfo: userType) => { },
  userList: [],
  handleCreateVendor: (_id: any) => { },
  handleSideRoute: (_id: any) => { },
  getCompanyByIndex: (_index: number) => null,
  selectUsersByCompanyId: (_companyId: string) => [],
  deleteUserById: (_id: string) => { },
  handleEditUserDetails: (_details: userType) => { },
  editingUserDetail: null,
  updateUserDetail: (_id: string, _info: userType) => { },
  suspendUser: (_id: string) => { },
  toggleSuspendReseller: (_id: string) => { },
  toggleSuspendCompany: (_id: string) => { },
  companyUnderReseller: ''

};

export const ContextSuperAdminDashboard = createContext(defaultContextValue);

export const SuperAdminDashboardContext = (props: { children: ReactNode }) => {
  const [sidebarTab, setSideBarTab] = useState<number>(0);
  const [addResourceType, setAddResourceType] = useState<null | any>(null);
  const [companyList, setCompanyList] = useState<boolean>(true);
  const [companyDetails, setCompanyDetails] = useState<null | any>(null);
  const [resellerList, setResellerList] = useState<boolean>(true);
  const [resellerDetails, setResellerDetails] = useState<null | any>(null);
  const [addMainUser, setAddMainUser] = useState<null | any>(null);
  const [companyListLS, setCompanyListLS] = useState<CompanyType[]>([]);
  const [resellerListLS, setResellerListLS] = useState<ResellerType[]>([]);
  const [editingResource, setEditingResource] = useState<null | any>(null);
  const [userList, setUserList] = useState<userType[]>([]);
  const [editingUserDetail, setEditingUserDetail] = useState<userType | null>(null);
  const [companyUnderReseller, setCompanyUnderReseller] = useState("");
  const location = useLocation()
  const superAdminLocation = location.pathname.indexOf('/super-admin') >= 0
  const handleSideRoute = (id: any) => {
    if (id === 0) {
      Navigate(`${`/${superAdminLocation ? 'super-admin' : 'reseller-admin'}/dashboard`}`)
    } else if (id === 1) {
      Navigate(`${`/${superAdminLocation ? 'super-admin' : 'reseller-admin'}/dashboard/companies`}`)
    } else if (id === 2) {
      Navigate(`${`/${superAdminLocation ? 'super-admin' : 'reseller-admin'}/dashboard/resellers`}`)
    }

  }

  const handleSideBarTab = (id: any) => {
    setSideBarTab(id);
    console.log(id);
    if (id === 0) {
      setAddResourceType(null);
      setAddMainUser(null);
    }
    if (id === 1) {
      setCompanyList(true);
      setAddMainUser(null);
    }
    if (id === 2) {
      setResellerList(true);
      setAddMainUser(null);
    }
  };

  const handleAddResourcePage = (id: any) => {
    setAddResourceType(id);
  };

  const addUserfromList = (id: any, resellerDetail: string = '') => {
    setEditingResource(null);
    setCompanyUnderReseller('');
    if (id == 'company') {
      setAddResourceType('companies');
      setCompanyUnderReseller(resellerDetail);

    }
    else {
      setAddResourceType('resellers');
    }
    //setSideBarTab(0);
  };

  const editUserFromList = (id: any, resource: any) => {
    if (id == 'company') {
      setAddResourceType('companies');
    }
    else {
      setAddResourceType('resellers');
    }
    setSideBarTab(0);
    setEditingResource(resource);
  }

  const handleCompanyDetails = (id: any) => {
    setCompanyDetails(id);
    setCompanyList(false);
  };

  const handleResellerDetails = (id: any) => {
    setResellerDetails(id);
    setResellerList(false);
    setAddMainUser(null);
  };

  const handleAddMainUser = (id: any) => {
    setAddMainUser(id);
    // if(!id){
    //   setEditingUserDetail(null)
    // }
    setEditingUserDetail(null)
    console.log(id);
  };

  const addCompanyLS = (company: CompanyType) => {
    const userObj = {
      id: uuidv4(),
      username: company.username,
      userType: 'Administrator',
      companyID: company.id,
      isActive: true
    }
    company.firstUserId = userObj.id;
    console.log(company.underReseller,companyListLS);
    setCompanyListLS([...companyListLS, company]);
    addUserUnderCompany(userObj);

  };

  const updateCompanyLS = (company: CompanyType) => {
    setCompanyListLS((companyListLS) => {
      companyListLS.map((el, index) => {
        if (el.id == company.id) {
          companyListLS[index] = company;
        }
      });
      return companyListLS;
    });
  };

  const addResellerLS = (resellerInfo: ResellerType) => {
    setResellerListLS((prev) => [...prev, resellerInfo]);
  };

  const updateResellerLS = (reseller: ResellerType) => {
    // Implement your logic for updating resellerListLS
    setResellerListLS((resellerListLS) => {
      resellerListLS.map((el, index) => {
        if (el.id == reseller.id) {
          resellerListLS[index] = reseller;
        }
      });
      return resellerListLS;
    })
  };

  const addUserUnderCompany = (userInfo: userType) => {
    setUserList([...userList, userInfo]);
  }
  useEffect(() => {
    const savedComanyListEncoded = localStorage.getItem('superAdminContext_companyListLS')
    const savedResellerListEncoded = localStorage.getItem('superAdminContext_resellerListLS')
    const savedUserListEncoded = localStorage.getItem('superAdminContext_userList')
    if (savedComanyListEncoded) {
      let compList = JSON.parse(savedComanyListEncoded)
      setCompanyListLS(compList)
    }

    if (savedResellerListEncoded) {
      let List = JSON.parse(savedResellerListEncoded)
      setResellerListLS(List)
    }
    if (savedUserListEncoded) {
      let List = JSON.parse(savedUserListEncoded)
      setUserList(List)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('superAdminContext_companyListLS', JSON.stringify(companyListLS))
  }, [companyListLS])

  useEffect(() => {
    localStorage.setItem('superAdminContext_resellerListLS', JSON.stringify(resellerListLS))
  }, [resellerListLS])

  useEffect(() => {
    localStorage.setItem('superAdminContext_userList', JSON.stringify(userList))
  }, [userList])

  const deleteCompanyLS = (id: string[]) => {
    let newList = companyListLS.filter((item) => {
      return id.indexOf(item.id) < 0
    })
    console.log("new company list",newList,id);
    setCompanyListLS(newList);
  
    let newUserList:any = userList.filter((el:any)=>{
      return id.indexOf(el.companyID) < 0;
    });
    setUserList(newUserList);
  }

  const deleteResellerLS = (id: string) => {
    let newList = resellerListLS.filter((item) => {
      return item.id !== id
    })
    setResellerListLS(newList)
    // let companyList = companyListLS.filter((item)=>{
    //   return item.underReseller != id;
    // });
    let deletedCompanyList:any = companyListLS.filter((item)=>{
      return item.underReseller == id;
    });
    console.log(deletedCompanyList,id,companyListLS);
    let deletedCompanyIDs = deletedCompanyList.map((el:CompanyType)=>{
      return el.id;
    });
    deleteCompanyLS(deletedCompanyIDs);

    // let  newUserList = userList.filter((el)=>{
    //   return deletedCompanyList.indexOf(el.companyID)
    // })
  }



  // new rules for rote chnage
  const Navigate = useNavigate()
  const handleCreateVendor = (id: any) => {
    Navigate(id)
   // setAddResourceType(id)
  }

  const getCompanyByIndex = (index: number) => {
    return companyListLS[index]
  }

  const selectUsersByCompanyId = (companyId: string) => {
    let allUsers = [...userList]
    let companyUsers = allUsers.filter((item) => {
      return item.companyID == companyId
    })

    return companyUsers;
  }


  const deleteUserById = (id: string) => {
    let newList = userList.filter((item) => {
      return item.id !== id
    })
    setUserList(newList)
  }

  const handleEditUserDetails = (details: userType) => {
    setEditingUserDetail(details)
    setAddMainUser('company');
  }

  const updateUserDetail = (id: string, info: userType) => {
    let users = userList.map((item) => {
      if (item.id === id) {
        return { ...item, ...info }
      }
      return item
    })
    setUserList(users)
  }

  const suspendUser = (id: string) => {
    let newUsers = userList.map((item) => {
      if (item.id === id) {
        return {
          ...item, ...{
            isSuspended: !item.isSuspended
          }
        }
      }
      return item
    })
    setUserList(newUsers)
  }

  const toggleSuspendReseller = (id: string) => {
    let newResellers = resellerListLS.map((item) => {
      if (item.id === id) {
        return {
          ...item, ...{
            isSuspended: !item.isSuspended
          }
        }
      }
      return item
    })
    setResellerListLS(newResellers)
  }

  const toggleSuspendCompany = (id: string) => {
    let newCompanies = companyListLS.map((item) => {
      if (item.id === id) {
        return {
          ...item, ...{
            isSuspended: !item.isSuspended
          }
        }
      }
      return item
    })
    setCompanyListLS(newCompanies)
  }

  const contextValue: ContextType = {
    sidebarTab,
    handleSideBarTab,
    addResourceType,
    handleAddResourcePage,
    addUserfromList,
    editUserFromList,
    editingResource,
    companyList,
    companyDetails,
    handleCompanyDetails,
    resellerList,
    resellerDetails,
    handleResellerDetails,
    addMainUser,
    handleAddMainUser,
    companyListLS,
    addCompanyLS,
    updateCompanyLS,
    resellerListLS,
    addResellerLS,
    updateResellerLS,
    deleteCompanyLS,
    deleteResellerLS,
    addUserUnderCompany,
    userList,
    handleCreateVendor,

    handleSideRoute,
    getCompanyByIndex,
    selectUsersByCompanyId,
    deleteUserById,
    handleEditUserDetails,
    editingUserDetail,
    updateUserDetail,
    suspendUser,
    toggleSuspendReseller,
    toggleSuspendCompany,
    companyUnderReseller
  };

  return (
    <ContextSuperAdminDashboard.Provider value={contextValue}>
      {props.children}
    </ContextSuperAdminDashboard.Provider>
  );
};

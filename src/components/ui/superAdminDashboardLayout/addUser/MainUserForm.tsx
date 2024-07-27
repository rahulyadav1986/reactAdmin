import { ChangeEvent, useContext, useState } from 'react'
import style from './style.module.scss'
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'
import useOutside from '../../../../hooks/useOutside'
import DownArrow from "/assets/dashboard/main_dashboard/admin/reports/dailyDown.svg"
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'node-uuid';

// import { CheckboxChangeEvent } from 'antd/es/checkbox'

type Inputs = {
    // userType: string;
    email: string;
    firstName: string;
    lastName: string;
    workNumber: string,
    mobileNumber: string,
    // address: string;
    password: string;
    // accessPermission: string[],
    username: string
};

interface CusomErrorInterface {
    [key: string]: string
}


const MainUserForm = () => {
    const {handleAddMainUser, addUserUnderCompany, companyDetails, getCompanyByIndex, editingUserDetail, updateUserDetail} = useContext(ContextSuperAdminDashboard) 

    const [accessPermission, setAccessPermissions] = useState<string[]>(editingUserDetail?.accessPermission || [])
    const [dropUserType, setDropUserType, refDropUserType] = useOutside(false) 
    const [userTypeValue, setUserTypeValue] = useState(editingUserDetail?.userType || "Select User")
    const handleTypeValue = (e:any)=>{
        setUserTypeValue(e.target.textContent)
        setDropUserType(false)
    }

    const companyInfo = companyDetails !== null ? getCompanyByIndex(companyDetails) : null
    const [customErrors, setCustomErrors] = useState<CusomErrorInterface>({})


    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            // userType: string;
            email: editingUserDetail?.email,
            firstName: editingUserDetail?.firstName,
            lastName: editingUserDetail?.lastName,
            workNumber: editingUserDetail?.workNumber,
            mobileNumber: editingUserDetail?.mobileNumber,
            // address: editingUserDetail?.add;
            password: editingUserDetail?.password,
            // accessPermission: string[],
            username: editingUserDetail?.username
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log({data: data,
            editingUserDetail: editingUserDetail,
            companyDetails: companyDetails !== null
        })
    //    return
        setCustomErrors({})


        if(userTypeValue === 'Select User'){
            setCustomErrors({
                'userType': 'User type is reuired'
            })
        } else {
            if(editingUserDetail && companyDetails !== null){
                updateUserDetail(editingUserDetail.id, 
                    {
                        ...editingUserDetail,
                        ...data,
                        ...{
                            accessPermission: accessPermission,
                            userType: userTypeValue,
                            id: uuidv4(),
                            isActive: true,
                            companyID: companyInfo?.id
                        }
                    }
                )
            } else {
                addUserUnderCompany({
                    ...data, ...{
                        accessPermission: accessPermission,
                        userType: userTypeValue,
                        id: uuidv4(),
                        isActive: true,
                        companyID: companyInfo?.id
                    }
                })
            }
            
            handleAddMainUser(false)
            
        }
    }
    const validateNotEmpty = (value: string) => {
        return value.trim() !== '' || 'Field is required';
    };
    const accessPermissionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, checked} = e.target

        var permission = [...accessPermission]
        if(checked){
            permission.push(id)
        } else {
            permission = permission.filter(item => item !== id)
        }


        setAccessPermissions(permission)

    }
    
  return (
    <div className={style.user_form_wrapper}>
        <div className={`${style.main_user} d-flex`}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_wrapper}>
                    <div className={style.section}>
                        <h2>User Type</h2>
                        <div className={style.form_field_area_wrapper}>
                            {/* <div className={style.portion}>
                                <label htmlFor="CompanyName"> User Type <span className='red'>*</span></label>
                                <input type="text" name="" id="CompanyName" className={style.form_control} placeholder='Enter company name' />
                            </div> */}
                            <div className={style.portion}>
                                <label htmlFor="UserType"> User Type <span className='red'>*</span></label>
                                <div ref={refDropUserType}>
                                    <div className={`${style.drop} d-flex align-items-center justify-content-between`} onClick={()=>setDropUserType(!dropUserType)}>
                                        <span>{userTypeValue}</span>
                                        <span><img src={DownArrow} alt="" /></span>
                                    </div>
                                    {
                                        dropUserType && 
                                        <>
                                            <ul className={style.drop_area}>
                                                <li onClick={handleTypeValue}>Administrator</li>
                                                <li onClick={handleTypeValue}>Super Admin</li>
                                                <li onClick={handleTypeValue}>Reseller Admin</li>
                                            </ul>
                                        </>
                                    }

                                    {customErrors.userType && (
                                        <span className={style.error}>{customErrors.userType}</span>
                                    )}
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className={style.section}>
                        <h2>Basic Information</h2>
                        <div className={style.form_field_area_wrapper}>                            
                            <div className={style.portion}>
                                <label htmlFor="Email">Email <span className='red'>*</span></label>
                                <input type="text" id="email" className={style.form_control} placeholder='Enter your email'
                                    {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Email is invalid",
                                        },
                                    })}
                                />

                                {errors.email && (
                                    <span className={style.error}>{errors.email.message}</span>
                                )}
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="firstName">First Name <span className='red'>*</span></label>
                                <input type="text" id="firstName" className={style.form_control} placeholder='User first name'
                                    {...register("firstName", {
                                        required: 'First Name is required',
                                        validate: validateNotEmpty
                                    })}
                                 />
                                  {errors.firstName && (
                                    <span className={style.error}>{errors.firstName.message}</span>
                                )}
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="lastName">Last Name <span className='red'>*</span></label>
                                <input type="text"  id="lastName" className={style.form_control} placeholder='Last name like “doe”'
                                {...register("lastName", {
                                    required: 'Last Name is required',
                                    validate: validateNotEmpty
                                })} />

                                {errors.lastName && (
                                    <span className={style.error}>{errors.lastName.message}</span>
                                )}
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="workNumber">Work Number</label>
                                <input type="text" id="workNumber" className={style.form_control} placeholder='Official contact number'
                                 {...register("workNumber", {
                                    maxLength: {
                                        value: 10,
                                        message: "phone no. is invalid"
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "phone no. is invalid"
                                    }
                                })}
                                 />

                                {errors.workNumber && (
                                    <span className={style.error}>{errors.workNumber.message}</span>
                                )}
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input type="text"  id="mobileNumber" className={style.form_control} placeholder='Personal mobile number'
                                {...register("mobileNumber", {
                                    maxLength: {
                                        value: 10,
                                        message: "phone no. is invalid"
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "phone no. is invalid"
                                    }
                                })}
                                 />

                                {errors.mobileNumber && (
                                    <span className={style.error}>{errors.mobileNumber.message}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={style.section}>
                        <h2>Account</h2>
                        <div className={style.form_field_area_wrapper}>
                            <div className={style.portion}>
                                <label htmlFor="username">username <span className='red'>*</span></label>
                                <input type="text" id="username" className={style.form_control} placeholder='email or alphanumeric' 
                                {...register("username", {
                                    required: 'Username is required'
                                }) }
                                />
                                {errors.username && (
                                    <span className={style.error}>{errors.username.message}</span>
                                )}
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="password">Set Password <span className='red'>*</span></label>
                                <input type="password"  id="password" className={style.form_control} placeholder='8 digit alphanumeric password'
                                 {...register("password", {
                                    required: 'password is required',
                                    pattern: {
                                        message: 'Create a strong password by using a mix of lowercase letters, uppercase letters, and numbers',
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[^\s]{8,}$/
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Create a strong password by using a mix of lowercase letters, uppercase letters, and numbers"
                                    }
                                    }) }
                                
                                 />

                                {errors.password && (
                                    <span className={style.error}>{errors.password.message}</span>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <div className={`${style.submit_button_wrapper} d-flex align-items-center`}>
                        <button type="submit" className={`${style.button} d-flex align-items-center justify-content-center`}>save</button>
                        <div className={`${style.button} ${style.cancel} d-flex align-items-center justify-content-center`} onClick={()=>handleAddMainUser(false)}>cancel</div>
                    </div>
                </div>
            </form>
            <div className={style.access_permission_wrapper}>
                <h2>Access Permissions</h2>
                <div className={style.check_box_wrapper}>
                    <div className={style.checkbox}>
                        <input type="checkbox" 
                            value='CallCentreModule'
                            id="CallCentreModule" 
                            onChange={accessPermissionHandler}
                            defaultChecked={editingUserDetail?.accessPermission?.includes('CallCentreModule')}
                        />
                        <label htmlFor="CallCentreModule" className='d-flex align-items-center'>
                            <span></span>
                            <div className='d-flex flex-column'>
                                <h6>Call Centre Module</h6>
                                <p>Ability to manage call centre activities, receiving calls, making calls, disposition etc</p>
                            </div>
                        </label>
                    </div>
                    <div className={style.checkbox}>
                        <input type="checkbox" /* name="AdminModule" */ 
                            value='AdminModule'
                            id='AdminModule'
                            onChange={accessPermissionHandler}
                            defaultChecked={editingUserDetail?.accessPermission?.includes('AdminModule')}
                         />
                        <label htmlFor="AdminModule" className='d-flex align-items-center'>
                            <span></span>
                            <div className='d-flex flex-column'>
                                <h6>Admin Module</h6>
                                <p>Manage Zuqo’s platform admin capabilities, this text needs to be changed</p>
                            </div>
                        </label>
                    </div>
                    <div className={style.sub_check_wrapper}>
                        <div className={style.checkbox}>
                            <input type="checkbox" 
                                name="Usermanagement" 
                                id="Usermanagement" 
                                onChange={accessPermissionHandler}
                                defaultChecked={editingUserDetail?.accessPermission?.includes('Usermanagement')}

                             />
                            <label htmlFor="Usermanagement" className='d-flex align-items-center'>
                                <span></span>
                                <div className='d-flex flex-column'>
                                    <h6>User management</h6>
                                    <p>Lorem ipsum text to describe the feature so that user has ability to choose the feature</p>
                                </div>
                            </label>
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="WorkflowStudio" id="WorkflowStudio" 
                                onChange={accessPermissionHandler}
                                defaultChecked={editingUserDetail?.accessPermission?.includes('WorkflowStudio')}

                            />
                            <label htmlFor="WorkflowStudio" className='d-flex align-items-center'>
                                <span></span>
                                <div className='d-flex flex-column'>
                                    <h6>Workflow Studio</h6>
                                    <p>Lorem ipsum text to describe the feature so that user has ability to choose the feature</p>
                                </div>
                            </label>
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="AIAnalytics" id="AIAnalytics"
                                onChange={accessPermissionHandler}
                                defaultChecked={editingUserDetail?.accessPermission?.includes('AIAnalytics')}

                            />
                            <label htmlFor="AIAnalytics" className='d-flex align-items-center'>
                                <span></span>
                                <div className='d-flex flex-column'>
                                    <h6>AI Analytics</h6>
                                    <p>Lorem ipsum text to describe the feature so that user has ability to choose the feature</p>
                                </div>
                            </label>
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="CampaignsManager" id="CampaignsManager" 
                                onChange={accessPermissionHandler}
                                defaultChecked={editingUserDetail?.accessPermission?.includes('CampaignsManager')}

                            />

                            <label htmlFor="CampaignsManager" className='d-flex align-items-center'>
                                <span></span>
                                <div className='d-flex flex-column'>
                                    <h6>Campaigns Manager</h6>
                                    <p>Lorem ipsum text to describe the feature so that user has ability to choose the feature</p>
                                </div>
                            </label>
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="Reports" id="Reports" 
                                onChange={accessPermissionHandler}
                                defaultChecked={editingUserDetail?.accessPermission?.includes('Reports')}

                                />
                            <label htmlFor="Reports" className='d-flex align-items-center'>
                                <span></span>
                                <div className='d-flex flex-column'>
                                    <h6>Reports</h6>
                                    <p>Lorem ipsum text to describe the feature so that user has ability to choose the feature</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainUserForm
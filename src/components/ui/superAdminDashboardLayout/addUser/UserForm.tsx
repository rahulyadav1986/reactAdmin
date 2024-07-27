import { useContext } from 'react'
import style from './style.module.scss'
import UserFormAvatar from "/assets/dashboard/main_dashboard/superAdmin/userFormAvatar.png"
import { ContextSuperAdminDashboard } from '../../../../contexts/superAdminContext'

const UserForm = () => {
  const contextSuperAdmin = useContext(ContextSuperAdminDashboard)

  
  return (
    <div className={style.user_form_wrapper}>
        <div className={`${style.main} d-flex`}>
            <span className={style.avatar_back}>
                <img src={UserFormAvatar} alt="" />
            </span>
            <form>
                <div className={style.form_wrapper}>
                    <div className={style.section}>
                        <h2>Basic {contextSuperAdmin.addResourceType === 'company' ? 'Company' : contextSuperAdmin.addResourceType === 'reseller' ? 'Reseller' : null} Information</h2>
                        <div className={style.form_field_area_wrapper}>
                            <div className={style.portion}>
                                <label htmlFor="CompanyName">{contextSuperAdmin.addResourceType === 'reseller' ? 'Reseller' : null} Company Name <span className='red'>*</span></label>
                                <input type="text" name="" id="CompanyName" className={style.form_control} placeholder='Enter company name' />
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="Description">Description</label>
                                <textarea name="" id="Description" className={style.form_control} placeholder='description about the company for better visibility'></textarea>
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="ContactPerson">Contact Person</label>
                                <input type="text" name="" id="ContactPerson" className={style.form_control} placeholder='Enter name of the person whom we contact' />
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="ContactPersonPhoneNumber">Contact Person Phone Number</label>
                                <input type="text" name="" id="ContactPersonPhoneNumber" className={style.form_control} placeholder='Enter phone number' />
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="ContactPersonEmail">Contact Person Email</label>
                                <input type="text" name="" id="" className={style.form_control} placeholder='Enter email' />
                            </div>
                            <div className={style.portion}>
                                <label htmlFor="Adddress">Adddress</label>
                                <textarea name="" id="Adddress" className={style.form_control} placeholder='enter Company address'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={style.section}>
                        <h2>Default Admin Credentials</h2>
                        <div className={style.form_field_area_wrapper}>
                            <div className={style.portion}>
                                <label htmlFor="Username">Username <span className='red'>*</span></label>
                                <input type="text" name="" id="Username" className={style.form_control} placeholder='Enter company name' />
                            </div>
                            <p>A link will be shared with contact email mentioned above to set the passoword</p>
                            <p style={{'color':'#058DDA', 'marginTop': '16px', 'cursor': 'pointer'}}>Copy Platform Link</p>
                        </div>
                    </div>
                    {
                        contextSuperAdmin.addResourceType === 'reseller' ? null :
                        <div className={style.section}>
                            <h2>Licensing & User Limits</h2>
                            <div className={style.form_field_area_wrapper}>
                                <div className={style.portion}>
                                    <label htmlFor="MaxUsersLimit">Max Users Limit</label>
                                    <input type="text" name="" id="MaxUsersLimit" className={style.form_control} placeholder='500' />
                                </div>
                                <div className={style.portion}>
                                    <label htmlFor="RenewalPeriod">Renewal Period</label>
                                    <input type="text" name="" id="RenewalPeriod" className={style.form_control} placeholder='2 Years' />
                                </div>
                            </div>
                        </div>
                    }
                    
                    <div className={`${style.submit_button_wrapper} d-flex align-items-center`}>
                        <div className={`${style.button} d-flex align-items-center justify-content-center`}>save</div>
                        <div className={`${style.button} ${style.cancel} d-flex align-items-center justify-content-center`} onClick={()=>contextSuperAdmin.handleAddResourcePage(false)}>cancel</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserForm
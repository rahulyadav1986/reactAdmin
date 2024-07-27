import { Link, useLocation } from 'react-router-dom'
import style from '../../../globalStyles/userForm.module.scss'
import ZuqoSigninLogo from "/assets/signin/logo.svg"
import SbiSigninLogo from "/assets/signin/sbiLogo.png"
import { useForm } from 'react-hook-form'

type FormValues ={
  email: string
}

const ForgotPassword = () => {
  const form = useForm<FormValues>()
  const { register, handleSubmit, formState } = form
  const {errors} = formState
  const onSubmit = (data: FormValues)=>{
    console.log("Form Submitted", data)
  }
  const location = useLocation()
  const SuperAdminCurrenLocation = location.pathname.indexOf('/super-admin')>=0
  const ResellerAdminCurrenLocation = location.pathname.indexOf('/reseller-admin')>=0
  const AdminCurrenLocation = location.pathname.indexOf('/admin')>=0
  const AgentCurrenLocation = location.pathname.indexOf('/agent')>=0
  const SupervisorCurrenLocation = location.pathname.indexOf('/supervisor')>=0
  return (
    <div className={style.form_area}>
        <div className={style.heading_area}>
            <div className={`${style.main_heading_area} ${SuperAdminCurrenLocation && style.superAdmin} ${ResellerAdminCurrenLocation && style.resellerAdmin} d-flex align-items-center`}>
                <img src={`${ResellerAdminCurrenLocation ? SbiSigninLogo : ZuqoSigninLogo}`} alt="" />
                <h3>{AgentCurrenLocation || SupervisorCurrenLocation ? 'CALL HUB CONNECT' : AdminCurrenLocation ? 'ADMINISTRATOR' : SuperAdminCurrenLocation ? 'SUPER ADMIN' : ResellerAdminCurrenLocation ? 'RESELLER ADMIN' : null  } </h3>
            </div>
        </div>
        <div className={style.main_form_area}>
            <h1>Forgot Password</h1>
            <p>Welcome back! Please enter your details to login</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={style.portion}>
                  <label htmlFor="Email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder='Enter your email' 
                    {...register("email",{
                      required:{
                        value: true,
                        message: "Please enter valid email address"
                      },
                      pattern:{
                        value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                        message: "Invalid Email Format"
                      }
                    })} 
                    className={style.form_control} 
                  />
                  <span className={style.error_message}>{errors.email?.message}</span>
                </div>
                <div className={`${style.portion} d-flex align-items-center justify-content-between`}>
                  <button className={`${style.button} d-flex align-items-center justify-content-center`}>Sent</button>
                </div>
                <div className={`${style.portion} d-flex justify-content-center text-center ${style.account}`}>
                  Have an account? <Link to={`${AgentCurrenLocation ? '/agent' : SupervisorCurrenLocation ? '/supervisor' : AdminCurrenLocation ? '/admin' : ResellerAdminCurrenLocation ? '/reseller-admin' : SuperAdminCurrenLocation ? '/super-admin' : null }/signin`}>Sign in</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword
import { Link, useLocation, useNavigate } from 'react-router-dom'
import style from '../../../globalStyles/userForm.module.scss'
import ZuqoSigninLogo from "/assets/signin/logo.svg"
import SbiSigninLogo from "/assets/signin/sbiLogo.png"
import { useForm } from 'react-hook-form'
import { ReactNode } from 'react'

type FormValues ={
  username: string
  password: ReactNode
}

const SignIn = () => {
  const form = useForm<FormValues>()
  const { register, handleSubmit, formState } = form
  const {errors} = formState
  const navigate = useNavigate();
  const onSubmit = (data: FormValues)=>{
    console.log("Form Submitted", data)
    localStorage.clear();
    navigate('dashboard')
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
            <h1>Login</h1>
            <p>Welcome back! Please enter your details to login</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={style.portion}>
                  <label htmlFor="username">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    placeholder='Enter your Username' 
                    {...register("username",{
                      required:{
                        value: true,
                        message: "Please enter Username"
                      }
                      // pattern:{
                      //   value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                      //   message: "Invalid Email Format"
                      // }
                    })} 
                    className={style.form_control} 
                  />
                  <span className={style.error_message}>{errors.username?.message}</span>
                </div>
                <div className={style.portion}>
                  <label htmlFor="Password">Password</label> 
                  <input 
                    type="password" 
                    id="password" 
                    placeholder='••••••••' 
                    {...register("password",{
                      required:{
                        value: true,
                        message: "Please enter password"
                      }
                    })}  
                    className={style.form_control} 
                  />
                  <span className={style.error_message}>{errors.password?.message}</span>
                </div>
                <div className={`${style.portion} d-flex align-items-center justify-content-between`}>
                  <div className={`${style.check} d-flex align-items-center`}>
                      <input type="checkbox" name="" id="remember" />
                      <label htmlFor="remember"><span></span>Remember for 30 days</label>
                  </div>
                  <Link to={`${AgentCurrenLocation ? '/agent' : SupervisorCurrenLocation ? '/supervisor' : AdminCurrenLocation ? '/admin' : ResellerAdminCurrenLocation ? '/reseller-admin' : SuperAdminCurrenLocation ? '/super-admin' : null }/forgot-password`}>Forgot password</Link>
                </div>
                <div className={`${style.portion} d-flex align-items-center justify-content-between`}>
                  <button className={`${style.button} ${SuperAdminCurrenLocation || ResellerAdminCurrenLocation && style.superAdmin} d-flex align-items-center justify-content-center`}>Sign in</button>
                </div>
                <div className={`${style.portion} d-flex justify-content-center text-center ${style.account}`}>
                  {/* Don’t have an account? <Link to={'/agent/signup'}>Sign up</Link> */}
                  Unified Visual Engagement
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn
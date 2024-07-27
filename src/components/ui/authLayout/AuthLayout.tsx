import { Outlet, useLocation } from 'react-router-dom'
import style from './style.module.scss'
import LeftTextDetails from './leftTextDetails/LeftTextDetails'
import AuthHeader from './authHeader/AuthHeader'


const AuthLayout = () => {
  const location = useLocation()
  const SuperAdminCurrenLocation = location.pathname.indexOf('/super-admin')>=0
  const ResellerAdminCurrenLocation = location.pathname.indexOf('/reseller-admin')>=0
  return (
    <>
        <div className={`${style.user_auth_wrapper} ${SuperAdminCurrenLocation ? style.userAuthSuperAdmin : ResellerAdminCurrenLocation ? style.userAuthResellerAdmin : null} d-flex align-items-center`}>
            <AuthHeader />
            <div className={style.main}>
              <div className={`${style.sign_in_wrapper} d-flex justify-content-end`}>
                  <LeftTextDetails />
                  <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default AuthLayout
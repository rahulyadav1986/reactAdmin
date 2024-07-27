import { useContext } from 'react'
import style from './style.module.scss'
import { Outlet } from 'react-router-dom'
import { ContextHeader } from '../../../contexts/headerContext'

const MainWrapper = ({dashboard}:any) => {
    const defaultHeaderContext = useContext(ContextHeader)
  return (
    <div className={style.main_wrapper}>
        {
            defaultHeaderContext.statusDrop || defaultHeaderContext.callToggle || defaultHeaderContext.profileDrop || defaultHeaderContext.selectCampaignDrop ? <div className={style.overlay} onClick={defaultHeaderContext.handleDefaultOverlay}></div> : null
        }
        { 
            dashboard &&
            <>
                <Outlet />
                <div className={style.footer_area}>© {new Date().getFullYear()} Zuqo Corporation. All rights reserved.</div>
            </>
        }
    </div>
  )
}

export default MainWrapper
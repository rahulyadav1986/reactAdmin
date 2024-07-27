import StatusIcon from '/assets/dashboard/statusIcon.svg'
import CloseIcon from '/assets/dashboard/close.svg'
import style from './style.module.scss'
import { useContext } from 'react'
import { ContextDataBaseConnection } from '../../../../contexts/dataBaseConnectionContext'

const DatbaseConfirmationPopup = () => {
  const dataBaseConnectionContext = useContext(ContextDataBaseConnection)
  return (
    <>
    {
      dataBaseConnectionContext.databaseConnection &&
        <div className={`${style.database_confirmation_popup} d-flex align-items-center justify-content-center`}>
          <div className={`${style.main_area_wrapper} d-flex align-items-center justify-content-center flex-column`}>
              <span className={style.close} onClick={dataBaseConnectionContext.handleConnection}><img src={CloseIcon} alt="" /></span>
              <span><img src={StatusIcon} alt="" /></span>
              <h2>Database Disconnected</h2>
              <p>Please sign out and sign in again to resume your work!</p>
              <div className='d-flex align-items-center justify-content-center'>
                <button onClick={dataBaseConnectionContext.handleConnection}>cancle</button>
                <button className={style.bg} onClick={dataBaseConnectionContext.handleSignout}>signout</button>
              </div>
              
          </div>
      </div>
    }
    
    </>
  )
}

export default DatbaseConfirmationPopup
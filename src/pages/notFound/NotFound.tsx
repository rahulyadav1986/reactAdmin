import style from "./style.module.scss"
import ErrorIcon  from "/assets/dashboard/error.png"
const NotFound = () => {
  return (
    <div className={`${style.error_page_wrapper} d-flex align-items-center justify-content-center flex-column`}>
        <span><img src={ErrorIcon} alt="" /></span>
        <h2>Template is not ready, please wait, we are working on this <span>Template</span> </h2>
    </div>
  )
}

export default NotFound
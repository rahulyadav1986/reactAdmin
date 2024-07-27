import style from './style.module.scss'

const UserDetails = () => {
  return (
    <div className={`${style.user_Details_wrapper} d-flex justify-content-center`}>
        <div className={style.main_wrap}>
            <h4>Good morning, John</h4>
            <h5>What brings you to Zuqo ACPaaS Platform?</h5>
            <p>Select the options that best describe you. Don't worry, you can explore other options later</p>
        </div>
    </div>
  )
}

export default UserDetails
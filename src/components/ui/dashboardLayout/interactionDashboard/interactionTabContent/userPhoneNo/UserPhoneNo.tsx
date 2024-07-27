import style from './style.module.scss'

const UserPhoneNo = () => {
  return (
    <div className={style.user_phone_area_wrapper}>
        <h3>Phone number</h3>
        <input type="text" className={style.form_control} placeholder='Enter phone number' name="" id="" />
    </div>
  )
}

export default UserPhoneNo
import style from './style.module.scss'

const AccountInfoCard = () => {
  return (
    <div className={style.account_info_card_wrapper}>
        <h2>ACCOUNT INFO</h2>
        <ul className={`${style.list}`}>
            <li>Account Number: <strong>123456789</strong> </li>
            <li>Account Type: <strong>Classic</strong> </li>
            <li>Subscription Status: <strong>Active</strong> </li>
            <li>Membership Level: <strong>Gold</strong> </li>
        </ul>
    </div>
  )
}

export default AccountInfoCard
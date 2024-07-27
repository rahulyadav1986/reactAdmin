import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

const AuthHeader = () => {
  return (
    <header className={style.header}>
        <ul className={`${style.menu_wrapper} d-flex justify-content-end`}>
            <li><NavLink to={'/home'}>Home</NavLink></li>
            <li><NavLink to={'/support'}>Support</NavLink></li>
            <li><NavLink to={'/docs'}>Docs</NavLink></li>
        </ul>
    </header>
  )
}

export default AuthHeader
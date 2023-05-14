import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

export const Header = () => {
  
  return (
    <header className={css.header}>
      <NavLink className={css.navLink} to='/'>Список</NavLink>
      <NavLink className={css.navLink} to="/create">Створити</NavLink>
    </header>



  )
}

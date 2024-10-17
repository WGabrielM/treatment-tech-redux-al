import styles from './Navbar.modules.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <Logo className={styles.logo} />
    </nav>
  )
}
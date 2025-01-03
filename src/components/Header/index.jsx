import styles from './Header.module.css';
import logo from '../../assets/logo_NALOPOMO.png';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="#" onClick={() => window.location.reload()}>
          <img src={logo} alt="Nalo Pomo Logo" />
          <span className={styles.appName}>NALOPOMO</span>
        </a>
      </div>
      <ul className={styles.menu}>
        <li><a href="/"><i className="fa-solid fa-chart-simple"></i> Report</a></li>
        <li><a href="/about"><i className="fa-solid fa-gear"></i> Settings</a></li>
        <li><a href="/contact">Sign In</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;
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
      <span className={styles.menu}>
        <button><a href="/"><i className="fa-solid fa-chart-simple"></i> Report</a></button>
        <button><a href="/about"><i className="fa-solid fa-gear"></i> Settings</a></button>
        <button><a href="/contact"><i className="fa-solid fa-user"></i> Sign In</a></button>
        <button><a href="#"><i className="fa-solid fa-bars"></i></a></button>
      </span>
    </nav>
  </header>
)

export default Header;
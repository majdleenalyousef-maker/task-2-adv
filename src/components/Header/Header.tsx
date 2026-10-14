
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  bannerText: string;
  navLinks: NavLink[];
};

function Header({ bannerText, navLinks }: HeaderProps) {
  return (
    <header className={styles.header}>

      <div className={styles.topBanner}>
        <a href="#">
          {bannerText}
          <span >→</span>
        </a>
      </div>

      <div className={styles.navbar}>

        <a href="#home" className={styles.logo}>
          <img src={logo} alt="" />
        </a>

        <nav className={styles.navLinks} >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
  link.label === "Home"
    ? styles.home
    : link.label === "Contact"
    ? styles.contact
    : styles.navLink
}
            >
              {link.label}
            </a>
          ))}
        </nav>

    
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Menu"
        >
          <span aria-hidden="true">☰</span>
        </button>

      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <Link to="/">
            <img src="divar.svg" className={styles.logo} />
            </Link>
            <span>
                <img src="location.svg" />
                <p>تهران</p>
            </span>
        </div>
        <div>
            <Link to="/auth">
            <span>
                <img src="profile.svg" />
                <p>دیوار‌من</p>
            </span>
            </Link>
            <Link to="/dashboard" className={styles.button}>
            ثبت اگهی
            </Link>
        </div>
    </header>
  )
}

export default Header
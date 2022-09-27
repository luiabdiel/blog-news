import logoIgnite from "../../assets/logo-ignite.svg"

import styles from "./Header.module.scss"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoIgnite} alt="Logo do ignite" />
        </header>
    )
}
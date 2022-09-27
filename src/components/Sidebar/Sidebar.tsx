import { PencilLine } from 'phosphor-react'

import cover from '../../assets/cover.svg'
import { Avatar } from '../Avatar/Avatar'

import styles from './Sidebar.module.scss'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={cover} 
            />

            <div className={styles.profile}>
                <Avatar 
                    src="https://github.com/gustavopardini28.png" 
                />

                <strong>Gustavo Pardini</strong>
                <span>@Ratatouille do Aço</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
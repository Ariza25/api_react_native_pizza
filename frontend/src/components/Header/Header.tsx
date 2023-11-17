//styles
import styles from './Header.module.scss'

//image
import logoImg from '../../public/logo.svg'
import { FiLogOut } from 'react-icons/fi'

//next
import Image from 'next/image'
import Link from 'next/link'

//React
import { useContext } from 'react'

//context
import {AuthContext} from '../../contexts/AuthContext'

export function Header() {
    const {signOut} = useContext(AuthContext);


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image src={logoImg} width={190} height={60} alt="Logo Sujeito Pizzaria" priority={true} />
                </Link>
                <nav className={styles.menuNav}>
                    <Link legacyBehavior href="/category">
                        <a>Categoria</a>
                    </Link>
                    <Link legacyBehavior href="/product">
                        <a>Produtos</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#fff" size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}
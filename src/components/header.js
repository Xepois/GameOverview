import styles from '../styles/main.module.scss';

export default function Header() {
    return (
        <div className={styles.topBar}>
            <h1 className={styles.logoTitle}>spotl.gg</h1>
        </div>
    )
}
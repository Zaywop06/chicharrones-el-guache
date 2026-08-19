import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';

export function RootLayout() {
  return (
    <div className={styles.pageShell}>
      <a className={styles.skipLink} href="#main-content">
        Saltar al contenido principal
      </a>

      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <span className={styles.brand}>Chicharrones El Guache</span>
          <span className={styles.phase}>Sitio en construcción</span>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <small>Chicharrones El Guache</small>
        </div>
      </footer>
    </div>
  );
}

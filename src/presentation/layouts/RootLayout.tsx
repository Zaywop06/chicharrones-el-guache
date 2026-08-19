import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo-128.webp';
import { businessInfo, navigationItems, whatsappUrl } from '../../content/siteContent';
import styles from './RootLayout.module.css';

export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.pageShell}>
      <a className={styles.skipLink} href="#main-content">
        Saltar al contenido principal
      </a>

      <header
        className={styles.header}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsMenuOpen(false);
          }
        }}
      >
        <div className={`container ${styles.headerContent}`}>
          <Link className={styles.brand} to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} width="48" height="48" alt="" />
            <span>
              Chicharrones
              <strong>“El Guache”</strong>
            </span>
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="srOnly">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <nav id="site-navigation" className={styles.navigation} aria-label="Navegación principal">
            <ul data-open={isMenuOpen}>
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    end={item.path === '/'}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className={styles.mobileContact}>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <a className={styles.headerCta} href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div>
            <p className={styles.footerBrand}>{businessInfo.name}</p>
            <p>Tradición familiar, calidad y confianza desde 1980.</p>
          </div>
          <div>
            <p className={styles.footerLabel}>Visítanos</p>
            <p>{businessInfo.marketName}</p>
            <p>{businessInfo.schedule}</p>
          </div>
          <div>
            <p className={styles.footerLabel}>Contacto</p>
            <a href={businessInfo.phoneUrl}>{businessInfo.phoneDisplay}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedidos por WhatsApp
            </a>
          </div>
        </div>
        <div className={`container ${styles.footerBottom}`}>
          <small>
            © {new Date().getFullYear()} {businessInfo.name}
          </small>
          <small>Venta presencial en CDMX</small>
        </div>
      </footer>
    </div>
  );
}

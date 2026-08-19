import { Link } from 'react-router-dom';
import logo320 from '../../assets/images/logo-320.webp';
import logo640 from '../../assets/images/logo-640.webp';
import logo960 from '../../assets/images/logo-960.webp';
import { whatsappUrl } from '../../content/siteContent';
import styles from '../pages/HomePage.module.css';

export function HeroSection() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="home-title">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Desde 1980 · Tradición familiar</p>
          <h1 id="home-title">El sabor de una historia que sigue creciendo.</h1>
          <p className={styles.heroDescription}>
            Chicharrones “El Guache” nació como una forma de sacar adelante a la familia. Hoy
            seguimos atendiendo con la misma cercanía, calidad y respeto por cada peso.
          </p>
          <div className={styles.heroActions}>
            <a className="button buttonPrimary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
            <Link className="button buttonSecondary" to="/ubicacion">
              Cómo encontrarnos
            </Link>
          </div>
          <ul className={styles.heroFacts} aria-label="Datos principales">
            <li>
              <strong>1980</strong>
              <span>Inicio de nuestra historia</span>
            </li>
            <li>
              <strong>Sábados</strong>
              <span>11:00 a.m. a 4:00 p.m.</span>
            </li>
            <li>
              <strong>Peso exacto</strong>
              <span>Confianza en cada compra</span>
            </li>
          </ul>
        </div>

        <div className={styles.heroArtwork} aria-label="Identidad de Chicharrones El Guache">
          <span className={styles.heroGlow} aria-hidden="true" />
          <img
            src={logo640}
            srcSet={`${logo320} 320w, ${logo640} 640w, ${logo960} 960w`}
            sizes="(max-width: 48rem) 82vw, 42vw"
            width="640"
            height="640"
            alt="Logotipo de Chicharrones El Guache con un cerdito usando sombrero"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Tradición y sabor del tianguis</p>
        <h1 id="home-title">La base técnica ya está lista para crecer.</h1>
        <p className={styles.description}>
          Esta es la primera versión de Chicharrones El Guache. En las siguientes fases
          construiremos su historia, catálogo, ubicación y formas de contacto.
        </p>
        <div className={styles.status} role="status">
          <span className={styles.statusMarker} aria-hidden="true" />
          Fase 1: estructura inicial
        </div>
      </div>
    </section>
  );
}

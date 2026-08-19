import history640 from '../../assets/images/historia-tianguis-640.webp';
import history1200 from '../../assets/images/historia-tianguis-1200.webp';
import { SectionHeading } from '../components/SectionHeading';
import styles from '../pages/HomePage.module.css';

export function StorySection() {
  return (
    <section id="historia" className={styles.story}>
      <div className={`container ${styles.storyGrid}`}>
        <div className={styles.storyImage}>
          <img
            src={history640}
            srcSet={`${history640} 640w, ${history1200} 1200w`}
            sizes="(max-width: 48rem) calc(100vw - 2rem), 48vw"
            width="640"
            height="853"
            loading="lazy"
            alt="Atención y preparación de chicharrón en el puesto del tianguis"
          />
          <span className={styles.sinceBadge}>Desde 1980</span>
        </div>

        <div className={styles.storyContent}>
          <SectionHeading eyebrow="Nuestra historia" title="Un oficio que pasó de mano en mano." />
          <p>
            Todo comenzó con Ausencio Hernández, bisabuelo de la familia, quien encontró en el
            tianguis una alternativa para generar ingresos y construir un futuro para los suyos.
          </p>
          <p>
            Con el paso de los años, el negocio fue heredando experiencia, responsabilidad y una
            manera muy cercana de atender. Cada generación ha aportado nuevas ideas para elevar la
            calidad sin perder el trato familiar que nos identifica.
          </p>
          <p>
            El nombre “El Guache” honra las raíces michoacanas de la familia. Es una palabra común
            en Michoacán con la que el actual dueño se reconoce con cariño y orgullo.
          </p>

          <ol className={styles.timeline}>
            <li>
              <span>1980</span>
              <p>Ausencio Hernández inicia el negocio en el tianguis.</p>
            </li>
            <li>
              <span>Generaciones</span>
              <p>La experiencia y el compromiso se transmiten dentro de la familia.</p>
            </li>
            <li>
              <span>Hoy</span>
              <p>Seguimos evolucionando con mayor calidad y una atención confiable.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

import { businessInfo } from '../../content/siteContent';
import { SectionHeading } from '../components/SectionHeading';
import styles from '../pages/HomePage.module.css';

export function VisitSection() {
  return (
    <section id="ubicacion" className={styles.visit}>
      <div className={`container ${styles.visitGrid}`}>
        <div className={styles.visitIntro}>
          <SectionHeading
            eyebrow="Ubicación y horario"
            title="Nos vemos el sábado en La Providencia."
            description="Visítanos en nuestro puesto y elige directamente entre la variedad disponible del día."
          />
          <a
            className="button buttonPrimary"
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Google Maps
          </a>
        </div>

        <div className={styles.visitDetails}>
          <article>
            <p className={styles.detailLabel}>Dónde</p>
            <h3>{businessInfo.marketName}</h3>
            <div>
              <address>{businessInfo.address}</address>
              <p>{businessInfo.locationHint}</p>
            </div>
          </article>
          <article>
            <p className={styles.detailLabel}>Cuándo</p>
            <h3>Sábados</h3>
            <div>
              <p>De 11:00 a.m. a 4:00 p.m.</p>
              <p>Venta únicamente en el puesto.</p>
            </div>
          </article>
          <article>
            <p className={styles.detailLabel}>Cómo pagar</p>
            <h3>{businessInfo.paymentMethods}</h3>
            <div>
              <p>No manejamos cantidad mínima para pedidos anticipados.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

import { businessInfo, whatsappUrl } from '../../content/siteContent';
import styles from '../pages/HomePage.module.css';

export function ContactSection() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className={`container ${styles.contactCard}`}>
        <div>
          <p className={styles.contactEyebrow}>Contacto directo</p>
          <h2>¿Quieres apartar tu pedido?</h2>
          <p>
            Escríbenos para consultar la disponibilidad del sábado y preparar tu compra antes de que
            llegues al tianguis.
          </p>
        </div>
        <div className={styles.contactActions}>
          <a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noreferrer">
            Escribir por WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.phoneLink} href={businessInfo.phoneUrl}>
            {businessInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

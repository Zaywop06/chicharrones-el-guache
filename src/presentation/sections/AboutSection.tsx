import { SectionHeading } from '../components/SectionHeading';
import styles from '../pages/HomePage.module.css';

const values = [
  {
    number: '01',
    title: 'Calidad que se nota',
    description:
      'Cuidamos el producto que llega a tu mesa y trabajamos para mejorar con cada generación.',
  },
  {
    number: '02',
    title: 'Atención cercana',
    description:
      'Te recibimos con trato familiar, respondemos tus dudas y preparamos tu compra con cuidado.',
  },
  {
    number: '03',
    title: 'Confianza en el peso',
    description:
      'La fiabilidad es parte de nuestro servicio: entregamos pesos exactos y cuentas claras.',
  },
] as const;

export function AboutSection() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Sobre nosotros"
          title="Lo tradicional también puede mejorar cada día."
          description="Nuestra forma de trabajar se sostiene en tres compromisos sencillos."
        />

        <div className={styles.valueGrid}>
          {values.map((value) => (
            <article className={styles.valueCard} key={value.number}>
              <span aria-hidden="true">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

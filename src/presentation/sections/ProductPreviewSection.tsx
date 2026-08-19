import display640 from '../../assets/images/mostrador-variedad-640.webp';
import display1200 from '../../assets/images/mostrador-variedad-1200.webp';
import meaty480 from '../../assets/images/producto-carnudo-480.webp';
import meaty800 from '../../assets/images/producto-carnudo-800.webp';
import crispy480 from '../../assets/images/producto-crujiente-480.webp';
import crispy800 from '../../assets/images/producto-crujiente-800.webp';
import { whatsappUrl } from '../../content/siteContent';
import { SectionHeading } from '../components/SectionHeading';
import styles from '../pages/HomePage.module.css';

const previews = [
  {
    title: 'Variedad para elegir',
    description: 'Encuentra distintas texturas y cortes disponibles en nuestro mostrador.',
    src: display640,
    srcSet: `${display640} 640w, ${display1200} 1200w`,
    width: 640,
    height: 480,
    alt: 'Variedad de chicharrones exhibidos en el mostrador',
  },
  {
    title: 'Sabor para compartir',
    description: 'Piezas doradas preparadas para acompañar la comida o disfrutar en familia.',
    src: meaty480,
    srcSet: `${meaty480} 480w, ${meaty800} 800w`,
    width: 480,
    height: 360,
    alt: 'Piezas doradas de chicharrón recién preparadas',
  },
  {
    title: 'Textura crujiente',
    description: 'Seleccionamos cada pieza cuidando su textura y presentación.',
    src: crispy480,
    srcSet: `${crispy480} 480w, ${crispy800} 800w`,
    width: 480,
    height: 640,
    alt: 'Acercamiento de una pieza crujiente de chicharrón',
  },
] as const;

export function ProductPreviewSection() {
  return (
    <section id="productos" className={styles.products}>
      <div className="container">
        <div className={styles.sectionTopline}>
          <SectionHeading
            eyebrow="Nuestros productos"
            title="Una muestra de lo que encontrarás cada sábado."
            description="La disponibilidad y las presentaciones pueden cambiar. El catálogo completo se construirá en la siguiente fase."
          />
          <a className="textLink" href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar disponibilidad <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.productGrid}>
          {previews.map((preview, index) => (
            <article className={styles.productCard} key={preview.title}>
              <div className={styles.productImage}>
                <img
                  src={preview.src}
                  srcSet={preview.srcSet}
                  sizes="(max-width: 44rem) calc(100vw - 2rem), 33vw"
                  width={preview.width}
                  height={preview.height}
                  loading="lazy"
                  alt={preview.alt}
                />
                <span aria-hidden="true">0{index + 1}</span>
              </div>
              <h3>{preview.title}</h3>
              <p>{preview.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

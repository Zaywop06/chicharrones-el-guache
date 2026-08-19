import { frequentlyAskedQuestions } from '../../content/siteContent';
import { SectionHeading } from '../components/SectionHeading';
import styles from '../pages/HomePage.module.css';

export function FaqSection() {
  return (
    <section id="preguntas" className={styles.faq}>
      <div className={`container ${styles.faqGrid}`}>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que necesitas saber antes de visitarnos."
          description="Si tu pregunta no aparece aquí, con gusto te atendemos por WhatsApp."
        />

        <div className={styles.accordion}>
          {frequentlyAskedQuestions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className={styles.summaryIcon} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

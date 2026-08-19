import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  align?: 'start' | 'center';
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  align = 'start',
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className={styles.heading} data-align={align}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}

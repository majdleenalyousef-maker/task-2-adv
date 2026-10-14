
import styles from "./PagesSection.module.css";

type PageCardProps = {
  title: string;
  description: string;
  href: string;
};

function PageCard({
  title,
  description,
  href,
}: PageCardProps) {
  return (
    <article className={styles.pageCard}>
      <h3 className={styles.cardTitle}>
        {title}
      </h3>

      <div
        className={styles.decoration}
        aria-hidden="true"
      >
        <span className={styles.decorLine} />
        <span className={styles.decorLine} />
        <span className={styles.decorLine} />
        <span className={styles.decorLine} />
        <span className={styles.decorLine} />
        <span className={styles.decorLine} />
      </div>

      <p className={styles.cardDescription}>
        {description}
      </p>

      <a
        href={href}
        className={styles.learnMoreButton}
      >
        Learn More
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default PageCard;

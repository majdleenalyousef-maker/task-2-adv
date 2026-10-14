
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.badge}>
        {badge}
      </span>

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;

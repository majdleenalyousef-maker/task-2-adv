
import styles from "./BenefitsSection.module.css";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.iconContainer}>
        <img
          src={icon}
          alt=""
          className={styles.icon}
        />
      </div>

      <h3 className={styles.cardTitle}>
        {title}
      </h3>

      <p className={styles.cardDescription}>
        {description}
      </p>
    </div>
  );
}

export default BenefitCard;

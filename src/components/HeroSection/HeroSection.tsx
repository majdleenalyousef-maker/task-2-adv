
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/hero-image.png";
import StatCard from "./StatCard";

type Statistic = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  subtitle: string;
  title: string;
  highlight: string;
  description: string;
  statistics: Statistic[];
};

type Circle = {
  id: number;
  top: number;
  left: number;
  size: number;
};

// Approximate positions relative to Image Container
const circles: Circle[] = [
  { id: 1, top: 15, left: 40, size: 5 },
  { id: 2, top: 14, left: 53, size: 5.2 },
  { id: 3, top: 16, left: 65, size: 5.8 },
  { id: 4, top: 21, left: 77, size: 6 },
  { id: 5, top: 29, left: 87, size: 6 },
  { id: 6, top: 40, left: 92, size: 6 },
  { id: 7, top: 52, left: 93, size: 6 },
  { id: 8, top: 63, left: 89, size: 6.5 },

  { id: 9, top: 69, left: 80, size: 6.5 },
  { id: 10, top: 73, left: 68, size: 7 },
  { id: 11, top: 76, left: 55, size: 8 },
  { id: 12, top: 70, left: 43, size: 8 },

  { id: 13, top: 75, left: 20, size: 4 },
  { id: 14, top: 64, left: 15, size: 4 },
  { id: 15, top: 52, left: 14, size: 4.5 },
  { id: 16, top: 40, left: 15, size: 4.5 },
  { id: 17, top: 29, left: 20, size: 4.5 },
  { id: 18, top: 21, left: 29, size: 4.5 },

  // Small decorative dots near the bottom
  { id: 19, top: 82, left: 28, size: 3 },
  { id: 20, top: 89, left: 38, size: 3 },
  { id: 21, top: 93, left: 50, size: 2.8 },
  { id: 22, top: 93, left: 62, size: 2.8 },
  { id: 23, top: 89, left: 74, size: 3 },
  { id: 24, top: 82, left: 86, size: 3 },
];

function HeroSection({
  subtitle,
  title,
  highlight,
  description,
  statistics,
}: HeroSectionProps) {
  return (
    <section id="home" className={styles.hero}>
      {/* Image Container */}
      
<div className={styles.imageContainer}>

  {/* Background and Children */}
  <img
    src={heroImage}
    alt="Two happy children at Little Learners Academy"
    className={styles.heroImage}
  />

  {/* Decorative Circles */}
  <div
    className={styles.decorativeCircles}
    aria-hidden="true"
  >
    {circles.map((circle) => (
      <span
        key={circle.id}
        className={styles.circle}
        style={{
          top: `${circle.top}%`,
          left: `${circle.left}%`,
          width: `${circle.size}%`,
        }}
      />
    ))}
  </div>

  {/* Outer Border Corner Dots */}
  <span
    className={`${styles.cornerDot} ${styles.topLeft}`}
    aria-hidden="true"
  />

  <span
    className={`${styles.cornerDot} ${styles.topRight}`}
    aria-hidden="true"
  />

  <span
    className={`${styles.cornerDot} ${styles.bottomLeft}`}
    aria-hidden="true"
  />

  <span
    className={`${styles.cornerDot} ${styles.bottomRight}`}
    aria-hidden="true"
  />

</div>


      {/* Text and Statistics */}
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>
            {subtitle}
          </p>

          <h1 className={styles.title}>
            {title}{" "}
            <span>{highlight}</span>
          </h1>

          <p className={styles.description}>
            {description}
          </p>
        </div>

        <div className={styles.statistics}>
          {statistics.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

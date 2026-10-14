
import styles from "./TestimonialsSection.module.css";

type TestimonialCardProps = {
  image: string;
  name: string;
  rating: number;
  review: string;
};

function TestimonialCard({
  image,
  name,
  rating,
  review,
}: TestimonialCardProps) {
  return (
    <article className={styles.testimonialCard}>
      <div className={styles.personInfo}>
        <img
          src={image}
          alt=""
          className={styles.avatar}
        />

        <h3 className={styles.personName}>
          {name}
        </h3>
      </div>

      <div
        className={styles.stars}
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={
              index < rating
                ? styles.activeStar
                : styles.inactiveStar
            }
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      <p className={styles.review}>
        {review}
      </p>
    </article>
  );
}

export default TestimonialCard;

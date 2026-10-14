
import { useState } from "react";

import styles from "./TestimonialsSection.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import TestimonialCard from "./TestimonialCard";

import jenniferImage from "../../assets/testimonials/Icon (1).png";
import davidImage from "../../assets/testimonials/Icon (2).png";
import emilyImage from "../../assets/testimonials/Icon (3).png";

const testimonials = [
  {
    id: 1,
    image: jenniferImage,
    name: "Jennifer B",
    rating: 5,
    review:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 2,
    image: davidImage,
    name: "David K",
    rating: 5,
    review:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 3,
    image: emilyImage,
    name: "Emily L",
    rating: 5,
    review:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = [
    ...testimonials.slice(startIndex),
    ...testimonials.slice(0, startIndex),
  ];

  function handleNext() {
    setStartIndex((previous) =>
      (previous + 1) % testimonials.length
    );
  }

  function handlePrevious() {
    setStartIndex((previous) =>
      (previous - 1 + testimonials.length) %
      testimonials.length
    );
  }

  return (
    <section
      id="testimonials"
      className={styles.testimonialsSection}
    >
      <SectionHeading
        badge="Their Happy Words 🤗"
        title="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className={styles.testimonialsContent}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.previousButton}`}
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className={styles.testimonialsGrid}>
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;

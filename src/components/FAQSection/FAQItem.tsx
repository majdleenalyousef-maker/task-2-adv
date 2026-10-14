
import { useState } from "react";
import styles from "./FAQSection.module.css";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function toggleAnswer() {
    setIsOpen((previous) => !previous);
  }

  return (
    <div
      className={`${styles.faqItem} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button
        type="button"
        className={styles.questionButton}
        onClick={toggleAnswer}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>
          {question}
        </span>

        <span
          className={styles.toggleIcon}
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className={styles.answerContainer}>
          <p className={styles.answer}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;

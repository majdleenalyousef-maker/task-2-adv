
import styles from "./FAQSection.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import FAQItem from "./FAQItem";

const leftQuestions = [
  {
    id: 1,
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, our academy follows a comfortable and practical uniform policy to help students feel part of our school community.",
  },
  {
    id: 3,
    question: "What extracurricular activities are available for students?",
    answer:
      "We offer a variety of activities that encourage creativity, teamwork, physical development, and exploration.",
  },
  {
    id: 4,
    question: "What extracurricular activities are available for students?",
    answer:
      "Our extracurricular programs include opportunities for art, music, movement, and other age-appropriate learning experiences.",
  },
];

const rightQuestions = [
  {
    id: 5,
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "We work closely with parents to understand each child's dietary requirements and take appropriate precautions.",
  },
  {
    id: 6,
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "We maintain small class sizes to provide personalized attention and support each child's learning needs.",
  },
  {
    id: 7,
    question: "How do you handle discipline and behavior management?",
    answer:
      "We use positive guidance and age-appropriate approaches that encourage respect, communication, and emotional growth.",
  },
  {
    id: 8,
    question: "How do I apply for admission to Little Learners Academy?",
    answer:
      "You can contact our admissions team to learn about the application process and the documents required for enrollment.",
  },
];

function FAQSection() {
  return (
    <section
      id="faq"
      className={styles.faqSection}
    >
      <SectionHeading
        badge="Solutions For The Doubts"
        title="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      <div className={styles.faqGrid}>
        <div className={styles.faqColumn}>
          {leftQuestions.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>

        <div className={styles.faqColumn}>
          {rightQuestions.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;


import styles from "./BenefitsSection.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import BenefitCard from "./BenefitCard";

import holisticIcon from "../../assets/benefits/Icon.png";
import educatorsIcon from "../../assets/benefits/crown.fill.png";
import environmentIcon from "../../assets/benefits/Icon (1).png";
import playIcon from "../../assets/benefits/Icon (2).png";
import attentionIcon from "../../assets/benefits/Icon (3).png";
import parentsIcon from "../../assets/benefits/Icon (4).png";

const benefits = [
  {
    id: 1,
    icon: holisticIcon,
    title: "Holistic Learning Approach",
    description:
    "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
  },
  {
    id: 2,
    icon: educatorsIcon,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    id: 3,
    icon: environmentIcon,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    id: 4,
    icon: playIcon,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    id: 5,
    icon: attentionIcon,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    id: 6,
    icon: parentsIcon,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

function BenefitsSection() {
  return (
    <section
      id="benefits"
      className={styles.benefitsSection}
    >
      <SectionHeading
        badge="Children Deserve Bright Future"
        title="Our Benefits"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />

      <div className={styles.benefitsGrid}>
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;

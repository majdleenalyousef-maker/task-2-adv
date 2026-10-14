
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import FAQSection from "./components/FAQSection/FAQSection";
import PagesSection from "./components/PagesSection/PagesSection";
import Footer from "./components/Footer/Footer"; 

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Student Life", href: "#student-life" },
  { label: "Contact", href: "#contact" },
];

const statistics = [
  {
    value: "+7000",
    label: "Students Passed Out",
  },
  {
    value: "+37",
    label: "Awards & Recognitions",
  },
  {
    value: "+15",
    label: "Experience Educators",
  },
];

function App() {
  return (
      <>
      <Header
        bannerText="Admission is Open, Grab your seat now"
        navLinks={navLinks}
      />

      <main>
        <HeroSection
          subtitle="Welcome to Little Learners Academy"
          title="Where Young Minds Blossom and"
          highlight="Dreams Take Flight."
          description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
          statistics={statistics}
        />
        <BenefitsSection />
          <TestimonialsSection />
          <FAQSection />
            <PagesSection />
      </main>
        <Footer />
    </>
  );
}

export default App;

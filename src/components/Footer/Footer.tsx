
import styles from "./Footer.module.css";

import logo from "../../assets/Logo.svg";

import emailIcon from "../../assets/footer/Icon (1).png";
import phoneIcon from "../../assets/footer/Icon (2).png";
import locationIcon from "../../assets/footer/Icon (3).png";

import facebookIcon from "../../assets/footer/Icon (4).png";
import twitterIcon from "../../assets/footer/Icon (5).png";
import linkedinIcon from "../../assets/footer/Icon (6).png";

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

type Contact = {
  icon: string;
  text: string;
  href?: string;
};

type SocialLink = {
  name: string;
  icon: string;
  href: string;
};

const footerGroups: FooterGroup[] = [
  {
    title: "Home",
    links: [
      { label: "Features", href: "#benefits" },
      { label: "Our Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Our Mission", href: "#pages" },
      { label: "Our Vision", href: "#pages" },
      { label: "Awards and Recognitions", href: "#pages" },
      { label: "History", href: "#pages" },
      { label: "Teachers", href: "#pages" },
    ],
  },
  {
    title: "Academics",
    links: [
      { label: "Special Features", href: "#pages" },
      { label: "Gallery", href: "#pages" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Information", href: "#contact" },
      { label: "Map & Direction", href: "#contact" },
    ],
  },
];

const contacts: Contact[] = [
  {
    icon: emailIcon,
    text: "hello@littlelearners.com",
    href: "mailto:hello@littlelearners.com",
  },
  {
    icon: phoneIcon,
    text: "+91 91813 23 2309",
    href: "tel:+9191813232309",
  },
  {
    icon: locationIcon,
    text: "Somewhere in the World",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: facebookIcon,
    href: "https://www.facebook.com",
  },
  {
    name: "Twitter",
    icon: twitterIcon,
    href: "https://www.twitter.com",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    href: "https://www.linkedin.com",
  },
];

function Footer() {
  return (
    <footer className={styles.footer} id="contact">

      <div className={styles.topSection}>

        <div className={styles.brandColumn}>
          <img
            src={logo}
            alt="Little Learners Academy"
            className={styles.logo}
          />

          <p className={styles.brandDescription}>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>

          <div className={styles.contactList}>
            {contacts.map((contact) =>
              contact.href ? (
                <a
                  key={contact.text}
                  href={contact.href}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    <img
                      src={contact.icon}
                      alt=""
                      className={styles.iconImage}
                    />
                  </span>

                  <span>{contact.text}</span>
                </a>
              ) : (
                <div
                  key={contact.text}
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>
                    <img
                      src={contact.icon}
                      alt=""
                      className={styles.iconImage}
                    />
                  </span>

                  <span>{contact.text}</span>
                </div>
              )
            )}
          </div>
        </div>

        <nav
          className={styles.linksGrid}
          aria-label="Footer navigation"
        >
          {footerGroups.map((group) => (
            <div
              key={group.title}
              className={styles.linkColumn}
            >
              <h3 className={styles.columnTitle}>
                {group.title}
              </h3>

              {group.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

      </div>

      <div className={styles.bottomSection}>

        <div className={styles.legalLinks}>
          <a href="#policies">Terms of Service</a>
          <a href="#policies">Privacy Policy</a>
          <a href="#policies">Cookie Policy</a>
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img
                src={social.icon}
                alt=""
                className={styles.socialIcon}
              />
            </a>
          ))}
        </div>

      </div>

      <p className={styles.copyright}>
        Copyright © [2023] Little Learners Academy.
        All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;

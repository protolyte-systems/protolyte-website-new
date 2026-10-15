import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { ServiceHeroContent } from "../../../types/services";
import PrimaryButton from "../../common/PrimaryButton";
import styles from "./ServicesHeroSection.module.css";

interface ServicesHeroSectionProps {
  content: ServiceHeroContent;
}

function ServicesHeroSection({ content }: ServicesHeroSectionProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.gradient} />
      <div className={styles.container}>
        <div className={styles.badge}>
          <span />
          {content.badge}
        </div>

        <h2>
          {content.title} <span>{content.highlightedTitle}</span> for the Digital Age
        </h2>

        <p>{content.description}</p>

        <div className={styles.actions}>
      

            <PrimaryButton onClick={() => navigate("/casestudies")}>{content.primaryAction}</PrimaryButton>
        
        </div>
      </div>
    </section>
  );
}

export default ServicesHeroSection;

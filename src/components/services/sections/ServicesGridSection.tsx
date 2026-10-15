import type { JSX } from "react";
import { Link } from "react-router-dom";
import type { ServiceCard } from "../../../types/services";
import styles from "./ServicesGridSection.module.css";

interface ServicesGridSectionProps {
  items: ServiceCard[];
}

function ServicesGridSection({ items }: ServicesGridSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.href}>
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGridSection;

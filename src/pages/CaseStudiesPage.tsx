import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./CaseStudiesPage.module.css";

const filterChips = ["All Industries", "Logistics", "FinTech", "Healthcare"] as const;
type Filter = (typeof filterChips)[number];

const studies = [
  {
    industry: "FinTech" as const,
    badge: "Financial Technology",
    title: "Cloud Transformation for FinTech Teams",
    challenge: "Legacy infrastructure limiting scalability and security compliance.",
    solution: "Cloud-ready application foundations and a secure delivery approach.",
    result: "Cloud-ready delivery",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg_ofL93DfPoVy0fBlXJ8h2No75HVfOilioDR97LbveCptX2WfmspgU_olNJsDWqRQV4Qidm1S1IbH1LlgmyNb6C-CssAx1PcrCII_DeqpIdLM-k-OaeQVOhUGbaLCD_lgJz30AaUd_IkaEkB14hyh6nyfr9CuZlQpuBlnzD8dS2xm0U5f_GQ0p8aYBFcKN1I-qeElKAVLLHvxNqyWE5GYBW4p41wdOuzoVN36W3BFfA0Got6NbSS2Mtd9DJ5-LQHrd7oAUKDSGgv_",
    alt: "Digital financial data charts and analytical interface",
  },
  {
    industry: "Healthcare" as const,
    badge: "Healthcare",
    title: "Predictive Diagnostics Platform",
    challenge: "Delayed diagnosis caused by fragmented data across care systems.",
    solution: "A structured data platform supporting clinical decision workflows.",
    result: "Faster insight delivery",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwBDqjD-4Y9Ob2TXUL96nAuK1yHkmW8LZhrOuI7ZZhULQ7M1nTKvDER8yOAkzqh_wNeIIMGMwXChdCOrkW5ACObl5_eU43rQCuWS_vTbKVbenCA5BpvYJ2AgUkxQg-zB8lsWkMHOKkpd_WHDwgHM9IQCvZuilm5SIhPCSZQfGrJ-cWG33bdGDM3Z0VsFzOVsKr8eajvm2WW1NVXLGHqXGtLrhKa7Uv07jUk3uENcPNfu9sc27IMKCibEkBy423hd9tHJxua8QIqvbC",
    alt: "Modern medical diagnostic equipment and blue neon lighting",
  },
];

function CaseStudiesPage(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Industries");
  const showLogistics = activeFilter === "All Industries" || activeFilter === "Logistics";
  const visibleStudies = activeFilter === "All Industries" ? studies : studies.filter((study) => study.industry === activeFilter);

  return <div className={styles.page}>
    <Navbar items={navItems} />
    <main className={styles.main}>
      <section className={styles.hero}><h1>Impact through <span>Intelligence.</span></h1><p>Explore the kinds of practical digital foundations and customer experiences Protolyte helps teams create.</p></section>
      <section className={styles.filters} aria-label="Filter case studies"><span>Filter by:</span>{filterChips.map((chip) => <button key={chip} type="button" className={activeFilter === chip ? styles.filterActive : styles.filterItem} onClick={() => setActiveFilter(chip)} aria-pressed={activeFilter === chip}>{chip}<span className="material-symbols-outlined">expand_more</span></button>)}</section>
      {showLogistics && <section className={styles.featuredCard}>
        <div className={styles.featuredImageWrap}><div className={styles.featuredOverlay} /><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4W3g8etkWtyD9rwxc5pn9_VIs4mM04PGtpfbsEAinmQgCt2rIpUPNgheRr_JRGI6Si3ylYNwtDeOhjQxPozzXFxQjALcRhuOAiamxdYuP2SR-i-bJo7oxGvpTbK6nDiuPGQso1cSlVQo1L4aUsf7zbPw2HkMwBtCZ1sNxknToVMSfqOWnhm3mYBFDQuSaW-GqufzoLEHx05q1lrWXeKvB8ZkpYbj9SmJx6yY06yJSUtJ5eOfOCasIwOArouduRbBYKREnz0sAcHXh" alt="Modern shipping containers at an automated port terminal" /></div>
        <div className={styles.featuredContent}><div className={styles.featureTag}><span className="material-symbols-outlined">local_shipping</span>Logistics &amp; Supply Chain</div><h2>Modernizing Logistics Operations with AI</h2><div className={styles.featureMeta}><div><small>Challenge</small><p>Disconnected data and manual tracking across logistics workflows.</p></div><div><small>Approach</small><p>Clearer data visibility and decision-support architecture for operations teams.</p></div><div className={styles.resultBox}><small>Focus</small><strong>Operational visibility</strong></div></div><Link to="/services" className={styles.primaryButton}>Explore services <span className="material-symbols-outlined">arrow_forward</span></Link></div>
      </section>}
      <section className={styles.grid}>{visibleStudies.map((study) => <article className={styles.card} key={study.title}><div className={styles.cardImageWrap}><img src={study.image} alt={study.alt} /><span>{study.badge}</span></div><div className={styles.cardBody}><h3>{study.title}</h3><p><strong>Challenge:</strong> {study.challenge}</p><p><strong>Approach:</strong> {study.solution}</p><div className={styles.cardResult}>{study.result}</div><Link to="/services" className={styles.textButton}>Explore services <span className="material-symbols-outlined">chevron_right</span></Link></div></article>)}</section>
      <section className={styles.cta}><div><h2>Ready to build what is next?</h2><p>Explore the product and engineering foundations Protolyte can help you create.</p></div><div className={styles.ctaActions}><Link to="/services" className={styles.lightButton}>Explore services</Link><Link to="/products/martlyte" className={styles.outlineButton}>Explore Martlyte</Link></div></section>
    </main>
    <Footer groups={footerGroups} />
  </div>;
}
export default CaseStudiesPage;
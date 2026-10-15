import { Link } from "react-router-dom";
import type { JSX } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./MetalytePage.module.css";

const features = [
  ["forum", "One organised inbox", "Bring customer conversations into one calm workspace so teams can respond with context."],
  ["groups", "Contacts that stay useful", "Keep customer contacts close to the conversations, campaigns and activity that matter."],
  ["campaign", "Smart campaigns", "Create focused communication campaigns for updates, offers and customer engagement."],
  ["query_stats", "Live business insights", "Track messages, delivery health and campaign activity from a clear business overview."],
];

function MetalytePage(): JSX.Element {
  return <div className={styles.page}><Navbar items={navItems} /><main>
    <section className={styles.hero}><div className={styles.copy}><p className={styles.eyebrow}>METALYTE BUSINESS OS</p><h1>Every customer conversation,<br /><em>beautifully organised.</em></h1><p>Metalyte is a business communication and marketing platform that connects WhatsApp, contacts, campaigns and insights in one workspace for teams that move quickly.</p><div className={styles.actions}><a href="#features" className={styles.primary}>Explore Metalyte <span>↓</span></a><Link to="/products" className={styles.secondary}>All products <span>→</span></Link></div><div className={styles.chips}><span>WhatsApp inbox</span><span>Smart campaigns</span><span>Live analytics</span></div></div><div className={styles.visual}><img src="/images/metalyte-business-os.png" alt="Metalyte Business OS communication and marketing workspace" /><div className={styles.status}><span /> Live business overview</div></div></section>
    <section id="features" className={styles.featureSection}><div className={styles.heading}><p className={styles.kicker}>A CLEARER CUSTOMER WORKSPACE</p><h2>Keep conversations moving without losing the context.</h2><p>Metalyte gives teams a practical place to manage communication and understand what is working.</p></div><div className={styles.featureGrid}>{features.map(([icon,title,text]) => <article key={title}><span className="material-symbols-outlined">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={styles.flow}><p className={styles.kicker}>FROM MESSAGE TO MOMENTUM</p><div className={styles.flowGrid}><div><span>01</span><h3>Connect</h3><p>Bring your communication channels and customer contacts into one business workspace.</p></div><div><span>02</span><h3>Communicate</h3><p>Respond clearly, build campaigns and keep customer communication coordinated.</p></div><div><span>03</span><h3>Understand</h3><p>Use delivery health and campaign activity to make the next message more useful.</p></div></div></section>
    <section className={styles.cta}><p>BUILT FOR CUSTOMER-FOCUSED TEAMS</p><h2>Turn every conversation into a stronger customer relationship.</h2><Link to="/products">View all products <span>→</span></Link></section>
  </main><Footer groups={footerGroups} /></div>;
}
export default MetalytePage;
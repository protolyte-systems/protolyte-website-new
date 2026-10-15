import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./MartlytePage.module.css";
import type { JSX } from "react";

const capabilities = [
  { icon: "sync", title: "POS-safe synchronisation", text: "Keep your existing POS running while Martlyte securely reads your product, price and inventory data." },
  { icon: "phone_iphone", title: "Your branded customer app", text: "Give customers a fast, familiar grocery-shopping experience under your own store brand." },
  { icon: "shopping_bag", title: "Orders in one place", text: "Receive, manage and fulfil online orders through a clear store operations dashboard." },
  { icon: "sell", title: "Offers that bring customers back", text: "Create coupons and product offers that make repeat shopping easy." },
];

const steps = [
  ["01", "Connect your store", "Install the lightweight Sync Agent alongside your existing POS. It reads your catalogue without changing the POS database."],
  ["02", "Launch your catalogue", "Products, prices and stock become available in your branded customer experience."],
  ["03", "Grow repeat orders", "Run offers, serve local customers and manage every order from one workspace."],
];

function MartlytePage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className={styles.eyebrow}><span>●</span> MARTLYTE FOR SUPERMARKETS</p>
              <h1>Your supermarket.<br />Your customers.<br /><em>Your app.</em></h1>
              <p className={styles.heroCopy}>Martlyte connects your existing POS to a branded grocery app, live catalogue, offers and online order operations.</p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="mailto:hello@protolyte.in?subject=Martlyte%20demo%20request">Book a free demo <span>→</span></a>
                <a className={styles.secondaryAction} href="#how-it-works">How it works <span>↓</span></a>
              </div>
              <div className={styles.proof}><span><strong>POS-safe</strong> integration</span><span><strong>One store</strong>, one customer relationship</span></div>
            </motion.div>
            <motion.div className={styles.visual} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.12 }}>
              <div className={styles.visualGlow} />
              <img src="/images/martlyte-dashboard-poster.png" alt="Martlyte dashboard and customer grocery ordering app" />
              <div className={styles.statusCard}><span className={styles.statusDot} /> POS and cloud connected</div>
            </motion.div>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionKicker}>BUILT FOR LOCAL GROCERY</p>
          <h2>Build your digital store without replacing the systems you trust.</h2>
          <p>Martlyte lets independent supermarkets offer the convenience customers expect while retaining control over their catalogue, brand and customer relationships.</p>
        </section>

        <section className={styles.capabilities}>
          {capabilities.map((item, index) => <motion.article key={item.title} className={styles.capability} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <h3>{item.title}</h3><p>{item.text}</p>
          </motion.article>)}
        </section>

        <section id="how-it-works" className={styles.flow}>
          <div className={styles.flowHeading}><p className={styles.sectionKicker}>HOW IT WORKS</p><h2>From store shelf to customer screen.</h2><p>Designed for a safe, practical rollout at your pace.</p></div>
          <div className={styles.steps}>{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className={styles.ownership}>
          <div><p className={styles.sectionKicker}>OWN THE RELATIONSHIP</p><h2>Built around your store, not a marketplace.</h2><p>Martlyte supports the way your supermarket already operates, while giving customers a direct way to discover products, place orders and return for their weekly essentials.</p></div>
          <ul><li><span>✓</span> Store-specific catalogue and inventory</li><li><span>✓</span> Customer app, orders and offers</li><li><span>✓</span> Admin dashboard for store operations</li><li><span>✓</span> Designed for gradual rollout</li></ul>
        </section>

        <section className={styles.cta}>
          <p>READY TO GO ONLINE?</p><h2>Bring your supermarket closer to every customer.</h2>
          <a href="mailto:hello@protolyte.in?subject=Martlyte%20demo%20request">Talk to Martlyte <span>→</span></a>
        </section>
      </main>
      <Footer groups={footerGroups} />
    </div>
  );
}

export default MartlytePage;
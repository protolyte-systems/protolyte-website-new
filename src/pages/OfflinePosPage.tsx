import { Link } from "react-router-dom";
import type { JSX } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./OfflinePosPage.module.css";

const billingFeatures = [
  ["barcode_scanner", "Fast billing", "Scan with a USB barcode reader or search products from a focused billing screen."],
  ["photo_camera", "Camera backup", "Use the camera as a practical fallback when a barcode needs to be read at the counter."],
  ["payments", "Flexible payments", "Complete bills using cash, UPI, card or credit, with discounts, tax and loyalty support."],
  ["receipt_long", "Returns and history", "Review sales history and handle returns or refunds without leaving the store workflow."],
];
const operations = [
  ["inventory_2", "Inventory & supply", "Product inventory, low-stock attention, smart reorder, quick restock and purchase orders."],
  ["local_shipping", "Store operations", "Delivery manager, quotations, estimates and an operations centre for day-to-day coordination."],
  ["groups", "Customer & accounts", "Customers and dues, supplier directory, shop expenses, price-change log and reports & P&L."],
  ["shield", "Control & continuity", "Roles, branch locations, staff PINs, attendance, security trail, backup & restore, and system health."],
];

function OfflinePosPage(): JSX.Element {
  return <div className={styles.page}><Navbar items={navItems} /><main>
    <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}><span>●</span> PROTOLYTE OFFLINE POS</p><h1>Every counter moving.<br /><em>Even when the internet is not.</em></h1><p>Offline POS is a local-first supermarket system for billing, inventory and operations. It keeps core store workflows available through a local SQLite database.</p><div className={styles.actions}><a href="#features" className={styles.primaryAction}>Explore features <span>↓</span></a><Link to="/products" className={styles.secondaryAction}>All products <span>→</span></Link></div><div className={styles.badges}><span>● Local SQLite database</span><span>● Barcode-scanner ready</span><span>● Built for supermarket teams</span></div></div><div className={styles.productVisual}><img src="/images/offline-pos-billing.png" alt="Offline POS billing interface with product search, barcode scanning and billing cart" /><div className={styles.visualLabel}><span className="material-symbols-outlined">wifi_off</span> Built to work offline</div></div></section>
    <section id="features" className={styles.featureSection}><div className={styles.sectionHeading}><p className={styles.kicker}>BILLING WITHOUT FRICTION</p><h2>One focused counter experience.</h2><p>Give cashiers the shortcuts and fallbacks they need to keep the queue moving.</p></div><div className={styles.featureGrid}>{billingFeatures.map(([icon,title,text]) => <article key={title}><span className="material-symbols-outlined">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={styles.workflow}><div className={styles.workflowIntro}><p className={styles.kicker}>BEYOND THE COUNTER</p><h2>Run the rest of the store from the same system.</h2><p>Offline POS brings the practical work around a supermarket together, from replenishment to reporting and operational control.</p></div><div className={styles.operations}>{operations.map(([icon,title,text],index) => <article key={title}><span className={styles.number}>0{index + 1}</span><span className={`material-symbols-outlined ${styles.operationIcon}`}>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={styles.reliability}><div><p className={styles.kicker}>LOCAL-FIRST BY DESIGN</p><h2>Your store should not stop when a connection does.</h2><p>Core billing and inventory workflows are designed around local storage. When you are ready for connected customer ordering, Martlyte can extend the digital experience without changing how your POS operates.</p></div><Link to="/products/martlyte" className={styles.martlyteLink}>Explore Martlyte <span>→</span></Link></section>
  </main><Footer groups={footerGroups} /></div>;
}
export default OfflinePosPage;
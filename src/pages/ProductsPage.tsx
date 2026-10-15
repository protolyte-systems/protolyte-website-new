import { Link } from "react-router-dom";
import type { JSX } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./ProductsPage.module.css";

const products = [
  { tag: "ONLINE GROCERY PLATFORM", icon: "shopping_bag", name: "Martlyte", description: "A branded customer ordering app, POS-safe synchronisation, offers and store operations for modern supermarkets.", href: "/products/martlyte", action: "Explore Martlyte", tone: "primary" },
  { tag: "DESKTOP RETAIL SOFTWARE", icon: "point_of_sale", name: "Offline POS", description: "Reliable local billing, inventory and day-to-day supermarket operations built for stores that need to keep moving.", href: "/products/offline-pos", action: "Explore Offline POS", tone: "dark" },
  { tag: "BUSINESS COMMUNICATION & MARKETING", icon: "forum", name: "Metalyte", description: "A business workspace for WhatsApp, customer contacts, marketing campaigns and live communication insights.", href: "/products/metalyte", action: "Explore Metalyte", tone: "soft" },
];

function ProductsPage(): JSX.Element {
  return <div className={styles.page}><Navbar items={navItems} /><main><section className={styles.hero}><p>PROTOLYTE PRODUCTS</p><h1>Technology built for<br /><span>how your business works.</span></h1><div>Explore products that connect operations, customer experiences and practical growth.</div></section><section className={styles.products}>{products.map((product) => <article key={product.name} className={[styles.card, styles[product.tone]].join(" ")}><div className={styles.cardTop}><span className="material-symbols-outlined">{product.icon}</span><small>{product.tag}</small></div><h2>{product.name}</h2><p>{product.description}</p>{product.href ? <Link to={product.href} className={styles.productLink}>{product.action} <span>→</span></Link> : <span className={styles.comingSoon}>{product.action}</span>}</article>)}</section><section className={styles.cta}><p>ONE PRODUCT PARTNER</p><h2>Start with the product that solves today’s problem.</h2><Link to="/products/martlyte">Explore Martlyte <span>→</span></Link></section></main><Footer groups={footerGroups} /></div>;
}
export default ProductsPage;
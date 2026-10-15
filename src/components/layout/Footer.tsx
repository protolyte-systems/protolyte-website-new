import { Link } from "react-router-dom";
import BrandLogo from "../common/BrandLogo";
import type { FooterLinkGroup } from "../../types/home";
import styles from "./Footer.module.css";
import type { JSX } from "react";

interface FooterProps { groups: FooterLinkGroup[]; }

function Footer({ groups }: FooterProps): JSX.Element {
  const link = (label: string, href: string): JSX.Element => href.startsWith("/") ? <Link to={href} className={styles.groupLink}>{label}</Link> : <a href={href} className={styles.groupLink}>{label}</a>;
  return <footer className={styles.footer}><div className={styles.container}><div className={styles.grid}><div className={styles.brandColumn}><BrandLogo darkText /><p className={styles.brandText}>Digital products and engineering for businesses ready to grow with confidence.</p></div>{groups.map((group) => <div key={group.title}><h3 className={styles.groupTitle}>{group.title}</h3><ul className={styles.groupList}>{group.links.map((item) => <li key={item.label}>{link(item.label, item.href)}</li>)}</ul></div>)}<div><h3 className={styles.groupTitle}>Featured product</h3><p className={styles.newsText}>Bring your supermarket online with a customer app, POS-safe sync and order operations.</p><Link to="/products/martlyte" className={styles.productLink}>Explore Martlyte <span>→</span></Link></div></div><div className={styles.bottomRow}><p>© 2026 Protolyte Systems. All rights reserved.</p><div className={styles.bottomLinks}><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link><Link to="/data-deletion">Data Deletion</Link></div></div></div></footer>;
}
export default Footer;
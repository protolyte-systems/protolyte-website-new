import { useState, type JSX } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type { NavItem } from "../../types/home";
import BrandLogo from "../common/BrandLogo";
import PrimaryButton from "../common/PrimaryButton";
import styles from "./Navbar.module.css";

interface NavbarProps { items: NavItem[]; }

function Navbar({ items }: NavbarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const exploreMartlyte = (): void => { setMenuOpen(false); navigate("/products/martlyte"); };
  const renderItem = (item: NavItem, mobile = false): JSX.Element => {
    const className = mobile ? styles.mobileLink : styles.link;
    if (item.href.startsWith("/")) return <NavLink key={item.label} to={item.href} className={({ isActive }) => [className, isActive ? styles.activeLink : ""].join(" ").trim()} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>;
    return <a key={item.label} href={item.href} className={className} onClick={() => setMenuOpen(false)}>{item.label}</a>;
  };
  return <nav className={styles.navbar}><div className={styles.container}><BrandLogo darkText={false} compactOnMobile /><div className={styles.desktopMenu}>{items.map((item) => renderItem(item))}<PrimaryButton className={styles.cta} onClick={exploreMartlyte}>Explore Martlyte</PrimaryButton></div><button type="button" className={styles.menuToggle} onClick={() => setMenuOpen((prev) => !prev)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <span className={styles.closeIcon} aria-hidden="true">×</span> : <span className={styles.hamburger} aria-hidden="true"><span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} /></span>}</button></div>{menuOpen && <div className={styles.mobileMenu}>{items.map((item) => renderItem(item, true))}<PrimaryButton className={styles.mobileCta} onClick={exploreMartlyte}>Explore Martlyte</PrimaryButton></div>}</nav>;
}
export default Navbar;
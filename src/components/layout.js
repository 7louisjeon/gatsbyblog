import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
        }
      }
    }
  `);
  return (
      <main className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <Link to="/" className={navLinkText}>
        <p className={siteTitle}>
          {data.site.siteMetadata.title}
        </p></Link>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                HTML&CSS
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                JavaScript
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                React
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                Node JS
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                Computer Science
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/javascript" className={navLinkText}>
                Algorithms & Data Structures
              </Link>
            </li>
          </ul>
        </nav>
        <h1 className={heading}>{pageTitle}</h1>
        <p className={heading}>{children}</p>
      </main>
  );
};
export default Layout;

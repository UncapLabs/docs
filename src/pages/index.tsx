import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroCopy}>
            Explore practical guides, protocol deep-dives, and long-form research to get the most out of Uncap.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} to="/docs">
              Browse documentation
              <svg width="6" height="9" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.685547 9.21183L4.39714 5.50024L0.685547 1.78865L1.83379 0.648486L6.68555 5.50024L1.83379 10.352L0.685547 9.21183Z" fill="currentColor"/>
              </svg>
            </Link>
            <Link className={styles.buttonSecondary} to="/blog">
              Read the latest updates
              <svg width="6" height="9" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.685547 9.21183L4.39714 5.50024L0.685547 1.78865L1.83379 0.648486L6.68555 5.50024L1.83379 10.352L0.685547 9.21183Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
};

function BlogCard({title, description, slug, tags}: BlogCardProps) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogTags}>
        {tags.map((tag, idx) => (
          <span key={idx} className={styles.blogTag}>{tag}</span>
        ))}
      </div>
      <Heading as="h3" className={styles.blogTitle}>
        {title}
      </Heading>
      <p className={styles.blogDescription}>{description}</p>
      <Link className={styles.blogLink} to={`/blog/${slug}`}>
        Read article
        <svg width="6" height="9" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.685547 9.21183L4.39714 5.50024L0.685547 1.78865L1.83379 0.648486L6.68555 5.50024L1.83379 10.352L0.685547 9.21183Z" fill="currentColor"/>
        </svg>
      </Link>
    </div>
  );
}

function FeaturedBlog(): ReactNode {
  return (
    <section className={styles.featuredBlog}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Featured guides
        </Heading>
        <p className={styles.sectionSubtitle}>
          Learn how to get started with Uncap and make the most of your Bitcoin.
        </p>
        <div className={styles.blogGrid}>
          <BlogCard
            title="How to borrow against your Bitcoin at the cheapest rates"
            description="Born from the conviction that Bitcoin can do more, Uncap is built to return Bitcoin to its peer-to-peer roots and turn it from a dormant asset into the productive backbone of a new financial system."
            slug="launch-guide-borrow-bitcoin-cheapest-rates"
            tags={['bitcoin', 'btcfi', 'stablecoin']}
          />
          <BlogCard
            title="Borrowing at 0.5% against BTC"
            description="Understanding how to borrow USDU at ultra-low interest rates against BTC, how redemptions work, and why being redeemed isn't necessarily a bad thing."
            slug="borrowing-at-0-5-percent"
            tags={['bitcoin', 'borrowing', 'redemptions']}
          />
          <BlogCard
            title="Bridge BTC to Starknet"
            description="A comprehensive guide to bridging Bitcoin to Starknet using different methods and BTC variants to access BTCFi opportunities."
            slug="bridge-btc-to-starknet"
            tags={['bitcoin', 'bridging', 'starknet']}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Resources"
      description="Guides, documentation, and technical references for Uncap Finance.">
      <HomepageHeader />
      <main>
        <FeaturedBlog />
      </main>
    </Layout>
  );
}

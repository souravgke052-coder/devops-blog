import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          DevOps Documentation Platform
        </Heading>
        <p className="hero__subtitle">
          A comprehensive documentation, learning, and interview prep platform covering Linux, Networking, Google Cloud, Kubernetes, Terraform, CI/CD, Containers, SRE, Architecture, Troubleshooting, and hands-on Labs.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore the Knowledge Base
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/blog"
            style={{marginLeft: '0.75rem'}}>
            Read Engineering Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Production-grade cloud engineering, DevOps automation, and SRE — built from real infrastructure experience.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

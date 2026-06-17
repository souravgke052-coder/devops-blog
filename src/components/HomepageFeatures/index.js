import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learning Paths',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Structured learning journeys from fundamentals to advanced topics. Each path is designed to build practical skills progressively through hands-on exercises and real-world scenarios.
      </>
    ),
  },
  {
    title: 'Linux',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Shell scripting, process management, system tuning, and production server operations. Not cheat sheets — operational playbooks drawn from real infrastructure experience.
      </>
    ),
  },
  {
    title: 'Networking',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Load balancing, DNS architecture, firewall rules, and diagnosing connectivity issues in distributed systems. Covers both traditional networking and cloud-native patterns.
      </>
    ),
  },
  {
    title: 'Google Cloud',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GCP service selection, IAM strategy, multi-project landing zone patterns, networking, compute, storage, databases, events, DevOps tooling, observability, and security — all from a production perspective.
      </>
    ),
  },
  {
    title: 'Kubernetes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        GKE cluster operations, workload scheduling, networking, autoscaling, and debugging production failures. Covers both day-1 cluster setup and day-2 operational concerns.
      </>
    ),
  },
  {
    title: 'Terraform',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Infrastructure as Code with Terraform — module design, state management, CI/CD integration, team governance, and GCP-specific patterns for production-grade infrastructure.
      </>
    ),
  },
  {
    title: 'CI/CD',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pipeline design, GitHub Actions workflows, build automation, deployment strategies, and integrating security scanning. Covers the full lifecycle from commit to production.
      </>
    ),
  },
  {
    title: 'Containers',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docker fundamentals, container networking, image optimization, security hardening, and registry management. Foundational knowledge for any Kubernetes-based platform.
      </>
    ),
  },
  {
    title: 'SRE',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        SLIs, SLOs, error budgets, monitoring, alerting, and incident response for cloud-native systems. Practical SRE practices drawn from operating production infrastructure.
      </>
    ),
  },
  {
    title: 'Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        System design patterns, multi-tier architectures, microservices trade-offs, and cloud-native patterns. Covers decision-making frameworks for building scalable, resilient systems.
      </>
    ),
  },
  {
    title: 'Troubleshooting',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Systematic debugging methodologies, log analysis, metric interpretation, and incident root cause analysis. Structured approaches to diagnosing failures in production environments.
      </>
    ),
  },
  {
    title: 'Interview Prep',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Real interview questions, scenario-based challenges, and structured answers for DevOps, SRE, and Cloud Engineer roles. Covers behavioral questions and system design interviews.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
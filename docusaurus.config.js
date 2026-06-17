// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps Documentation Platform',
  tagline: 'Production-grade cloud engineering. Infrastructure design, deployment automation, and observability at scale.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://souravgke052-coder.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/devops-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'souravgke052-coder', // Usually your GitHub org/user name.
  projectName: 'devops-blog', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch for GitHub Pages deployment.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/souravlobra/devops-blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/souravlobra/devops-blog/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [{name: 'keywords', content: 'DevOps, Cloud Engineering, GCP Architecture, Kubernetes, Terraform, SRE, Infrastructure as Code, Site Reliability Engineering, Linux, Networking'}],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DevOps Blog',
        logo: {
          alt: 'DevOps Blog Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/docs/category/learning-paths', label: 'Learning Paths', position: 'left'},
          {to: '/docs/category/linux', label: 'Linux', position: 'left'},
          {to: '/docs/category/networking', label: 'Networking', position: 'left'},
          {to: '/docs/category/google-cloud', label: 'Google Cloud', position: 'left'},
          {to: '/docs/category/kubernetes', label: 'Kubernetes', position: 'left'},
          {to: '/docs/category/terraform', label: 'Terraform', position: 'left'},
          {to: '/docs/category/cicd', label: 'CI/CD', position: 'left'},
          {to: '/docs/category/containers', label: 'Containers', position: 'left'},
          {to: '/docs/category/sre', label: 'SRE', position: 'left'},
          {to: '/docs/category/architecture', label: 'Architecture', position: 'left'},
          {to: '/docs/category/troubleshooting', label: 'Troubleshooting', position: 'left'},
          {to: '/docs/category/interview-prep', label: 'Interview Prep', position: 'left'},
          {to: '/docs/category/labs', label: 'Labs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/souravlobra/devops-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Learning Paths',
                to: '/docs/category/learning-paths',
              },
              {
                label: 'Linux',
                to: '/docs/category/linux',
              },
              {
                label: 'Networking',
                to: '/docs/category/networking',
              },
              {
                label: 'GCP',
                to: '/docs/category/google-cloud',
              },
              {
                label: 'Kubernetes',
                to: '/docs/category/kubernetes',
              },
              {
                label: 'Terraform',
                to: '/docs/category/terraform',
              },
              {
                label: 'CI/CD',
                to: '/docs/category/cicd',
              },
              {
                label: 'Containers',
                to: '/docs/category/containers',
              },
              {
                label: 'SRE',
                to: '/docs/category/sre',
              },
              {
                label: 'Architecture',
                to: '/docs/category/architecture',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/category/troubleshooting',
              },
              {
                label: 'Interview Prep',
                to: '/docs/category/interview-prep',
              },
              {
                label: 'Labs',
                to: '/docs/category/labs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/devops',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/souravlobra/devops-blog/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/souravlobra/devops-blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sourav Lobra. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'docker', 'powershell', 'python'],
      },
    }),
};

export default config;

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/devops-blog/blog',
    component: ComponentCreator('/devops-blog/blog', 'e05'),
    exact: true
  },
  {
    path: '/devops-blog/blog/archive',
    component: ComponentCreator('/devops-blog/blog/archive', '0e9'),
    exact: true
  },
  {
    path: '/devops-blog/blog/authors',
    component: ComponentCreator('/devops-blog/blog/authors', '9ce'),
    exact: true
  },
  {
    path: '/devops-blog/blog/authors/sourav',
    component: ComponentCreator('/devops-blog/blog/authors/sourav', '561'),
    exact: true
  },
  {
    path: '/devops-blog/blog/gcp-associate-exam-tips',
    component: ComponentCreator('/devops-blog/blog/gcp-associate-exam-tips', 'bbb'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags',
    component: ComponentCreator('/devops-blog/blog/tags', 'd43'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/best-practices',
    component: ComponentCreator('/devops-blog/blog/tags/best-practices', '315'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/certification',
    component: ComponentCreator('/devops-blog/blog/tags/certification', 'bf7'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/cloud',
    component: ComponentCreator('/devops-blog/blog/tags/cloud', '30e'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/gcp',
    component: ComponentCreator('/devops-blog/blog/tags/gcp', 'a20'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/iac',
    component: ComponentCreator('/devops-blog/blog/tags/iac', '74b'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/modules',
    component: ComponentCreator('/devops-blog/blog/tags/modules', '74d'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/terraform',
    component: ComponentCreator('/devops-blog/blog/tags/terraform', '932'),
    exact: true
  },
  {
    path: '/devops-blog/blog/tags/tips',
    component: ComponentCreator('/devops-blog/blog/tags/tips', '0a1'),
    exact: true
  },
  {
    path: '/devops-blog/blog/terraform-module-patterns',
    component: ComponentCreator('/devops-blog/blog/terraform-module-patterns', '111'),
    exact: true
  },
  {
    path: '/devops-blog/markdown-page',
    component: ComponentCreator('/devops-blog/markdown-page', '8fe'),
    exact: true
  },
  {
    path: '/devops-blog/search',
    component: ComponentCreator('/devops-blog/search', '1dc'),
    exact: true
  },
  {
    path: '/devops-blog/docs',
    component: ComponentCreator('/devops-blog/docs', '360'),
    routes: [
      {
        path: '/devops-blog/docs',
        component: ComponentCreator('/devops-blog/docs', 'a24'),
        routes: [
          {
            path: '/devops-blog/docs',
            component: ComponentCreator('/devops-blog/docs', 'e07'),
            routes: [
              {
                path: '/devops-blog/docs/gcp/foundation',
                component: ComponentCreator('/devops-blog/docs/gcp/foundation', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/gcp/gke',
                component: ComponentCreator('/devops-blog/docs/gcp/gke', '241'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/getting-started',
                component: ComponentCreator('/devops-blog/docs/getting-started', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/intro',
                component: ComponentCreator('/devops-blog/docs/intro', '9d1'),
                exact: true
              },
              {
                path: '/devops-blog/docs/kubernetes/deployments',
                component: ComponentCreator('/devops-blog/docs/kubernetes/deployments', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/kubernetes/intro',
                component: ComponentCreator('/devops-blog/docs/kubernetes/intro', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/linux/commands',
                component: ComponentCreator('/devops-blog/docs/linux/commands', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/linux/scripting',
                component: ComponentCreator('/devops-blog/docs/linux/scripting', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/networking/fundamentals',
                component: ComponentCreator('/devops-blog/docs/networking/fundamentals', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/networking/troubleshooting',
                component: ComponentCreator('/devops-blog/docs/networking/troubleshooting', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/terraform/basics',
                component: ComponentCreator('/devops-blog/docs/terraform/basics', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/devops-blog/docs/terraform/modules',
                component: ComponentCreator('/devops-blog/docs/terraform/modules', 'cae'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/devops-blog/',
    component: ComponentCreator('/devops-blog/', 'f97'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

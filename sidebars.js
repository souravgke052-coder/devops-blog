// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main docs sidebar
  tutorialSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Linux',
      collapsed: false,
      items: [
        'linux/commands',
        'linux/scripting',
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      collapsed: true,
      items: [
        'networking/fundamentals',
        'networking/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Google Cloud Platform',
      collapsed: true,
      items: [
        'gcp/foundation',
        'gcp/gke',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes',
      collapsed: true,
      items: [
        'kubernetes/intro',
        'kubernetes/deployments',
      ],
    },
    {
      type: 'category',
      label: 'Terraform',
      collapsed: true,
      items: [
        'terraform/basics',
        'terraform/modules',
      ],
    },
  ],
};

export default sidebars;

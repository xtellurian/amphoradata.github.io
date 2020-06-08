module.exports = {
  title: 'Connecting the world’s real-time information',
  tagline: 'Amphora is a data marketplace and management platform for innovative teams and researchers',
  url: 'https://amphoradata.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Amphora Data', // Usually your GitHub org/user name.
  projectName: 'AmphoraData.github.io', // Usually your repo name.
 // plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    algolia: {
      apiKey: '0797d5513a4961659b3f15828b64f261',
      indexName: 'amphoradata',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
      // Google Analytics
    //googleAnalytics: {
    //  TrackingId: "UA-164144906-4",
    //  anonymizeIP: true,
    //},
    navbar: {
      logo: {
        src: 'img/Amphora Data_Logo_black.jpg',
        srcDark: 'img/Amphora Data_Logo_white.png',
      },
      backgroundColor: '#FFEFEC', // Defaults to `#fff`
      links: [
        {
          label: 'Solutions',
          position: 'right',
          items: [
            {
              to: 'how-we-help/find-data',
              activeBasePath: 'how-we-help/find-data',
              label: 'Get new data',
            },
            {
              to: 'how-we-help/simplified-integration',
              activeBasePath: 'how-we-help/simplified-integration',
              label: 'Simplify Integration',
            },
            {
              to: 'how-we-help/share-data',
              activeBasePath: 'how-we-help/share-data',
              label: 'Share your data',
            },
            {
              to: 'how-we-help/manage-data',
              activeBasePath: 'how-we-help/manage-data',
              label: 'Manage data',
            },
          ],
        },
        {
          to: 'pricing',
          activeBasePath: 'pricing',
          label: 'Pricing',
          position: 'right',
        },
        {
          label: 'Resources',
          position: 'right',
          items: [
            {
              to: 'docs/contents',
              activeBasePath: 'contents',
              label: 'Docs',
              position: 'left',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/amphoradata/',
            },
            {
              label: 'Videos',
              href: 'https://amphoradata.com/demos',
            },
            {
              label: 'Blog',
              href: 'https://amphoradata.com/blog',
            },
          ],
        },
        {
          href: 'https://identity.amphoradata.com/Account/Register',
          label: 'Register',
          position: 'right',
        },
        {
          href: 'https://identity.amphoradata.com/Account/Login?ReturnUrl=%2FChallenge',
          label: 'Login',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              to: 'leadership-team',
              activeBasePath: 'leadership-team',
              label: 'Team',
            },
            {
              to: 'careers',
              activeBasePath: 'careers',
              label: 'Careers',
            },
            {
              to: 'values',
              activeBasePath: 'values',
              label: 'Values',
            },
            {
              to: 'privacy-security',
              activeBasePath: 'privacy-security',
              label: 'Privacy and security',
            },
          ],
        },
        {
          title: 'Contact us',
          items: [
            {
              label: 'Email',
              href: 'mailto:contact@amphoradata.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/amphoradata',
            },
            {
              label: 'Linkedin',
              href: 'https://au.linkedin.com/company/amphora-data',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amphora Data`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ugandan Constitution',
  tagline: 'An up-to-date online version of the Ugandan Constitution',
  url: 'https://ugandanconstitution.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'morelmiles', // Usually your GitHub org/user name.
  projectName: 'ugandan-constitution', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/morelmiles/ugandan-constitution',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/morelmiles/ugandan-constitution',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ugandan Constitution',
        logo: {
          alt: 'Ugandan Constitution Logo',
          src: 'img/logo.svg',
        },
        items: [{ to: '/blog', label: 'Blog', position: 'right' }],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Chapters',
            items: [
              {
                label: 'Preamble',
                to: '/docs/preamble',
              },
            ],
          },
          {
            title: 'Donate',
            items: [
              {
                label: 'Mobile Money',
                href: 'https://discordapp.com/invite/docusaurus',
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
                href: 'https://github.com/morelmiles/ugandan-constitution',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ugandan Constitution.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

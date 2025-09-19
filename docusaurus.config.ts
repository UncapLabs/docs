import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Uncap Finance",
  tagline:
    "Bitcoin-backed stablecoin protocol built on Starknet, inspired by Liquity v2.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://uncap.finance",
  // Check for BASE_URL environment variable first, then fallback to NODE_ENV check
  baseUrl:
    process.env.BASE_URL ||
    (process.env.NODE_ENV === "development" ? "/" : "/docs"),

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/", // Docs will be served at root
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_yIxOHwCOu1TnJZfNoiwJl6mwxc4PuQG8UGkG2VcZEjL",
        appUrl: "https://us.i.posthog.com",
        enableInDevelopment: false, // optional
      },
    ],
  ],
  themeConfig: {
    image: "img/uncap-social-card.png",
    navbar: {
      title: "Uncap Finance",
      logo: {
        alt: "Uncap Finance Logo",
        src: "img/uncap.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          label: "Main Site",
          href: "https://uncap.finance",
          position: "right",
        },
        {
          href: "https://github.com/UncapLabs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Intro",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://x.com/uncapfinance",
            },
            {
              label: "Telegram",
              href: "https://t.me/antoine_argent",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Main Website",
              href: "https://uncap.finance",
            },
            {
              label: "GitHub",
              href: "https://github.com/UncapLabs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Uncap Finance. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

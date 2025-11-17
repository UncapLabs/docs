import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration to control ordering
  tutorialSidebar: [
    {
      type: "category",
      label: "Intro",
      items: [
        {
          type: "doc",
          id: "intro",
          label: "👋 Introduction",
        },
        {
          type: "doc",
          id: "uncap-protocol",
          label: "⚙️ The Uncap protocol",
        },
        {
          type: "doc",
          id: "rewards",
          label: "🎁 Rewards",
        },
      ],
    },
    {
      type: "category",
      label: "How to",
      items: [
        {
          type: "doc",
          id: "how-to/borrowing-liquidations",
          label: "💰 Borrowing & Liquidations",
        },
        {
          type: "doc",
          id: "how-to/redemptions-and-delegations",
          label: "🔄 Redemptions & Delegations",
        },
        {
          type: "doc",
          id: "how-to/usdu-and-earn",
          label: "📈 USDU & Earn",
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        {
          type: "doc",
          id: "security/security-council",
          label: "🛡️ Security Council",
        },
        {
          type: "doc",
          id: "security/audit",
          label: "🔒 Audit",
        },
        {
          type: "doc",
          id: "security/deployed-contracts",
          label: "📜 Deployed Contracts",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "doc",
          id: "brand-kit",
          label: "🎨 Brand Kit",
        },
      ],
    },
  ],
};

export default sidebars;

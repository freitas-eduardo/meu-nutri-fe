import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)" // Load stories from components directory
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y" // Additional addon for accessibility
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "autodocs": true // Generate docs automatically for each story
  }
};
export default config;

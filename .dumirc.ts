import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/luckyboy-ui.github.io/',
  publicPath: '/luckyboy-ui.github.io/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'luckyboy-ui',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      },
    ],
  ],
});

const {
  override,
  useBabelRc,
  useEslintRc,
  addLessLoader,
  addPostcssPlugins,
} = require('customize-cra');

const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-px2rem');

// postcss插件配置
const postcssPlugins = [
  autoprefixer({
    browsers: ['last 2 versions', 'not ie <= 8', 'iOS 7'],
    remove: true,
  }),
  px2rem({ remUnit: 16 }),
];

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  useBabelRc(),
  useEslintRc(),
  addPostcssPlugins(postcssPlugins),
);

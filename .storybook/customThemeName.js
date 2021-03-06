import { create } from '@storybook/theming';

import customLogo from '../public/images/custom-logo.png';

export default create({
  brandTitle: 'Colins custom storybook',
  brandUrl: 'https://espn.com',
  //brandImage: "https://place-hold.it/350x150",
  brandImage: customLogo,

  base: 'light',
  //base: "dark",

  colorPrimary: 'black',
  colorSecondary: 'red',

  // UI
  appBg: '#f5f5f5',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',
  textMutedColor: '#464646',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'red',
  barBg: '#dadada',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4
});

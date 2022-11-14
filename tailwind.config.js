/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#070d24',
        secondary: '#76eeea',
        cards: '#002366',
        textColor: '#d0f0c0',
        textColor2: '#455261',
        inputBg: '#D0D2D645',
        borderColor: '#BDBFC355'
      },
      width: {
        sideMenu: '400px'
      },
      screens: {
        'md-2': '900px'
      }
    }
  },
};

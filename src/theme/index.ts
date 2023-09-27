function fontSizeEscalated(value: string, varName = '--font-scale'): string {
  return `calc(${value} * var(${varName}))`;
}

export const theme = {
  colors: {
    accent: {
      base: '#FFD200;',
      dark: {
        '20': '#FFCC00;',
        '40': '#FFBB00;',
        '60': '#FFAB05;',
        '80': '#FFA200;',
      },
      darkest: '#FF9900;',
      light: {
        '20': '#FFDC3A;',
        '40': '#FFE467;',
        '60': '#FFEB8F;',
        '80': '#FFF0AC;',
      },
      lightest: '#FFF5C5;',
    },
    altDYellow: {
      base: '#C88714;',
      dark: {
        '20': '#A56F11;',
        '40': '#83580D;',
        '60': '#5F400A;',
        '80': '#3C2806;',
      },
      darkest: '#2B1D04;',
      light: {
        '20': '#CE9530;',
        '40': '#D7A855;',
        '60': '#E0BB7B;',
        '80': '#E9CFA1;',
      },
      lightest: '#F2E2C6;',
    },
    altGreen: {
      base: '#368B11;',
      dark: {
        '20': '#317D0E;',
        '40': '#27630B;',
        '60': '#1C4808;',
        '80': '#122D05;',
      },
      darkest: '#0D2104;',
      light: {
        '20': '#52A32E;',
        '40': '#71B454;',
        '60': '#91C47A;',
        '80': '#B0D5A0;',
      },
      lightest: '#D0E6C6;',
    },
    altMagenta: {
      base: '#8F1276;',
      dark: {
        '20': '#760E62;',
        '40': '#5D0B4D;',
        '60': '#440838;',
        '80': '#2B0524;',
      },
      darkest: '#1F041A;',
      light: {
        '20': '#9C2E86;',
        '40': '#AE549C;',
        '60': '#C07AB2;',
        '80': '#D2A0C8;',
      },
      lightest: '#E4C6DE;',
    },
    altOrange: {
      base: '#D96500;',
      dark: {
        '20': '#B35400;',
        '40': '#8D4200;',
        '60': '#673000;',
        '80': '#411F00;',
      },
      darkest: '#2F1600;',
      light: {
        '20': '#DD771F;',
        '40': '#E38F47;',
        '60': '#EAA870;',
        '80': '#F0C199;',
      },
      lightest: '#F6DAC2;',
    },
    altPurple: {
      base: '#532E91;',
      dark: {
        '20': '#452678;',
        '40': '#361E5E;',
        '60': '#271645;',
        '80': '#190E2C;',
      },
      darkest: '#120A1F;',
      light: {
        '20': '#67479E;',
        '40': '#8268AF;',
        '60': '#9E89C1;',
        '80': '#BAABD3;',
      },
      lightest: '#D6CDE5;',
    },
    altRed: {
      base: '#CF1B27;',
      dark: {
        '20': '#AB1620;',
        '40': '#871119;',
        '60': '#620D12;',
        '80': '#3E080C;',
      },
      darkest: '#2D0608;',
      light: {
        '20': '#D43641;',
        '40': '#DC5A63;',
        '60': '#E47F85;',
        '80': '#ECA3A8;',
      },
      lightest: '#F4C8CB;',
    },
    altTeal: {
      base: '#007B7A;',
      dark: {
        '20': '#006565;',
        '40': '#00504F;',
        '60': '#003A3A;',
        '80': '#002525;',
      },
      darkest: '#001A1A;',
      light: {
        '20': '#1F8B8A;',
        '40': '#479F9F;',
        '60': '#70B5B4;',
        '80': '#99CACA;',
      },
      lightest: '#C2DFDF;',
    },
    black: '#111111;',
    blue: {
      base: '#2A80E9;',
      dark: {
        '20': '#2062B1;',
        '40': '#194D8C;',
        '60': '#123866;',
        '80': '#0C2441;',
      },
      darkest: '#081A2E;',
      light: {
        '20': '#438FEB;',
        '40': '#65A3EF;',
        '60': '#87B8F3;',
        '80': '#A9CCF6;',
      },
      lightest: '#CCE1FA;',
    },
    darkYellow: {
      base: '#D59525;',
      dark: {
        '20': '#C58A24;',
        '40': '#B27E22;',
        '60': '#A47420;',
        '80': '#926920;',
      },
      darkest: '#7A571A;',
      light: {
        '20': '#DDAA50;',
        '40': '#E3BA71;',
        '60': '#EACA91;',
        '80': '#EED4A7;',
      },
      lightest: '#F7EAD3;',
    },
    gray: {
      base: '#B4B4BB;',
      dark: {
        '20': '#8D8D97;',
        '40': '#5E5E63;',
        '60': '#3E3E41;',
        '80': '#1F1F24;',
      },
      light: {
        '20': '#CECED4;',
        '40': '#E0E0E6;',
        '60': '#F0EFF2;',
        '70': '#F6F6F7;',
        '80': '#FCFCFC;',
      },
      lightest: '#FFFFFF',
      darkest: '#111111',
    },
    green: {
      base: '#5A9A3D;',
      dark: {
        '20': '#518839;',
        '40': '#45772E;',
        '60': '#3D672B;',
        '80': '#30541F;',
      },
      darkest: '#29461C;',
      light: {
        '20': '#72A959;',
        '40': '#8BB876;',
        '60': '#9CC28A;',
        '80': '#B4D1A7;',
      },
      lightest: '#DEEBD8;',
    },
    magenta: {
      base: '#9F2E89;',
      dark: {
        '20': '#852673;',
        '40': '#712061;',
        '60': '#5D1A50;',
        '80': '#501645;',
      },
      darkest: '#3B0E33;',
      light: {
        '20': '#B257A0;',
        '40': '#C581B8;',
        '60': '#D8ABD0;',
        '80': '#E2C0DB;',
      },
      lightest: '#F1E0ED;',
    },
    navy: {
      base: '#0C284A;',
      dark: {
        '20': '#091E38;',
        '40': '#07182D;',
        '60': '#051220;',
        '80': '#030B15;',
      },
      darkest: '#02080F;',
      light: {
        '20': '#294260;',
        '40': '#4F637C;',
        '60': '#768699;',
        '80': '#9DA9B6;',
      },
      lightest: '#C4CBD3;',
    },
    orange: {
      base: '#E66C20;',
      dark: {
        '20': '#D8651D;',
        '40': '#C95E1B;',
        '60': '#BB5617;',
        '80': '#A84C12;',
      },
      darkest: '#8D4212;',
      light: {
        '20': '#E9803F;',
        '40': '#ED9762;',
        '60': '#F1AE84;',
        '80': '#F5C4A5;',
      },
      lightest: '#FAE1D2;',
    },
    primary: {
      base: '#006CF2;',
      dark: {
        '20': '#005DD1;',
        '40': '#0051B5;',
        '60': '#004294;',
        '80': '#003271;',
      },
      darkest: '#00295D;',
      light: {
        '20': '#3A92FF;',
        '40': '#66A6F7;',
        '60': '#92C2FF;',
        '80': '#CCE1FD;',
      },
      lightest: '#EEF5FF;',
    },
    purple: {
      base: '#654993;',
      dark: {
        '20': '#573A87;',
        '40': '#4C386E;',
        '60': '#3E2F58;',
        '80': '#35274A;',
      },
      darkest: '#2D233D;',
      light: {
        '20': '#845CC7;',
        '40': '#A37EE1;',
        '60': '#B893F3;',
        '80': '#CFB2FF;',
      },
      lightest: '#E4D4FF;',
    },
    red: {
      base: '#D53943;',
      dark: {
        '20': '#BE323B;',
        '40': '#AE2029;',
        '60': '#9B262D;',
        '80': '#811D23;',
      },
      darkest: '#702126;',
      light: {
        '20': '#DD6068;',
        '40': '#E37E84;',
        '60': '#EA9BA0;',
        '80': '#EEAFB3;',
      },
      lightest: '#F8DFE0;',
    },
    secondary: {
      base: '#001F45;',
      dark: {
        '20': '#0D2443;',
        '40': '#0E213A;',
        '60': '#0B1B31;',
        '80': '#08182D;',
      },
      darkest: '#071323;',
      light: {
        '20': '#173A6700;',
        '40': '#1F508E;',
        '60': '#406DA7;',
        '80': '#86A7D2;',
      },
      lightest: '#CCD9E9;',
    },
    teal: {
      base: '#018786;',
      dark: {
        '20': '#007776;',
        '40': '#006A69;',
        '60': '#006160;',
        '80': '#005655;',
      },
      darkest: '#004645;',
      light: {
        '20': '#339F9E;',
        '40': '#66B7B6;',
        '60': '#99CFCE;',
        '80': '#B2DBDA;',
      },
      lightest: '#D9EDED;',
    },
    white: '#FFFFFF;',
    yellow: {
      base: '#FCD313;',
      dark: {
        '20': '#E8BD12;',
        '40': '#D4AC10;',
        '60': '#C09C0E;',
        '80': '#AB8B0D;',
      },
      darkest: '#987B0B;',
      light: {
        '20': '#FCD82F;',
        '40': '#FDDF54;',
        '60': '#FDE67A;',
        '80': '#FEEDA0;',
      },
      lightest: '#FFF5C6;',
    },
  },
  transition: {
    default: 'all 0.2s ease-in-out',
  },

  font: {
    sizes: {
      root: fontSizeEscalated('16px'),
      smallest: fontSizeEscalated('0.75rem'), // 12px
      xxxs: fontSizeEscalated('0.875rem'), // 14px
      xxs: fontSizeEscalated('1rem'), // 16px
      xs: fontSizeEscalated('1.125rem'), // 18px
      sm: fontSizeEscalated('1.25rem'), // 20px
      md: fontSizeEscalated('1.5rem'), // 24px
      lg: fontSizeEscalated('2rem'), // 32px
      xl: fontSizeEscalated('2.5rem'), // 40px
      xxl: fontSizeEscalated('3rem'), // 48px
      xxxl: fontSizeEscalated('4rem'), // 64px
      display: fontSizeEscalated('5rem'), // 80px
      giant: fontSizeEscalated('6rem'), // 96px
    },
    families: {
      openSans: 'Open Sans, sans-serif',
    },
    weights: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
  },
  border: {
    radius: {
      none: '0',
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '1rem', // 16px
      lg: '1.5rem', // 24px
      pill: '800px', // >= 800px
      full: '50%', // 50%
    },
    width: {
      none: '0',
      thin: '0.5px',
      light: '1px',
      regular: '2px',
      medium: '4px',
      heavy: '8px',
    },
  },
  spacing: {
    smallest: '0.25rem', // 4px
    xxxs: '0.5rem', // 8px
    xxs: '1rem', // 16px
    xs: '1.5rem', // 24px
    sm: '2rem', // 32px
    md: '2.5rem', // 40px
    lg: '3rem', // 48px
    xl: '3.5rem', // 56px
    xxl: '4rem', // 64px
    xxxl: '5rem', // 80px
    display: '7.5rem', // 120px
    giant: '10rem', // 160px

    inset: {
      xxxs: '0.25rem', // 4px
      xxs: '0.5rem', // 8px
      xs: '0.75rem', // 12px
      sm: '1rem', // 16px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '2.5rem', // 40px
      xxl: '3rem', // 48px
      xxxl: '4rem', // 64px
    },
  },
  opacity: {
    lightest: '0.08',
    light: '0.24',
    medium: '0.48',
    intense: '0.64',
    hard: '0.80',
  },
  shadow: {
    // x: 0px; y: 2px; blur: 4px;
    lightest: '0px 2px 4px #00000029',

    // x: 0px; y: 4px; blur: 8px;
    light: '0px 4px 8px #00000029',

    // x: 0px; y: 8px; blur: 16px;
    medium: '0px 8px 16px #00000029',

    // x: 0px; y: 16px; blur: 32px;
    intense: '0px 16px 32px #00000029',

    // x: 0px; y: 24px; blur: 48px;
    hard: '0px 24px 48px #00000029',

    // x: 0px; y: 32px; blur: 64px;
    extreme: '0px 32px 64px #00000029',
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1360,
    xl: 1920,
  },
} as const;

export type Theme = typeof theme;

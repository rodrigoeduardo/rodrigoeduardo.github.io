import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '0px',
  xsm: '360px',
  sm: '490px',
  md: '768px',
  lg: '1024px',
  xl: '1400px',
};

export const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        fontSize: {
          base: '65%',
          md: '80%',
          lg: '100%',
        },
      },
      body: {
        bgColor: 'blue.900',
        color: 'white',
        fontFamily: 'Roboto Mono, sans-serif',
      },
    },
  },
});

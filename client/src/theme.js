// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", 
    10: "#f6f6f6", 
    50: "#f0f0f0", 
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", 
  },
  primary: "#003c78",
  secondary: "#0bb89b",
  bglight: "#f8f8f8",
  bgdark: "#191932"

};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.bgdark,
              light: tokensDark.bgdark,
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary,
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.secondary,
              alt: tokensDark.primary,
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.bglight,
              light: tokensDark.grey[50],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.primary,
              light: tokensDark.primary,
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default:tokensDark.bglight ,
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

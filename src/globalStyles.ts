import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*, *::before, *::after": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        listStyle: "none",
        fontFamily: '"Nunito", sans-serif',
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },
      body: {
        margin: 0,
        overflowX: "hidden",
      },
      a: {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
      },
    },
  })
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};

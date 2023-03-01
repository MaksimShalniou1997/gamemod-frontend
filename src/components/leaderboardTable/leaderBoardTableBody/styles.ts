import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  dead: {
    opacity: 0.7,
  },
  tableRow: {
    height: "60px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    "& > td": {
      color: "#FFFFFF",
      background: "none",
      borderBottom: "none",
      "&:first-child": {
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
      },
      "&:last-child": {
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
      },
    },
  },
});

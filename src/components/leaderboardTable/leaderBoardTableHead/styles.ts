import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  tableRow: {
    "& > th": {
      color: "#FFFFFF",
      background: "purple",
      borderBottom: "none",
      "&:first-child": {
        borderTopLeftRadius: "15px",
      },
      "&:last-child": {
        borderTopRightRadius: "15px",
      },
    },
  },
});

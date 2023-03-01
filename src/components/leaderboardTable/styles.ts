import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  tableContainer: {
    maxHeight: "calc(100vh - 300px)",
    minWidth: "320px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttonText: {
    color: "#FFFFFF",
    padding: 0,
  },
  button: {
    background: "linear-gradient(to right, #ad5389, #3c1053)",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
});

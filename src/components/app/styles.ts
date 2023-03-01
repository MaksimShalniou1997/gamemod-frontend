import { makeStyles } from "@material-ui/core";

import background from "../../shared/assets/images/background.jpeg";

export const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    minHeight: "100vh",
  },
  blockUi: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

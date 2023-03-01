import React from "react";

import { useStyles } from "./styles";
import { Leaderboard } from "../leaderboard";

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Leaderboard />
    </div>
  );
};

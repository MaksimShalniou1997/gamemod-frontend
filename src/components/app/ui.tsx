import React from "react";
import { useSelector } from "react-redux";
import BlockUi from "react-block-ui";
import { CircularProgress } from "@material-ui/core";

import { useStyles } from "./styles";
import { Leaderboard } from "../leaderboard";
import { getIsLoadingLeaderboardSelector } from "../../store/selectors";

const CIRCULAR_PROGRESS_SIZE = 100;

export const App = () => {
  const classes = useStyles();
  const isLoadingLeaderboard = useSelector(getIsLoadingLeaderboardSelector);

  return (
    <div className={classes.background}>
      <BlockUi
        className={classes.blockUi}
        blocking={isLoadingLeaderboard}
        loader={<CircularProgress size={CIRCULAR_PROGRESS_SIZE} />}
        message=" "
      />
      <Leaderboard />
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useStyles } from "./";
import { LeaderboardTable } from "../leaderboardTable";
import { IPlayerStats } from "../leaderboardTable/types";
import { getLoserSelector, getWinnersSelector } from "../../store/selectors";
import { storeSlice } from "../../store/reducer";

export const Leaderboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/players`);
      const players = await response.json();

      const compareNumbers = (a: IPlayerStats, b: IPlayerStats) =>
        b.score - a.score;

      const sortedWinners = players.data.winners.sort(compareNumbers);
      const sortedLosers = players.data.losers.sort(compareNumbers);

      dispatch(storeSlice.actions.setWinners(sortedWinners));
      dispatch(storeSlice.actions.setLosers(sortedLosers));
    })();
  }, [dispatch]);

  const winners = useSelector(getWinnersSelector);
  const losers = useSelector(getLoserSelector);

  return (
    <div>
      <h1 className={classes.mainHeaderText}>{t("fighting-result")}</h1>
      <div className={classes.leaderboardContainer}>
        <div className={classes.leaderboardWrapper}>
          <h2 className={classes.headerText}>{t("winners")}</h2>
          <LeaderboardTable rows={winners as unknown as Array<IPlayerStats>} />
        </div>
        <div className={classes.leaderboardWrapper}>
          <h2 className={classes.headerText}>{t("losers")}</h2>
          <LeaderboardTable rows={losers as unknown as Array<IPlayerStats>} />
        </div>
      </div>
    </div>
  );
};

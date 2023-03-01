import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AnyAction } from "redux";

import { useStyles } from "./";
import { LeaderboardTable } from "../leaderboardTable";
import { IPlayerStats } from "../leaderboardTable/types";
import { fetchLeaderboard } from "../../store";
import { getLoserSelector, getWinnersSelector } from "../../store/selectors";

export const Leaderboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  useEffect(() => {
    (async () => {
      await dispatch(fetchLeaderboard() as unknown as AnyAction);
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

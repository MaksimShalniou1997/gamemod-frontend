import React from "react";
import { useTranslation } from "react-i18next";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useStyles } from ".";

export const LeaderBoardTableHead = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <TableHead>
      <TableRow className={classes.tableRow}>
        <TableCell>{t("position")}</TableCell>
        <TableCell>{t("nickname")}</TableCell>
        <TableCell align="right">{t("score")}</TableCell>
        <TableCell align="right">{t("state")}</TableCell>
        <TableCell align="right">{t("friend-request")}</TableCell>
      </TableRow>
    </TableHead>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useStyles, tableHeadConfig } from ".";

export const LeaderBoardTableHead = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <TableHead>
      <TableRow className={classes.tableRow}>
        {tableHeadConfig.map((name, index) => (
          <TableCell align={index < 2 ? "left" : "right"}>{t(name)}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

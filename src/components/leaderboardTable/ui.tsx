import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

import { useStyles, ILeaderboardTable } from "./";
import { LeaderBoardTableHead } from "./leaderBoardTableHead";
import { LeaderBoardTableBody } from "./leaderBoardTableBody";

export const LeaderboardTable = ({ rows }: ILeaderboardTable) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table stickyHeader>
        <LeaderBoardTableHead />
        <LeaderBoardTableBody rows={rows} />
      </Table>
    </TableContainer>
  );
};

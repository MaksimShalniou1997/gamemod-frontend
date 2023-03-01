import React from "react";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { useStyles, ILeaderboardTableBody, CURRENT_ID, DEAD } from ".";
import { SendRequestToFriendsButton } from "../../sendRequestToFriendsButton";
import { StatisticTooltip } from "../../statisticTooltip";
import { getFriendsSelector } from "../../../store/selectors";
import { sendRequestToFriends } from "../../../store";

export const LeaderBoardTableBody = ({ rows }: ILeaderboardTableBody) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const friends = useSelector(getFriendsSelector);

  const handleClickSendToFriend = (id: string) => {
    dispatch(sendRequestToFriends(id) as unknown as AnyAction);
  };

  return (
    <TableBody>
      {rows.map(
        (
          { _id, nickname, score, state, statistic: { totalKills, death } },
          index
        ) => {
          const isDeadPlayersClassName = clsx({
            [classes.dead]: state === DEAD,
          });

          return (
            <TableRow key={_id} className={classes.tableRow}>
              <TableCell>
                <p className={isDeadPlayersClassName}>{index + 1}</p>
              </TableCell>
              <TableCell>
                <p className={isDeadPlayersClassName}>{nickname}</p>
              </TableCell>
              <StatisticTooltip totalKills={totalKills} death={death}>
                <TableCell align="right">
                  <p className={isDeadPlayersClassName}>{score}</p>
                </TableCell>
              </StatisticTooltip>
              <TableCell align="right">
                {" "}
                <p className={isDeadPlayersClassName}>{state}</p>
              </TableCell>
              <TableCell align="right">
                {_id !== CURRENT_ID &&
                  !friends.find((id: string) => id === _id) && (
                    <SendRequestToFriendsButton
                      onClickRequestToFriendsButton={() =>
                        handleClickSendToFriend(_id)
                      }
                    />
                  )}
              </TableCell>
            </TableRow>
          );
        }
      )}
    </TableBody>
  );
};

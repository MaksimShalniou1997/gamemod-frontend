import React from "react";
import MUITooltip from "@mui/material/Tooltip";

import { useStyles, IStatisticTooltip } from ".";

export const StatisticTooltip = ({
  children,
  death,
  totalKills,
}: IStatisticTooltip) => {
  const classes = useStyles();

  const _title = (
    <>
      <p>{`total kills: ${totalKills}`}</p>
      <p>{`death: ${death}`}</p>
    </>
  );

  return (
    <MUITooltip
      title={_title}
      followCursor
      classes={{ popper: classes.tooltip }}
    >
      {children}
    </MUITooltip>
  );
};

export interface IPlayerStats {
  _id: string;
  nickname: string;
  score: number;
  state: "dead" | "alive";
  statistic: {
    totalKills: number;
    death: number;
  };
}

export interface ILeaderboardTable {
  rows: Array<IPlayerStats>;
}

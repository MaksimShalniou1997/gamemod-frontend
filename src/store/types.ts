import { IPlayerStats } from "../components/leaderboardTable/types";

export interface IStore {
  winners: Array<IPlayerStats>;
  losers: Array<IPlayerStats>;
  friends: Array<string>;
}

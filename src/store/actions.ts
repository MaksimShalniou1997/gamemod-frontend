import { AnyAction } from "redux";
import { IPlayerStats } from "../components/leaderboardTable/types";

export const FETCH_LEADERBOARD_SUCCESS = "FETCH_LEADERBOARD_SUCCESS";

const fetchLeaderboardSuccess = (data: any) => ({
  type: FETCH_LEADERBOARD_SUCCESS,
  payload: data,
});

export const fetchLeaderboard =
  () => async (dispatch: (action: AnyAction) => void) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/players`);
    const players = await response.json();

    const compareNumbers = (a: IPlayerStats, b: IPlayerStats) =>
      b.score - a.score;

    const sortedWinners = players.data.winners.sort(compareNumbers);
    const sortedLosers = players.data.losers.sort(compareNumbers);

    dispatch(
      fetchLeaderboardSuccess({ winners: sortedWinners, losers: sortedLosers })
    );
  };

export const SEND_REQUEST_TO_FRIENDS = "SEND_REQUEST_TO_FRIENDS";

const sendRequestToFriendsSuccess = (id: string) => ({
  type: SEND_REQUEST_TO_FRIENDS,
  payload: id,
});

export const sendRequestToFriends =
  (id: string) => (dispatch: (action: AnyAction) => void) => {
    dispatch(sendRequestToFriendsSuccess(id));
  };

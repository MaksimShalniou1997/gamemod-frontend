export const FETCH_LEADERBOARD_SUCCESS = "FETCH_LEADERBOARD_SUCCESS";

const fetchLeaderboardSuccess = (data: any) => ({
  type: FETCH_LEADERBOARD_SUCCESS,
  payload: data,
});

export const FETCH_LEADERBOARD = "FETCH_LEADERBOARD";

const fetchLeaderboardLoading = () => ({
  type: FETCH_LEADERBOARD,
});

export const fetchLeaderboard = () => async (dispatch: any) => {
  dispatch(fetchLeaderboardLoading);
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/players`);
  const players = await response.json();

  dispatch(fetchLeaderboardSuccess(players.data));
};

export const SEND_REQUEST_TO_FRIENDS = "SEND_REQUEST_TO_FRIENDS";

const sendRequestToFriendsSuccess = (id: string) => ({
  type: SEND_REQUEST_TO_FRIENDS,
  payload: id,
});

export const sendRequestToFriends = (id: string) => (dispatch: any) => {
  dispatch(sendRequestToFriendsSuccess(id));
};

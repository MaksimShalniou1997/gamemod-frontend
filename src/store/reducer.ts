import { FETCH_LEADERBOARD_SUCCESS, SEND_REQUEST_TO_FRIENDS } from ".";
import { IStore } from ".";

const initialState = {
  winners: [],
  losers: [],
  friends: [],
} as IStore;

function rootReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        losers: action.payload.losers,
        winners: action.payload.winners,
      };

    case SEND_REQUEST_TO_FRIENDS:
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };

    default:
      return state;
  }
}

export default rootReducer;

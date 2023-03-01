import { IStore } from ".";

export const getWinnersSelector = (state: IStore) => state.winners;
export const getLoserSelector = (state: IStore) => state.losers;
export const getFriendsSelector = (state: IStore) => state.friends;

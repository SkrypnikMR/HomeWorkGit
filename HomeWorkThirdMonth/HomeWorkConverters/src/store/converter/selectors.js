import { createSelector } from 'reselect';

export const getState = state => state;
export const getTablo = createSelector(getState, state => state.tablo);
export const getFrom = createSelector(getState, state => state.from);
export const getTo = createSelector(getState, state => state.to);
export const getNotes = createSelector(getState, state => state.notes);

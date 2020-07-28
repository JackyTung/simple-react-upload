import { ofType } from 'redux-observable';

import update from 'immutability-helper';
import { of } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

import { createSlice } from '@reduxjs/toolkit';

import * as backend from '@/apis/backend';

const initialState = { name: '', email: '' };

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfile: () => {},
    fetchProfileFulfilled: (state, action) => {
      const { profile } = action.payload;
      return update(state, {
        name: {
          $set: profile.name,
        },
        email: {
          $set: profile.email,
        },
      });
    },
    fetchProfileRejected: (state, action) => {
      return state;
    },
    fetchProfileCancelled: () => initialState,
    clearProfile: () => initialState,
  },
});

export const epics = {
  fetchProfile: (action$, state$, action) => {
    const { userName } = action.payload;
    return backend.getProfile({ userName }).pipe(
      map(profile => fetchProfileFulfilled({ profile })),
      takeUntil(action$.pipe(ofType(fetchProfileCancelled.type))),
      catchError(error => of(fetchProfileRejected(error))),
    );
  },
};

export const {
  fetchProfile,
  clearProfile,
  fetchProfileFulfilled,
  fetchProfileRejected,
  fetchProfileCancelled,
} = slice.actions;

export default slice.reducer;

import { ofType } from 'redux-observable';

import flatten from 'lodash/flatten';
import isEmpty from 'lodash/isEmpty';
import { mergeMap } from 'rxjs/operators';

const sliceToEpics = slice => {
  if (!slice || !slice.epics) {
    return [];
  }
  const actionTypes = Object.fromEntries(
    Object.entries(slice)
      .filter(([k]) => k !== 'default' && k !== 'epics')
      .filter(([, v]) => v && v.type)
      .map(([k, v]) => [k, v.type]),
  );
  const epics = Object.entries(slice.epics).map(([k, func]) => (action$, state$) =>
    action$.pipe(
      ofType(actionTypes[k]),
      mergeMap(action => func(action$, state$, action)),
    ),
  );
  return epics;
};

export const getEpicsFromSlices = slices => {
  if (isEmpty(slices)) {
    return [];
  }
  return flatten(slices.map(sliceToEpics));
};

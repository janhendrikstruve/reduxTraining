import { createAction, createReducer } from '@reduxjs/toolkit';

//Action Creators
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

// Reducer
let lastId = 0;

export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    bugs.map((bug) =>
      bug.id === action.payload.id ? (bug.resolved = true) : bug
    );
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});

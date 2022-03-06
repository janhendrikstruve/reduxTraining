import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      bugs.map((bug) =>
        bug.id === action.payload.id ? (bug.resolved = true) : bug
      );
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },
    bugAssignedToUser: (bugs, action) => {
      bugs.map((bug) =>
        bug.id === action.payload.bugId
          ? (bug.users = action.payload.userId)
          : bug
      );
    },
  },
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

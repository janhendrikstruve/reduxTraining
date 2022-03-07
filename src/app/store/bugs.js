import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      bugs.list.map((bug) =>
        bug.id === action.payload.id ? (bug.resolved = true) : bug
      );
    },
    bugRemoved: (bugs, action) => {
      bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
    bugAssignedToUser: (bugs, action) => {
      bugs.list.map((bug) =>
        bug.id === action.payload.bugId
          ? (bug.users = action.payload.userId)
          : bug
      );
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },
  },
});

export const { bugAdded, bugResolved, bugAssignedToUser, bugsReceived } =
  slice.actions;
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

const url = '/bugs';

export const loadBugs = () =>
  apiCallBegan({
    url,
    onSuccess: bugsReceived.type,
  });

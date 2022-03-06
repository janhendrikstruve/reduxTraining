import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getBugsByUser,
} from './store/bugs';
import { userAdded } from './store/users';

export default function reduxTest() {
  const store = configureStore();

  store.dispatch(userAdded({ name: 'Olaf' }));

  store.dispatch(projectAdded({ name: 'project1' }));
  store.dispatch(projectAdded({ name: 'project2' }));
  store.dispatch(projectAdded({ name: 'project3' }));

  store.dispatch(bugAdded({ description: 'Bug1' }));
  store.dispatch(bugAdded({ description: 'Bug2' }));
  store.dispatch(bugAdded({ description: 'Bug3' }));
  store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
  store.dispatch(bugResolved({ id: 1 }));

  console.log(store.getState());

  const bugs = getBugsByUser(1)(store.getState());
  console.log(bugs);
}

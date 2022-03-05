import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { bugAdded, bugResolved } from './store/bugs';

export default function reduxTest() {
  const store = configureStore();

  store.dispatch(projectAdded({ name: 'project1' }));
  store.dispatch(projectAdded({ name: 'project2' }));
  store.dispatch(projectAdded({ name: 'project3' }));
  store.dispatch(bugAdded({ description: 'Bug1' }));
  store.dispatch(bugAdded({ description: 'Bug2' }));
  store.dispatch(bugAdded({ description: 'Bug3' }));
  store.dispatch(bugResolved({ id: 1 }));

  console.log(store.getState());
}

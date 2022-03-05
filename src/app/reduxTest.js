import configureStore from './store/configureStore';
import * as actions from './store/bugs';

export default function reduxTest() {
  const store = configureStore();

  store.dispatch(actions.bugAdded({ description: 'Bug1' }));
  store.dispatch(actions.bugResolved({ id: 1 }));

  console.log(store.getState());
}

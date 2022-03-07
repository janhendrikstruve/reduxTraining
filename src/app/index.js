import configureStore from './store/configureStore';
import * as actions from './store/api';

export default function index() {
  const store = configureStore();

  store.dispatch(
    actions.apiCallBegan({
      url: '/bugs',
      onSuccess: 'bugsReceived',
    })
  );
}

import configureStore from './store/configureStore';

export default function index() {
  const store = configureStore();

  store.dispatch({
    type: 'apiCallBegan',
    payload: {
      url: '/bugs',
      onSuccess: 'bugsReceived',
      onError: 'apiRequestFailed',
    },
  });
}

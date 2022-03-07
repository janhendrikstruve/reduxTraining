import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';

export default function index() {
  const store = configureStore();

  store.dispatch(loadBugs());

  setTimeout(() => store.dispatch(loadBugs()), 2000);
}

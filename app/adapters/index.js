import ApplicationAdapter from './application';

export default class IndexAdapter extends ApplicationAdapter {
  pathForType() {
    return 'posts';
  }
}

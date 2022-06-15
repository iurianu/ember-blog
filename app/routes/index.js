import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const posts = await this.store.findAll('post');

    console.log(posts.length);

    const threePosts = posts.slice(0, 3);
    return await threePosts
  }
}

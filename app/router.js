import EmberRouter from '@ember/routing/router';
import config from 'blog-ember-rest/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('posts', { path: '/blog' }, function () {
    this.route('user', { path: '/author/:id' });
    this.route('show', { path: '/articles/:id' });
  });
  this.route('users', { path: '/blog/authors' });
  this.route('not-found', { path: '/*path' });
  this.route('about');
  this.route('contact');
});

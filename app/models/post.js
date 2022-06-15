import Model from '@ember-data/model';
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default class PostModel extends Model {
  @attr('string') body;
  @attr('string') title;
  @belongsTo('user') user;
}

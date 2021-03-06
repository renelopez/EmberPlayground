import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('todos', function() {});
  this.resource('credits', function() {});
  this.resource('initial', function() {});
  this.resource('products', function () {
    this.resource('product', {path: '/:product_id'});
    this.route('onsale');
  });

  this.resource('contacts', {path: '/contacts'}, function () {
    return this.resource('contact', { path: '/:name' });
  });

});

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('todos', function() {});
  this.resource('credits', function() {});
  this.resource('about', function() {});
  this.resource('initial', function() {});
});

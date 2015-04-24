import Ember from 'ember';

export default Ember.Controller.extend({
  productsCount:6,
  logo:'assets/images/logo.png',
  time:function(){
    return (new Date()).toDateString();
  }.property()
});

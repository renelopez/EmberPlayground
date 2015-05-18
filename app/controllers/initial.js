import Ember from 'ember';

export default Ember.ArrayController.extend({
  productsCount: Ember.computed.alias('length'),
  logo:'assets/images/logo.png',
  time:function(){
    return (new Date()).toDateString();
  }.property(),
  onSale: function () {
    return this.filterBy('isOnSale').slice(0, 3);
  }.property('@each.isOnSale')
});

import Ember from 'ember';

export default Ember.Component.extend({
  reviewsCount: Ember.computed.alias('product.reviews.length'),
  hasReviews: function () {
    return this.get('reviewsCount') > 0;
  }.property('reviewsCount')
});

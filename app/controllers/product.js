import Ember from 'ember';

export default Ember.Controller.extend({
  text: '',
  actions: {
    createReview: function () {
      console.log('le dio click!');
      // Step 1:Build a new review object
      var review = this.store.createRecord('review', {
        text: this.get('text'),
        product: this.get('model'),
        reviewedAt: new Date()
      });

      var controller = this;
      // Step 2: Save the review
      review.save().then(function (review) {
        controller.set('text', '');
        controller.get('model.reviews').addObject(review);
      });
    }
  }
});

import DS from 'ember-data';

var Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('product')
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 100,
      text: 'Started a fire in no time!',
      reviewedAt: new Date(),
      product: 1
    },
    {
      id: 101,
      reviewedAt: new Date(),
      text: 'Not the brightest fire, but warm',
      product: 1
    }
  ]
});

export default Review;

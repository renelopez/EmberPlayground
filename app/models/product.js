import DS from 'ember-data';

var Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string'),
  reviews:DS.hasMany('review',{async:true})
});

Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Flight',
      price: 99,
      description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
      isOnSale: true,
      image: 'assets/images/flint.png',
      reviews:[100,101]
    },
    {
      id: 2,
      title: 'Kindling',
      price: 249,
      description: 'Easily combustible small sticks or twigs used for starting a fire.',
      isOnSale: false,
      image: 'assets/images/kindling.png'
    }
  ]
});

export default Product;


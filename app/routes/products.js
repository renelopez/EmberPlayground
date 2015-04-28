import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var products = [
      {
        title: 'Flight',
        price: 99,
        description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
        isOnSale: true,
        image: 'assets/images/flint.png'
      },
      {
        title: 'Kindling',
        price: 249,
        description: 'Easily combustible small sticks or twigs used for starting a fire.',
        isOnSale: false,
        image: 'assets/images/kindling.png'
      }
    ];
    return products;
  }
});

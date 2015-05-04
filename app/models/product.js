import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Flight',
      price: 99,
      description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
      isOnSale: true,
      image: 'assets/images/flint.png'
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

export default Todo;


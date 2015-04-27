import Ember from 'ember';

export default Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'assets/images/giamia.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

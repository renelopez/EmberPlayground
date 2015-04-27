import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    var contacts=[{
      name: 'Giamia',
        about: 'Although Giamia came from a humble spark of lightning, he quickly grew to be a great craftsman, providing all the warming instruments needed by those close to him.',
      avatar: 'assets/images/giamia.png'
    },
    {
      name: 'Anostagia',
        about: 'Knowing there was a need for it, Anostagia drew on her experience and spearheaded the Flint & Flame storefront. In addition to coding the site, she also creates a few products available in the store.',
      avatar: 'assets/images/anostagia.png'
    }];
    return contacts;
  }
});

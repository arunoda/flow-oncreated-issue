FlowRouter.route('/', {
  action: function(params, queryParams) {
    FlowLayout.render('MasterLayout', {mainSection: 'Home'});
  }
});

FlowRouter.route('/genre/:genre', {
  name: 'appMarketGenre',
  action: function(params, queryParams) {
    FlowLayout.render('MasterLayout', {mainSection: 'Genre'});
  }
});

Template.Genre.onCreated(function() {
  console.log(FlowRouter.getParam('genre'), FlowRouter.current().params.genre);
});
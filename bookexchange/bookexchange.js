Router.route('/login');
Router.route('/',{
  name:'home',
  template:'home'
});
Router.route('/donation_page');
Router.route('/redeem_page');
Router.route('/profile_page');
Router.route('/logout');

if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/login');
Router.route('/',{
  name:'homepage',
  template:'home'
});
Router.route('/home');
Router.route('/donation_page');
Router.route('/redeem_page');
Router.route('/browse');
Router.route('/forum');
Router.route('/profile_page');
Router.route('/logout');
Router.route('/bookpage');


if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

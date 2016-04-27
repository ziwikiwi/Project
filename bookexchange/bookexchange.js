
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
Router.route('/forum_page');
Router.route('/forums');
Router.route('/new_post1');
Router.route('/new_post2');
Router.route('/bookpage');
Router.route('/additionalInfoPage');
Router.route('/textbook_forums');
Router.route('/lesiure_forums');
Router.route('/forum_search_result1');
Router.route('/forum_search_result2');
Router.route('/textbook_forums_added');
Router.route('/leisure_forums_added');


if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
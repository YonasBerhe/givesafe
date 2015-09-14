if (Meteor.isClient) {
  Router.route('/', function () {
    this.render('origin');

  });
  // Router.route('/firstrow', function () {
  //   this.render('firstrow');
  // 
  // });



}


if (Meteor.isServer) {
//   Meteor.startup(function () {
//    Router.route('/firstrow', function () {
//     var req = this.request;
//     var res = this.response;
//     res.end('hello from the server\n');
// },
//    {where: 'server'});
//   });
}

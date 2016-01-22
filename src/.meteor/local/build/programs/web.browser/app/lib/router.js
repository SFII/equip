(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
  layoutTemplate: 'layout',                                            // 2
  loadingTemplate: 'loading',                                          // 3
  notFoundTemplate: 'notFound'                                         // 4
});                                                                    //
                                                                       //
Router.route('/', { name: 'landingPage' });                            // 7
Router.route('/classrooms', { name: 'classroomPage' });                // 8
/////////////////////////////////////////////////////////////////////////

}).call(this);

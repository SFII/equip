(function(){
Template.__checkName("accessDenied");
Template["accessDenied"] = new Template("Template.accessDenied", (function() {
  var view = this;
  return HTML.Raw('<div class="access-denied page jumbotron">\n    <h2>Access Denied</h2>\n    <p>You can\'t get here! Please log in.</p>\n  </div>');
}));

}).call(this);

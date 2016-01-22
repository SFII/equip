(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return [ HTML.Raw('<!-- Bootstrap core CSS, JS dependancies included in Meteor Bootstrap package -->\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="author" content="">\n\n    <!-- Navbar shows up on every page -->\n    '), HTML.NAV({
    "class": "navbar navbar-inverse navbar-fixed-top"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n      ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "landingPage");
    }
  }, "EQUIP"), "\n      ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n        ", HTML.LI({
      "class": "nav-item"
    }, "\n          ", HTML.A({
      "class": "nav-link",
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "classroomPage");
      }
    }, "Classrooms"), "\n        "), "\n        ", HTML.LI({
      "class": "nav-item"
    }, "\n          ", HTML.A({
      "class": "nav-link",
      href: "#"
    }, "Settings"), "\n        "), "\n        ", HTML.LI({
      "class": "nav-item"
    }, "\n          ", HTML.A({
      "class": "nav-link",
      href: "#"
    }, "About"), "\n        "), "\n        " ];
  }), "\n      "), "\n        ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n          ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        "), "\n      "), "\n    ") ];
}));

}).call(this);

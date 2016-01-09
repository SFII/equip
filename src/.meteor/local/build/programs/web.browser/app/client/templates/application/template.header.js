(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return [ HTML.Raw('<!-- Bootstrap core CSS, JS dependancies included in Meteor Bootstrap package -->\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="author" content="">\n\n    <!-- Navbar shows up on every page -->\n    '), HTML.NAV({
    "class": "navbar navbar-inverse navbar-fixed-top"
  }, "\n      ", HTML.DIV({
    "class": "container"
  }, "\n        ", HTML.Raw('<div class="navbar-header">\n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <a class="navbar-brand" href="#">EQUIP App</a>\n        </div>'), "\n        ", HTML.DIV({
    id: "navbar",
    "class": "navbar-collapse collapse"
  }, "\n          ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n            ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n          "), "\n        "), HTML.Raw("<!--/.navbar-collapse -->"), "\n      "), "\n    ") ];
}));

}).call(this);
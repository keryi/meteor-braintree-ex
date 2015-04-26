Template.appLayout.helpers({
  isActivePath: function(pathName) {
    return Router.current().route.getName() == pathName ? "active" : "";
  }
});

AccountsTemplates.configure({
  onLogoutHook: function() {
    Router.go('home');
  }
});

AccountsTemplates.configureRoute('signIn',{
  layoutTemplate: 'appLayout',
  redirect: '/billing'
});

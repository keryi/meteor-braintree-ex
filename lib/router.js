Router.configure({
  layoutTemplate: 'appLayout'
});

Router.map(function() {
  this.route('billing', {
    path: '/billing'
  });

  this.route('home', {
    path: '/'
  });

  this.route('paymentConfirm', {
    path: '/billing/confirm'
  });
});

Router.onBeforeAction(function() {
  Errors.remove({ seen: true });
  this.next();
});

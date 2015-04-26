Template.billing.events({
  'click #cc_submit': function(e) {
    e.preventDefault();
    pay(Session.get('btClientToken'));
  }
});

Template.billing.helpers({
  isPaymentInProgress: function() {
    return Session.get('paymentInProgress') ? true : false;
  }
});

pay = function(token) {
  Session.set('paymentInProgress', true);
  var client = new braintree.api.Client({
    clientToken: Session.get('btClientToken')
  });
  client.tokenizeCard({
    number: $('#cc_num').val(),
    // cardholderName: "John Smith",
    // You can use either expirationDate
    expirationDate: $('#cc_expiry').val(),
    // or expirationMonth and expirationYear
    // expirationMonth: "10",
    // expirationYear: "2015",
    // CVV if required
    cvv: $('#cc_cvv').val(),
    // Address if AVS is on
    // billingAddress: {
    //   postalCode: "94107"
    // }
  }, function (err, nonce) {
    var data = {
      amount: 88,
      nonce: nonce
    };
    Meteor.call('createTransaction', data, function (err, result) {
      Session.set('paymentInProgress', null);
      Router.go('paymentConfirm');
    });
  });
}

Template.billing.rendered = function() {
  $('#cc_num').val('4111111111111111');
  $('#cc_cvv').val('100');
  $('#cc_expiry').val('10/20');

  Session.set('paymentInProgress', null);
  Meteor.call('getClientToken', function(err, token) {
    if (err) {
      notifyError(err.reason);
    } else {
      Session.set('btClientToken', token);
    }
  });
}

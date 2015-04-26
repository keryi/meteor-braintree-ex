var gateway;

Meteor.startup(function () {
  gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    publicKey: Meteor.settings.BT_PUBLIC_KEY,
    privateKey: Meteor.settings.BT_PRIVATE_KEY,
    merchantId: Meteor.settings.BT_MERCHANT_ID
  });
});

Meteor.methods({
  getClientToken: function(clientId) {
    var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
    var options = {};

    if (clientId) {
      options.clientId = clientId;
    }

    var response = generateToken(options);

    return response.clientToken;
  },

  createTransaction: function(data) {
    var transaction = Meteor.wrapAsync(gateway.transaction.sale, gateway.transaction);

    var response = transaction({
      amount: data.amount,
      paymentMethodNonce: data.nonce
    });

    return response;
  }
});

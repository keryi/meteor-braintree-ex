# Braintree X Meteor
This is a simple example app to demonstrate how braintree payment could be integrated into Meteor using https://github.com/keryi/meteor-braintree-payment.git

# Setup
1. Install Meteor, https://www.meteor.com/install
2. Clone this repo, git clone https://github.com/keryi/meteor-braintree-ex.git
3. Create a braintree sandbox account, https://www.braintreepayments.com/get-started
4. Login to your braintree sandbox account and retrieve the private key, public key and merchant id for your braintree account at the dashboard page
5. Rename settings.example.json to settings.json, and fill it up with the keys.

# Run
```
meteor --settings settings.json
```

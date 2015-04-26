Errors = new Mongo.Collection(null);

notifyError = function(message) {
  Errors.insert({ message: message, seen: false });
}

clearError = function() {
  Errors.remove({ seen: true });
}

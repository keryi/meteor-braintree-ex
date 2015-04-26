Template._errors.helpers({
  errors: function() {
    return Errors.find({ seen: false });
  }
});

Template._error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.update({ _id: error._id }, { $set: { seen: true } });
  });
}

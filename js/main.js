var Vehicle = Backbone.Model.extend({
  idAttribute: 'registrationNumber',
  urlRoot:     '/api/vehicles/',
  defaults: {
    registrationNumber: ""
  },

  start: function() {
    console.log('Vehicle Started');
  },
  validate: function(attrs){
    if (!attrs.registrationNumber)
        return "Registration Number is required!";
  }
});
var Car = Vehicle.extend({
  start: function() {
    console.log('Car with registration number ' + this.get("registrationNumber") + ' started.');
  }
});
var corolla = new Car({registrationNumber: "XLI887", color: "blue"});
corolla.start();

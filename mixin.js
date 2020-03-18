function mixin(obj, ...sources) {
  Object.assign(obj.prototype, ...sources);
}

const canEat = {
  eat: function() {}
};

function Person() {}

mixin(Person, canEat);
const person = new Person();
console.log(person);

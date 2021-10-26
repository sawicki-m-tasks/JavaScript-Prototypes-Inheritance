function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};

function myNew(Constructor, ...args) {
  let person = Object.create(Person.prototype);
  Person.apply(person, args);
  return person;
}

let karolek = myNew(Person, 'karolek', 22);
console.log(karolek.introduce())

let benio = myNew(Person, 'benio', 10);
console.log(benio.introduce())



// version 2
// function myNew2(Constructor, ...args) {
//   return Reflect.construct(Constructor, args);
// }

const myNew2 = (Constructor, ...args) => Reflect.construct(Constructor, args);

let john = myNew2(Person, 'John', 90);
console.log(john.introduce())

let john2 = myNew2(Person, 'John2', 190);
console.log(john2.introduce())

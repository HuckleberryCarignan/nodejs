var util = require('util');

//console.log(‘rabbit = ‘ + util.inspect(rabbit));

//or

//console.log(‘rabbit = ‘ + util.inspect(rabbit) , {depth: 4});

var foo = 'abc';
var bar = '123';

var bunny = {
    foo: bar
}

var rabbit = {};
rabbit[foo] = bar;



console.log(bunny);
console.log('bunny = ' + bunny);
console.log('bunny.foo = ' + bunny.foo);

var rabbit = {};
rabbit[foo] = bar;

console.log(rabbit); // returns '{ abc: '123' }'
console.log('rabbit = ' + rabbit); // returns 'rabbot = [Object Object]'
console.log('rabbit.foo = ' + rabbit.foo);
console.log('You lose Huck!')
console.log('rabbit = ' + util.inspect(rabbit));=
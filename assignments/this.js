/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: This is to allow the referenced Object to be bound to the "Window" or Global data set"
* 2. Implicit Binding: Specifically deals with object (Look to the left of the invocation)
* 3. New binding: refers to a specific instance.
* 4. Explicit binding: The invocation is invoking "this" and an argument. This is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example(dog){
    console.log(this);
    return dog;
}

example('Bulldog');

// Principle 2

// code example for Implicit Binding

const objExample = {
    color: 'Green',
    funfacts: function(height){
        console.log(`${this.color} is my favorite color and I'm ${height} cm smoll`);
        console.log(this);
    }
};
objExample.funfacts(Math.random())

// Principle 3

// code example for New Binding





function Cartoon(character){
    this.greeting = 'What up ';
    this.character = character;
    this.print = function(){
        console.log(this.greeting + this.character);
        console.log(this);
    };
}

const elmo = new Cartoon ('Im Elmo');
const burt = new Cartoon ('Im Burt');

burt.print();
elmo.print();

// Principle 4

// code example for Explicit Binding

function Cartoon (attributes){
    this.name = attributes.name;
    this.color =  attributes.color;
    this.kingdom = attributes.kingdom;
    this.print = function (){
        return `My name is: ${this.name}`;
    };
}

const bigBird = new Cartoon({
    color: 'Yellow',
    kingdom: 'Seasame Street',
    name: 'Big Bird'

});

console.log(bigBird);
console.log(bigBird.print());


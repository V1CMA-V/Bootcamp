// * Variables 

const x = 1 
let y = 5 

console.log(x,y);
y += 10
console.log(x,y);
y = 'sometext'
console.log(x,y);
// x = 4

// * Arrays 


const t = [1,-1,3]

t.push(5)

console.log(t.length);
console.log(t[1]);

t.forEach(value => {
    console.log(value);
})

const t2 = t.concat(6)

console.log(t);
console.log(t2);

const p = [1,2,3]

const m1 = p.map(value => value *2)
console.log(m1);

const m2 = p.map(value => '<li>'+ value + '</li>')
console.log(m2);

const q = [1,2,3,4,5]
const [first, second, ...rest] = q

console.log(first,second);
console.log(rest);

// * Objetos 
const object1 = {
    name:'arto Hellas',
    age: 35,
    eduction:'PhD'
}

const object2 = {
    name: 'Full Stack web application development',
    level:'intermediate studies',
    size:5
}

const object3 = {
    name:{
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2,3,5,3],
    department: 'Stanford University'
}

console.log(object1.name);
const fieldName = 'age'
console.log(object1[fieldName]);

object1.address = 'Helsinki'
object1['secret number'] = 12341

// * Funciones 

const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2
}

const result = sum (1, 5)
console.log(result);

const square = p => {
    console.log(p);
    return p * p
}

const square2 = p => p * p

const w = [1,2,3]
const tSquared = w.map(p => p * p)
console.log(tSquared);

// * Clases

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet(){
        console.log('Hello, my name is ' + this.name);
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
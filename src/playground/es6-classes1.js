class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
       // return 'Hi, I am ' + this.name + '!';
       return `Hi, I am ${this.name}!`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old!`
     }
}

class Student extends Person {
    constructor(name, age, subject) {
        super(name,age);
        this.subject = subject;
    }

    hasSubject() {
        return !!this.subject;
    }

    getDescription(){
        let desc = super.getGreeting();
        if(this.hasSubject()) {
            desc += ` Her subject is ${this.subject}`;
        }
        return desc;
     }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location;
    }

    getGreeting(){
        return super.getGreeting() + (!!this.location ? ` I am visiting ${this.location}` : '');
        // && doesnt work for concatenation
     }
}
const me = new Traveler('Hajira Raheem', 31, 'Kaaba');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'In sha allah');
console.log(other.getGreeting());
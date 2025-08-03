/*Object prototype chain and prototypal inheritance exercise.
Create a Person constructor that has three properties: name, job, and age.

Give the Person an 'exercise' method that console logs whatever you want,
 e.g. "Running is fun! - said no one ever".

Give the Person a 'fetchJob' method that console logs the person's name and job,
e.g. "Brad is a back-end developer".

Create a Programmer constructor that inherits all the members from Person with an additional 'languages' 
property that is passed in and a busy property that is NOT passed in and is set to true by default.

Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false.
Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another
 if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now."
and "Mark would love to take on a new responsibility." if the programmer is not busy.

Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
to the programmer and list off all languages the programmer knows.

Test it out - can you create different programmers and run all the methods on them? 
Does each programmer maintain their own properties properly and independently of the other programmers? 
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. 
Feel free to add new methods or properties to incorporate the syntax.
*/


// Person class definition
class Person {
  // Constructor for Person class
  constructor(name, job, age) {
    this.name = name; // Name property
    this.job = job; // Job property
    this.age = age; // Age property
  }

  // Method to simulate exercise
  exercise() {
    console.log("Running is fun! - said no one ever");
  }

  // Method to fetch job information
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

// Programmer class definition inheriting from Person
class Programmer extends Person {
  // Constructor for Programmer class
  constructor(name, job, age, languages) {
    // Call the constructor of the parent class (Person) with super()
    super(name, job, age);
    // Additional property specific to Programmer
    this.languages = languages; // Languages property
    this.busy = true; // Default value for busy property
  }

  // Method to mark task as completed
  completeTask() {
    this.busy = false;
  }

  // Method to mark accepting new task
  acceptNewTask() {
    this.busy = true;
  }

  // Method to offer new task based on busy status
  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }

  // Method to learn a new programming language
  learnLanguage(language) {
    this.languages.push(language);
  }

  // Method to list all languages known by the programmer
  listLanguages() {
    console.log(`${this.name} knows: ${this.languages.join(", ")}`);
  }
}

// Creating instances of Person and Programmer
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// Testing methods
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

c1.listLanguages();
c2.listLanguages();
c3.listLanguages();

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();
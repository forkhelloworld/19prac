class Book {
  constructor(id, author, title, year, numberOfPage, shelfNumber) {
    this.bookId = id;
    this.author = author;
    this.title = title;
    this.year = year;
    this.numberOfPage = numberOfPage;
    this.shelfNumber = shelfNumber;
    this.userId = null;
  }

  isVacant() {
    return typeof this.shelfNumber === "number";
  }

  getRent(id) {
    this.shelfNumber = null
    this.userId = id
  }
}


class User {
    constructor(id, name, surname, address){
        this.id = id 
        this.name = name
        this.surname = surname
        this.address = address
    }
}

class Animal {
  hunting() {
      console.log("Зараз дожену здобич");
  }

  growl() {
      console.log("Грррррр");
  }
}

class Tiger extends Animal {
  hunting() {
      console.log("Тигр з’їсть тебе");
  }

  growl() {
      console.log("Рррррр, я тигр");
  }
}

class Wolf extends Animal {
  hunting() {
      console.log("Вовк з’їсть тебе");
  }

  growl() {
      console.log("Грррррр, я вовк");
  }
}

let tiger1 = new Tiger();
let tiger2 = new Tiger();
let wolf1 = new Wolf();
let wolf2 = new Wolf();

tiger1.hunting(); 
tiger1.growl(); 

tiger2.hunting(); 
tiger2.growl(); 
wolf1.hunting();
wolf1.growl(); 

wolf2.hunting(); 
wolf2.growl(); 

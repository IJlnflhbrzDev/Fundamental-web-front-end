function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

// menambahkan introMyself ke People
People.prototype.introMyself = function () {
    // this -> People
    setTimeout(function() {
       // this -> ?? mengacu pada global scope jadi this nama age and hoby tidak di temukan kecuali make arrowfuncion
        console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}

const programmer = new People("John", 18, ["Coding", "Read book", "Ping-pong"]);
programmer.introMyself();

/* output:
Hello! Nama saya undefined, umur saya undefined.
Hobby saya adalah undefined
*/
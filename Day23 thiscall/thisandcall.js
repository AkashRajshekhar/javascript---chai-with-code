const user = {
    name: "Akash",

    greet: function() {
        console.log(this.name);
    }
};

user.greet();


//if we want to use usr1 function in user2 obj

const user1 = {
    name: "Akash",

    greet: function() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Rahul"

};

user1.greet();

user1.greet.call(user2);





const person1 = {
    firstName: "Akash",
    lastName: "Rajshekhar"
};

const person2 = {
    firstName: "Rahul",
    lastName: "Sharma"
};

function fullName() {
    console.log(this.firstName + " " + this.lastName);
}

fullName.call(person1);
fullName.call(person2);
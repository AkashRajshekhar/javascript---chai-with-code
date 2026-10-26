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




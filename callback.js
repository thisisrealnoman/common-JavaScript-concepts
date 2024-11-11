function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Jam Naser';s
// const myNumber = 45;
// const myArray = [1, 2, 3, 4];
// const laptop = {price: 10000, name: 'x-flame', year: 2088};

function greetingHandler(name){
    console.log("Good Morning", name);
}

function greetingEvening(name){
    console.log("Good evening", name);
}

function greetingNight(name){
    console.log("Good Night", name);
}

greeting(greetingHandler, "Rafiq");
greeting(greetingHandler, "Mofazzol");
greeting(greetingHandler, "Ranju");

greeting(greetingEvening, "Sofiq");
greeting(greetingEvening, "Jafor");

greeting(greetingNight, "Manju");
greeting(greetingNight, "Rahman");
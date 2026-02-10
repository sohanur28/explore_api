const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data));
};


// console.log("Explore API");

// const person = {
//     name: "selim",
//     fruit: "dalim",
//     dish: "halim",
//     freinds: ["alim", "kolim", "lamim"],
//     isRich: false,
//     money: 34000,
// };
// console.log(person);
// // JSON -> JS object with Notation
// //JSON.stringify ->

// const personJSON=JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const parseJSON=JSON.parse(personJSON);
// console.log(parseJSON);
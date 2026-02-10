const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // promise of response
        .then(res => res.json())
        // promise of json
        .then(data => console.log(data));
};

const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            displayPost(json);
        })
};

const displayPost = (posts) => {
    posts.forEach(post=>{
        console.log(post)
    })
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
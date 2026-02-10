const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            displayPosts(data);
        });
};
// {
//     "userId": 4,
//     "id": 39,
//     "title": "eos dolorem iste accusantium est eaque quam",
//     "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
// }
const displayPosts = (posts) => {
    // 1. get the container and empty the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach(post => {
        // 2. create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        // 3. add to the container
        postsContainer.append(postCard)
    });
};

loadPost();

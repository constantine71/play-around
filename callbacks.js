const posts = [
  { title: "post one", body: "this is a post one" },
  { title: "post two", body: "this is a post two" }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    let box1 = document.body
      .getElementsByClassName("box-1")[0]
      .getElementsByTagName("p")[0];
    box1.innerHTML = output;
    console.log("get end");
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    console.log("push end");
  }, 2000);
  callback();
  console.log("create end");
}

let newPost = { title: "post three", body: "this is post three" };
//without using anything only display two elememnt
//because get runs before create
// createPost(newPost);
// getPost();

//using callbacks
createPost(newPost, getPost);

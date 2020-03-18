const posts = [
  { title: "post one", body: "this is a post one" },
  { title: "post two", body: "this is a post two" }
];

function getPosts() {
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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      console.log("push end");
      const error = false;
      if (error) {
        reject("Something went wrong");
      } else {
        resolve();
        console.log("resovle called");
      }
      console.log("create end");
    }, 2000);
  });
}

let newPost = { title: "post three", body: "this is post three" };

//Async await
async function init() {
  await createPost(newPost);
  getPosts();
}

init();

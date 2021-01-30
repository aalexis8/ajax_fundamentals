const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post one" },
];
// synchronous -- creatpost takes 2 sec while getpost takes 1 sec
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post Three", body: "This our third post" });

// getPosts();

// Async with callback
// We can pass in getPosts which will be called before the function ends
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This our third post" }, getPosts);
// A function that can be passed in and then called within the function they were passed into

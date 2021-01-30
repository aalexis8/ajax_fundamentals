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
// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
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

// createPost({ title: "Post Three", body: "This our third post" }, getPosts);
// A function that can be passed in and then called within the function they were passed into

//an alternative to callbacks Or an alternative way of handling asynchronous operations
// Promises ---
// While handling asynchronous operations they can promise to do something else. Below we will transform the call way.. into a promise

// remove the callback function
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went awry!!");
      }
    }, 2000);
  });
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

createPost({ title: "Post Three", body: "This our third post" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });

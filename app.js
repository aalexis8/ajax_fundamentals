document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", "data.txt", true);

  // Optional - Used for loaders/spinners
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  //onload is new -- the old way is below
  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = `
      <h1>${this.responseText}</h1>`;
    }
  };

  console.log("READYSTATE", xhr.readyState);

  // xhr.onreadystatechange = function () {
  //   console.log("READYSTATE", xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

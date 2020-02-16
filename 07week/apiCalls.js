window.onload = function() {
  console.log("locked and loaded");
  getUsers();
};

function getUsers() {
  console.log("About to call Api");
  fetch("https://randomuser.me/api/?results=10")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      console.log(myJson["results"][0]["name"]["first"]);
    });
}

//This was the last assignment I worked on. Ran out of time so I couldnt complete it but
//im turning in what I have so at least you can see I know how do to API calls and get multiple
//responses.
